// Server-rendered content sections (fully crawlable). Each carries data-guide so Squarey can explain it.

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER; // digits with country code, e.g. 919829012345

function Pill({ children, className = 'bg-[#FF5722] text-white' }) {
  return (
    <span className={`px-3 py-1 rounded-full border-2 border-slate-900 text-xs font-black uppercase tracking-wider shadow-[0_2px_0_#0f172a] ${className}`}>
      {children}
    </span>
  );
}

function Heading({ pill, pillClass, title, sub }) {
  return (
    <div className="text-center space-y-3 mb-10">
      <Pill className={pillClass}>{pill}</Pill>
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">{title}</h2>
      {sub && <p className="max-w-2xl mx-auto text-sm sm:text-base font-bold text-slate-700">{sub}</p>}
    </div>
  );
}

const card = 'bg-white rounded-3xl border-4 border-slate-900 p-6 shadow-[0_6px_0_#0f172a]';

export function Problem() {
  return (
    <section id="problem" data-guide="problem" className="py-12 sm:py-16 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Heading
          pill="THE PROBLEM"
          title="Commercial co-broking in Jaipur still runs on WhatsApp forwards"
          sub="Consumer portals focus on homes. Commercial deals still depend on personal contacts and crowded group chats."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ['🧑‍💼', 'Broker A has the client', 'A corporate client needs 3,000 sq ft of office space in C-Scheme.'],
            ['🏢', 'Broker B has the mandate', 'A landlord has exactly that space, but it is buried in a group chat.'],
            ['🙈', 'They never find each other', 'Requirements get lost in the noise, so deals slow down or never happen.'],
          ].map(([icon, title, text]) => (
            <div key={title} className={`${card} text-center space-y-3`}>
              <div className="text-4xl">{icon}</div>
              <h3 className="text-lg font-black text-slate-900">{title}</h3>
              <p className="text-sm font-bold text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-base sm:text-lg font-black text-slate-900">
          FloorSquare puts both sides on one matching exchange.
        </p>
      </div>
    </section>
  );
}

export function WhyUs() {
  const items = [
    ['🆓', 'Zero listing fees', 'Free for verified RERA brokers during the Jaipur alpha. No subscription just to list.'],
    ['💯', 'Zero commission cut', 'You keep 100% of your co-broking fee. We only facilitate the match.'],
    ['🔒', 'Masked until you match', 'Client details, exact addresses and your contact stay hidden until both brokers match.'],
    ['✅', 'Verified RERA brokers', 'A closed, broker-first network, not an open classifieds site.'],
    ['🎯', 'Smart matching', 'Mandates and requirements are scored on location, property type and budget, so the best fits show first.'],
    ['📍', 'Built for Jaipur', 'Micro-market by micro-market, from C-Scheme to Sitapura.'],
  ];
  return (
    <section id="why" data-guide="why" className="py-12 sm:py-16 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Heading
          pill="WHY FLOORSQUARE"
          pillClass="bg-[#FFB300] text-slate-950"
          title="Built for commercial brokers, not for the public"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(([icon, title, text]) => (
            <div key={title} className={`${card} space-y-2`}>
              <div className="text-3xl">{icon}</div>
              <h3 className="text-lg font-black text-slate-900">{title}</h3>
              <p className="text-sm font-bold text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  const items = [
    ['💼', 'RERA brokers', 'List a mandate or a client requirement and get matched with another verified broker in the same micro-market.'],
    ['🔑', 'Landlords', 'Put your office, showroom or warehouse in front of active brokers who are working with real tenants.'],
    ['🏢', 'Tenants & buyers', 'Share what you need (size, area and budget) and a broker holding a matching property can reach out.'],
  ];
  return (
    <section id="who" data-guide="audience" className="py-12 sm:py-16 px-4 bg-[#FFB300]/20 border-y-4 border-slate-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Heading pill="WHO IT IS FOR" title="One exchange, three kinds of users" />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(([icon, title, text]) => (
            <div key={title} className={`${card} text-center space-y-3`}>
              <div className="w-16 h-16 rounded-full bg-[#FFB300] border-4 border-slate-900 flex items-center justify-center mx-auto shadow-[0_4px_0_#0f172a] text-2xl">{icon}</div>
              <h3 className="text-lg font-black text-slate-900">{title}</h3>
              <p className="text-sm font-bold text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Areas() {
  const areas = ['C-Scheme', 'Malviya Nagar', 'Mansarovar', 'Tonk Road', 'Vaishali Nagar', 'Ajmer Road', 'Sitapura', 'Jagatpura', 'Sikar Road'];
  const assets = ['🏢 Offices', '🛍️ Retail & showrooms', '🏭 Warehouses & industrial', '📐 Commercial plots'];
  return (
    <section id="areas" data-guide="areas" className="py-12 sm:py-16 px-4 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <Heading
          pill="WHERE WE START"
          pillClass="bg-emerald-400 text-slate-950"
          title="Jaipur’s busiest commercial pockets"
          sub="We begin in one city and go deep, so brokers see relevant matches from day one."
        />
        <div className={`${card} space-y-6`}>
          <div>
            <h3 className="font-black text-slate-900 mb-3 text-sm uppercase font-mono">Micro-markets</h3>
            <ul className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a} className="px-3 py-1.5 rounded-full bg-amber-100 border-2 border-slate-900 text-xs font-black text-slate-900">{a}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-black text-slate-900 mb-3 text-sm uppercase font-mono">Property types</h3>
            <ul className="flex flex-wrap gap-2">
              {assets.map((a) => (
                <li key={a} className="px-3 py-1.5 rounded-full bg-orange-100 border-2 border-slate-900 text-xs font-black text-slate-900">{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Roadmap() {
  const items = [
    ['NOW', 'bg-[#58CC02] text-white', 'Invite-only Jaipur alpha', 'Verified brokers are onboarded personally and get their first listing or requirement set up for them.'],
    ['NEXT', 'bg-[#FFB300] text-slate-950', 'Swipe-to-match app', 'A mutual-match feed on web and mobile. Contact details unlock only when both sides match.'],
    ['LATER', 'bg-slate-900 text-white', 'Premium broker tools', 'Highlighted listings, brochure builders and local market data. Basic matching stays free.'],
  ];
  return (
    <section id="roadmap" data-guide="roadmap" className="py-12 sm:py-16 px-4 bg-[#FFB300]/20 border-y-4 border-slate-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <Heading pill="ROADMAP" title="Where we are headed" sub="We are starting small on purpose and building with the brokers who join first." />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(([tag, tagClass, title, text]) => (
            <div key={title} className={`${card} space-y-3`}>
              <Pill className={tagClass}>{tag}</Pill>
              <h3 className="text-lg font-black text-slate-900">{title}</h3>
              <p className="text-sm font-bold text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" data-guide="about" className="py-12 sm:py-16 px-4 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className={`${card} p-8 space-y-4`}>
          <h2 className="text-3xl font-black text-slate-900">About FloorSquare</h2>
          <p className="text-slate-700 font-bold leading-relaxed">
            FloorSquare is a co-broking exchange for commercial real estate in Jaipur. Brokers list landlord
            mandates and buyer or tenant requirements, and the platform matches them with other verified RERA
            brokers across offices, showrooms, retail shops and warehouses.
          </p>
          <p className="text-slate-700 font-bold leading-relaxed">
            Commercial deals have always been about trust and relationships. We keep that, and add the
            thing group chats cannot: a structured way to find the right co-broker quickly, while keeping client
            details protected until both sides agree to connect.
          </p>
        </div>
      </div>
    </section>
  );
}

export const faqs = [
  {
    q: 'What is commercial co-broking?',
    a: 'Co-broking is when two brokers work together on one deal: one represents the property owner or landlord, the other represents the tenant or buyer. FloorSquare helps verified commercial brokers in Jaipur find each other and match mandates and requirements quickly instead of chasing leads on WhatsApp groups.',
  },
  {
    q: 'Is FloorSquare a paid portal like 99acres or MagicBricks?',
    a: 'No. FloorSquare is a closed B2B co-broking network, not a public listing portal. It is free for verified RERA brokers during the Jaipur alpha, with no listing subscriptions.',
  },
  {
    q: 'Will FloorSquare take a cut of my commission?',
    a: 'No. You keep 100% of your co-broking fee. FloorSquare only facilitates the match.',
  },
  {
    q: 'Why are contact details hidden until a match?',
    a: 'To protect your clients and your relationships. Addresses, client details and contact numbers stay masked, and are revealed only when both brokers swipe right on each other (a mutual match).',
  },
  {
    q: 'Which areas of Jaipur does FloorSquare cover?',
    a: 'The Jaipur alpha focuses on key commercial micro-markets including C-Scheme, Malviya Nagar, Mansarovar, Tonk Road, Vaishali Nagar, Ajmer Road and Sitapura, covering offices, showrooms, retail spaces, warehouses and commercial plots.',
  },
  {
    q: 'How does the match work?',
    a: 'Brokers post a property mandate or a client requirement. Matches are scored on location, property type and budget, and the best fits appear first. When two brokers both show interest, contact details unlock for both sides.',
  },
  {
    q: 'Do I need to install an app to join?',
    a: 'No. During the alpha you get access through a link sent on WhatsApp, and you can start from your phone browser.',
  },
  {
    q: 'Who can join the Jaipur alpha?',
    a: 'RERA-registered commercial brokers are the primary audience. Landlords and tenants or buyers can also join the waitlist. Reserve your spot using the form on this page.',
  },
];

export function Faq() {
  return (
    <section id="faq" data-guide="faq" className="py-12 sm:py-16 px-4 bg-[#FFB300]/20 border-y-4 border-slate-900 scroll-mt-24">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-6">Frequently asked questions</h2>
        {faqs.map((f) => (
          <details key={f.q} className="bg-white rounded-2xl border-4 border-slate-900 p-5 shadow-[0_4px_0_#0f172a]">
            <summary className="font-black text-slate-900 cursor-pointer">{f.q}</summary>
            <p className="mt-3 text-sm font-bold text-slate-700 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const btn = 'px-6 py-3 rounded-2xl font-black text-xs uppercase border-2 border-slate-900 shadow-[0_4px_0_#0f172a] inline-block';
  return (
    <section id="contact" data-guide="contact" className="py-12 sm:py-16 px-4 scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <div className={`${card} p-8 text-center space-y-4`}>
          <h2 className="text-3xl font-black text-slate-900">Talk to the FloorSquare team</h2>
          <p className="text-sm font-bold text-slate-700">
            Questions, ideas, or want to be onboarded personally? Reach out, or join the alpha above and we will get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {WHATSAPP_NUMBER && (
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className={`${btn} bg-[#58CC02] text-white`} rel="noopener">💬 WhatsApp us</a>
            )}
            {CONTACT_EMAIL && (
              <a href={`mailto:${CONTACT_EMAIL}`} className={`${btn} bg-[#FFB300] text-slate-950`}>✉️ {CONTACT_EMAIL}</a>
            )}
            <a href="#onboarding" className={`${btn} bg-[#FF5722] text-white`}>⚡ Join the alpha</a>
          </div>
        </div>
      </div>
    </section>
  );
}
