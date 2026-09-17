import { config, instagramPosts } from '../data'
import { Arrow } from './Decorative'
import { InstagramGrid } from './InstagramGrid'

export function InstagramSection() {
  return (
    <section className="instagram section-blue"><div className="section-label light">08 / NOS VEMOS</div><h2>@VERALESBIANBAR</h2><p>Encuéntranos en Instagram.<br />Tardes, gildas y motivos para volver.</p><InstagramGrid posts={instagramPosts} instagramUrl={config.instagramUrl} /><a className="button button-cream" href={config.instagramUrl} target="_blank" rel="noreferrer" aria-label="Seguir a VERA en Instagram">SEGUIR @VERALESBIANBAR <Arrow /></a></section>
  )
}
