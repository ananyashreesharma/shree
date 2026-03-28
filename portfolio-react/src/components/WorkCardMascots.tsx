import React from 'react';

/** Compact Office Cat–style mascots (SVG only — no Tailwind) so they always render on Work cards. */

/** Black cat with rectangular glasses — About / Home (high contrast for black backgrounds) */
export function MascotBlackGlassesAbout() {
  return (
    <svg
      className="work-mascot-svg home-about-mascot"
      viewBox="0 0 100 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <title>Office cat with glasses</title>
      {/* ears — orange so they read on black */}
      <path d="M22 30 L28 14 L34 30 Z" fill="#ff6600" stroke="#7c2d12" strokeWidth="2" />
      <path d="M66 30 L72 14 L78 30 Z" fill="#ff6600" stroke="#7c2d12" strokeWidth="2" />
      {/* face — dark but not black */}
      <rect x="24" y="30" width="52" height="44" rx="14" fill="#3f3f46" stroke="#ff6600" strokeWidth="2.5" />
      {/* glasses — white frames */}
      <rect x="28" y="46" width="20" height="14" rx="3" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      <rect x="52" y="46" width="20" height="14" rx="3" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      <line x1="48" y1="53" x2="52" y2="53" stroke="#ffffff" strokeWidth="2.5" />
      {/* eyes — yellow glints */}
      <circle cx="38" cy="53" r="3" fill="#0a0a0a" />
      <circle cx="62" cy="53" r="3" fill="#0a0a0a" />
      <circle cx="39" cy="52" r="1.2" fill="#ffff00" />
      <circle cx="63" cy="52" r="1.2" fill="#ffff00" />
      <path d="M46 66 h8 v6 h-8 Z" fill="#f87171" />
      <path d="M34 72 h32 v16 H34 Z" fill="#18181b" stroke="#ff6600" strokeWidth="2" />
      <path d="M48 74 v12" stroke="#e4e4e7" strokeWidth="2.5" />
      {/* desk */}
      <rect x="10" y="94" width="80" height="14" rx="3" fill="#c2410c" stroke="#ff6600" strokeWidth="2" />
      <rect x="16" y="76" width="16" height="20" rx="2" fill="#27272a" stroke="#a1a1aa" strokeWidth="1.5" />
      <rect x="22" y="106" width="56" height="10" rx="5" fill="#ea580c" stroke="#fde047" strokeWidth="1.5" />
      <text x="72" y="113" textAnchor="end" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="system-ui, sans-serif">
        Lv.4
      </text>
    </svg>
  );
}

export function MascotApexOrangeGlasses() {
  return (
    <svg className="work-mascot-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <title>Apex</title>
      {/* ears */}
      <path d="M18 28 L26 8 L34 28 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
      <path d="M66 28 L74 8 L82 28 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
      {/* head */}
      <rect x="20" y="28" width="60" height="48" rx="14" fill="#fdba74" stroke="#9a3412" strokeWidth="2" />
      <rect x="32" y="30" width="8" height="10" rx="2" fill="#fb923c" opacity="0.6" />
      <rect x="46" y="30" width="8" height="10" rx="2" fill="#fb923c" opacity="0.6" />
      <rect x="60" y="30" width="8" height="10" rx="2" fill="#fb923c" opacity="0.6" />
      {/* eyes */}
      <circle cx="38" cy="52" r="4" fill="#0a0a0a" />
      <circle cx="62" cy="52" r="4" fill="#0a0a0a" />
      {/* round glasses */}
      <ellipse cx="38" cy="52" rx="14" ry="10" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
      <ellipse cx="62" cy="52" rx="14" ry="10" fill="none" stroke="#0a0a0a" strokeWidth="2.5" />
      <line x1="52" y1="52" x2="48" y2="52" stroke="#0a0a0a" strokeWidth="2" />
      {/* nose */}
      <ellipse cx="50" cy="62" rx="2" ry="1.5" fill="#f472b6" />
      {/* shirt */}
      <path d="M32 76 h36 v18 H32 Z" fill="#fff" stroke="#d4d4d4" strokeWidth="1.5" />
      <path d="M48 76 l4 8 h-8 Z" fill="#dc2626" />
      {/* desk */}
      <rect x="12" y="96" width="76" height="14" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="2" />
      <rect x="38" y="82" width="24" height="16" rx="2" fill="#374151" stroke="#4b5563" />
      <rect x="42" y="86" width="16" height="8" fill="#93c5fd" opacity="0.85" />
      <rect x="38" y="108" width="24" height="8" rx="4" fill="#16a34a" stroke="#86efac" strokeWidth="1" />
      <text x="50" y="114" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold" fontFamily="system-ui, sans-serif">
        Lv.2
      </text>
    </svg>
  );
}

