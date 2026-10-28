import { LIMITES } from '../backend/limites'
import { LogoMark } from './Logo'
import styles from './MuestraVencida.module.css'

/** Reemplaza a la app cuando pasó la fecha de la muestra (`LIMITES.venceEl`). */
export function MuestraVencida() {
  return (
    <main className={styles.page}>
      <LogoMark height={64} />
      <h1 className={styles.title}>Esta muestra ya terminó</h1>
      <p className={styles.text}>La versión de prueba dejó de funcionar. Si te gustó, pedí tu versión: con el nombre, el logo y los colores de tu gimnasio.</p>
      {LIMITES.contacto && (
        <a className={styles.button} href={LIMITES.contacto}>
          PEDÍ TU VERSIÓN
        </a>
      )}
    </main>
  )
}
