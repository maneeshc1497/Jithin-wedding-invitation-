import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import OpeningAnimation from '../components/OpeningAnimation'

export const Route = createFileRoute('/')({
  component: WeddingInvitation,
})

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

function ArchDecoration() {
  return (
    <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
      <path d="M30 180 L30 90 Q30 15 150 15 Q270 15 270 90 L270 180" fill="none" stroke="#C9A84C" strokeWidth="1.8"/>
      <path d="M45 180 L45 93 Q45 32 150 32 Q255 32 255 93 L255 180" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.5"/>
      <path d="M80 180 L80 110 Q80 68 150 68 Q220 68 220 110 L220 180" fill="none" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35"/>
      <circle cx="150" cy="15" r="5" fill="#C9A84C"/>
      <circle cx="30" cy="90" r="3.5" fill="#C9A84C" opacity="0.7"/>
      <circle cx="270" cy="90" r="3.5" fill="#C9A84C" opacity="0.7"/>
      <path d="M120 15 Q135 5 150 15 Q165 5 180 15" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>
      <line x1="10" y1="180" x2="290" y2="180" stroke="#C9A84C" strokeWidth="1.2" opacity="0.5"/>
      <line x1="0" y1="174" x2="300" y2="174" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3"/>
      {[60, 90, 120, 150, 180, 210, 240].map((x, i) => (
        <circle key={i} cx={x} cy="180" r="2" fill="#C9A84C" opacity="0.5"/>
      ))}
    </svg>
  )
}

function OrnamentDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.8rem auto', maxWidth: '400px' }}>
      <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}/>
      <svg viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg" width="80" height="30">
        <circle cx="40" cy="15" r="6" fill="none" stroke="#C9A84C" strokeWidth="1.2"/>
        <circle cx="40" cy="15" r="2.5" fill="#C9A84C"/>
        <path d="M20 15 Q30 5 40 15 Q50 25 60 15" fill="none" stroke="#C9A84C" strokeWidth="1"/>
        <path d="M20 15 Q30 25 40 15 Q50 5 60 15" fill="none" stroke="#C9A84C" strokeWidth="1"/>
        <circle cx="14" cy="15" r="2" fill="#C9A84C" opacity="0.7"/>
        <circle cx="66" cy="15" r="2" fill="#C9A84C" opacity="0.7"/>
      </svg>
      <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}/>
    </div>
  )
}

function PetalDecor() {
  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '72px', height: '72px', display: 'block', margin: '0 auto' }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse key={i} cx="60" cy="30" rx="7" ry="20" fill="none" stroke="#C9A84C" strokeWidth="0.9" opacity="0.55" transform={`rotate(${angle} 60 60)`}/>
      ))}
      <circle cx="60" cy="60" r="9" fill="none" stroke="#C9A84C" strokeWidth="1.2"/>
      <circle cx="60" cy="60" r="3" fill="#C9A84C"/>
    </svg>
  )
}

function MughalBorder({ flip = false }: { flip?: boolean }) {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 800 50" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }} preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={`fp-${flip}`} x="0" y="0" width="80" height="50" patternUnits="userSpaceOnUse">
            <path d="M40 5 C28 14, 8 14, 8 27 C8 40, 28 40, 40 48 C52 40, 72 40, 72 27 C72 14, 52 14, 40 5Z" fill="none" stroke="#C9A84C" strokeWidth="1"/>
            <circle cx="40" cy="27" r="4" fill="#C9A84C" opacity="0.6"/>
            <circle cx="8" cy="27" r="2" fill="#C9A84C" opacity="0.4"/>
            <circle cx="72" cy="27" r="2" fill="#C9A84C" opacity="0.4"/>
            <path d="M0 27 L8 27 M72 27 L80 27" stroke="#C9A84C" strokeWidth="0.7"/>
          </pattern>
        </defs>
        <rect width="800" height="50" fill={`url(#fp-${flip})`}/>
      </svg>
    </div>
  )
}

