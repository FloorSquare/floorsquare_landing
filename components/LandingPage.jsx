'use client';

import { useState, useEffect, useRef } from 'react';
// --- MASCOTS & LOGO ---
    const SquareyMascot = ({ className = "w-16 h-16", mood = "happy", reaction = null }) => {
      const getAnimClass = () => {
        if (reaction === 'right') return 'animate-match-bounce';
        if (reaction === 'left') return 'animate-pass-tilt';
        return 'animate-float-bob';
      };

      return (
        <div className={`relative inline-flex items-center justify-center shrink-0 ${getAnimClass()} ${className}`}>
          {reaction === 'right' && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
              <span className="absolute animate-particle text-xl -top-4 -left-2">✨</span>
              <span className="absolute animate-particle text-xl -top-6 right-0" style={{ animationDelay: '0.15s' }}>🎉</span>
              <span className="absolute animate-particle text-xl bottom-0 -left-6" style={{ animationDelay: '0.2s' }}>⭐</span>
              <span className="absolute animate-particle text-xl -bottom-4 right-2" style={{ animationDelay: '0.1s' }}>🚀</span>
            </div>
          )}
          <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_6px_0_#0f172a]">
            <polygon points="100,20 175,60 175,140 100,180 25,140 25,60" fill="#FF5722" stroke="#0F172A" strokeWidth="8" strokeLinejoin="round" />
            <polygon points="100,26 165,60 100,95 35,60" fill="#FF784E" stroke="#0F172A" strokeWidth="4" />
            <polygon points="35,66 95,100 95,170 35,136" fill="#D84315" stroke="#0F172A" strokeWidth="4" />
            <polygon points="105,100 165,66 165,136 105,170" fill="#BF360C" stroke="#0F172A" strokeWidth="4" />
            <g className="animate-eye-blink">
              <circle cx="75" cy="80" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
              <circle cx="125" cy="80" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="4" />
              <circle cx={mood === "excited" || reaction === 'right' ? "78" : "75"} cy="80" r="7" fill="#0F172A" />
              <circle cx={mood === "excited" || reaction === 'right' ? "122" : "125"} cy="80" r="7" fill="#0F172A" />
              <circle cx="73" cy="77" r="2.5" fill="#FFFFFF" />
              <circle cx="123" cy="77" r="2.5" fill="#FFFFFF" />
            </g>
            {mood === "excited" || reaction === 'right' ? (
              <path d="M78 102 Q100 128 122 102 Z" fill="#0F172A" stroke="#0F172A" strokeWidth="3" />
            ) : reaction === 'left' ? (
              <path d="M80 115 Q100 100 120 115" fill="none" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            ) : (
              <path d="M80 105 Q100 120 120 105" fill="none" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
            )}
            <ellipse cx="62" cy="95" rx="6" ry="4" fill="#FFB300" opacity="0.8" />
            <ellipse cx="138" cy="95" rx="6" ry="4" fill="#FFB300" opacity="0.8" />
            <path d="M55 35 C55 15, 145 15, 145 35 Z" fill="#FFB300" stroke="#0F172A" strokeWidth="5" />
            <rect x="45" y="32" width="110" height="10" rx="5" fill="#FFA000" stroke="#0F172A" strokeWidth="4" />
          </svg>
        </div>
      );
    };

    const AgentBannaMascot = ({ className = "w-16 h-16", reaction = null }) => (
      <div className={`relative rounded-full bg-amber-100 border-4 border-slate-900 flex items-center justify-center shadow-[0_4px_0_#0f172a] overflow-hidden shrink-0 ${reaction === 'right' ? 'animate-match-bounce' : 'animate-float-bob'} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="#FED7AA" />
          <path d="M15 35 C20 10, 80 10, 85 35 C80 20, 20 20, 15 35 Z" fill="#FF5722" />
          <circle cx="50" cy="18" r="8" fill="#FFB300" className="animate-pulse" />
          <g className="animate-eye-blink">
            <circle cx="38" cy="45" r="4" fill="#0F172A" />
            <circle cx="62" cy="45" r="4" fill="#0F172A" />
          </g>
          <path d="M30 58 Q50 50 70 58 Q50 68 30 58 Z" fill="#0F172A" />
          <path d="M42 66 Q50 72 58 66" fill="none" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <path d="M25 88 L50 72 L75 88 L75 100 L25 100 Z" fill="#C2410C" />
          <polygon points="50,72 46,95 50,100 54,95" fill="#FFB300" />
          <g className="animate-wave-arm">
            <path d="M72 75 Q88 60 82 45" fill="none" stroke="#FED7AA" strokeWidth="7" strokeLinecap="round" />
            <circle cx="82" cy="43" r="5" fill="#FF5722" />
          </g>
        </svg>
      </div>
    );

    const LandlordLaxmiMascot = ({ className = "w-16 h-16", reaction = null }) => (
      <div className={`relative rounded-full bg-rose-100 border-4 border-slate-900 flex items-center justify-center shadow-[0_4px_0_#0f172a] overflow-hidden shrink-0 ${reaction === 'right' ? 'animate-match-bounce' : ''} ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="#FECDD3" />
          <path d="M20 50 C20 25, 80 25, 80 50 C80 35, 20 35, 20 50 Z" fill="#7C2D12" />
          <circle cx="50" cy="22" r="9" fill="#7C2D12" />
          <g className="animate-eye-blink">
            <rect x="28" y="42" width="18" height="14" rx="4" fill="none" stroke="#0F172A" strokeWidth="3" />
            <rect x="54" y="42" width="18" height="14" rx="4" fill="none" stroke="#0F172A" strokeWidth="3" />
            <line x1="46" y1="49" x2="54" y2="49" stroke="#0F172A" strokeWidth="3" />
            <circle cx="37" cy="49" r="3" fill="#0F172A" />
            <circle cx="63" cy="49" r="3" fill="#0F172A" />
          </g>
          <path d="M40 68 Q50 76 60 68" fill="none" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M25 88 L50 75 L75 88 L75 100 L25 100 Z" fill="#059669" />
          <g className="animate-key-glow">
            <circle cx="75" cy="72" r="5" fill="none" stroke="#FFB300" strokeWidth="3" />
            <path d="M78 75 L86 83 M82 79 L85 77" fill="none" stroke="#FFB300" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    );

    const FSLogo = ({ className = "h-9 w-9" }) => (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-[0_4px_0_#0f172a]" aria-hidden="true">
          <polygon points="100,20 175,60 175,140 100,180 25,140 25,60" fill="#FF5722" stroke="#0F172A" strokeWidth="8" strokeLinejoin="round" />
          <polygon points="100,26 165,60 100,95 35,60" fill="#FF784E" stroke="#0F172A" strokeWidth="4" />
          <polygon points="35,66 95,100 95,170 35,136" fill="#D84315" stroke="#0F172A" strokeWidth="4" />
          <polygon points="105,100 165,66 165,136 105,170" fill="#BF360C" stroke="#0F172A" strokeWidth="4" />
          <path d="M55 35 C55 15, 145 15, 145 35 Z" fill="#FFB300" stroke="#0F172A" strokeWidth="5" />
          <rect x="45" y="32" width="110" height="10" rx="5" fill="#FFA000" stroke="#0F172A" strokeWidth="4" />
        </svg>
      </div>
    );

    // --- SWIPE SIMULATOR ---
    const initialCards = [
      { id: 1, microMarket: 'C-SCHEME, JAIPUR', title: '3,500 Sq.Ft Prime Corner Showroom', rent: '₹2.80 Lakh / Mo', specs: 'Corner Unit • High-Street Frontage • 100% Power Backed', agent: 'Direct Landlord Mandate (Masked)', badge: '98% COMPATIBILITY MATCH', imageEmoji: '🏬' },
      { id: 2, microMarket: 'TONK ROAD, JAIPUR', title: '12,000 Sq.Ft IT Office Floorplate', rent: '₹65 / Sq.Ft / Mo', specs: 'Fully Furnished • 180 Workstations • 4 Cabins', agent: 'RERA Broker Exclusive (Masked)', badge: '95% COMPATIBILITY MATCH', imageEmoji: '🏢' },
      { id: 3, microMarket: 'SITAPURA INDUSTRIAL', title: '25,000 Sq.Ft Logistics Box Warehouse', rent: '₹22 / Sq.Ft / Mo', specs: '30ft Height • Dock Levelers • Heavy Vehicle Access', agent: 'Off-Market Mandate (Masked)', badge: '92% COMPATIBILITY MATCH', imageEmoji: '🏭' },
      { id: 4, microMarket: 'VAISHALI NAGAR', title: '1,800 Sq.Ft Ground Floor Retail', rent: '₹1.50 Lakh / Mo', specs: 'Main Market • High Footfall • Ideal F&B Space', agent: 'Verified Agent Mandate (Masked)', badge: '97% COMPATIBILITY MATCH', imageEmoji: '🛍️' }
    ];

    function SwipeSimulator({ onMatch, onRequestModal }) {
      const [cards, setCards] = useState(initialCards);
      const [swipeDirection, setSwipeDirection] = useState(null);
      const [matchedCard, setMatchedCard] = useState(null);
      const [matchCount, setMatchCount] = useState(0);

      const handleSwipe = (direction) => {
        if (cards.length === 0) return;
        setSwipeDirection(direction);
        const activeCard = cards[0];
        setTimeout(() => {
          if (direction === 'right') {
            setMatchedCard(activeCard);
            setMatchCount((prev) => prev + 1);
            if (onMatch) onMatch();
          }
          setCards((prev) => prev.slice(1));
          setSwipeDirection(null);
        }, 350);
      };

      const handleResetDeck = () => setCards(initialCards);

      return (
        <section id="demo" data-guide="swipe" className="py-12 px-4 scroll-mt-24">
          <div className="max-w-xl mx-auto">
            <div className="text-center space-y-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FFB300] border-2 border-slate-900 text-xs font-black uppercase tracking-wider text-slate-950 shadow-[0_2px_0_#0f172a]">
                INTERACTIVE DEMO // TINDER FOR CRE BROKERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Try Swiping Jaipur Mandates!</h2>
              <p className="text-slate-700 font-bold text-sm">
                Swipe <strong className="text-[#58CC02]">RIGHT (MATCH)</strong> or <strong className="text-[#EF4444]">LEFT (PASS)</strong> to test the co-broking match engine.
              </p>
            </div>

            <div className="relative min-h-[440px] flex flex-col items-center justify-center">
              {cards.length > 0 ? (
                <div className="relative w-full max-w-sm">
                  <div className={`bg-white rounded-3xl border-4 border-slate-900 p-6 shadow-[0_8px_0_#0f172a] space-y-4 transition-all duration-300 relative select-none ${
                    swipeDirection === 'right' ? 'translate-x-32 rotate-12 opacity-0' : swipeDirection === 'left' ? '-translate-x-32 -rotate-12 opacity-0' : 'translate-x-0 rotate-0 opacity-100'
                  }`}>
                    {swipeDirection === 'right' && (
                      <div className="absolute top-6 left-6 z-30 px-4 py-2 border-4 border-[#58CC02] rounded-2xl rotate-[-12deg] bg-white/90">
                        <span className="text-2xl font-black text-[#58CC02] tracking-wider uppercase">MATCH! 🤝</span>
                      </div>
                    )}
                    {swipeDirection === 'left' && (
                      <div className="absolute top-6 right-6 z-30 px-4 py-2 border-4 border-rose-600 rounded-2xl rotate-[12deg] bg-white/90">
                        <span className="text-2xl font-black text-rose-600 tracking-wider uppercase">PASS ❌</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between border-b-4 border-slate-100 pb-3 font-mono text-xs">
                      <span className="px-3 py-1 bg-amber-100 rounded-full border-2 border-slate-900 font-black text-slate-900">{cards[0].microMarket}</span>
                      <span className="text-[#58CC02] font-black text-[11px]">{cards[0].badge}</span>
                    </div>
                    <div className="text-center space-y-2 py-2">
                      <div className="text-5xl">{cards[0].imageEmoji}</div>
                      <h3 className="text-xl font-black text-slate-900 leading-tight">{cards[0].title}</h3>
                      <div className="text-2xl font-black text-[#FF5722]">{cards[0].rent}</div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl border-2 border-slate-900 p-3 space-y-1 font-mono text-xs font-bold text-slate-700">
                      <div>📌 {cards[0].specs}</div>
                      <div className="text-amber-800 font-black">🔒 {cards[0].agent}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-6">
                    <button onClick={() => handleSwipe('left')} className="w-16 h-16 rounded-full bg-rose-100 hover:bg-rose-200 active:translate-y-1 border-4 border-slate-900 shadow-[0_4px_0_#0f172a] flex items-center justify-center cursor-pointer text-2xl" aria-label="Pass this mandate">👎</button>
                    <button onClick={handleResetDeck} className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 active:translate-y-1 border-3 border-slate-900 shadow-[0_3px_0_#0f172a] flex items-center justify-center cursor-pointer text-lg">🔄</button>
                    <button onClick={() => handleSwipe('right')} className="w-16 h-16 rounded-full bg-emerald-100 hover:bg-emerald-200 active:translate-y-1 border-4 border-slate-900 shadow-[0_4px_0_#0f172a] flex items-center justify-center cursor-pointer text-2xl" aria-label="Match this mandate">👍</button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border-4 border-slate-900 p-8 shadow-[0_8px_0_#0f172a] text-center space-y-4 max-w-sm">
                  <SquareyMascot className="w-20 h-20 mx-auto" mood="excited" />
                  <h3 className="text-2xl font-black text-slate-900">DECK CLEARED!</h3>
                  <p className="text-xs font-bold text-slate-600 font-mono">You matched <strong className="text-[#FF5722]">{matchCount} Jaipur Mandates</strong>!</p>
                  <button onClick={onRequestModal} className="w-full py-3.5 rounded-2xl bg-[#FF5722] text-white font-black text-xs uppercase border-2 border-slate-900 shadow-[0_4px_0_#0f172a] cursor-pointer">CLAIM ACCESS PASS</button>
                  <button onClick={handleResetDeck} className="text-xs font-black text-slate-700 underline block mx-auto cursor-pointer">Replay Deck</button>
                </div>
              )}
            </div>
          </div>

          {matchedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
              <div className="relative w-full max-w-sm rounded-3xl bg-white border-4 border-slate-900 p-6 shadow-[0_10px_0_#0f172a] space-y-4 font-mono text-xs text-center">
                <button onClick={() => setMatchedCard(null)} className="absolute top-4 right-4 text-slate-500 font-black text-lg cursor-pointer">✕</button>
                <div className="w-16 h-16 rounded-full bg-[#58CC02] border-4 border-slate-900 flex items-center justify-center mx-auto shadow-[0_4px_0_#0f172a] text-2xl">🎉</div>
                <h3 className="text-2xl font-black text-slate-900">MUTUAL MATCH! 🎉</h3>
                <div className="bg-[#FFF3E0] rounded-2xl border-2 border-slate-900 p-3 space-y-1">
                  <div className="font-black text-[#FF5722]">{matchedCard.microMarket}</div>
                  <div className="font-bold text-slate-900">{matchedCard.title}</div>
                  <div className="text-emerald-700 font-black">{matchedCard.rent}</div>
                </div>
                <button onClick={() => { setMatchedCard(null); onRequestModal(); }} className="w-full py-3.5 rounded-2xl bg-[#FF5722] text-white font-black text-xs uppercase border-2 border-slate-900 shadow-[0_4px_0_#0f172a] cursor-pointer">CLAIM BROKER ACCESS KEY</button>
              </div>
            </div>
          )}
        </section>
      );
    }

    // --- MAIN APP ---
    const LINKEDIN_URL = 'https://www.linkedin.com/company/floorsquarehq';

const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#why', label: 'Why FloorSquare' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

// --- SCROLL GUIDE: the hero Squarey hops out of the hero card, docks on the right, and explains each section ---
const GUIDE_LINES = {
  hero:     { mood: 'happy',   text: "Hey, I'm Squarey! I hopped out of the hero to walk you through FloorSquare as you scroll." },
  problem:  { mood: 'happy',   text: "Here's the problem: a client in C-Scheme, a landlord with the perfect space, and a group chat where they never meet." },
  swipe:    { mood: 'excited', text: "Your turn! Swipe right to match a mandate, left to pass. Contact details stay masked until both sides match." },
  steps:    { mood: 'happy',   text: "Just 3 steps: verify your RERA tag, post one mandate or requirement, then match with another broker." },
  why:      { mood: 'excited', text: "No listing fees, no commission cut, and your contact stays hidden until both brokers match." },
  audience: { mood: 'happy',   text: "Broker, landlord or tenant, there's a spot for you. You pick your role when you join." },
  areas:    { mood: 'happy',   text: "We start with Jaipur's busiest commercial pockets, from C-Scheme to Sitapura." },
  roadmap:  { mood: 'happy',   text: "We're in invite-only alpha now. The swipe app and premium tools come next." },
  join:     { mood: 'excited', text: "Ready? Drop your name and WhatsApp number and I'll save your spot on the Jaipur Alpha list!" },
  about:    { mood: 'happy',   text: "Quick intro: FloorSquare is a co-broking exchange built just for Jaipur's commercial brokers." },
  faq:      { mood: 'happy',   text: "Still curious? Pricing, commissions and how matching works are all answered here." },
  contact:  { mood: 'excited', text: "Want to talk to a human? Reach out here, or join the alpha and we'll get in touch." },
};

function ScrollGuide() {
  const [active, setActive] = useState('hero');
  const [typed, setTyped] = useState('');
  const [docked, setDocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(true);
  const [small, setSmall] = useState(false);
  const charRef = useRef(null);

  // which section is crossing the middle of the screen?
  useEffect(() => {
    const els = document.querySelectorAll('[data-guide]');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.dataset.guide)),
      { rootMargin: '-45% 0px -45% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // scroll-linked flight: sits exactly on the hero slot, then glides to the right edge as the hero scrolls away
  useEffect(() => {
    const slot = document.querySelector('[data-squarey-slot]');
    const inner = slot ? slot.firstElementChild : null;
    if (inner) inner.style.visibility = 'hidden'; // the flying one replaces it
    let raf = 0;
    let wasDocked = false;

    const update = () => {
      const el = charRef.current;
      if (!el) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const dockSize = vw < 640 ? 56 : 68;
      const dockLeft = vw - dockSize - 12;
      const dockTop = vh - dockSize - 14;
      let p = 1, left = dockLeft, top = dockTop, size = dockSize;
      if (slot) {
        const r = slot.getBoundingClientRect();
        p = Math.min(1, Math.max(0, (90 - r.top) / 240));
        const e = p * p * (3 - 2 * p); // smoothstep
        left = r.left + (dockLeft - r.left) * e;
        top = r.top + (dockTop - r.top) * e;
        size = r.width + (dockSize - r.width) * e;
      }
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.transform = `translate3d(${left}px, ${top}px, 0)`;
      const nowDocked = p > 0.85;
      if (nowDocked !== wasDocked) { wasDocked = nowDocked; setDocked(nowDocked); }
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); };

    update();
    setReady(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (inner) inner.style.visibility = '';
    };
  }, []);

  // phones: keep the bubble off the signup form
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const on = () => setSmall(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  // typewriter effect once docked (instant for reduced-motion users)
  useEffect(() => {
    if (!docked) { setTyped(''); return; }
    const full = GUIDE_LINES[active]?.text || '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTyped(full); return; }
    let i = 0;
    setTyped('');
    const t = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [active, docked]);

  const line = GUIDE_LINES[active] || GUIDE_LINES.hero;

  return (
    <>
      <button
        ref={charRef}
        type="button"
        onClick={() => docked && setBubbleOpen((v) => !v)}
        aria-label="Toggle Squarey tips"
        tabIndex={docked ? 0 : -1}
        className="fixed top-0 left-0 z-40 p-0 bg-transparent border-0 will-change-transform"
        style={{ visibility: ready ? 'visible' : 'hidden', pointerEvents: docked ? 'auto' : 'none', cursor: docked ? 'pointer' : 'default' }}
      >
        <SquareyMascot className="w-full h-full" mood={docked ? line.mood : 'happy'} />
      </button>

      {docked && bubbleOpen && !(small && active === 'join') && (
        <div
          key={active}
          aria-hidden="true"
          className="fixed right-3 bottom-[82px] sm:bottom-[94px] z-40 w-[220px] sm:w-[260px] rounded-2xl bg-white border-4 border-slate-900 p-3 pr-7 shadow-[0_5px_0_#0f172a] animate-bubble-pop min-h-[84px]"
        >
          <button onClick={() => setBubbleOpen(false)} aria-label="Hide tip" className="absolute top-1 right-2 text-slate-500 font-black text-sm cursor-pointer">✕</button>
          <p className="font-mono text-[11px] sm:text-xs font-bold text-slate-800 leading-snug">{typed}</p>
          <span className="absolute -bottom-[14px] right-6 w-4 h-4 bg-white border-r-4 border-b-4 border-slate-900 rotate-45" />
        </div>
      )}
    </>
  );
}

export default function LandingPage({ children, problem, afterSteps }) {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [submitted, setSubmitted] = useState(false);
      const [submitError, setSubmitError] = useState(false);
      const [submitting, setSubmitting] = useState(false);
      const [showSuccess, setShowSuccess] = useState(false);
      const [submittedName, setSubmittedName] = useState('');
      const [selectedRole, setSelectedRole] = useState('broker');
      const [menuOpen, setMenuOpen] = useState(false);

      const handleFormSubmit = async (e) => {
        if (e) e.preventDefault();
        if (submitting) return false;
        const fd = new FormData(e.currentTarget);
        setSubmitError(false);
        setSubmitting(true);
        try {
          const res = await fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: fd.get('name'), phone: fd.get('phone'), role: selectedRole }),
          });
          if (!res.ok) throw new Error('bad response');
          setSubmittedName(String(fd.get('name') || '').trim().split(' ')[0]);
          setSubmitted(true);
          setShowSuccess(true);
          return true;
        } catch {
          setSubmitError(true);
          return false;
        } finally {
          setSubmitting(false);
        }
      };

      return (
        <div className="min-h-screen bg-[#FFFBEB]">
          <ScrollGuide />
          {/* Header Bar */}
          <header className="sticky top-0 z-50 bg-white border-b-4 border-slate-900 shadow-sm">
            <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <FSLogo className="w-8 h-8 sm:w-10 sm:h-10" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-[28px] leading-none font-bold tracking-tight text-slate-900 font-brand">FloorSquare</span>
                    <span className="hidden sm:inline-block bg-[#FF5722] text-white font-black text-[10px] px-2.5 py-0.5 rounded-full border-2 border-slate-900 uppercase">JAIPUR ALPHA</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 block whitespace-nowrap">CRE Co-Broking Exchange</span>
                </div>
              </div>

              <nav aria-label="Main" className="hidden xl:flex items-center gap-6 text-[13px] font-black text-slate-800">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="hover:text-[#FF5722] transition-colors">{l.label}</a>
                ))}
              </nav>

              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => setIsModalOpen(true)} className="px-3 sm:px-5 py-2.5 rounded-2xl bg-[#FF5722] hover:bg-[#F44336] active:translate-y-1 text-white font-black text-xs uppercase whitespace-nowrap border-2 border-slate-900 shadow-[0_4px_0_#0f172a] cursor-pointer">
                <span className="sm:hidden">⚡ JOIN</span><span className="hidden sm:inline">⚡ CLAIM ALPHA PASS</span>
              </button>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="FloorSquare on LinkedIn" className="hidden xl:flex w-11 h-11 rounded-2xl bg-[#0A66C2] text-white items-center justify-center border-2 border-slate-900 shadow-[0_3px_0_#0f172a] hover:-translate-y-0.5 transition-transform">
                  <LinkedInIcon />
                </a>
                <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen} className="xl:hidden w-11 h-11 rounded-2xl bg-white border-2 border-slate-900 shadow-[0_3px_0_#0f172a] text-lg font-black cursor-pointer">{menuOpen ? '✕' : '☰'}</button>
              </div>
            </div>
          {menuOpen && (
              <nav aria-label="Mobile" className="xl:hidden border-t-4 border-slate-900 bg-white px-4 py-3 flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-3 font-black text-sm text-slate-800 border-b-2 border-slate-100 last:border-0">{l.label}</a>
                ))}
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="py-3 font-black text-sm text-[#0A66C2] flex items-center gap-2"><LinkedInIcon className="w-4 h-4" /> LinkedIn</a>
              </nav>
            )}
          </header>

          {/* Hero Section */}
          <section data-guide="hero" className="pt-6 sm:pt-8 pb-10 sm:pb-14 px-3 sm:px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl border-4 border-slate-900 p-5 sm:p-12 shadow-[0_8px_0_#0f172a]">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-[#FFB300] border-2 border-slate-900 font-mono text-[10px] sm:text-xs leading-snug font-black text-slate-950 shadow-[0_2px_0_#0f172a]">
                      ✨ <span>INVITE-ONLY JAIPUR ALPHA • FREE FOR RERA BROKERS</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                      Find a Verified Co-Broker for Your Jaipur Commercial Deal <br />
                      <span className="text-[#FF5722] underline decoration-[#FFB300] decoration-wavy">in Under 2 Minutes</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed">
                      No listing subscriptions. No commission cuts. FloorSquare connects verified commercial brokers with direct landlord mandates & buyer requirements across Jaipur in under 2 minutes.
                    </p>

                    <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto px-6 sm:px-8 py-4 rounded-2xl bg-[#FF5722] hover:bg-[#f44336] active:translate-y-1 text-white font-black text-sm sm:text-base uppercase border-2 border-slate-900 shadow-[0_6px_0_#0f172a] cursor-pointer">
                      RESERVE BROKER SPOT NOW
                    </button>

                    <div className="pt-2 flex items-center gap-3 font-mono text-xs font-black text-slate-700">
                      <div className="flex -space-x-3">
                        <SquareyMascot className="w-10 h-10 border-2 rounded-full bg-orange-100" />
                        <AgentBannaMascot className="w-10 h-10 border-2" />
                        <LandlordLaxmiMascot className="w-10 h-10 border-2" />
                      </div>
                      <span>⚡ Squarey & Jaipur Brokers are matching deals live!</span>
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <div className="bg-[#FFF3E0] rounded-3xl border-4 border-slate-900 p-6 shadow-[0_6px_0_#0f172a] text-center space-y-4">
                      <div className="flex justify-center items-center gap-2">
                        <div data-squarey-slot className="w-24 h-24"><SquareyMascot className="w-24 h-24" /></div>
                        <AgentBannaMascot className="w-20 h-20" />
                      </div>
                      <div className="bg-white rounded-2xl border-3 border-slate-900 p-4 shadow-[0_3px_0_#0f172a] space-y-1 font-mono text-xs">
                        <div className="font-black text-[#FF5722] text-sm">Squarey says:</div>
                        <div className="text-slate-800 font-bold">"Have a client for C-Scheme or Tonk Road? Stop WhatsApp spam! Swipe to match instantly."</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {problem}

          {/* Swipe Deck Section */}
          <SwipeSimulator onRequestModal={() => setIsModalOpen(true)} />

          {/* Gamified Skill Tree Section */}
          <section id="how-it-works" data-guide="steps" className="scroll-mt-24 py-12 sm:py-16 px-4 bg-[#FFB300]/20 border-y-4 border-slate-900">
            <div className="max-w-5xl mx-auto">
              <div className="text-center space-y-2 mb-12">
                <span className="px-3 py-1 rounded-full bg-[#FF5722] text-white border-2 border-slate-900 text-xs font-black uppercase shadow-[0_2px_0_#0f172a]">
                  SKILL TREE // BROKER ROADMAP
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900">3 Steps to Closing Jaipur Deals</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 shadow-[0_6px_0_#0f172a] space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FFB300] border-4 border-slate-900 flex items-center justify-center mx-auto shadow-[0_4px_0_#0f172a] text-xl font-black">1</div>
                  <h3 className="text-lg font-black text-slate-900">Verify RERA Tag</h3>
                  <p className="text-xs font-bold text-slate-600 font-mono">Enter your WhatsApp number & select primary Jaipur commercial zone (C-Scheme, Tonk Road, Sitapura).</p>
                </div>
                <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 shadow-[0_6px_0_#0f172a] space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF5722] text-white border-4 border-slate-900 flex items-center justify-center mx-auto shadow-[0_4px_0_#0f172a] text-xl font-black">2</div>
                  <h3 className="text-lg font-black text-slate-900">Post Mandate / Want</h3>
                  <p className="text-xs font-bold text-slate-600 font-mono">Log 1 active property mandate or requirement. Addresses & client info remain 100% masked.</p>
                </div>
                <div className="bg-white rounded-3xl border-4 border-slate-900 p-6 shadow-[0_6px_0_#0f172a] space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-400 border-4 border-slate-900 flex items-center justify-center mx-auto shadow-[0_4px_0_#0f172a] text-xl font-black">3</div>
                  <h3 className="text-lg font-black text-slate-900">Mutual Co-Broking Match</h3>
                  <p className="text-xs font-bold text-slate-600 font-mono">When another verified broker swipes right on your mandate, contact details unmask instantly for both!</p>
                </div>
              </div>
            </div>
          </section>

          {afterSteps}

          {/* Embedded Registration Form */}
          <section id="onboarding" data-guide="join" className="py-12 sm:py-16 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-3xl border-4 border-slate-900 p-5 sm:p-10 shadow-[0_8px_0_#0f172a] space-y-6">
                <div className="text-center space-y-2">
                  <div className="flex justify-center -space-x-2 mb-2">
                    <SquareyMascot className="w-12 h-12" />
                    <AgentBannaMascot className="w-12 h-12" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">Claim Jaipur Alpha Pass</h2>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-100 border-3 border-slate-900 text-center space-y-3 font-mono">
                    <div className="w-12 h-12 rounded-full bg-[#58CC02] border-3 border-slate-900 flex items-center justify-center mx-auto text-white shadow-[0_3px_0_#0f172a] text-2xl">✓</div>
                    <h3 className="text-xl font-black text-slate-900">TICKET RESERVED!</h3>
                    <p className="text-xs font-bold text-slate-800">You are on the list. We will WhatsApp you your access soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                    <div>
                      <label className="block font-black text-slate-900 mb-2 uppercase">SELECT YOUR ROLE</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <button type="button" onClick={() => setSelectedRole('broker')} className={`p-3 rounded-xl border-3 font-black text-[11px] cursor-pointer ${selectedRole === 'broker' ? 'bg-[#FF5722] text-white border-slate-900 shadow-[0_3px_0_#0f172a]' : 'bg-slate-50 border-slate-300 text-slate-600'}`}>💼 RERA BROKER</button>
                        <button type="button" onClick={() => setSelectedRole('landlord')} className={`p-3 rounded-xl border-3 font-black text-[11px] cursor-pointer ${selectedRole === 'landlord' ? 'bg-[#FFB300] text-slate-950 border-slate-900 shadow-[0_3px_0_#0f172a]' : 'bg-slate-50 border-slate-300 text-slate-600'}`}>🔑 LANDLORD</button>
                        <button type="button" onClick={() => setSelectedRole('tenant')} className={`p-3 rounded-xl border-3 font-black text-[11px] cursor-pointer ${selectedRole === 'tenant' ? 'bg-emerald-300 text-slate-950 border-slate-900 shadow-[0_3px_0_#0f172a]' : 'bg-slate-50 border-slate-300 text-slate-600'}`}>🏢 TENANT/BUYER</button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-black text-slate-900 mb-1 uppercase">FULL NAME *</label>
                      <input type="text" name="name" autoComplete="name" required placeholder="e.g. Vikramaditya Singh" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-3 border-slate-900 font-bold" />
                    </div>

                    <div>
                      <label className="block font-black text-slate-900 mb-1 uppercase">WHATSAPP MOBILE *</label>
                      <input type="tel" name="phone" autoComplete="tel" required placeholder="+91 98290 XXXXX" className="w-full px-4 py-3 rounded-xl bg-slate-50 border-3 border-slate-900 font-bold" />
                    </div>

                    <button type="submit" disabled={submitting} className="w-full py-4 rounded-2xl bg-[#FF5722] text-white font-black text-sm uppercase border-2 border-slate-900 shadow-[0_4px_0_#0f172a] cursor-pointer disabled:opacity-60">
                      {submitting ? 'SAVING...' : 'CONFIRM MY QUEUE RESERVATION'}
                    </button>
                    <p className="text-center text-[11px] font-bold text-slate-500">We use your number only to contact you about FloorSquare.</p>
                    {submitError && <p className="text-rose-600 font-black text-center">Something went wrong. Please try again.</p>}
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
              <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-4 border-slate-900 p-6 shadow-[0_10px_0_#0f172a] space-y-4 font-mono text-xs">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-500 font-black text-lg">✕</button>
                <div className="flex items-center gap-3">
                  <SquareyMascot className="w-12 h-12" mood="excited" />
                  <div>
                    <h3 className="text-base font-black text-slate-900">Jaipur Alpha Pass</h3>
                    <p className="text-[11px] font-bold text-slate-600">Verified RERA Broker Portal</p>
                  </div>
                </div>
                <form onSubmit={async (e) => { const ok = await handleFormSubmit(e); if (ok) setIsModalOpen(false); }} className="space-y-3">
                  <div>
                    <label className="block font-black text-slate-900 mb-1">YOUR FULL NAME</label>
                    <input type="text" name="name" autoComplete="name" required placeholder="e.g. Rajesh Sharma" className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border-3 border-slate-900 font-bold" />
                  </div>
                  <div>
                    <label className="block font-black text-slate-900 mb-1">WHATSAPP NUMBER</label>
                    <input type="tel" name="phone" autoComplete="tel" required placeholder="+91 98290 XXXXX" className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border-3 border-slate-900 font-bold" />
                  </div>
                  <button type="submit" disabled={submitting} className="w-full py-3.5 rounded-2xl bg-[#FF5722] text-white font-black text-xs uppercase border-2 border-slate-900 shadow-[0_4px_0_#0f172a] cursor-pointer disabled:opacity-60">
                    {submitting ? 'SAVING...' : 'UNLOCK MY INVITE TICKET'}
                  </button>
                  {submitError && <p className="text-rose-600 font-black text-center">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          )}

          {showSuccess && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="success-title">
              <div className="relative w-full max-w-sm rounded-3xl bg-white border-4 border-slate-900 p-8 shadow-[0_10px_0_#0f172a] space-y-4 font-mono text-center">
                <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-slate-500 font-black text-lg cursor-pointer" aria-label="Close">✕</button>
                <SquareyMascot className="w-20 h-20 mx-auto" mood="excited" />
                <h3 id="success-title" className="text-2xl font-black text-slate-900">You are in{submittedName ? `, ${submittedName}` : ''}! 🎉</h3>
                <p className="text-xs font-bold text-slate-700">Your spot on the Jaipur Alpha list is reserved. We will WhatsApp you on the number you gave as soon as your access opens.</p>
                <button onClick={() => setShowSuccess(false)} className="w-full py-3.5 rounded-2xl bg-[#FF5722] text-white font-black text-xs uppercase border-2 border-slate-900 shadow-[0_4px_0_#0f172a] cursor-pointer">GOT IT</button>
              </div>
            </div>
          )}

          {children}

          <footer className="max-w-5xl mx-auto px-4 pt-8 text-center text-xs font-mono font-bold text-slate-600">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FSLogo className="w-6 h-6" />
              <span className="text-slate-900 font-bold text-sm font-brand">FloorSquare Jaipur</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mb-3">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-[#FF5722]">{l.label}</a>
              ))}
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5722]">LinkedIn</a>
            </div>
            <p>© {new Date().getFullYear()} FloorSquare Technologies. All rights reserved.</p>
          </footer>
        </div>
      );
    }
