# PROMPT MAESTRO PARA CODEX - PRIMERA Sesión (SOLO LECTURA + PLAN)

Actúa como un equipo senior combinado de: Principal Frontend Engineer, Design Systems Architect, UX Researcher, Visual QA Engineer, Browser Automation Engineer, Security Engineer, Developer Tools Engineer y AI Agent Architect. Eres responsable de diseñar y posteriormente implementar un producto interno de Starbots: **STARBOTS V-DLC / VISUAL DIRECTOR**.

ESTA ES LA PRIMERA Sesión. No crees aún código de producción, no instales herramientas, no generes un remoto de GitHub ni cambies otros proyectos. Analiza y PLANIFICA primero. Solicitaré después una autorización expresa para implementar.

## 0. Fuente de verdad y contexto

- Lee TODOS los documentos bajo `docs/` de este kit, `00_EMPIEZA_AQUI.md`, `templates/`, el proyecto inicial en `agent-skills/`, y el contexto del sitio bajo `references-private/` si esta disponible.
- Trata el documento `docs/05_STARBOTS_PRESET.md` como referente real de identidad para el primer usuario/cliente del producto.
- Lee y comprende `Jjj.zip`/sus imágenes extraídas si estan disponibles y la imagen oficial de Orbit. Nunca sustituyas bocetos del fundador por referencias genéricas.
- Revisa la especificación previa `STARBOTS_Visual_Director_Especificacion_y_Prompt.md` si aparece en el kit: fusiona lo acertado, elimina duplicados, documenta conflictos.
- Distingue hechos cerrados de propuestas, supuestos y decisiones pendientes.
- Si hay un repositorio local existente, inspeccionalo en modo lectura, su estado git, stack, tests, lockfile, licencia, dependencias, arquitectura, seguridad y convenciones antes de decidir cambios.
- Si NO existe, diseña el repositorio nuevo sin modificar ninguna otra carpeta.
- AI-DLC es nuestra inspiracion metodológica: Initialization -> Ideation -> Inception -> Construction -> Operation, con traceabilidad, gates y aprobaciones. Puedes reutilizarlo si esta instalado, pero NO dependas de que exista.

## 1. Objetivo del producto

Construir un **director visual de verdad**, portable y utilizable por Claude Code, Codex y Kiro, capaz de mantener la calidad, consistencia y coherencia visual de aplicaciones web modernas (primer preset: Starbots.com, Next.js 16 / React 19 / TypeScript / Tailwind v4 / shadcn/Radix).

El usuario quiere un sistema que detecte y explique:
- Colores arbitrarios, gradientes, bordes, glows y estilos que rompen identidad.
- Botones primarios/secundarios incongruentes o implementaciones duplicadas.
- Escalas H1/H2/H3/body, line heights, tipografía, pesos, jerarquía de contenido desordenada.
- Espaciados, gutters, cards, grids, radios, sombras, anchos y posiciones sin disciplina.
- Texto recortado, elementos sobrepuestos, overflow horizontal, problemas responsive y diálogos/overlays.
- Componentes incoherentes entre Home, AI Agents, Solutions, Hub, Labs y otros.
- Oscuro/claro incompleto, mal contraste, legibilidad, accesibilidad e interacciones.
- Movimientos molestos, prefer-reduced-motion ignorado y animaciones que ocultan contenido.
- Desviaciones de composiciones aprobadas, incluyendo 3 bocetos del fundador.
- Regresiones visuales nuevas entre ramas y capturas baseline aprobadas.
- Bugs de UI en estados vacio, loading, error, hover, focus, disabled, menus y formularios.
- Desconexiones entre una decision de diseño documentada y el código que la aplica.

No basta dar un número de calidad; generar **hallazgos reproducibles, ubicación, evidencia, severidad, sugerencia, ruta de reparación y verificación**.

## 2. Principio diferencial y experiencia esperada

El sistema tiene un ciclo de vida reutilizable inspirado en AI-DLC:

