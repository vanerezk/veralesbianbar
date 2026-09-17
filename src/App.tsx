import { useEffect, useState } from 'react'
import { Countdown } from './components/Countdown'
import { Arrow, VeraSpark } from './components/Decorative'
import { EventsSection } from './components/EventsSection'
import { FinalCta } from './components/FinalCta'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InstagramSection } from './components/InstagramSection'
import { LocationSection } from './components/LocationSection'
import { MenuSection } from './components/MenuSection'
import { DrinkModal, EventModal } from './components/Modals'
import { config, events, experienceCards, gildaOfMonth, gildas, vermuts } from './data'

function App() {
  const [activeTab, setActiveTab] = useState('Gildas')
  const [activeSection, setActiveSection] = useState('eventos')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState<(typeof vermuts)[number] | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null)
  const [showUpcoming, setShowUpcoming] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const whatsappNumber = config.whatsappPhone.replace(/\D/g, '')
  const whatsappUrl = whatsappNumber.length >= 9 ? `https://wa.me/${whatsappNumber}` : null
  const openingTarget = new Date(config.openingDate).getTime()
  const [countdown, setCountdown] = useState(() => Math.max(0, openingTarget - Date.now()))

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(Math.max(0, openingTarget - Date.now())), 1000)
    return () => window.clearInterval(timer)
  }, [openingTarget])

  const countdownParts = {
    days: Math.floor(countdown / 86400000),
    hours: Math.floor((countdown / 3600000) % 24),
    minutes: Math.floor((countdown / 60000) % 60),
    seconds: Math.floor((countdown / 1000) % 60),
  }

  useEffect(() => {
    if (!selectedDrink && !selectedEvent) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedDrink(null)
        setSelectedEvent(null)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [selectedDrink, selectedEvent])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const sections = ['eventos', 'vermut', 'carta', 'ubicacion']
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <Header activeSection={activeSection} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} onCloseMenu={closeMenu} />

      <main id="top">
        <Hero />

        <div className="marquee" aria-hidden="true"><span>VERA · VERA · VERA · VERA · VERA · VERA ·</span></div>

        <Countdown parts={countdownParts} />

        <EventsSection onSelectEvent={setSelectedEvent} showUpcoming={showUpcoming} onToggleUpcoming={() => setShowUpcoming(!showUpcoming)} />

        <section className="taste-preview section-cream" aria-labelledby="taste-preview-title">
          <div className="section-label">02 / PARA EMPEZAR</div>
          <div className="taste-heading"><div><p className="eyebrow">QUÉ ENCUENTRAS EN VERA</p><h2 id="taste-preview-title">UNA DE<br /><i>CADA.</i></h2></div><p>Vermut, gildas y tardeo para que la tarde empiece como te apetece.</p></div>
          <div className="taste-grid">{experienceCards.map(card => <article className={`taste-card taste-card-${card.id}`} key={card.id}><div className="taste-visual">{card.image ? <img src={card.image} alt={`${card.title} de VERA`} /> : <span className="taste-placeholder"><VeraSpark />FOTO PRÓXIMAMENTE</span>}<small>FOTO PRÓXIMAMENTE</small></div><span className="card-type">{card.label}</span><h3>{card.title}</h3><p>{card.description}</p><a className="text-link" href={card.id === 'vermut' ? '#vermut' : card.id === 'gildas' ? '#gildas' : '#carta'}>VER MÁS <Arrow /></a></article>)}</div>
        </section>

        <section className="intro section-cream">
          <div className="section-label">03 / EL PLAN</div>
          <div className="intro-content"><div className="intro-statement"><p className="eyebrow">NO HACE FALTA TENER PLAN</p><h2>HOY TOCA<br /><em>VERA.</em></h2></div><div className="intro-aside"><div className="intro-banner">UN BAR DE LESBIANAS<br />PARA QUEDAR, TOMAR Y DISFRUTAR.</div><p>Para quedar. Tomar un vermut. Pedir una gilda. Conocer gente. Buen rollo. Ver qué pasa. Volver la semana siguiente.</p><a className="text-link" href="#carta">VER QUÉ HAY <Arrow /></a><span className="intro-sticker">HUELIN<br />MÁLAGA<br />★</span></div></div>
        </section>

        <section className="vera-afternoon section-blue">
          <div className="section-label light">UNA TARDE EN VERA</div>
          <div className="afternoon-layout"><h2>LLEGAS.<br /><i>TE QUEDAS.</i></h2><div className="afternoon-copy"><p>Un vermut. Una gilda. Otra ronda. Buen rollo y ganas de ver qué pasa.</p><p className="afternoon-steps">PIDE UNA.<br />QUÉDATE POR OTRA.<br />VUELVE LA SEMANA SIGUIENTE.</p><a className="text-link" href="#eventos">VER QUÉ PASA <Arrow /></a></div></div>
        </section>

        <section id="vermut" className="vermut section-blue">
          <div className="section-label light">04 / LA ESTRELLA</div>
          <div className="split-title"><h2>EL<br /><i>VERMUT</i></h2><div className="glass-graphic" aria-hidden="true"><div className="olive">●</div><div className="glass"></div></div></div>
          <p className="section-lead">El vermut también tiene ambiente.</p>
          <div className="vermut-menu">
            <div className="vermut-group">
              <div className="vermut-group-heading"><span className="card-type">01 / DE BARRA</span><p>Lo de siempre, pero mejor.</p></div>
              <div className="vermut-list">{vermuts.filter(item => item.kind === 'base').map(item => <button className="vermut-card" key={item.name} onClick={() => setSelectedDrink(item)} aria-label={`Ver foto de ${item.name}`}><div><h3>{item.name}</h3><p>{item.note}</p></div><strong className="vermut-price">{item.price}</strong><span className="drink-hint">{item.image ? 'VER FOTO ↗' : 'PRÓXIMAMENTE'}</span></button>)}</div>
            </div>
            <div className="vermut-group signature">
              <div className="vermut-group-heading"><span className="card-type">02 / VERA MIX</span><p>Vermut con nombre propio.</p></div>
              <div className="vermut-list">{vermuts.filter(item => item.kind === 'firma').map(item => <button className="vermut-card" key={item.name} onClick={() => setSelectedDrink(item)} aria-label={`Ver foto de ${item.name}`}><div><h3>{item.name}</h3><p>{item.note}</p></div><strong className="vermut-price">{item.price}</strong><span className="drink-hint">{item.image ? 'VER FOTO ↗' : 'PRÓXIMAMENTE'}</span></button>)}</div>
            </div>
          </div>
        </section>

        <section id="gildas" className="gildas-hero section-cream">
          <div className="section-label">05 / PARA PINCHAR</div>
          <div className="gildas-intro"><h2>9 FORMAS<br /><i>DE PINCHAR.</i></h2><p>Gildas para abrir la tarde. La clásica, la hot y la VERA de la casa.</p></div>
          <div className="gilda-cards">{gildas.map((gilda, index) => <article key={gilda.name} className={`gilda-card gilda-${index % 3}`}>{gilda.image ? <img className="gilda-photo" src={gilda.image} alt={`Gilda ${gilda.name} de VERA`} onError={(event) => { event.currentTarget.hidden = true }} /> : <div className="gilda-photo-placeholder">FOTO PRÓXIMAMENTE</div>}<span>0{index + 1}</span><div className="gilda-skewer" aria-hidden="true"><i></i><i></i><i></i></div><h3>{gilda.name}</h3><p>{gilda.description}</p><strong className="gilda-price">{gilda.price}</strong></article>)}</div>
        </section>

        <MenuSection activeTab={activeTab} onSelectTab={setActiveTab} />

        <section className="gilda-month">
          <div className="month-art" aria-hidden="true"><VeraSpark /><div className="skewer"><i></i><i></i><i></i></div></div>
          <div className="month-copy"><div className="section-label">07 / CADA MES</div><p className="eyebrow">GILDA DEL MES · {gildaOfMonth.month}</p><h2>{gildaOfMonth.name}</h2><p>{gildaOfMonth.description}</p><p className="ingredients">{gildaOfMonth.ingredients.join(' · ')}</p><strong>{gildaOfMonth.price}</strong><br /><a className="text-link" href="#ubicacion">VEN A PROBARLA <Arrow /></a></div>
        </section>

        <InstagramSection />
        <LocationSection whatsappUrl={whatsappUrl} />
        <FinalCta />
      </main>

      <footer className="footer section-blue"><span>VERA<span className="dot">.</span></span><span>PLAZA MORENO VILLA 2 · HUELIN</span><a href="#top">VOLVER ARRIBA ↑</a></footer>
      <div className="mobile-fixed-actions"><nav className="mobile-fixed-nav" aria-label="Accesos rápidos"><a href="#eventos">EVENTOS</a><a href="#carta">CARTA</a><a href={config.mapsUrl} target="_blank" rel="noreferrer">CÓMO LLEGAR</a></nav><a className="mobile-cta" href="#ubicacion">VEN A VERA <Arrow /></a></div>
      {selectedDrink && <DrinkModal drink={selectedDrink} onClose={() => setSelectedDrink(null)} />}
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  )
}

export default App
