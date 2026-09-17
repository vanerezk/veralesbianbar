import { config } from '../data'
import { Arrow } from './Decorative'

type LocationSectionProps = {
  whatsappUrl: string | null
}

export function LocationSection({ whatsappUrl }: LocationSectionProps) {
  return (
    <section id="ubicacion" className="location section-cream"><div><div className="section-label">09 / DÓNDE ESTAMOS</div><h2>EN<br /><i>HUELIN.</i></h2><p className="opening-status">{config.openingStatus}</p><address>{config.address}<br />{config.area}</address><p className="hours">{config.hours}</p><p className="saturday-noon">{config.saturdayNoon}</p><div className="location-actions"><a className="button button-blue" href={config.mapsUrl} target="_blank" rel="noreferrer">ABRIR EN GOOGLE MAPS <Arrow /></a>{whatsappUrl && <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">ESCRÍBENOS POR WHATSAPP <Arrow /></a>}</div></div><div className="map-placeholder"><iframe title="Mapa de VERA en Plaza Moreno Villa, Málaga" src="https://www.google.com/maps?q=Plaza%20Moreno%20Villa%202%2C%20M%C3%A1laga&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe><a className="map-badge" href={config.mapsUrl} target="_blank" rel="noreferrer">ABRIR EN GOOGLE MAPS ↗</a></div></section>
  )
}
