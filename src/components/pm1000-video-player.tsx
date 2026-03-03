'use client';

import { useEffect, useRef } from 'react';

type PM1000VideoPlayerProps = {
  src: string;
};

export function PM1000VideoPlayer({ src }: PM1000VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = 0.3;
  }, []);

  return (
    <video
      ref={videoRef}
      className="mx-auto h-auto max-h-[360px] w-full bg-black object-contain"
      controls
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
