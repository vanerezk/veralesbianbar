import { Arrow } from './Decorative'

type HeaderProps = {
  activeSection: string
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}

export function Header({ activeSection, menuOpen, onToggleMenu, onCloseMenu }: HeaderProps) {
  const navLink = (id: string) => ({
    className: activeSection === id ? 'active' : undefined,
    'aria-current': activeSection === id ? 'location' as const : undefined,
  })

  return (
    <>
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="VERA, inicio">VERA<span className="dot">.</span></a>
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#eventos" {...navLink('eventos')}>Eventos</a><a href="#vermut" {...navLink('vermut')}>Vermuteo</a><a href="#carta" {...navLink('carta')}>Carta</a><a href="#ubicacion" {...navLink('ubicacion')}>Dónde</a>
        </nav>
        <a className="nav-cta" href="#ubicacion">VEN A VERA <Arrow /></a>
        <button className="menu-toggle" onClick={onToggleMenu} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label="Abrir menú">{menuOpen ? 'CERRAR' : 'MENÚ'}</button>
      </header>
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Navegación móvil">
        <a href="#eventos" onClick={onCloseMenu} {...navLink('eventos')}>EVENTOS <Arrow /></a>
        <a href="#vermut" onClick={onCloseMenu} {...navLink('vermut')}>VERMUTEO <Arrow /></a>
        <a href="#carta" onClick={onCloseMenu} {...navLink('carta')}>CARTA <Arrow /></a>
        <a href="#ubicacion" onClick={onCloseMenu} {...navLink('ubicacion')}>CÓMO LLEGAR <Arrow /></a>
      </nav>
    </>
  )
}
