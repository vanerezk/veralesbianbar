import { config, visualAssets } from '../data'
import { Arrow, VeraSpark } from './Decorative'

export function Hero() {
  return (
    <section className="hero section-blue">
      <div className="hero-noise" />
      <div className="hero-topline"><span>BAR LÉSBICO EN HUELIN</span><span>MÁLAGA · HUELIN</span></div>
      <div className="hero-main">
        <p className="eyebrow hero-kicker">Bar lésbico en Huelin</p>
        <img className="hero-brand-image" src="/images/web/Hero web.png" alt="VERA" width="640" height="320" fetchPriority="high" decoding="async" />
        <p className="hero-offer">Vermut · lesbianas · tardeo</p>
      </div>
      <div className="hero-visual">{visualAssets.hero ? <img src={visualAssets.hero} alt="Imagen de VERA" /> : <span className="hero-photo-placeholder">FOTO<br />PRÓXIMAMENTE</span>}<span>FOTO PRÓXIMAMENTE · REEMPLAZABLE</span></div>
      <div className="hero-copy">Un bar de lesbianas<br />para llegar, quedarse y ver qué pasa.</div>
      <div className="hero-actions"><a className="button button-cream" href="#eventos">VER EVENTOS <Arrow /></a><a className="button button-outline-light" href={config.mapsUrl} target="_blank" rel="noreferrer">CÓMO LLEGAR <Arrow /></a></div>
      <VeraSpark />
      <div className="hero-stamp" aria-hidden="true">BAR<br />LÉSBICO<br />HUELIN</div>
      <div className="hero-facts"><span>MAR–JUE 18:00–00:00</span><span>VIE–SÁB 18:00–02:00</span><span>PL. MORENO VILLA, 2 · HUELIN</span></div>
      <div className="hero-manifesto"><span>UN BAR DE LESBIANAS</span><span>PARA QUEDAR · TOMAR · DISFRUTAR</span></div>
    </section>
  )
}
