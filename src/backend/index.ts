import type { Backend } from './types'
import { demoBackend } from './demo'

/**
 * App de muestra: no hay servidor. Todo (profe, socios, planes, entrenos, cuotas) vive en el navegador
 * de quien la prueba, con datos de ejemplo. "Reiniciar la muestra" vuelve a los datos iniciales.
 */
export const DEMO = true

export const backend: Backend = demoBackend
export const store = backend.store
export const authApi = backend.auth
