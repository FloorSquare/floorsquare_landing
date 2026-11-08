import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://floorsquare.in';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'FloorSquare | Commercial Real Estate Co-Broking Platform in Jaipur',
    template: '%s | FloorSquare',
  },
  description:
    'FloorSquare connects verified RERA commercial brokers in Jaipur with landlord mandates and buyer requirements. Co-broke offices, showrooms, retail and warehouses in C-Scheme, Tonk Road, Sitapura and Vaishali Nagar.',
  keywords: [
    'commercial property co-broking Jaipur',
    'co-broking platform India',
    'RERA commercial brokers Jaipur',
    'office space for rent Jaipur',
    'commercial showroom Jaipur',
    'warehouse for lease Sitapura',
    'commercial real estate Jaipur',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'FloorSquare',
    locale: 'en_IN',
    title: 'FloorSquare | Commercial Co-Broking Platform in Jaipur',
    description:
      'Match commercial property mandates with verified RERA brokers across Jaipur. No listing subscriptions, no commission cuts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FloorSquare | Commercial Co-Broking Platform in Jaipur',
    description:
      'Match commercial property mandates with verified RERA brokers across Jaipur.',
  },
  robots: { index: true, follow: true },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#FF5722' };

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FloorSquare',
  legalName: 'FloorSquare Technologies',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    'Co-broking platform that connects verified RERA commercial real estate brokers in Jaipur.',
  areaServed: { '@type': 'City', name: 'Jaipur' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body className="bg-[#FFFBEB] text-slate-900 font-sans antialiased selection:bg-[#FFB300] selection:text-slate-950 pb-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
