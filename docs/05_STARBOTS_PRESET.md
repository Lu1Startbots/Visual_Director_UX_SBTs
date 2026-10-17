# 05. Preset visual privado para STARBOTS.COM

## 1. Por que un preset

El motor genérico debe servir a otros productos sin imponerles la estética de Starbots.com. Nuestro primer preset corporativo es también prueba de que el director puede preservar personalidad visual coherente. El preset es versionado, PRIVADO y supervisado por el fundador.

## 2. Filosofía visual aprobada

- Profesional de desarrollo web e IA, premium, moderno, creativo, limpio, técnico y confiable.
- **Dark mode principal**, no fondo negro completamente plano: superficies diferenciadas, acentos morados, luz ambiental discreta, pequeños destellos y profundidad controlada.
- **Light mode alternativo real**: blanco/blanco roto y niveles de superficie con contraste adecuado; no inversión ingenua.
- Morado identitario Starbots: **extraer tonalidad a partir del logo oficial**, NO inventar código hex definitivo sin muestras aprobadas.
- Espaciado generoso y ritmo repetible; jerarquía desde hero hasta footer.
- Evitar en exceso glow, glass, gradientes, cards anidadas, 3D, fondos con movimiento, microvideos y decoracion que enturbie UX.
- Glassmorphism/liquid motion como acentos situacionales de interfaz; legibilidad innegociable.
- Tipografía y ancho de líneas optimizados para lectura; tamaños/tokens aprobados antes de extenderlos.
- Motion con propósito, fluido, suave, compatible con reduced-motion.
- Animaciones con caracteres/ASCII morados localizados en secciones autorizadas.
- Iconografía preferente Phosphor y conjunto SVG propio; no mezclar familias sin aprobación.
- Boton Github luminoso de referencia: variante nombrada con criterios de uso, no plantilla para todos los botones.
- Priorizar bocetos y referencias que entrego el usuario, no renders genericos del asistente.

## 3. Contratos de marca

### Logos e iconos

El logo/Orbit originales se preservan como archivos con versión e integridad. `img` use object-fit correcto; no deformar, recortar ojos, cambiar el color del robot, reemplazar avatar por otro tipo de personaje. Iconos custom nuevos deben parecer parte del mismo conjunto.

### Colores

Definir roles: `background`, `foreground`, `surface-1`, `surface-2`, `surface-glass`, `border-muted`, `border-accent`, `accent`, `accent-hover`, `accent-soft`, `focus-ring`, `text-muted`, `danger`, `success`. Valores reales a aprobar desde marca.

### Texto

Nombres de roles: `display`, `h1`, `h2`, `h3`, `body-lg`, `body`, `caption`, `code`. Aprobación de fuente, fluid typography responsive, line height, letter spacing, weight, max reading width y transformacion de texto. La igualdad visual es por *rol*, no todos los heading de todos los elementos son del mismo tamaño.

### Interaccion

Componentes del sistema: `Button`, `Heading`, `SectionShell`, `PageContainer`, `Card`, `Tabs`, `Dialog`, `Input`, `Select`, `Navbar`, `ThemeSwitch`, `ChatPanel`, `MediaPanel`, `Avatar`, `AgentDemo`, `Tooltip`. No reemplazar por libreria nueva si el sistema ya tiene el primitivo.

### Política de efectos

Cada efecto extraordinario exige objetivo funcional/artistico, contexto, token, reduced-motion, fallback de low power, impacto/performance, prueba en temas y permiso del fundador si altera una sección protegida.

## 4. Las 3 pantallas obligatorias (ALTA FIDELIDAD)

### Contract: MEET-ORBIT (`IMG_3925.jpeg`)

Composición de boceto: copy/beneficios a la izquierda, Orbit grande a derecha, ambiente elegante y pequeño conjunto de action buttons/ornamentos. Un navegador mobile reordena sin borrar a Orbit ni convertirlo en card generica. El protagonista visual siempre es el Orbit OFICIAL.

Obligatorios: elemento principal Orbit, heading/beneficios/contexto, CTA funcional, calidad de foco/contraste, no deformacion de imagen, composición responsive aceptada.

NO: nuevo robot, cara anime generica, 3D improvisado que pierda ojos rectangulares, exceso de glow, sección con otra finalidad.

### Contract: ASK-CONTACT (`IMG_3927.jpeg`)

Composición de boceto: chat grande, superficie principal de conversacion, campo texto abajo, enviar junto al campo y suggested prompts abajo/adyacentes. No formulario tradicional impersonal como experiencia principal. Orbit es motor de preguntas/contacto, agenda, seguimiento y memoria contextual consentida.

