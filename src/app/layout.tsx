import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inspector } from 'react-dev-inspector';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'PortalsMachinary',
    template: '%s | PortalsMachinary',
  },
  description:
    'PortalsMachinary is a trusted manufacturer focused on precision machinery, stable quality, and global delivery support.',
  keywords: [
    'PortalsMachinary',
    'PM1000',
    'Deblistering Machine',
    'Pharmaceutical Equipment',
    'Trusted Manufacturer',
    'Factory',
    'Packaging Machinery',
  ],
  authors: [{ name: 'PortalsMachinary Team', url: 'https://portalsmachinery.org' }],
  generator: 'PortalsMachinary',
  // icons: {
  //   icon: '',
  // },
  openGraph: {
    title: 'PortalsMachinary | Trusted Manufacturer',
    description:
      'Explore PM1000 and our manufacturing capabilities, quality standards, and global support services.',
    url: 'https://portalsmachinery.org',
    siteName: 'PortalsMachinary',
    locale: 'en_GB',
    type: 'website',
    // images: [
    //   {
    //     url: '',
    //     width: 1200,
    //     height: 630,
    //     alt: '扣子编程 - 你的 AI 工程师',
    //   },
    // ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Coze Code | Your AI Engineer is Here',
  //   description:
  //     'Build and deploy full-stack applications through AI conversation. No env setup, just flow.',
  //   // images: [''],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {isDev && <Inspector />}
          {children}
          <Toaster position="top-center" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
