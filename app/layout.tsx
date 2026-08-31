import type { Metadata } from 'next';
import './globals.css';

const productionUrl = 'https://tanvikinkhabwala.com';

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: 'Tanvi Kinkhabwala | Senior Data Analytics Professional',
  description: 'Portfolio of Tanvi Kinkhabwala: analytics, automation, BI, and data engineering work that drives measurable business impact.',
  alternates: { canonical: '/' },
  icons: { icon: '/tk-logo.png', apple: '/tk-logo.png' },
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Tanvi Kinkhabwala',
              url: productionUrl,
              jobTitle: 'Senior Data Analytics Professional',
              sameAs: ['https://www.linkedin.com/in/tanvi-kinkhabwala'],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
