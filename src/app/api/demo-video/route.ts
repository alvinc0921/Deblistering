import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { Readable } from 'node:stream';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'Demo_video.mp4');
    const fileStats = await stat(filePath);
    const fileSize = fileStats.size;
    const range = request.headers.get('range');

    const commonHeaders = {
      'Content-Type': 'video/mp4',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
    } as const;

    if (range) {
      const bytesPrefix = 'bytes=';
      if (!range.startsWith(bytesPrefix)) {
        return new Response('Invalid range', { status: 416 });
      }

      const [startPart, endPart] = range.slice(bytesPrefix.length).split('-');
      const start = startPart ? Number(startPart) : 0;
      const end = endPart ? Number(endPart) : fileSize - 1;

      if (
        Number.isNaN(start) ||
        Number.isNaN(end) ||
        start < 0 ||
        end < start ||
        end >= fileSize
      ) {
        return new Response('Range Not Satisfiable', {
          status: 416,
          headers: { 'Content-Range': `bytes */${fileSize}` },
        });
      }

      const chunkSize = end - start + 1;
      const stream = createReadStream(filePath, { start, end });

      return new Response(Readable.toWeb(stream) as ReadableStream, {
        status: 206,
        headers: {
          ...commonHeaders,
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Content-Length': String(chunkSize),
        },
      });
    }

    const fullStream = createReadStream(filePath);
    return new Response(Readable.toWeb(fullStream) as ReadableStream, {
      status: 200,
      headers: {
        ...commonHeaders,
        'Content-Length': String(fileSize),
      },
    });
  } catch {
    return new Response('Video not found', { status: 404 });
  }
}
