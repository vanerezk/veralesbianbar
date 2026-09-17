import type { Dispatch, SetStateAction } from 'react'
import { config, menu } from '../data'
import { Arrow } from './Decorative'

type MenuSectionProps = {
  activeTab: string
  onSelectTab: Dispatch<SetStateAction<string>>
}

export function MenuSection({ activeTab, onSelectTab }: MenuSectionProps) {
  const tabs = Object.keys(menu)

  return (
    <section id="carta" className="menu section-cream">
      <div className="section-label">06 / CARTA</div>
      <div className="heading-row"><h2>PARA<br /><i>PICAR.</i></h2><span className="scribble">SIN PRISA<br />Y CON OTRA</span></div>
      <div className="menu-intro"><p>Picoteo, gildas, vermut y copas para pedir al centro o quedarte con tu favorita.</p>{config.allergensPdfUrl ? <a className="text-link" href={config.allergensPdfUrl} target="_blank" rel="noreferrer">VER ALÉRGENOS (PDF) <Arrow /></a> : <span className="menu-note">ALÉRGENOS · INFORMACIÓN DISPONIBLE EN BARRA</span>}</div>
      <div className="tabs" role="tablist" aria-label="Categorías de la carta">{tabs.map(tab => <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => onSelectTab(tab)} role="tab" aria-selected={activeTab === tab}>{tab}</button>)}</div>
      <div className="menu-list">{menu[activeTab].map(item => <article className="menu-item" key={item.name}><div><h3>{item.name}</h3><p>{item.description}</p></div><span>{item.price}</span></article>)}</div>
      <p className="provisional">* LAS CONSUMICIONES SE ABONAN AL REALIZAR EL PEDIDO · INCLUYEN PICOTEO DE LA CASA</p>
    </section>
  )
}