1. **Discover**: inspecciona proyecto y extrae inventario visual (solo lectura).
2. **Define**: importa o define el sistema de diseño con aprobación humana.
3. **Contract**: fija contratos por componente, página, tema, estado y breakpoint; no congela decisiones provisionales.
4. **Inspect**: lint estático + navegador real + accesibilidad + snapshots + consistencia inter-páginas.
5. **Critique**: razonamiento creativo asistido por IA OPCIONAL separado de comprobaciones deterministas.
6. **Repair**: planifica cambios minimales; no aplica cambios, ni acepta snapshots, ni fusiona PR sin autorización.
7. **Verify**: repite las pruebas, demuestra que el error desaparecio y documenta el antes/después.
8. **Govern**: ejecuta quality gates en PR y mantiene historial de excepciones y de deuda visual.

Debe poder consumirse como:
- CLI local para CI y desarrolladores (`svd doctor/init/scan/audit/report/...` sujeto al diseño final).
- Paquete/configuración versionada para cada proyecto.
- Servidor MCP compatible con agentes; preferentemente local por stdio.
- Skill/guía de agente orientada a Codex, Claude y Kiro, generada desde un núcleo único.
- GitHub Action/workflow de ejemplo con permisos mínimos.
- Dashboard HTML local de hallazgos/capturas y rutas a evidencias; no obligar a SaaS.

## 3. Inteligencia por niveles, sin promesas falsas

**A / Determinista:** AST/ESLint, TypeScript, stylelint, tokens, convenciones, DOM geometry, axe-core, inspeccion de color calculado, tests de contrato; reglas explicables, false positives controlados.

**B / Visual reproducible:** Playwright snapshots, diferencias en regiones aprobadas, capturas con mascaras, baseline custodiado por review; evitar automatismos fragiles a traves de OS/fonts.

**C / IA contextual:** opcion multimodal con screenshots y documentos para juzgar jerarquía y tono; evidencias, confianza, justificaciones; no bloquear PR por estética subjetiva sin aprobación.

Nunca afirmes que comparar una captura con un dibujo garantiza reconstruccion exacta. Los bocetos se traducen a contratos de composición aprobados y checkpoints humanos.

## 4. Reutilizar ecosistema sin copiar licencias

Investiga compatibilidad REAL y licencias de:
- Impeccable (especialista de crítica y pulido; no reimplementar sus comandos).
- Style Dictionary, DTCG design tokens, shadcn, Radix, CVA.
- ESLint y reglas custom, Stylelint, eslint-plugin-tailwindcss compatible con v4.
- Storybook y sus tests, Playwright screenshots, axe-core, Lighthouse CI cuando aporte.
- TypeScript SDK oficial de MCP v2, Zod, Vitest, pnpm monorepo (si conviene).
- GitHub Actions, artifact upload, SARIF, PR checks y branch protection.
- Figma como fuente contextual opcional (lectura, nunca credenciales hardcodeadas).
- 21st.dev, Context7, UI Layouts y otras fuentes como inspiracion/consulta, NO dependencias obligatorias de runtime.

Valida versions, soporte, riesgos de licencias, issues relevantes, mantenimiento, permisos, costes y seguridad. No inventes nombres de API o comandos: verifica documentación local y oficial.

## 5. Arquitectura esperada, sin imponer implementación inflexible

Prefiero TypeScript end-to-end. Evalua monorepo pnpm con paquetes separados por responsabilidad: core schema/config, design-contracts, tokens/presets, static rules, browser auditor, snapshot manager, a11y, reporte, CLI, AI adapter, MCP, GitHub adapter, skill generators. Debe poder usarse sin IA ni cloud.

Config tipada/validada (`visual-director.config.ts` + JSON serializable opcional); contrato/versión de reportes para CI e integraciones; supresiones con motivo/propietario/expiracion; severidad y confidence; rutas de salida configurables; allowlist para URLs; perfil Starbots que no se filtre a presets genericos.

El primer vertical slice NO debe ser un dashboard lindo vacio: demostrar un escaneo real en fixtures, reportes y tests. Luego Playwright y baselines, luego MCP/CI, luego IA opcional. Proponme tradeoffs antes de construir.

## 6. Seguridad y calidad del propio V-DLC