function addToGoogleCalendar() {
  const url = new URL('https://calendar.google.com/calendar/render')
  url.searchParams.set('action', 'TEMPLATE')
  url.searchParams.set('text', 'Wedding Reception of Jithin Abdulsalam & Safna Latheef')
  url.searchParams.set('dates', '20260816T053000Z/20260816T093000Z')
  url.searchParams.set('details', 'Cordially invited to the wedding reception of Jithin Abdulsalam & Safna Latheef.\n\nHosted by:\nMr. Abdulsalam & Mrs. Salma\nThayyullyill House, Akkikavu, Thrissur\n\nINSHA ALLAH')
  url.searchParams.set('location', 'Everest Convention Centre, Karikkad, Thrissur, Kerala')
  window.open(url.toString(), '_blank')
}

function downloadICS() {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Jithin & Safna Wedding//EN',
    'BEGIN:VEVENT',
    'DTSTART:20260816T053000Z',
    'DTEND:20260816T093000Z',
    'SUMMARY:Wedding Reception - Jithin & Safna',
    'DESCRIPTION:Cordially invited to the wedding reception of Jithin Abdulsalam & Safna Latheef. Hosted by Mr. Abdulsalam & Mrs. Salma. INSHA ALLAH',
    'LOCATION:Everest Convention Centre\\, Karikkad\\, Thrissur\\, Kerala',
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:Wedding Reception tomorrow!',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'jithin-safna-wedding.ics'
  link.click()
}

