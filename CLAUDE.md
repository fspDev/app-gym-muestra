# App de gimnasio — versión de muestra

App de entrenamiento para mostrarle a dueños de gimnasios. Dos tipos de usuario:
- **Socios** (la app, `/`): ven el plan que les armó el profe y lo entrenan bloque por bloque (series con peso y descanso, bici por tiempo, circuitos, ventana flotante, elegir otro ejercicio si la máquina está ocupada, progreso y récords). Cada ejercicio puede traer una indicación y un video de YouTube.
- **Profes** (`/panel`): dan de alta socios, arman y publican planes, ven el historial de planes, el registro de cada entreno, la evolución y las cuotas. Manejan la biblioteca de ejercicios y pueden sumar otros profes.

Sale del código del 653 Gym & Fitness (`D:\Desktop\GymApp\app`, rama `am`), sin su marca: logo de muestra "GYM" / "TU LOGO AQUÍ" y acento azul `#2f5bff`.

## Sin servidor

Es solo para mostrar: no hay Firebase ni ningún servidor. `src/backend/index.ts` usa siempre `demo.ts`, que guarda todo en el navegador (localStorage `gym:demo-db`) con los datos de ejemplo de `demoSeed.ts`. Cuentas: profe `profe`, socios `juan.perez`, `lucia.gomez`, `martin.diaz`; contraseña `demo1234`. "Reiniciar la muestra" (en el ingreso) vuelve a los datos iniciales.

Para un gimnasio real: conectar `backend/` a un servidor de verdad (la interfaz está en `backend/types.ts`) con su propia marca. Colecciones: ver `COL` en `src/collections.ts`.

## Marca de cada gimnasio

- Nombre y logo: `src/ui/Logo.tsx`, `src/auth/Ingreso.tsx`, `index.html`, `vite.config.ts` (manifest), `src/pip/pipEngine.ts` (PLACEHOLDER), `src/share/StoryCard.tsx`.
- Color: `ACCENT` en `src/theme.ts`, `--accent*` en `src/index.css`, colores de `src/pip/drawFrame.ts`, `public/favicon.svg` e íconos de `public/`.

## Convenciones

- React + TypeScript + Vite, CSS Modules con las variables de `src/index.css`/`src/theme.ts`. Sin librerías de UI.
- Textos en español rioplatense (vos), números `es-AR`. Áreas táctiles ≥ 44 px. El panel tiene que andar en el celular.
- Tiempos contra instantes de fin, nunca contando ticks. Lógica pura con tests de Vitest.
- Claves locales con prefijo `gym:` e IndexedDB `gym-muestra` (el dominio `fspdev.github.io` es compartido con otras apps).

## Probar y publicar

```bash
npm run dev     # http://localhost:5173/app-gym-muestra/
npm test
```

Cada push a `main` publica en https://fspdev.github.io/app-gym-muestra/ (GitHub Actions, `.github/workflows/deploy.yml`).