Obligatorios: contact CTA, shortcut a FAQs frecuentes, estados de loading/error, accesibilidad keyboard, input enfocado y ruta a una persona cuando corresponda. Captura de nombre/email de manera progresiva, sin perder acciones de conversion.

NO: reemplazar por iframe de chatbot genérico, poner correo sin contexto o eliminar sugerencias del boceto.

### Contract: STARBOTS-FILM (`IMG_3926.jpeg`)

Composición de boceto: encabezado y reproductor grande centrado con play en centro; ondas/ornamentos discretos a los lados. En dark mode crear profundidad sin perder limpieza. En mobile el video sigue protagonista.

Obligatorios: play funcional con controls accesibles, poster/thumbnail de calidad, captions/alternativa accesible cuando haya video final, preservacion responsive, rendimiento.

NO: video de fondo autoplay pesado ni wallpaper animado que sustituya la sección. El film es contenido/protagonista, no decoracion.

### Proteccion de contratos

- Referencia original + screenshot implementada aprobada + reglas estructurales + approval log.
- Cambios de estructura requieren aprobación humana, no se deducen a partir de IA.
- Capturas/crops deben ser en condiciones estables. Comparacion de sketch semántica, no exigir igualdad pixel por pixel con un dibujo manual.

## 5. Orbit oficial (asset protegido)

La imagen oficial enviada el 16 de octubre de 2026 tiene cabeza redondeada morada brillante, ojos rectangulares blancos luminosos, reflejos violetas/blancos, borde luminoso y silueta inferior ondulada/suave. Personalidad mínima y expresiva sin boca. No se anaden brazos/cuerpo, ojos con pupilas, antenas o material de otro personaje por defecto.

Animaciones futuras: blink, microbalanceo, reaccion de ojos y luces sin cambiar geometria esencial. Prototipo de avatar de terceros es referencia, no reemplazo de identidad. Si se usa código de terceros, revisar licencias/AGPL antes de copiar.

## 6. Recursos aprobados como fuentes de inspiracion

- UI Layouts Blur Vignette: `https://www.ui-layouts.com/components/blur-vignette`.
- UI Layouts y otras cards/hover visuales seleccionadas.
- Figma iOS/iPadOS 26 UI kit como disciplina de superficies/controls/spacing, no como tema Starbots.
- Figma Riffs/motion, con evaluacion de export/compatibilidad y licencia.
- 21st.dev, Animate UI, React Bits, Motion Primitives, Impeccable (con revision de licencias y restricciones de redistribucion).
- Boton GitHub de la referencia original recibida.
- 23 imágenes del ZIP `Bbb.zip`: piezas esteticas seleccionadas por el usuario.

Regla: inspiracion no equivale a licencia de distribución o copiado literal. La identidad corporativa prevalece.

## 7. Páginas y componentes candidatos de STARBOTS.COM

Home; Solutions; AI Agents; Industries; Explore/Labs; Company/About; How We Work; Estimator; Starbots Hub preview; Orbit panel/contact; SearchPoint preview; early access. Las decisiones de contenido se extraen del Blueprint ES y Copy Master; no congelar sin confirmacion las páginas/casos de uso que sigan provisionales. El director audita la forma y contratos aprobados, no decide una oferta comercial sin consentimiento.

## 8. Roles recomendados para primera auditoría

- `Navbar`: mismo comportamiento en todas rutas publicas y dark/light.
- `PageContainer/SectionShell`: gutters, maxWidth, vertical rhythm y heading styles compartidos.
- `Button`: `primary`, `secondary`, `ghost`, `danger` y `github-glow` excepcional.
- `ThemeSwitch`: accesible, persiste preferencia y evita flash.
- `AgentCard`, `FeatureCard`, `SolutionCard`: familias distintas pero con tokens comunes.
- `OrbitMedia`: imagen original, contain y comportamiento animado controlado.
- `ChatPanel`: FAQ/contact con estados accesibles.
- `MediaPanel`: poster/play para Starbots Film.

## 9. Validaciones human-centered

- Una página puede ser espectacular y funcional aunque difiera de otra. Comparar por roles, no clonar composición en todas.
- No abusar de Awwwards effects que perjudiquen legibilidad, SEO o performance.
- Modo claro no es ciudadano de segunda categoria.
- Las reglas no reemplazan la revision a ojo del fundador: ayudan a ver diferencias y a decidir con evidencia.
