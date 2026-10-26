import styles from './Logo.module.css'

/** Marca del gimnasio (en la muestra, un lugar para el logo). `accent` la pinta con el acento. */
export function LogoMark({ height = 28, accent }: { height?: number; accent?: string }) {
  return (
    <span className={styles.mark} style={{ fontSize: height, color: accent }} aria-hidden="true">
      GYM
    </span>
  )
}

/** Logo completo: marca + nombre del gimnasio. En la muestra: "TU GIMNASIO" / "TU LOGO AQUÍ". */
export function Logo({ size = 'sm', accent }: { size?: 'sm' | 'lg'; accent?: string }) {
  return (
    <div className={styles.logo} data-size={size} role="img" aria-label="Tu gimnasio">
      <LogoMark height={size === 'lg' ? 150 : 30} accent={accent} />
      <div className={styles.words}>
        <span className={styles.name}>TU GIMNASIO</span>
        <span className={styles.tag}>TU LOGO AQUÍ</span>
      </div>
    </div>
  )
}
