import { useEffect, useState } from 'react'
import { config, events, gildaOfMonth, gildas, menu, vermuts } from './data'

const Arrow = () => <span aria-hidden="true">↗</span>
const VeraSpark = () => <span className="vera-spark" aria-hidden="true" />

function App() {
  const [activeTab, setActiveTab] = useState('Gildas')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState<(typeof vermuts)[number] | null>(null)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null)
  const tabs = Object.keys(menu)
  const closeMenu = () => setMenuOpen(false)
  const openingTarget = new Date('2026-11-05T18:00:00+01:00').getTime()
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
  return (
    <div className="site">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="VERA, inicio">VERA<span className="dot">.</span></a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#eventos">Eventos</a><a href="#vermut">Vermuteo</a><a href="#carta">Carta</a><a href="#ubicacion">Dónde</a>
        </nav>
        <a className="nav-cta" href="#ubicacion">VEN A VERA <Arrow /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Abrir menú">{menuOpen ? 'CERRAR' : 'MENÚ'}</button>
      </header>
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Navegación móvil">
        <a href="#eventos" onClick={closeMenu}>EVENTOS <Arrow /></a>
        <a href="#vermut" onClick={closeMenu}>VERMUTEO <Arrow /></a>
        <a href="#carta" onClick={closeMenu}>CARTA <Arrow /></a>
        <a href="#ubicacion" onClick={closeMenu}>CÓMO LLEGAR <Arrow /></a>
      </nav>

      <main id="top">
        <section className="hero section-blue">
          <div className="hero-noise" />
          <div className="hero-topline"><span>BAR DE AMBIENTE LÉSBICO</span><span>MÁLAGA · HUELIN</span></div>
          <div className="hero-main">
            <p className="eyebrow">LESBIANAS · TARDEO</p>
            <h1>VE<br /><i>RA</i></h1>
          </div>
          <div className="hero-copy">Un bar de lesbianas<br />para ver qué pasa.</div>
          <div className="hero-actions"><a className="button button-cream" href="#ubicacion">VEN A VERA <Arrow /></a><a className="hero-text-link" href="#carta">VER LA CARTA <Arrow /></a></div>
          <VeraSpark />
          <div className="hero-stamp" aria-hidden="true">BAR<br />LÉSBICO<br />HUELIN</div>
          <div className="hero-manifesto"><span>UN BAR DE LESBIANAS</span><span>PARA QUEDAR · TOMAR · DISFRUTAR</span></div>
        </section>

        <div className="marquee" aria-hidden="true"><span>VERA · VERA · VERA · VERA · VERA · VERA ·</span></div>

        <section className="opening-countdown section-cream" aria-label="Cuenta atrás para la apertura tentativa">
          <div className="countdown-label">PRÓXIMA APERTURA · FECHA TENTATIVA</div>
          <div className="countdown-layout"><h2>5<br /><i>NOV.</i></h2><div className="countdown-clock" aria-live="polite"><div><strong>{countdownParts.days}</strong><span>DÍAS</span></div><div><strong>{String(countdownParts.hours).padStart(2, '0')}</strong><span>HORAS</span></div><div><strong>{String(countdownParts.minutes).padStart(2, '0')}</strong><span>MIN.</span></div><div><strong>{String(countdownParts.seconds).padStart(2, '0')}</strong><span>SEG.</span></div></div></div>
          <p className="countdown-note">La fecha todavía está por confirmar. Cuando lo sepamos, lo contamos.</p>
        </section>

        <section className="intro section-cream">
          <div className="section-label">01 / EL PLAN</div>
          <div className="intro-content"><div className="intro-statement"><p className="eyebrow">NO HACE FALTA TENER PLAN</p><h2>HOY TOCA<br /><em>VERA.</em></h2></div><div className="intro-aside"><div className="intro-banner">UN BAR DE LESBIANAS<br />PARA QUEDAR, TOMAR Y DISFRUTAR.</div><p>Para quedar. Tomar un vermut. Pedir una gilda. Conocer gente. Buen rollo. Ver qué pasa. Volver la semana siguiente.</p><a className="text-link" href="#carta">VER QUÉ HAY <Arrow /></a><span className="intro-sticker">HUELIN<br />MÁLAGA<br />★</span></div></div>
        </section>

        <section className="vera-afternoon section-blue">
          <div className="section-label light">UNA TARDE EN VERA</div>
          <div className="afternoon-layout"><h2>LLEGAS.<br /><i>TE QUEDAS.</i></h2><div className="afternoon-copy"><p>Un vermut. Una gilda. Otra ronda. Buen rollo y ganas de ver qué pasa.</p><p className="afternoon-steps">PIDE UNA.<br />QUÉDATE POR OTRA.<br />VUELVE LA SEMANA SIGUIENTE.</p><a className="text-link" href="#eventos">VER QUÉ PASA <Arrow /></a></div></div>
        </section>

        <section id="eventos" className="events section-cream">
          <div className="section-label">02 / QUÉ PASA</div><div className="heading-row"><h2>ESTA<br /><i>SEMANA.</i></h2><span className="scribble">SIEMPRE<br />ALGO</span></div>
          <article className="featured-event"><button className="event-placeholder" onClick={() => setSelectedEvent(events[0])} aria-label={`Ver cartel grande de ${events[0].title}`}>{events[0].image ? <img src={events[0].image} alt={`Cartel de ${events[0].title}`} /> : <><VeraSpark /><b>CARTEL<br />EN<br />PREPARACIÓN</b></>}<span className="poster-hint">VER CARTEL ↗</span></button><div><span className="card-type">{events[0].category}</span><h3>{events[0].title}</h3><p className="event-meta">{events[0].date} · {events[0].time}</p><p>{events[0].description}</p></div><a className="button button-blue" href="#ubicacion">{events[0].cta} <Arrow /></a></article>
          <div className="event-grid">{events.slice(1).map(event => <article className={`event-card ${event.image ? 'has-poster' : ''}`} key={event.title} role={event.image ? 'button' : undefined} tabIndex={event.image ? 0 : undefined} onClick={event.image ? () => setSelectedEvent(event) : undefined} onKeyDown={event.image ? (keyboardEvent) => { if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') { keyboardEvent.preventDefault(); setSelectedEvent(event) } } : undefined}><span className="card-type">{event.category}</span><h3>{event.title}</h3><p>{event.date} · {event.time}</p><p>{event.description}</p><a className="text-link" href="#ubicacion" onClick={(clickEvent) => clickEvent.stopPropagation()}>{event.cta} <Arrow /></a></article>)}</div>
        </section>

        <section id="vermut" className="vermut section-blue">
          <div className="section-label light">03 / LA ESTRELLA</div>
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
          <div className="section-label">04 / PARA PINCHAR</div>
          <div className="gildas-intro"><h2>9 FORMAS<br /><i>DE PINCHAR.</i></h2><p>Gildas para abrir la tarde. La clásica, la hot y la VERA de la casa.</p></div>
          <div className="gilda-cards">{gildas.map((gilda, index) => <article key={gilda.name} className={`gilda-card gilda-${index % 3}`}>{gilda.image && <img className="gilda-photo" src={gilda.image} alt={`Gilda ${gilda.name} de VERA`} onError={(event) => { event.currentTarget.hidden = true }} />}<span>0{index + 1}</span><div className="gilda-skewer" aria-hidden="true"><i></i><i></i><i></i></div><h3>{gilda.name}</h3><p>{gilda.description}</p></article>)}</div>
        </section>

        <section id="carta" className="menu section-cream">
          <div className="section-label">05 / CARTA</div>
          <div className="heading-row"><h2>PARA<br /><i>PICAR.</i></h2><span className="scribble">SIN PRISA<br />Y CON OTRA</span></div>
          <div className="tabs" role="tablist" aria-label="Categorías de la carta">{tabs.map(tab => <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)} role="tab" aria-selected={activeTab === tab}>{tab}</button>)}</div>
          <div className="menu-list">{menu[activeTab].map(item => <article className="menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.description}</p></div><span>{item.price}</span></article>)}</div>
          <p className="provisional">* LAS CONSUMICIONES SE ABONAN AL REALIZAR EL PEDIDO · INCLUYEN PICOTEO DE LA CASA</p>
        </section>

        <section className="gilda-month">
          <div className="month-art" aria-hidden="true"><VeraSpark /><div className="skewer"><i></i><i></i><i></i></div></div>
          <div className="month-copy"><div className="section-label">06 / CADA MES</div><p className="eyebrow">GILDA DEL MES · {gildaOfMonth.month}</p><h2>{gildaOfMonth.name}</h2><p>{gildaOfMonth.description}</p><p className="ingredients">{gildaOfMonth.ingredients.join(' · ')}</p><strong>{gildaOfMonth.price}</strong><br /><a className="text-link" href="#ubicacion">VEN A PROBARLA <Arrow /></a></div>
        </section>

        <section className="instagram section-blue"><div className="section-label light">07 / NOS VEMOS</div><h2>@VERA</h2><p>Estamos preparando todo.<br />Pronto habrá fotos, tardes y motivos para volver.</p><div className="insta-grid">{[<VeraSpark key="spark" />,'VERA','◉','✹'].map((x,i)=><div className={`insta-tile tile-${i}`} key={i}>{x}<small>FOTO PRÓXIMAMENTE</small></div>)}</div>{config.instagramUrl !== 'INSTAGRAM_URL' && <a className="button button-cream" href={config.instagramUrl}>VER INSTAGRAM <Arrow /></a>}</section>

        <section id="ubicacion" className="location section-cream"><div><div className="section-label">08 / VEN A VERA</div><h2>NOS VEMOS<br /><i>EN HUELIN.</i></h2><p className="opening-status">{config.openingStatus}</p><address>{config.address}<br />{config.area}</address><p className="hours">{config.hours}</p><p className="saturday-noon">{config.saturdayNoon}</p><div className="location-actions"><a className="button button-blue" href={config.mapsUrl} target="_blank" rel="noreferrer">CÓMO LLEGAR <Arrow /></a></div></div><div className="map-placeholder"><iframe title="Mapa de VERA en Plaza Moreno Villa, Málaga" src="https://www.google.com/maps?q=Plaza%20Moreno%20Villa%202%2C%20M%C3%A1laga&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe><a className="map-badge" href={config.mapsUrl} target="_blank" rel="noreferrer">VERA ↗</a></div></section>
      </main>

      <footer className="footer section-blue"><span>VERA<span className="dot">.</span></span><span>PLAZA MORENO VILLA 2 · HUELIN</span><a href="#top">VOLVER ARRIBA ↑</a></footer>
      <a className="mobile-cta" href="#ubicacion">VEN A VERA <Arrow /></a>
      {selectedDrink && <div className="drink-modal-backdrop" role="presentation" onClick={() => setSelectedDrink(null)}><div className="drink-modal" role="dialog" aria-modal="true" aria-labelledby="drink-modal-title" onClick={(event) => event.stopPropagation()}><div className="modal-header"><span className="card-type">FOTO / VERMUTEO</span><button className="modal-close" onClick={() => setSelectedDrink(null)} aria-label="Cerrar foto">CERRAR <span aria-hidden="true">×</span></button></div>{selectedDrink.image ? <div className="drink-photo"><img src={selectedDrink.image} alt={`Foto de ${selectedDrink.name}`} /></div> : <div className="drink-photo-placeholder"><VeraSpark /><span>FOTO DEL TRAGO<br />PRÓXIMAMENTE</span></div>}<span className="card-type">VERA MIX · {selectedDrink.kind === 'firma' ? 'DE LA CASA' : 'DE BARRA'}</span><h2 id="drink-modal-title">{selectedDrink.name}</h2><p>{selectedDrink.note}</p><strong>{selectedDrink.price}</strong></div></div>}
      {selectedEvent && <div className="drink-modal-backdrop event-viewer-backdrop" role="presentation" onClick={() => setSelectedEvent(null)}><div className="event-modal event-viewer" role="dialog" aria-modal="true" aria-label={`Flyer de ${selectedEvent.title}`} onClick={(event) => event.stopPropagation()}><div className="modal-header"><span className="card-type">FOTO / EVENTO</span><button className="modal-close" onClick={() => setSelectedEvent(null)} aria-label="Cerrar flyer">CERRAR <span aria-hidden="true">×</span></button></div><div className="event-modal-poster"><img src={selectedEvent.image} alt={`Flyer de ${selectedEvent.title}`} /></div></div></div>}
    </div>
  )
}

export default App
