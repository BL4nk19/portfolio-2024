import './globals.css';
import { spaceGrotesk } from './fonts';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'your-name.',
  description: 'Your portfolio description',
  openGraph: {
    title: 'your-name.',
    images: ['/assets/pfp.png'],
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'gradient',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'your-name.',
    images: ['/assets/pfp.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} bg-dark-1 dark:bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full sm:fill-zinc-600/30 sm:stroke-dark-1/40 stroke-black/10 dark:sm:stroke-zinc-300 dark:stroke-zinc-300 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-0%] h-[65%] max-sm:h-[90%] skew-y-12"
          >
            <defs>
              <pattern
                id=":R2kq:"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                x="-1"
                y="-1"
              >
                <path d="M.5 40V.5H40" fill="none" strokeDasharray="10" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:R2kq:)" />
          </svg>
        </ThemeProvider>
      </body>
    </html>
  );
}