# 03. Catalogo de reglas y quality gates V-DLC

## A. Principios de evaluacion

Cada regla declara: `id`, descripcion, implementación probable, tipo de evidencia, severidad por defecto, excepciones, pruebas positivas y negativas, y si puede autofijarse con seguridad. Los identificadores no deben reciclarse; los cambios significativos se versionan.

**Niveles:**

- **P0 / BLOCKER:** fallo que rompe la experiencia o seguridad fundamental, con detector fiable. Bloquea PR.
- **P1 / ERROR:** violacion de identidad, accesibilidad comprobable o layout con evidencia reproducible. Bloquea si el proyecto opto por ello.
- **P2 / WARNING:** riesgo, inconsistencia o heuristica. Solicita revision, no bloqueo por defecto.
- **P3 / ADVISORY:** criterio visual, branding, densidad y recomendaciones por IA. No bloqueante.

**Etapas de adopcion:** `observe` (reportar), `enforce` (bloquear), `disabled` (documentado). No convertir cientos de warnings preexistentes en fracaso total cuando se integra en un proyecto brownfield; establecer baseline de deuda preexistente con plan de reduccion y bloquear regresiones nuevas.

**Confiabilidad:** no se declara cobertura sin pruebas de falsos positivos y falsos negativos. La deteccion DOM no ve todos los problemas de perception; screenshot diff no sabe si un cambio es mejor o peor; detector semántico no entiende todos los textos.

## B. Reglas estaticas, tokens y componentes

| ID | Regla | Deteccion propuesta | Nivel inicial |
|---|---|---|---|
| TOK-001 | Colores hex/RGB/HSL literales en UI fuera de allowlist | AST, CSS parser, Tailwind parser cuando aplique | P1 |
| TOK-002 | Clases de color directas que sustituyen tokens semanticos (`bg-purple-*`) | AST JSX + extractor Tailwind v4 | P1 |
| TOK-003 | Token inexistente o nombre de token no permitido | Resolver JSON/CSS + comparador | P1 |
| TOK-004 | Token que no tiene contraparte requerida en light/dark | Matriz de temas y computed styles | P1 |
| TOK-005 | Variacion injustificada en valor de sombras, glow, border | Static scan + policy por rol | P2 |
| TOK-006 | Gradientes fuera del set aprobado en superficies frecuentes | AST/CSS tokens | P2 |
| TOK-007 | Glass/blur global en lugar de variantes designadas | CSS selector/scope + policy | P2 |
| BTN-001 | Boton CTA nativo fuera de componente oficial | TSX AST + excepciones por wrapper/primitive | P1 |
| BTN-002 | Variante inexistente/no permitida para `Button` | TypeScript + registry | P1 |
| BTN-003 | CTA primario con estilo local que rompe el componente | Detect class override/style + computed sample | P1 |
| BTN-004 | Boton sin estado focus visible o disabled coherente | Storybook/component runtime | P1 |
| BTN-005 | Boton especial GitHub usado fuera del contexto aprobado | ComponentContract | P2 |
| TYPO-001 | Font size arbitrario fuera de tokens/roles | Static JSX/CSS + token map | P1 |
| TYPO-002 | Font family no aprobada | CSS/inline style + computed sample | P1 |
| TYPO-003 | Line height no aprobado o demasiado estrecho para rol | Token rules + heuristica DOM | P2 |
| TYPO-004 | Peso tipografico inconsistente para rol de heading | Role registry + static | P2 |
| TYPO-005 | Duplicacion de H1 por route (salvo escenarios declarados) | Browser DOM semantic | P1 |
| TYPO-006 | Saltos semanticos heading H1->H3 sin política | DOM/document outline | P2 |
| TYPO-007 | Título recortado por linea/altura fija | DOM overflow + screenshots | P1 |
| SPAC-001 | Spacing fuera de escala sin motivo | CSS/JSX token/lint | P2 |
| SPAC-002 | Padding de contenedor distinto para misma clase de página | DOM computed + contract | P2 |
| SPAC-003 | Grillas y columnas fuera de layout contract | DOM + config | P2 |
| SPAC-004 | Border radius arbitrario fuera de escala | Static + computed | P2 |
| COMP-001 | Componentes duplicados casi identicos con estilos divergentes | Heuristica AST + registry | P2 |
| COMP-002 | Nueva card/modal/dropdown sin adopcion de primitive oficial | AST + catalog allowlist | P2 |
| COMP-003 | Variantes sin story/estado documentado en componente crítico | Storybook metadata/registry | P2 |
| COMP-004 | Nueva dependencia UI sin evaluacion de licencia | Manifest diff + approval record | P2 |
| ICON-001 | Libreria de iconos no aprobada | Imports + reglas excepción | P1 |
| ICON-002 | Iconos de tamaños inconsistentes en mismo rol | Components config + computed samples | P2 |
| ICON-003 | Icono custom sin label/aria apropiado cuando es interactivo | JSX a11y + runtime | P1 |
| MOT-001 | Ignorar `prefers-reduced-motion` en animacion no esencial | CSS/JSX scan + test browser | P1 |
| MOT-002 | Movimiento infinito/excesivo en superficie de contenido | Heuristica + contract | P2 |
| MOT-003 | Transicion o easing fuera de motion tokens | Static + runtime sample | P2 |
| CONTENT-001 | CTA sin destino o evento funcional | Test de enlace/evento declarado | P1 |
| CONTENT-002 | Texto de boton ambiguo o repetido con diferente acción | Heuristica/AI review | P3 |
| CONTENT-003 | Prioridades de contenido contrario a contrato aprobado | PageContract + DOM landmarks | P2 |
| CONTENT-004 | Acciones principales inaccesibles por keyboard | Playwright + axe/manual | P1 |
| STRUCT-001 | Variantes CSS incompatibles entre componentes iguales | Computed fingerprint por rol | P2 |
| STRUCT-002 | Componente no documentado usado extensamente | Registry usage inventory | P2 |

