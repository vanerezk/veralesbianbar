import { config } from '../data'

type CountdownParts = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type CountdownProps = {
  parts: CountdownParts
}

export function Countdown({ parts }: CountdownProps) {
  return (
    <section className="opening-countdown section-cream" aria-label="Cuenta atrás para la apertura tentativa">
      <div className="countdown-layout"><div><div className="countdown-label">{config.openingDateConfirmed ? 'PRÓXIMA APERTURA' : 'PRÓXIMA APERTURA · FECHA TENTATIVA'}</div><strong className="countdown-date">{config.openingDateLabel.replace(' · FECHA POR CONFIRMAR', '')}</strong></div><div className="countdown-clock" aria-live="polite"><div><strong>{parts.days}</strong><span>DÍAS</span></div><div><strong>{String(parts.hours).padStart(2, '0')}</strong><span>HORAS</span></div><div><strong>{String(parts.minutes).padStart(2, '0')}</strong><span>MIN.</span></div><div><strong>{String(parts.seconds).padStart(2, '0')}</strong><span>SEG.</span></div></div></div>
      <p className="countdown-note">La fecha todavía está por confirmar. Cuando lo sepamos, lo contamos.</p>
    </section>
  )
}
