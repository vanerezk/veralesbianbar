import type { Dispatch, SetStateAction } from 'react'
import { events } from '../data'
import { Arrow, VeraSpark } from './Decorative'

type Event = (typeof events)[number]

type EventsSectionProps = {
  onSelectEvent: Dispatch<SetStateAction<Event | null>>
  showUpcoming: boolean
  onToggleUpcoming: () => void
}

export function EventsSection({ onSelectEvent, showUpcoming, onToggleUpcoming }: EventsSectionProps) {
  return (
    <section id="eventos" className="events section-cream">
      <div className="section-label">01 / QUÉ PASA</div><div className="heading-row"><h2>LO QUE<br /><i>PASA.</i></h2><span className="scribble">SIEMPRE<br />ALGO</span></div>
      <article className="featured-event event-accent-tattoo"><button className="event-placeholder" onClick={() => onSelectEvent(events[0])} aria-label={`Ver cartel grande de ${events[0].title}`}>{events[0].image ? <img src={events[0].image} alt={`Cartel de ${events[0].title}`} /> : <><VeraSpark /><b>CARTEL<br />EN<br />PREPARACIÓN</b></>}<span className="poster-hint">VER CARTEL ↗</span></button><div><span className="event-status">{events[0].status}</span><span className="card-type">{events[0].category}</span><h3>{events[0].title}</h3><div className="event-schedule"><span><b>FECHA</b>{events[0].date}</span><span><b>HORA</b>{events[0].time}</span></div><p>{events[0].description}</p></div><a className="button button-blue" href="#ubicacion">{events[0].cta} <Arrow /></a></article>
      <div className="event-grid">{[events[1], events[3]].map(event => <article className={`event-card ${event.image ? 'has-poster' : ''} ${event.title.includes('GILDA') ? 'event-accent-gilda' : 'event-accent-bingo'}`} key={event.title} role={event.image ? 'button' : undefined} tabIndex={event.image ? 0 : undefined} onClick={event.image ? () => onSelectEvent(event) : undefined} onKeyDown={event.image ? (keyboardEvent) => { if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') { keyboardEvent.preventDefault(); onSelectEvent(event) } } : undefined}><div className="event-card-poster">{event.image ? <img src={event.image} alt={`Cartel de ${event.title}`} /> : <><VeraSpark /><span>CARTEL<br />EN PREPARACIÓN</span></>}<span className="poster-action">VER CARTEL ↗</span></div><div className="event-card-copy"><span className="event-status">{event.status}</span><span className="card-type">{event.category}</span><h3>{event.title}</h3><div className="event-schedule"><span><b>FECHA</b>{event.date}</span><span><b>HORA</b>{event.time}</span></div><p>{event.description}</p><a className="text-link" href="#ubicacion" onClick={(clickEvent) => clickEvent.stopPropagation()}>{event.cta} <Arrow /></a></div></article>)}</div>
      <div className="upcoming-events"><button className="upcoming-toggle" type="button" aria-expanded={showUpcoming} aria-controls="upcoming-event-list" onClick={onToggleUpcoming}>{showUpcoming ? 'OCULTAR PRÓXIMOS EVENTOS' : 'VER PRÓXIMOS EVENTOS'} <Arrow /></button>{showUpcoming && <div id="upcoming-event-list" className="upcoming-event-list"><article className="event-card event-card-compact event-accent-tarot has-poster" role="button" tabIndex={0} onClick={() => onSelectEvent(events[2])} onKeyDown={(keyboardEvent) => { if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') { keyboardEvent.preventDefault(); onSelectEvent(events[2]) } }}><div className="event-card-poster"><img src={events[2].image} alt={`Cartel de ${events[2].title}`} /></div><div className="event-card-copy"><span className="event-status">{events[2].status}</span><span className="card-type">{events[2].category}</span><h3>{events[2].title}</h3><div className="event-schedule"><span><b>FECHA</b>{events[2].date}</span><span><b>HORA</b>{events[2].time}</span></div><p>{events[2].description}</p><a className="text-link" href="#ubicacion" onClick={(clickEvent) => clickEvent.stopPropagation()}>{events[2].cta} <Arrow /></a></div></article></div>}</div>
    </section>
  )
}