**Precauciones:** permitir values literales en SVG de marca aprobada, renders 3D/Canvas, data visualizations con paletas semanticas y pruebas unitarias. No declarar que todas las clases arbitrarias son malas: permiten excepciones controladas.

## C. Runtime browser, responsive, temas e interacciones

| ID | Regla | Evidencia | Nivel |
|---|---|---|---|
| LAY-001 | Scroll horizontal no intencional en body | viewport/document widths + selector contribuyente | P1 |
| LAY-002 | Texto clippeado por overflow hidden o altura fija | scrollHeight/clientHeight, geometry, screenshot | P1 |
| LAY-003 | Elementos interactivos superpuestos sin z-index/contrato | rectangles/intersection + context/allowlist | P1/P2 |
| LAY-004 | CTA fuera de pantalla sin scroll alcanzable | bounding rect + click test | P1 |
| LAY-005 | Navbar/menu fuera del viewport | DOM coords + screenshot + keyboard nav | P1 |
| LAY-006 | Grid con contenido demasiado estrecho e ilegible | Contract thresholds + computed widths | P2 |
| LAY-007 | Elemento sticky que oculta texto focalizado | focus browser scroll test | P1 |
| LAY-008 | Imagen/logo distorsionado o inesperadamente recortado | natural vs display dimensions + contract | P2 |
| LAY-009 | Inputs/labels desbordados o truncados | DOM geometry + long-text fixture | P1 |
| LAY-010 | Animacion/fuente provoca layout shift relevante | trace/layout metrics en entorno estable | P2 |
| LAY-011 | Intersection esperado entre elementos decorativos | Allowlist; NO error | Excepción |
| THEME-001 | Error contrast light/dark por computed styles | axe + contrast calculator | P1 |
| THEME-002 | Body/site renderiza tema incorrecto segun toggle | theme state + computed classes | P1 |
| THEME-003 | Toggle no persiste preferencia o causa hydration flash severo | browser test + screenshot | P2 |
| THEME-004 | Iconos/images no adaptan contraste a tema | Computed + screenshot/heuristica | P2 |
| THEME-005 | Glass backdrop anula legibilidad sobre fondos reales | screenshot/contrast + AI review | P2/P3 |
| INTER-001 | Control no funcional o no alcanzable con teclado | Playwright actions + axe/manual | P1 |
| INTER-002 | Focus indicator invisible | computed style vs state + screenshot | P1 |
| INTER-003 | Loading/error/empty states ausentes en critical UI | Contract + stories/tests | P2 |
| INTER-004 | Hover-only interaction en dispositivos táctiles | heuristica + mobile test | P2 |
| INTER-005 | Contraste del texto sobre CTA por estado | axe/computed snapshot | P1 |
| INTER-006 | Target táctil demasiado pequeño | geometry vs policy / WCAG target sizing | P1/P2 |
| A11Y-001 | Violaciones axe-core verificadas | rule output + selector + context | P1 |
| A11Y-002 | Orden focus incoherente o trap defectuoso | manual/E2E keyboard test | P1 |
| A11Y-003 | Reduced motion incumplido | emulation + screenshot/DOM | P1 |
| A11Y-004 | Zoom 200% rompe una interaccion crítica | browser scenario | P1/P2 |
| A11Y-005 | Alt text o nombre accesible ausente en control | axe/jsx-a11y | P1 |
| A11Y-006 | Semántica de error de formulario ausente | DOM/Axe + tests | P1 |
| PERF-001 | Bundle/effects pesados por encima de presupuesto aprobado | Lighthouse CI/build artifact | P2 |
| PERF-002 | WebGL/animacion sin fallback para reduced-motion/low-power | contract/test | P2 |

