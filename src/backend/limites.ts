/**
 * Límites de la versión de muestra: sirve para probarla, no para usarla en serio.
 * Un gimnasio real usa su propia versión (con servidor, marca y soporte).
 */
export const LIMITES = {
  /** Socios que se pueden tener a la vez (la muestra trae 3 de ejemplo). */
  maxSocios: 4,
  /** Profes con acceso al panel: solo el de ejemplo. */
  maxProfes: 1,
  /** Las contraseñas de las cuentas de ejemplo no se pueden cambiar ni resetear. */
  clavesFijas: true,
  /** Cada cuántas horas los datos vuelven solos a los de ejemplo. */
  vigenciaHoras: 24,
  /** Último día (AAAA-MM-DD) en que funciona la muestra; después muestra "Pedí tu versión". */
  venceEl: '2026-12-31',
  /** Dónde pedir la versión propia: un link de WhatsApp (https://wa.me/549…) o un mailto:. Vacío = sin botón. */
  contacto: 'https://wa.me/5493513304222?text=Hola%2C%20quiero%20pedir%20mi%20versi%C3%B3n%20de%20la%20app%20para%20mi%20gimnasio',
}

export const AVISO = {
  socios: `En la muestra podés tener hasta ${LIMITES.maxSocios} socios. Para más, pedí tu versión.`,
  profes: 'En la muestra no se pueden sumar más profes. Pedí tu versión.',
  clave: 'En la muestra no se pueden cambiar las contraseñas de las cuentas de ejemplo.',
}

/** Se tira al chocar con un límite de la muestra; el mensaje ya está listo para mostrar. */
export class LimiteMuestra extends Error {}

/** ¿Pasaron más de `horas` desde que arrancó esta muestra? Sin fecha de inicio (primera vez) no. */
export function reinicioPendiente(desde: number | null, ahora: number, horas = LIMITES.vigenciaHoras): boolean {
  return desde !== null && ahora - desde >= horas * 3_600_000
}

/** ¿Ya pasó el último día de la muestra? Cuenta hasta el final de ese día, en la hora del dispositivo. */
export function muestraVencida(ahora: number, venceEl = LIMITES.venceEl): boolean {
  const fin = new Date(`${venceEl}T23:59:59.999`).getTime()
  return Number.isFinite(fin) && ahora > fin
}
