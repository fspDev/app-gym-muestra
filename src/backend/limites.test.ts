import { describe, expect, it } from 'vitest'
import { muestraVencida, reinicioPendiente } from './limites'

const H = 3_600_000

describe('reinicioPendiente', () => {
  it('la primera vez no reinicia', () => {
    expect(reinicioPendiente(null, 1_000_000)).toBe(false)
  })
  it('reinicia al cumplirse las horas', () => {
    const desde = 1_000_000
    expect(reinicioPendiente(desde, desde + 23 * H)).toBe(false)
    expect(reinicioPendiente(desde, desde + 24 * H)).toBe(true)
    expect(reinicioPendiente(desde, desde + 5 * H, 4)).toBe(true)
  })
})

describe('muestraVencida', () => {
  it('funciona hasta el final del último día', () => {
    expect(muestraVencida(new Date('2026-12-31T23:00:00').getTime(), '2026-12-31')).toBe(false)
    expect(muestraVencida(new Date('2027-01-01T00:00:01').getTime(), '2026-12-31')).toBe(true)
  })
  it('una fecha inválida no la vence', () => {
    expect(muestraVencida(Date.now(), 'cualquier cosa')).toBe(false)
  })
})