export default function WeddingInvitation() {
  const [showIntro, setShowIntro] = useState(true);
  const weddingDate = new Date('2026-08-16T11:00:00+05:30')
  const countdown = useCountdown(weddingDate)
  // Form states
  const [attending, setAttending] = useState<'' | 'Yes' | 'No'>('')
  const [name, setName] = useState('')
  const [count, setCount] = useState('1')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('vis')
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.rev').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const handleRSVPSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Paste your Google Web App URL link here:
    const GOOGLE_SCRIPT_WEBHOOK = 'https://script.google.com/macros/s/AKfycbyNt1R5R8dLBeDEGln_INBh5Di_Y4C3VeRgDKBnsmXEi2ZQvKCLFFBkAXHO_M18-QQg/exec'

    try {
      await fetch(GOOGLE_SCRIPT_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: attending === 'Yes' ? name : 'Declined Invitation',
          attending: attending,
          count: attending === 'Yes' ? parseInt(count) : 0,
        }),
      })
      setStatus('success')
    } catch (err) {
      console.error('RSVP submission error:', err)
      setStatus('idle')
      alert('Submission failed. Please check your internet connection and try again.')
    }
  }
  if (showIntro) {
  return (
    <OpeningAnimation
      onFinish={() => setShowIntro(false)}
    />
  );
}
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Amiri:ital,wght@0,400;0,700;1,400&family=Great+Vibes&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --burg: #4A0E1A;
          --burg-dk: #280810;
          --gold: #C9A84C;
          --gold-lt: #E4C87A;
          --gold-pl: #F5E6B5;
          --ivory: #FAF3E8;
          --cream: #FFF9F0;
          --txt: #1C0A0F;
          --txt-m: #3D1A22;
        }

        html { scroll-behavior: smooth; }
        body { background: var(--ivory); color: var(--txt); font-family: 'Cormorant Garamond', Georgia, serif; overflow-x: hidden; }

        /* ── HERO ── */
        .hero {
          position: relative; min-height: 100vh;
          background: linear-gradient(160deg, var(--burg-dk) 0%, var(--burg) 45%, #7B1527 75%, #300B12 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          overflow: hidden; padding: 3rem 1.5rem 4rem;
        }
        .hero-geo {
          position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3Cpolygon points='50,18 82,34 82,66 50,82 18,66 18,34' fill='none' stroke='%23C9A84C' stroke-width='0.4'/%3E%3Cline x1='50' y1='5' x2='50' y2='95' stroke='%23C9A84C' stroke-width='0.25'/%3E%3Cline x1='5' y1='27.5' x2='95' y2='72.5' stroke='%23C9A84C' stroke-width='0.25'/%3E%3Cline x1='95' y1='27.5' x2='5' y2='72.5' stroke='%23C9A84C' stroke-width='0.25'/%3E%3C/svg%3E");
          background-size: 100px 100px; opacity: 0.15;
        }
        .hero::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 25% 25%, rgba(201,168,76,0.1) 0%, transparent 55%),
                      radial-gradient(ellipse at 75% 75%, rgba(201,168,76,0.07) 0%, transparent 55%);
        }

        .bismillah-ar {
          font-family: 'Amiri', serif; font-size: clamp(2rem, 5.5vw, 3.8rem);
          color: var(--gold-lt); text-align: center; letter-spacing: 0.06em;
          text-shadow: 0 2px 24px rgba(201,168,76,0.45);
          animation: fD 1s ease both;
          position: relative; z-index: 1;
        }
        .bismillah-en {
          font-family: 'Cormorant Garamond', serif; font-style: italic;
          font-size: clamp(0.82rem, 1.9vw, 1.05rem); color: var(--gold-pl);
          text-align: center; opacity: 0.82; margin: 0.35rem auto 1.8rem;
          animation: fD 1s ease 0.2s both; position: relative; z-index: 1;
        }

        .arch-wrap {
          width: min(320px, 88vw); margin: 0 auto 0;
          animation: fU 1.2s ease 0.3s both; position: relative; z-index: 1;
        }

        .names-box {
          text-align: center; margin-top: -72px; padding: 1rem 2rem 2.5rem;
          position: relative; z-index: 2;
        }
        .names-label {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(0.72rem, 1.6vw, 0.88rem);
          letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-pl); opacity: 0.78;
          margin-bottom: 0.5rem;
        }
        .groom-n, .bride-n {
          font-family: 'Great Vibes', cursive;
          font-size: clamp(2.8rem, 8vw, 5.2rem);
          color: var(--gold-lt); line-height: 1.1;
          text-shadow: 0 0 50px rgba(201,168,76,0.5), 0 2px 8px rgba(0,0,0,0.35);
        }
        .with-w {
          font-family: 'Cormorant Garamond', serif; font-style: italic;
          font-size: clamp(1rem, 2.5vw, 1.4rem); color: var(--gold);
          letter-spacing: 0.22em; opacity: 0.88; display: block; margin: 0.15rem 0;
        }

        .invite-prose {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(0.9rem, 2vw, 1.15rem);
          color: var(--ivory); text-align: center; max-width: 520px; line-height: 1.9;
          opacity: 0.88; margin: 1.2rem auto 0;
          animation: fU 1s ease 0.65s both; position: relative; z-index: 1;
        }

        .date-badge {
          background: rgba(201,168,76,0.14); border: 1.5px solid var(--gold);
          padding: 1rem 2.8rem; text-align: center; backdrop-filter: blur(6px);
          margin-top: 2.2rem; animation: fU 1s ease 0.85s both; position: relative; z-index: 1;
        }
        .date-day { font-family: 'Cinzel Decorative', serif; font-size: clamp(0.62rem, 1.4vw, 0.8rem); color: var(--gold); letter-spacing: 0.32em; text-transform: uppercase; }
        .date-num { font-family: 'Cinzel Decorative', serif; font-size: clamp(2.8rem, 8vw, 4.5rem); color: var(--gold-lt); line-height: 1; }
        .date-my { font-family: 'Cinzel Decorative', serif; font-size: clamp(0.65rem, 1.5vw, 0.88rem); color: var(--gold); letter-spacing: 0.22em; }
        .date-hj { font-family: 'Amiri', serif; font-size: 0.82rem; color: var(--gold-pl); opacity: 0.68; margin-top: 0.25rem; }

        .scroll-cue {
          margin-top: 2.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.35rem;
          opacity: 0.55; animation: bounce 2.2s ease-in-out infinite; position: relative; z-index: 1;
        }
        .scroll-cue span { font-size: 0.62rem; letter-spacing: 0.25em; color: var(--gold); text-transform: uppercase; }
        .scroll-cue svg { color: var(--gold); }

        /* ── SECTIONS ── */
        .sec { padding: 5rem 1.5rem; position: relative; }
        .sec-inner { max-width: 880px; margin: 0 auto; }
        .sec-title {
          font-family: 'Cinzel Decorative', serif; font-size: clamp(1.1rem, 2.8vw, 1.7rem);
          color: var(--burg); text-align: center; letter-spacing: 0.1em; margin-bottom: 0.4rem;
        }
        .sec-sub {
          font-family: 'Cormorant Garamond', serif; font-style: italic;
          font-size: clamp(0.88rem, 1.9vw, 1.1rem); color: var(--txt-m);
          text-align: center; opacity: 0.72; margin-bottom: 2.2rem;
        }

        /* ── COUNTDOWN ── */
        .cd-sec {
          background: linear-gradient(150deg, var(--burg-dk) 0%, var(--burg) 55%, #7B1527 100%);
          position: relative; overflow: hidden;
        }
        .cd-sec::before {
          content: ''; position: absolute; inset: 0; opacity: 0.12;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,3 57,18 57,42 30,57 3,42 3,18' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3C/svg%3E");
          background-size: 60px 60px;
        }
        .cd-sec .sec-title { color: var(--gold-lt); }
        .cd-sec .sec-sub { color: var(--gold-pl); opacity: 0.68; }
        .cd-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
          max-width: 580px; margin: 0 auto;
        }
        .cd-card {
          background: rgba(201,168,76,0.1); border: 1.5px solid rgba(201,168,76,0.38);
          padding: 1.5rem 0.5rem; text-align: center; backdrop-filter: blur(4px);
          position: relative; overflow: hidden;
        }
        .cd-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .cd-num { font-family: 'Cinzel Decorative', serif; font-size: clamp(2rem, 6vw, 3.5rem); color: var(--gold-lt); line-height: 1; display: block; }
        .cd-lbl { font-family: 'Cormorant Garamond', serif; font-size: clamp(0.62rem, 1.4vw, 0.8rem); color: var(--gold-pl); letter-spacing: 0.22em; text-transform: uppercase; margin-top: 0.3rem; opacity: 0.78; }

        /* ── DETAILS ── */
        .dt-sec { background: var(--cream); }
        .dt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.8rem; }
        .dt-card {
          background: white; border: 1px solid rgba(201,168,76,0.28); border-top: 3px solid var(--gold);
          padding: 2rem 1.5rem; transition: transform 0.3s, box-shadow 0.3s;
        }
        .dt-card:hover { transform: translateY(-4px); box-shadow: 0 14px 44px rgba(74,14,26,0.12); }
        .dt-ico {
          width: 46px; height: 46px; background: linear-gradient(135deg, var(--burg), #7B1527);
          border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;
        }
        .dt-ico svg { color: var(--gold-lt); }
        .dt-lbl { font-family: 'Cinzel Decorative', serif; font-size: 0.65rem; letter-spacing: 0.22em; color: var(--gold); text-transform: uppercase; margin-bottom: 0.35rem; }
        .dt-val { font-family: 'Cormorant Garamond', serif; font-size: clamp(0.98rem, 2.2vw, 1.18rem); color: var(--txt); font-weight: 600; line-height: 1.5; }
        .dt-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.92rem; color: var(--txt-m); opacity: 0.68; margin-top: 0.25rem; }

        /* ── FAMILIES ── */
        .parents-grid{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:35px;
        margin-top:45px;
        }

        .parent-card{
        background:white;
        border:1px solid rgba(201,168,76,.28);
        padding:40px 30px;
        text-align:center;
        transition:.3s;
        }

        .parent-card:hover{
        transform:translateY(-4px);
        box-shadow:0 10px 30px rgba(74,14,26,.08);
        }

        @media(max-width:640px){

        .parents-grid{
        grid-template-columns:1fr;
        }

        }
        .fam-sec { background: var(--ivory); }
        .fam-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 1.5rem; align-items: center; }
        .fam-card {
          background: white; border: 1px solid rgba(201,168,76,0.22); padding: 2rem 1.5rem; text-align: center; position: relative;
        }
        .fam-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .fam-role { font-family: 'Cinzel Decorative', serif; font-size: 0.6rem; letter-spacing: 0.22em; color: var(--gold); text-transform: uppercase; margin-bottom: 0.7rem; }
        .fam-name { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.05rem, 2.4vw, 1.35rem); color: var(--burg); font-weight: 600; margin-bottom: 0.45rem; }
        .fam-addr { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 0.95rem; color: var(--txt-m); line-height: 1.65; opacity: 0.78; }
        .fam-phone { margin-top: 0.7rem; font-family: 'Cormorant Garamond', serif; font-size: 0.9rem; color: var(--burg); opacity: 0.85; }
        .fam-div { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
        .and-t { font-family: 'Great Vibes', cursive; font-size: 3rem; color: var(--gold); }

        /* ── CALENDAR ── */
        .cal-sec { background: var(--cream); }
        .cal-btns { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
        .cal-btn {
          display: flex; align-items: center; gap: 0.6rem; padding: 0.9rem 1.8rem;
          font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 600;
          letter-spacing: 0.05em; cursor: pointer; border: none; transition: all 0.25s;
        }
        .cal-p { background: linear-gradient(135deg, var(--burg), #7B1527); color: var(--gold-lt); box-shadow: 0 4px 22px rgba(74,14,26,0.3); }
        .cal-p:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(74,14,26,0.4); }
        .cal-s { background: transparent; color: var(--burg); border: 1.5px solid var(--gold); }
        .cal-s:hover { background: var(--gold); color: var(--burg-dk); transform: translateY(-2px); }

        /* ── MAP ── */
        .map-sec { background: var(--ivory); }
        .map-frame { border: 2px solid rgba(201,168,76,0.38); overflow: hidden; box-shadow: 0 8px 44px rgba(74,14,26,0.1); margin-bottom: 1.5rem; }
        .map-frame iframe { width: 100%; height: 420px; display: block; border: none; }
        .dir-btn {
          display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.9rem 2rem;
          background: linear-gradient(135deg, var(--burg), #7B1527); color: var(--gold-lt);
          font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-weight: 600;
          text-decoration: none; transition: all 0.25s; box-shadow: 0 4px 22px rgba(74,14,26,0.3);
        }
        .dir-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(74,14,26,0.4); }

        /* ── FOOTER ── */
        .footer-sec {
          background: var(--burg-dk); padding: 3.5rem 1.5rem; text-align: center; position: relative; overflow: hidden;
        }
        .footer-sec::before {
          content: ''; position: absolute; inset: 0; opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,3 57,18 57,42 30,57 3,42 3,18' fill='none' stroke='%23C9A84C' stroke-width='0.8'/%3E%3C/svg%3E");
          background-size: 60px 60px;
        }
        .ft-insha { font-family: 'Amiri', serif; font-size: 1.3rem; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 0.3rem; position: relative; z-index: 1; }
        .ft-names { font-family: 'Great Vibes', cursive; font-size: 2.4rem; color: var(--gold-lt); margin: 0.8rem 0; position: relative; z-index: 1; }
        .ft-txt { font-family: 'Cormorant Garamond', serif; font-style: italic; color: var(--gold-pl); opacity: 0.7; font-size: 0.95rem; position: relative; z-index: 1; }
        .ft-small { font-size: 0.72rem; color: var(--gold-pl); opacity: 0.38; margin-top: 1rem; position: relative; z-index: 1; }

        /* ── ANIMATIONS ── */
        @keyframes fD { from { opacity: 0; transform: translateY(-18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fU { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(9px); } }

        .rev { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .rev.vis { opacity: 1; transform: translateY(0); }
        .d1 { transition-delay: 0.15s; }
        .d2 { transition-delay: 0.3s; }
        .d3 { transition-delay: 0.45s; }

        @media (max-width: 640px) {
          .cd-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .fam-grid { grid-template-columns: 1fr; }
          .fam-div { flex-direction: row; }
          .and-t { font-size: 2rem; }
          .event-grid{
              grid-template-columns:1fr;
          }

          .event-card{
              padding:22px 18px;
          }

          .event-value{
              font-size:1.1rem;
          }
        }
          /* ── NEW DYNAMIC RSVP SECTIONS ── */
        .rsvp-sec { background: var(--ivory); }
        .rsvp-card {
          background: white; border: 1px solid rgba(201,168,76,0.28); border-top: 3px solid var(--gold);
          max-width: 500px; margin: 0 auto; padding: 2.5rem 2rem; box-shadow: 0 8px 32px rgba(74,14,26,0.05);
        }
        .rsvp-choice-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
        .rsvp-choice-btn {
          padding: 1.2rem; border: 1px solid rgba(201,168,76,0.4); background: var(--cream);
          font-family: 'Cinzel Decorative', serif; font-size: 0.9rem; letter-spacing: 0.1em;
          color: var(--burg); cursor: pointer; transition: all 0.25s ease; text-align: center;
        }
        .rsvp-choice-btn.active {
          background: linear-gradient(135deg, var(--burg), #7B1527); color: var(--gold-lt);
          border-color: var(--burg); box-shadow: 0 4px 12px rgba(74,14,26,0.2);
        }
        .rsvp-label {
          display: block; font-family: 'Cinzel Decorative', serif; font-size: 0.72rem; 
          letter-spacing: 0.15em; color: var(--gold); text-transform: uppercase; margin-bottom: 0.5rem;
        }
        .rsvp-input {
          width: 100%; padding: 0.75rem; border: 1px solid rgba(201,168,76,0.4); 
          background: var(--cream); font-family: 'Cormorant Garamond', serif; font-size: 1.1rem;
          color: var(--txt); margin-bottom: 1.25rem; transition: border-color 0.25s;
        }
        .rsvp-input:focus { outline: none; border-color: var(--burg); }
        .rsvp-btn {
          width: 100%; padding: 0.85rem; background: linear-gradient(135deg, var(--burg), #7B1527); 
          color: var(--gold-lt); font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; 
          font-weight: 600; cursor: pointer; border: none; transition: all 0.25s;
        }
        .rsvp-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(74,14,26,0.25); }
        .rsvp-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .rsvp-msg { text-align: center; font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; line-height: 1.7; }
        .rsvp-msg-ar { font-family: 'Amiri', serif; font-size: 1.6rem; color: var(--gold); margin-top: 0.75rem; letter-spacing: 0px; }
        .animate-fade { animation: fU 0.4s ease both; }
        
        
        
        .event-grid{
            display:grid;
            grid-template-columns:repeat(3,1fr);
            gap:20px;
            max-width:900px;
            margin:45px auto 30px;
        }

        .event-card{
            background:rgba(255,255,255,.08);
            border:1.5px solid rgba(201,168,76,.45);
            backdrop-filter:blur(8px);
            padding:28px 22px;
            text-align:center;
            transition:.35s;
        }

        .event-card:hover{
            transform:translateY(-5px);
            box-shadow:0 12px 35px rgba(0,0,0,.25);
        }

        .event-icon{
            width:56px;
            height:56px;
            margin:0 auto 18px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            background:rgba(201,168,76,.12);
            color:var(--gold-lt);
            border:1px solid rgba(201,168,76,.35);
        }

        .event-label{
            font-family:'Cinzel Decorative';
            font-size:.68rem;
            letter-spacing:.35em;
            color:var(--gold);
            margin-bottom:10px;
        }

        .event-value{
            font-family:'Cormorant Garamond';
            font-size:1.25rem;
            color:var(--gold-pl);
            font-weight:600;
            line-height:1.4;
        }

        .event-sub{
            margin-top:8px;
            font-family:'Cormorant Garamond';
            font-style:italic;
            font-size:.9rem;
            color:rgba(255,255,255,.75);
            line-height:1.5;
        }
        .event-action{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:6px;

            margin-top:14px;
            padding:7px 14px;

            border:1px solid rgba(201,168,76,.45);
            border-radius:50px;

            background:rgba(201,168,76,.08);

            color:var(--gold-lt);

            font-family:'Cormorant Garamond';
            font-size:.85rem;
            font-weight:600;

            text-decoration:none;
            cursor:pointer;
            transition:.3s;

            width:auto;
        }

        .event-action:hover{
            background:rgba(201,168,76,.18);
            border-color:var(--gold);
            transform:translateY(-2px);
        }

        .mini-countdown{
        display:flex;
        justify-content:center;
        gap:12px;
        margin-top:35px;
        flex-wrap:wrap;
        }

        .mini-card{
        width:70px;
        padding:12px 6px;
        background:rgba(201,168,76,.1);
        border:1px solid rgba(201,168,76,.35);
        text-align:center;
        }

        .mini-num{
        font-size:1.4rem;
        font-family:'Cinzel Decorative';
        color:var(--gold-lt);
        }

        .mini-label{
        font-size:.65rem;
        letter-spacing:.15em;
        color:var(--gold-pl);
        text-transform:uppercase;
        }
        /* Mobile Event Cards Layout */
        @media (max-width: 640px) {

          .event-grid {
            grid-template-columns: 1fr;
            width: 100%;
            gap: 18px;
            margin-top: 35px;
          }

          .event-card {
            width: 100%;
            padding: 24px 18px;
          }

          .event-value {
            font-size: 1.15rem;
            line-height: 1.5;
          }

          .event-sub {
            font-size: 0.9rem;
          }

          .event-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
          }

          .event-action {
            margin-top: 15px;
            padding: 8px 16px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-geo" aria-hidden="true"/>
        <div className="bismillah-ar">ٱلسَّلَامُ عَلَيْكُمْ</div>
        <p className="bismillah-en">"In the name of Allah, the most gracious and the most merciful"</p>

        <div className="arch-wrap">
          <ArchDecoration />
          <div className="names-box">
            <div className="names-label">Wedding Reception</div>
            <div className="groom-n">Jithin Abdulsalam</div>
            <span className="with-w">— with —</span>
            <div className="bride-n">Safna Latheef</div>
          </div>
        </div>

        <p className="invite-prose">
          Cordially invite your esteemed presence and blessing with family on the auspicious occasion of this joyous union.
        </p>

        {/* <div className="date-badge">
          <div className="date-day">Sunday</div>
          <div className="date-num">16</div>
          <div className="date-my">August · 2026</div>
          <div className="date-hj">3 Rabi&#x2bc; al-Awwal 1448 AH</div>
        </div> removed date part*/}
        <div className="event-grid">

        <div className="event-card">
          <div className="event-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
          </div>

          <div className="event-label">DATE</div>

          <div className="event-value">
            Sunday, 16 August 2026
          </div>

          <div className="event-sub">
            3 Rabi' al-Awwal 1448 AH
          </div>

          <button
            className="event-action"
            onClick={addToGoogleCalendar}
          >
            + Add to Calendar
          </button>
        </div>

        <div className="event-card">
          <div className="event-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>

          <div className="event-label">TIME</div>

          <div className="event-value">
            11:00 AM – 3:00 PM
          </div>

          <div className="event-sub">
            Indian Standard Time
          </div>
        </div>

        <div className="event-card">
          <div className="event-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>

          <div className="event-label">VENUE</div>

          <div className="event-value">
            Everest Convention Centre
          </div>

          <div className="event-sub">
            Karikkad, Thrissur, Kerala
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Everest+Convention+Centre,+Karikkad,+Thrissur"
            target="_blank"
            rel="noreferrer"
            className="event-action"
          >
          <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2">

          <polygon points="3 11 22 2 13 21 11 13 3 11"/>

          </svg>

          &nbsp;
       Get Directions
          </a>
        </div>

      </div>

        <div className="mini-countdown">

        {[
        {num:countdown.days,label:"Days"},
        {num:countdown.hours,label:"Hours"},
        {num:countdown.minutes,label:"Minutes"},
        {num:countdown.seconds,label:"Seconds"}
        ].map(item=>(
        <div className="mini-card" key={item.label}>
        <div className="mini-num">{String(item.num).padStart(2,'0')}</div>
        <div className="mini-label">{item.label}</div>
        </div>
        ))}

        </div>

        <div className="scroll-cue">
          <span>Scroll</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      <MughalBorder />

      
      <section className="sec fam-sec">

      <div className="sec-inner">

      <PetalDecor/>

      <OrnamentDivider/>

      <h2 className="sec-title">
      With the Blessings of
      </h2>

      <p className="sec-sub">
      Our beloved parents warmly invite you to celebrate this joyful occasion.
      </p>

      <div className="parents-grid">

      <div className="parent-card">

      <div className="fam-role">
      GROOM'S PARENTS
      </div>

      <div className="fam-name">
      Mr. Abdulsalam
      </div>

      <div className="fam-name">
      Mrs. Salma
      </div>

      <div className="fam-addr">
      Thayyullyill House<br/>
      Akkikavu, Thrissur
      </div>

      </div>

      <div className="parent-card">

      <div className="fam-role">
      BRIDE'S PARENTS
      </div>

      <div className="fam-name">
      Mr. Latheef K.
      </div>

      <div className="fam-name">
      Mrs. Arifa
      </div>

      <div className="fam-addr">
      Kottekatil House<br/>
      Nemmara, Palakkad
      </div>

      </div>

      </div>

     

      <OrnamentDivider/>

      </div>

      </section>
      
      
      {/* NEW RSVP LINK SECTION PLACED DIRECTLY AFTER CALENDAR */}
      <section className="sec rsvp-sec">
        <div className="sec-inner">
          <h2 className="sec-title">Kindly Respond</h2>
          <p className="sec-sub rev d1">Please let us know your availability for the wedding reception</p>

          <div className="rsvp-card">
            {status === 'success' ? (
              attending === 'Yes' ? (
                <div className="rsvp-msg animate-fade">
                  <p className="font-bold text-xl" style={{ color: 'var(--burg)' }}>Jazakallah Khair!</p>
                  <p className="mt-2">Thank you for confirming your presence. We look forward to welcoming you and your family to the celebration. Insha Allah!</p>
                </div>
              ) : (
                <div className="rsvp-msg animate-fade">
                  <p className="font-bold text-xl" style={{ color: 'var(--burg)' }}>Thank you for your response.</p>
                  <p className="mt-2">We are sorry you won't be able to make it. We value your wishes and highly request you to kindly remember us in your prayers during this beautiful milestone.</p>
                  <div className="rsvp-msg-ar">جَزَاكُمُ اللَّهُ خَيْرًا</div>
                </div>
              )
            ) : (
              <form onSubmit={handleRSVPSubmit}>
                <label className="rsvp-label" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  Are you attending the reception?
                </label>
                
                <div className="rsvp-choice-grid">
                  <button
                    type="button"
                    className={`rsvp-choice-btn ${attending === 'Yes' ? 'active' : ''}`}
                    onClick={() => setAttending('Yes')}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`rsvp-choice-btn ${attending === 'No' ? 'active' : ''}`}
                    onClick={() => setAttending('No')}
                  >
                    No
                  </button>
                </div>

                {/* Conditional Fields if user selects Yes */}
                {attending === 'Yes' && (
                  <div className="animate-fade">
                    <label className="rsvp-label">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="rsvp-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label className="rsvp-label">Number of Members Attending</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      required
                      className="rsvp-input"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    />
                  </div>
                )}

                {/* If No is selected, directly prompt them with the prayer messaging option to hit submit */}
                {attending === 'No' && (
                  <div className="rsvp-msg animate-fade" style={{ marginBottom: '1.5rem', padding: '0.5rem' }}>
                    <p style={{ fontStyle: 'italic', opacity: 0.85 }}>
                      "Kindly remember us in your precious prayers."
                    </p>
                  </div>
                )}

                {attending && (
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="rsvp-btn animate-fade"
                  >
                    {status === 'loading' ? 'Submitting response...' : 'Submit RSVP Response'}
                  </button>
                )}
              </form>
            )}
          </div>
          
          <OrnamentDivider />
        </div>
      </section>

      
      

      {/* FOOTER */}
      <footer className="footer-sec">
        <MughalBorder flip />
        <div style={{ paddingTop: '2rem' }}>
          <PetalDecor />
          <OrnamentDivider />
          <div className="ft-insha">INSHA ALLAH</div>
          <div className="ft-names">Jithin &amp; Safna</div>
          <div className="ft-txt">With best compliments from Dear &amp; Near</div>
          <OrnamentDivider />
          <div className="ft-small">Sunday · 16 August 2026 · Everest Convention Centre, Karikkad, Thrissur</div>
        </div>
      </footer>
    </>
  )
}