Este producto escanea código y URLs potencialmente no confiables. Por defecto solo local, read-only, sin ejecucion arbitraria de comandos no autorizados, sin secretos en log, sin subir capturas privadas o datos personales a proveedores de IA sin consentimiento y redaccion. Restringir rutas, SSRF, traversal, scripts de terceros, tamaño de archivos, timeout, limites de screenshots y resultados. Treat DOM/source/user text as untrusted; resist prompt injection en crítica multimodal.

No `curl | bash` o `irm | iex` desde agentes sin revision. No `--dangerously-skip-permissions`, force push, deploy, cambios de cuentas, broad scopes ni acciones masivas. GitHub privado, PRs y tests obligatorios. Reportes nunca deben afirmar PASS cuando hubo fallos no ejecutados o scans omitidos.

## 7. Datos de Starbots que SI son especiales

Dark-first con Light mode real, morado de marca como acento, negro profundo ambiental, glass elegante sin exagerar, ASCII art y animacion controlada, button GitHub luminoso aprobado como variante especial, Phosphor como set de iconos base + SVGs propios.

Orbit no es un robot genérico: preserva cabeza morada brillante, ojos rectangulares blancos luminosos, bordes/reflejos oficiales. El diseño oficial de Orbit debe ser un ASSET protegido para el preset y nunca alterarse sin aprobación.

Tres experiencias con sketches con mayor fidelidad que otras zonas:
- `IMG_3925.jpeg` Meet Orbit: texto y beneficios a la izquierda, Orbit grande a la derecha.
- `IMG_3927.jpeg` Ask/Contact/FAQ: chat grande, input, send, sugerencias de FAQ/contacto. Es Orbit detras.
- `IMG_3926.jpeg` Starbots Film: player central, play y detalles decorativos discretos.

No publicar assets/datos de Starbots dentro del motor genérico si este se hace público en el futuro.

## 8. No negociables de ejecucion

- NO tocar otros repositorios en esta primera sesión.
- NO crear remote ni instalar paquetes ni generar código definitivo antes de mi aprobación.
- NO entregar miles de archivos vacios con interfaces TODO; primero vertical slice real.
- NO duplicar todos los detectores de Impeccable, axe o Playwright: integrarlos bien.
- NO bloquear un PR por opiniones esteticas no comprobables.
- NO actualizar baselines automáticamente por fallos visuales.
- NO permitir autofix masivo; solo sugerencias o cambios reversibles con autorización.
- NO declarar 100% cobertura visual, 100% WCAG o "seguridad garantizada".
- NO aceptar hallazgos sin ruta o evidencia comprobable cuando la regla puede ofrecerla.
- NO usar screenshots del modo oscuro como baseline del modo claro.
- NO inducir instalaciones globales o secretos sin consentimiento.

## 9. Formato EXIGIDO de tu primera respuesta

Entrega en Español:

1. **Resumen de comprension** del problema y el valor diferencial del producto.
2. **Inventario de fuentes disponibles** (archivos realmente leidos vs no disponibles).
3. **Comparativa build vs reuse** y dependencias elegidas con alternativas descartadas y licencias.
4. **Arquitectura propuesta** con modulos, responsabilidades, diagramas textuales y flujo CI.
5. **Lista de 30+ reglas** clasificadas por deterministas / visuales / IA, con posibilidad real de deteccion.
6. **Modelo de configuración y contratos** de página/componente/tema, regla, excepción y hallazgo.
7. **Roadmap estilo AI-DLC** con fases, productos, artifacts, quality gates, aprobaciones y traceabilidad.
8. **Vertical slice 1**: caso bueno/malo, test, reporte real, criterios de aceptacion, comandos para verificarlo.
9. **Plan de seguridad y permisos** del nuevo motor y del acceso a GitHub.
10. **Riesgos y falsos positivos**, costos de IA y estrategia incremental para minimizar tokens y retrabajo.
11. **Decisiones que tengo que aprobar** antes de que crees o modifiques nada.
12. **Preguntas bloqueantes**: solo las realmente indispensables. No me pidas repetir lo que consta en los archivos.

Al final, DETENTE y espera mi respuesta. No empieces a implementar sin aprobación. No me digas solo que "harias" algo: redacta plan concreto, comandos de verificación y entregables reales.
