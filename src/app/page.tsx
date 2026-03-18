import Image from 'next/image';
import RegistrationForm from '@/components/RegistrationForm';

const DARK = '#0D3929';
const ACCENT = '#4AB35C';
const BG = '#F2F7F0';
const QUERY_GREEN = '#33B34A';

const whatToExpect = [
  {
    icon: '/images/icon-1.png',
    title: 'Expert-led Lectures',
    desc: 'Insights from specialists in autism research, early screening, and developmental care.',
  },
  {
    icon: '/images/icon-2.png',
    title: 'Case-Based Learning',
    desc: 'Real case reviews with interdisciplinary clinical perspectives.',
  },
  {
    icon: '/images/icon-3.png',
    title: 'Professional Networking',
    desc: 'Connect with peers, clinicians, and healthcare leaders.',
  },
  {
    icon: '/images/icon-4.png',
    title: 'Panel Discussions',
    desc: 'Conversations on clinical challenges, diagnostics, and emerging solutions.',
  },
];

const approachSteps = [
  {
    title: 'Clinical Observation',
    desc: 'Understanding begins with what is seen, but is not limited by it. Early behavioural signs offer important, yet incomplete, clinical signals.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <circle cx="20" cy="20" r="8" stroke={ACCENT} strokeWidth="2.5" />
        <circle cx="20" cy="20" r="3" fill={ACCENT} />
        <path d="M20 4v4M20 32v4M4 20h4M32 20h4" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Integrated Evaluation',
    desc: 'Clinical insight is combined with targeted diagnostics. A more complete picture of developmental health begins to emerge.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <rect x="8" y="6" width="10" height="10" rx="2" stroke={ACCENT} strokeWidth="2.5" />
        <rect x="22" y="6" width="10" height="10" rx="2" stroke={ACCENT} strokeWidth="2.5" />
        <rect x="15" y="24" width="10" height="10" rx="2" stroke={ACCENT} strokeWidth="2.5" />
        <path d="M13 16v4h14v-4" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20v4" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Biological Exploration',
    desc: 'Focus shifts to underlying pathways influencing brain development. Including mechanisms such as nutrient transport and metabolic function.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M20 6c0 0-8 6-8 14a8 8 0 0016 0C28 12 20 6 20 6z" stroke={ACCENT} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14 22c0 0 2 4 6 4s6-4 6-4" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 14v8" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Diagnostic Insight',
    desc: 'Tools like FRAT IgG (Folate Receptor Autoantibody Test) are used. They help assess folate (Vitamin B9) transport to the brain and CSF.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M14 6l-6 20h24L26 6" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 26v6h20v-6" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6h8" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="3" stroke={ACCENT} strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Clinical Understanding',
    desc: 'Detection of blocking and binding autoantibodies adds critical context. Supporting insights across autism care, pregnancy planning, and mental health.',
    svg: (
      <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
        <path d="M8 22c4-10 12-14 12-14s8 4 12 14" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 28c0 0 4-2 8 0s8 2 8 0 4-2 8 0" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="14" r="3" stroke={ACCENT} strokeWidth="2" />
        <path d="M14 34c2-4 4-6 6-6s4 2 6 6" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

function WaveDivider() {
  return (
    <svg viewBox="0 0 200 12" fill="none" width="96" height="12" style={{ marginTop: 12 }} preserveAspectRatio="none">
      <path d="M0 6 Q25 0 50 6 Q75 12 100 6 Q125 0 150 6 Q175 12 200 6" stroke={ACCENT} strokeWidth="2" fill="none" />
    </svg>
  );
}

function DecorativeDots() {
  const positions = [
    { top: '8%', left: '4%' }, { top: '18%', right: '7%' }, { top: '38%', left: '11%' },
    { top: '58%', right: '5%' }, { top: '78%', left: '7%' }, { top: '25%', left: '55%' },
    { top: '65%', right: '22%' }, { top: '45%', left: '2%' }, { top: '88%', right: '14%' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {positions.map((pos, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: ACCENT,
            opacity: 0.3,
            ...pos,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ backgroundColor: BG, color: DARK }}>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: DARK,
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 64px',
        }}
      >
        <Image
          src="/images/logo.png"
          alt="Yoda Diagnostics"
          width={180}
          height={24}
          style={{ filter: 'brightness(0) invert(1)' }}
          priority
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Overview', 'Speaker', 'Venue'].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
            >
              {link}
            </a>
          ))}
          <a
            href="#register"
            style={{
              padding: '8px 20px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              color: '#fff',
              backgroundColor: ACCENT,
              textDecoration: 'none',
            }}
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="overview" style={{ paddingTop: 72, backgroundColor: DARK }}>
        <Image
          src="/images/hero-section.png"
          alt="Yoda Early Mind Summit – CME by Yoda Diagnostics"
          width={1440}
          height={423}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          priority
        />
      </section>

      {/* ── PROMO BANNER ── */}
      <section style={{ backgroundColor: '#FDF0F2', position: 'relative' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Image
            src="/images/hero-banner.png"
            alt="Optimising Fetal Care 4th Edition"
            width={1440}
            height={180}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div style={{ position: 'absolute', right: 64, display: 'flex', gap: 12 }}>
            <a
              href="#"
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                border: `2px solid ${DARK}`,
                color: DARK,
                backgroundColor: 'transparent',
                textDecoration: 'none',
              }}
            >
              Know More
            </a>
            <a
              href="#"
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                color: '#fff',
                backgroundColor: DARK,
                textDecoration: 'none',
              }}
            >
              Booking Site
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section style={{ position: 'relative', padding: '80px 64px', backgroundColor: BG }}>
        <DecorativeDots />
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: DARK }}>What to Expect</h2>
            <WaveDivider />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {whatToExpect.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 16,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: BG,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Image src={item.icon} alt={item.title} width={40} height={40} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: DARK, opacity: 0.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SPEAKER ── */}
      <section id="speaker" style={{ position: 'relative', padding: '80px 64px', backgroundColor: BG }}>
        <DecorativeDots />
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, marginBottom: 8 }}>
              keynote
            </span>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: DARK }}>Featured Speaker</h2>
            <WaveDivider />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: '40px 48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                maxWidth: 320,
                width: '100%',
              }}
            >
              <div
                style={{
                  width: 128,
                  height: 128,
                  borderRadius: '50%',
                  backgroundColor: ACCENT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 36,
                  fontWeight: 700,
                  marginBottom: 24,
                  flexShrink: 0,
                }}
              >
                DG
              </div>
              <h4 style={{ fontSize: 24, fontWeight: 700, color: DARK, marginBottom: 6 }}>Dr. Deepak Gupta</h4>
              <p style={{ fontSize: 16, fontWeight: 600, color: ACCENT, marginBottom: 4 }}>MBBS, MD, DNB, DCAP</p>
              <p style={{ fontSize: 14, fontStyle: 'italic', color: DARK, opacity: 0.65 }}>(IOP, Kings College London)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── YODA APPROACH ── */}
      <section style={{ position: 'relative', padding: '80px 64px', backgroundColor: BG }}>
        <DecorativeDots />
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: 44, fontWeight: 700, color: DARK }}>The Yoda Approach to Early Detection</h2>
            <WaveDivider />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24 }}>
            {approachSteps.map((step, i) => (
              <div
                key={i}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12 }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: '#CFE8CE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {step.svg}
                </div>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: DARK, lineHeight: 1.4 }}>{step.title}</h3>
                <p style={{ fontSize: 12, lineHeight: 1.6, color: DARK, opacity: 0.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER ── */}
      <section id="register" style={{ position: 'relative', padding: '80px 64px', backgroundColor: BG }}>
        <DecorativeDots />
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* Left */}
            <div style={{ paddingTop: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: ACCENT, display: 'block', marginBottom: 12 }}>
                Join The Summit
              </span>
              <h2 style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, color: DARK, marginBottom: 16 }}>
                Register<br />Here
              </h2>
              <p style={{ fontSize: 20, color: DARK, opacity: 0.75, marginBottom: 40 }}>
                Earlier Autism Detection Starts Here.
              </p>
              <Image
                src="/images/butterfly.png"
                alt="Butterfly illustration"
                width={320}
                height={320}
                style={{ width: '100%', maxWidth: 300, height: 'auto' }}
              />
            </div>
            {/* Right */}
            <div
              style={{
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: 32,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <RegistrationForm />
            </div>
          </div>
        </div>

        {/* Registration queries bar */}
        <div
          style={{
            marginTop: 64,
            maxWidth: 1152,
            margin: '64px auto 0',
            backgroundColor: QUERY_GREEN,
            borderRadius: 16,
            padding: '20px 32px',
          }}
        >
          <p style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 16 }}>For registration queries:</p>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: BG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" fill="none" stroke={DARK} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Khushbu Verma – BDM</p>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>72079 23173</p>
              </div>
            </div>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: BG,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" fill="none" stroke={DARK} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12 }}>Email Support</p>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>khushbu@yodadiagnostics.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VENUE & LOCATION ── */}
      <section id="venue" style={{ padding: '80px 64px', backgroundColor: BG }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            {/* Text */}
            <div style={{ padding: '40px 48px' }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>
                Venue &amp; Location
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: DARK, marginBottom: 24 }}>
                We look forward to welcoming you on{' '}
                <strong>29th March 2026</strong> at{' '}
                <strong>The Oberoi, New Delhi</strong>, beginning at{' '}
                <strong>9:30AM</strong>.
              </p>
              <a
                href="https://maps.google.com/?q=The+Oberoi+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: ACCENT,
                  textDecoration: 'none',
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
            {/* Map */}
            <div style={{ borderLeft: '1px solid #E5E7EB' }}>
              <Image
                src="/images/venue-map.png"
                alt="Venue map – The Oberoi, New Delhi"
                width={720}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: DARK,
          padding: '40px 64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <p style={{ color: '#fff', fontWeight: 500, fontSize: 16 }}>Follow us to know more</p>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="#" aria-label="X" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill={DARK} viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25H8.08l4.261 5.631 5.903-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill={DARK} viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill={DARK} viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="#" aria-label="YouTube" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill={DARK} viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill={DARK} viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>© 2026 Yoda Diagnostics. All rights reserved.</p>
      </footer>

    </main>
  );
}