export function MascotStripeHeadphones() {
  return (
    <svg className="work-mascot-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <title>Stripe</title>
      {/* headphones band */}
      <path d="M22 40 Q50 12 78 40" fill="none" stroke="#1f2937" strokeWidth="5" strokeLinecap="round" />
      <rect x="14" y="38" width="10" height="28" rx="5" fill="#1f2937" stroke="#374151" strokeWidth="1.5" />
      <rect x="76" y="38" width="10" height="28" rx="5" fill="#1f2937" stroke="#374151" strokeWidth="1.5" />
      {/* ears */}
      <path d="M24 34 L30 18 L36 34 Z" fill="#fb923c" stroke="#9a3412" strokeWidth="1.5" />
      <path d="M64 34 L70 18 L76 34 Z" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="1.5" />
      {/* head */}
      <rect x="28" y="32" width="44" height="40" rx="12" fill="#fafafa" stroke="#d4d4d4" strokeWidth="2" />
      <path d="M28 32 h20 v20 Q38 42 28 52 Z" fill="#fdba74" opacity="0.9" />
      <path d="M72 32 h-16 v18 Q66 40 72 50 Z" fill="#0a0a0a" />
      <circle cx="40" cy="54" r="4.5" fill="#0a0a0a" />
      <circle cx="60" cy="54" r="4.5" fill="#0a0a0a" />
      <ellipse cx="50" cy="64" rx="3" ry="2" fill="#f472b6" />
      {/* shirt */}
      <path d="M36 72 h28 v16 H36 Z" fill="#111827" stroke="#374151" strokeWidth="1.5" />
      <path d="M50 72 v10" stroke="#dc2626" strokeWidth="2" />
      {/* desk + screen */}
      <rect x="10" y="94" width="80" height="14" rx="3" fill="#92400e" stroke="#451a03" strokeWidth="2" />
      <rect x="32" y="78" width="36" height="18" rx="2" fill="#0a0a0a" stroke="#374151" />
      <rect x="36" y="82" width="28" height="10" fill="#1e3a5f" opacity="0.8" />
    </svg>
  );
}

export function MascotClawYellow() {
  return (
    <svg className="work-mascot-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <title>Claw</title>
      <path d="M22 30 L28 14 L34 30 Z" fill="#eab308" stroke="#a16207" strokeWidth="2" />
      <path d="M66 30 L72 14 L78 30 Z" fill="#eab308" stroke="#a16207" strokeWidth="2" />
      <rect x="24" y="30" width="52" height="44" rx="14" fill="#facc15" stroke="#a16207" strokeWidth="2" />
      <circle cx="40" cy="52" r="5" fill="#0a0a0a" />
      <circle cx="41" cy="51" r="1.5" fill="#fff" />
      <circle cx="60" cy="52" r="5" fill="#0a0a0a" />
      <circle cx="61" cy="51" r="1.5" fill="#fff" />
      <ellipse cx="50" cy="64" rx="3" ry="2" fill="#f472b6" />
      <path d="M36 74 h28 v18 H36 Z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5" />
      <rect x="48" y="78" width="4" height="12" fill="#fff" />
      <rect x="14" y="96" width="72" height="14" rx="3" fill="#b45309" stroke="#78350f" strokeWidth="2" />
      <rect x="30" y="82" width="40" height="16" rx="3" fill="#1f2937" stroke="#4b5563" />
      <line x1="34" y1="86" x2="66" y2="86" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="34" y1="90" x2="58" y2="90" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
      <line x1="34" y1="94" x2="52" y2="94" stroke="#22c55e" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
