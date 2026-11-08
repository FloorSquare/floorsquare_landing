import LandingPage from '../components/LandingPage';

const faqs = [
  {
    q: 'What is commercial co-broking?',
    a: 'Co-broking is when two brokers work together on one deal: one represents the property owner or landlord, the other represents the tenant or buyer. FloorSquare is a platform that helps verified commercial brokers in Jaipur find each other and match mandates and requirements quickly instead of chasing leads on WhatsApp groups.',
  },
  {
    q: 'Which areas of Jaipur does FloorSquare cover?',
    a: 'The Jaipur alpha focuses on key commercial micro-markets including C-Scheme, Tonk Road, Sitapura industrial area and Vaishali Nagar, covering showrooms, IT offices, retail spaces and warehouses.',
  },
  {
    q: 'How does the broker match work?',
    a: 'Brokers post a property mandate or a client requirement. Addresses and client details stay masked. When another verified broker swipes right on your mandate and you both match, contact details unlock for both sides.',
  },
  {
    q: 'Does FloorSquare charge listing subscriptions or take a commission cut?',
    a: 'No. FloorSquare is built around no listing subscriptions and no commission cuts for brokers during the Jaipur alpha.',
  },
  {
    q: 'Who can join the Jaipur alpha?',
    a: 'RERA-registered commercial brokers are the primary audience. Landlords and tenants or buyers can also join the waitlist. Reserve your spot using the form on this page.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <main>
      <LandingPage>
        <section className="py-16 px-4" aria-labelledby="about-heading">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-3xl border-4 border-slate-900 p-8 shadow-[0_8px_0_#0f172a] space-y-4">
              <h2 id="about-heading" className="text-3xl font-black text-slate-900">
                A commercial co-broking platform built for Jaipur
              </h2>
              <p className="text-slate-700 font-bold leading-relaxed">
                FloorSquare is a co-broking exchange for commercial real estate in Jaipur. Brokers list
                landlord mandates and buyer or tenant requirements, and the platform matches them with
                other verified RERA brokers. It covers offices, showrooms, retail shops and warehouses
                across C-Scheme, Tonk Road, Sitapura and Vaishali Nagar.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 text-center">Frequently asked questions</h2>
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="bg-white rounded-2xl border-4 border-slate-900 p-5 shadow-[0_4px_0_#0f172a]"
                >
                  <summary className="font-black text-slate-900 cursor-pointer">{f.q}</summary>
                  <p className="mt-3 text-sm font-bold text-slate-700 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </LandingPage>
    </main>
  );
}
