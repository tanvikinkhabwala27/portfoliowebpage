import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tanvi Kinkhabwala | Senior Data Analytics Professional',
  description: 'Portfolio of Tanvi Kinkhabwala: analytics, automation, BI, and data engineering work that drives measurable business impact.',
  openGraph: {
    title: 'Tanvi Kinkhabwala | Data Analytics Portfolio',
    description: 'I turn complex data into clear decisions through analytics, automation, and business intelligence.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Tanvi Kinkhabwala - Data that answers what’s next.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanvi Kinkhabwala | Data Analytics Portfolio',
    description: 'I turn complex data into clear decisions through analytics, automation, and business intelligence.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