**Reglas de geometria:** interseccion por rectangulos por si sola no es error. Confirmar visibilidad, intencion declarada, posicion relativa y estado. Incluye tolerancias y consola de explicacion de falso positivo.

## D. Consistencia entre páginas y snapshots

| ID | Regla | Procedimiento | Nivel |
|---|---|---|---|
| DRIFT-001 | CTA primario cambia altura/tipo/color entre rutas equivalentes | DOM fingerprint por role + variance threshold | P2 |
| DRIFT-002 | H2 del mismo rol usa tamaños incongruentes | computed type scale + role | P2 |
| DRIFT-003 | Contenedores/espaciado de sección varian sin contrato | DOM fingerprint + permitted layout modes | P2 |
| DRIFT-004 | Misma card tiene radios/bordes/sombra incompatibles | registry + computed styles | P2 |
| DRIFT-005 | Iconos del mismo rol difieren de familia/peso | icon registry + DOM | P2 |
| DRIFT-006 | Navbar/footer cambian inesperadamente entre rutas | snapshots compartidas | P1/P2 |
| VIS-001 | Diff de página/region respecto de baseline aprobada | Playwright toHaveScreenshot / pixel diff | P1 después de calibrar |
| VIS-002 | Ausencia de baseline aprobada | solicitar captura candidata + approval | P2 |
| VIS-003 | Baseline modificada sin review esperado | comprobar cambios git y approval | P1 |
| VIS-004 | Cambio de region protegida con screenshot diferente | region contract + candidate diff + human check | P2 |
| VIS-005 | Captura contiene contenido dinamico no mascarado | heuristica, capture config | P2 |
| VIS-006 | Modo light no dispone de snapshots requeridos | matrix coverage | P2 |
| VIS-007 | Vista mobile/tablet/desktop incompleta | matrix coverage | P2 |

**Contratos especiales de Starbots:**
- `CONTRACT-ORBIT-MEET`: section role hero, copy izquierda, Orbit grande derecha desktop; mobile adapta columna sin eliminar Orbit.
- `CONTRACT-ORBIT-CONTACT`: chat, input, submit y suggested prompts obligatorios; contact routing por Orbit.
- `CONTRACT-FILM`: video central con play visible, adornos secundarios, layout responsive.

El grado de similitud con un dibujo NO se traduce directamente a un porcentaje automático; primero reconstruir un baseline visual aprobado y extraer invariantes medibles.

## E. Auditorias con IA (si hay proveedor y permiso)

