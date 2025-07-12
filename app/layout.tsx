import './globals.css';
import { spaceGrotesk } from './fonts';
import { Metadata } from 'next';
import { ThemeProvider } from './providers/theme-provider';

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
      <body className={`${spaceGrotesk.variable} bg-white dark:bg-dark-1`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}