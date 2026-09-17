import { config } from '../data'
import { Arrow } from './Decorative'

export function FinalCta() {
  return (
    <section className="final-cta section-blue"><div className="section-label light">10 / PLANEA LA VISITA</div><div className="final-cta-layout"><h2>VEN A<br /><i>VERA.</i></h2><div><p>Plaza Moreno Villa, 2 · Huelin, Málaga.<br />Una, otra y las que hagan falta.</p><div className="final-cta-actions"><a className="button button-cream" href={config.mapsUrl} target="_blank" rel="noreferrer">CÓMO LLEGAR <Arrow /></a><a className="button button-outline-light" href={config.instagramUrl} target="_blank" rel="noreferrer">VER INSTAGRAM <Arrow /></a></div></div></div></section>
  )
}