| ID | Dimension | Inputs | Tipo |
|---|---|---|---|
| AI-001 | Jerarquía visual y facilidad de escaneo | screenshot + headings + audience + purpose | advisory |
| AI-002 | Cohesion de marca entre páginas | screenshots + approved references + design rules | advisory |
| AI-003 | Densidad visual y clutter | screenshots + viewport + contract | advisory |
| AI-004 | Legibilidad emotiva / personalidad tech premium | screenshot + target audience | advisory |
| AI-005 | Armonia de efectos/glow y movimiento | stills + motion policy + traces | advisory |
| AI-006 | Fidelidad conceptual a bocetos | bocetos + screenshot + contract | advisory |
| AI-007 | Copy y CTAs segun contexto de sección | page copy + CTA map | advisory |
| AI-008 | Calidad de estados vacios y errores | state screenshots + expected action | advisory |
| AI-009 | Credibilidad y confianza comercial | screenshots + site purpose | advisory |
| AI-010 | Sugerencias creativas, alternativas y tradeoffs | findings + constraints | advisory |

### Política de AI critique

- Nunca subir screenshots/código a modelos externos sin opt-in explicito y data minimization.
- Prompt e input de capturas/DOM se tratan como contenido no confiable; no ejecutar instrucciones halladas en la página.
- Forzar resultado JSON validado; score razonado, confidence y evidencia; no autorizar acciones.
- AI review corre solo sobre deltas significativos o solicitud del usuario; cache por contenido.
- No asumir calibracion perfecta entre modelos. Reportar proveedor, versión y timestamp.
- El comentario creativo puede proponer `layout`, no tocar layout sin review del fundador.

## F. Quality gates por fase

1. **M0:** doc-only; ninguna regla bloquea porque no hay motor.
2. **M1:** reglas TOK/BTN/TYPO seleccionadas operativas en fixture; gates de tests/CI interno.
3. **M2:** overflow, theme y a11y reales; snapshots candidatas; bloquear solo fallos deterministas calibrados.
4. **M3:** DRIFT y contract tests, baseline aprobada. Regressions de regiones aprobadas pasan a bloqueo.
5. **M4:** AI crítico advisory; no influye en pass/fail automatizado.
6. **M5:** adaptadores/handoff; se valida compatibilidad en proyecto externo sin writes.

## G. Modelo de excepciones

Cada excepción incluye `ruleId`, `path/route`, `selector?`, `reason`, `approvedBy`, `createdAt`, `expiresAt`, `issue`, `expectedBehavior`, `test`. No permitir `*` global desactivando todas las reglas sin autorización. Alertar sobre excepciones caducadas.

**Ejemplos permitidos:** color exacto del logo, CTA GitHubGlow solo en navbar/callout, overlay glass intencional, video/ASCII animado en sección documentada, custom Orbit svg, gradiente del elemento ilustrativo.

**Ejemplos NO permitidos por defecto:** `!important` para saltar tokens, body global con `overflow-x:hidden` que oculta bugs, apagar Playwright, update-snapshots por CI sin review, reporte PASS con checks omitidos, excepción `all: off` indefinida.

## H. Matriz mínima de visual tests

| Theme | 360 | 390 | 768 | 1024 | 1440 | 1920 |
|---|---|---|---|---|---|---|
| dark | critical | critical | review | review | critical | review |
| light | critical | critical | review | review | critical | review |

La matriz es objetivo; por PR ejecutar deltas + subset representativo, nightly/full matrix más extensa para coste y velocidad. Breakpoints son configurables. Incluir states de dialog/hover/focus/input/FAQ, Orbit visible y collapsed, prefers-reduced-motion.

## I. Fiabilidad y observabilidad del scanner

El motor informa versión de reglas, navegador, sistema, fuentes, viewport, tema, timeout, URL autorizada, estado de network mocks, commit, decision de baseline y fallos de scanner. Diferencia `FAIL_REGRESSION` de `SCANNER_ERROR`. Antes de comparar screenshot, esperar fonts ready y estabilizar animaciones/noise. Aislar cambios de OS/headless renderer.
