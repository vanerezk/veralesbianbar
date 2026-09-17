import { events, vermuts } from '../data'
import { VeraSpark } from './Decorative'

type Drink = (typeof vermuts)[number]
type Event = (typeof events)[number]

type DrinkModalProps = {
  drink: Drink
  onClose: () => void
}

export function DrinkModal({ drink, onClose }: DrinkModalProps) {
  return (
    <div className="drink-modal-backdrop" role="presentation" onClick={onClose}><div className="drink-modal" role="dialog" aria-modal="true" aria-labelledby="drink-modal-title" onClick={(event) => event.stopPropagation()}><div className="modal-header"><span className="card-type">FOTO / VERMUTEO</span><button className="modal-close" onClick={onClose} aria-label="Cerrar foto">CERRAR <span aria-hidden="true">×</span></button></div>{drink.image ? <div className="drink-photo"><img src={drink.image} alt={`Foto de ${drink.name}`} /></div> : <div className="drink-photo-placeholder"><VeraSpark /><span>FOTO DEL TRAGO<br />PRÓXIMAMENTE</span></div>}<span className="card-type">VERA MIX · {drink.kind === 'firma' ? 'DE LA CASA' : 'DE BARRA'}</span><h2 id="drink-modal-title">{drink.name}</h2><p>{drink.note}</p><strong>{drink.price}</strong></div></div>
  )
}

type EventModalProps = {
  event: Event
  onClose: () => void
}

export function EventModal({ event, onClose }: EventModalProps) {
  return (
    <div className="drink-modal-backdrop event-viewer-backdrop" role="presentation" onClick={onClose}><div className="event-modal event-viewer" role="dialog" aria-modal="true" aria-label={`Flyer de ${event.title}`} onClick={(clickEvent) => clickEvent.stopPropagation()}><div className="modal-header"><span className="card-type">FOTO / EVENTO</span><button className="modal-close" onClick={onClose} aria-label="Cerrar flyer">CERRAR <span aria-hidden="true">×</span></button></div><div className="event-modal-poster"><img src={event.image} alt={`Flyer de ${event.title}`} /></div></div></div>
  )
}
