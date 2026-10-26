/** Nombres de las colecciones del servidor de muestra (vive en el navegador, ver backend/demo.ts). */
export const COL = {
  /** `config/profe`: quién es el profe principal ({ uid, nombre, username }). */
  config: 'config',
  /** `logins/{usuario}`: con qué cuenta interna entra cada usuario ({ email, sid?, rol }). */
  logins: 'logins',
  /** `students/{sid}` + subcolecciones `days`, `logs`, `pagos`, `medidas`, `planes`. */
  students: 'students',
  /** `admins/{uid}`: otros profes con acceso total. */
  admins: 'admins',
  /** Biblioteca de ejercicios del profe (con su video). */
  exercises: 'exercises',
} as const
