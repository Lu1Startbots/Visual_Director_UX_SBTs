# 04. Metodología AI-DLC adaptada al ciclo visual STARBOTS V-DLC

## 1. Principio

Inspirarse en `awslabs/aidlc-workflows` (Initialization / Ideation / Inception / Construction / Operation y verification gates), pero construir un **Visual Design Lifecycle** propio y proporcional. V-DLC no es un fork ni una versión de AI-DLC. No copiar sus archivos/licencia inadvertidamente y no pretender que el metodo oficial depende del producto.

**Modelo de negocio:** cada iteracion deja artefactos, pruebas, evidencia y aprobación humana donde corresponde. `Requirements -> Contracts -> Rules -> Tests -> Evidence -> Review -> Release`. Traceability por ID. Aprovechar AI-DLC instalado si ya lo usa Codex; si no, implementar los gates como docs y scripts en el repo sin instalar otras herramientas innecesarias.

## 2. Ciclo de vida del producto

### V0. INITIALIZATION / RECONOCIMIENTO

**Objetivo:** comprender la carpeta correcta y el entorno sin efectos secundarios.

Entradas: archivos de kit, docs de Starbots, versiones locales, repos/skills disponibles. Proceso: revisar dependencias, estado Git, permisos, framework, soportes Codex/Claude/Kiro, riesgos de licencia y seguridad. Nunca borrar/rescribir trabajo ajeno.

Artefactos: `PROJECT_INVENTORY.md`, `DEPENDENCY_RESEARCH.md`, `RISK_REGISTER.md`, `DECISIONS.md`.

Gate V0: usuario confirma objetivo de repositorio privado, herramientas de primera fase, alcance y permiso para creacion local.

### V1. IDEATION / DEFINICION DE VERDAD VISUAL

**Objetivo:** convertir el deseo de calidad visual en criterios que se puedan comprobar.

Entradas: ejemplos buenos y malos, Starbots dark/light, logo/Orbit, bocetos, sistema de tokens, dolores de desarrollo. Salidas: PRD corto, matriz de escenarios, definicion de roles visuales, reglas normativas, lista de excepciones y criterios de exito.

Artefactos: `PRODUCT.md`, `VISUAL_PRINCIPLES.md`, `ACCEPTANCE_CRITERIA.md`, `DECISION_LOG.md`.

Gate V1: aprobación humana de la distincion determinista / visual / AI; no exigir gustos esteticos como regla matematica.

### V2. INCEPTION / ARCHITECTURE + CONTRACTS

**Objetivo:** arquitectura portable, escalable y con limites de privacidad.

Entradas: V1 aprobado. Salidas: modulo core, config schema, Rule API, Finding API, fixtures, CLI plan, PR/CI workflow, política de excepciones, plan de releases por unidades. Validar licencias de Impeccable/Playwright/axe/Storybook y SDK MCP.

Artefactos: `ARCHITECTURE.md`, `CONFIG_SCHEMA.md`, `TEST_PLAN.md`, `MILESTONES.md`, `THREAT_MODEL.md`, `COMPATIBILITY_MATRIX.md`.

Gate V2: el fundador aprueba tradeoffs, dependencias, coste de mantenimiento, boundaries entre core/preset y primera unidad mínima.

### V3. CONSTRUCTION / UNIDADES VERTICALES

**Objetivo:** construir código real por slices con test-first y evidencia antes de avanzar.

#### U1 - Core + regla verificable (primer vertical slice)

- Una CLI que se ejecuta (`doctor`, `scan`, `report` como mínimo).
- Esquema versionado de config, reglas, findings y audit run.
- Tres reglas reales (TOK-001/BTN-001/TYPO-001 o mejores equivalentes) por AST/CSS sin regex fragil.
- Fixtures intencionalmente malos, buenos y una excepción.
- Reporte JSON y Markdown con ubicación y correccion sugerida.
- Pruebas y build funcionando en Windows/Linux.

**Criterio de aceptacion U1:** ejecutar scanner sobre fixture malo => 3 fallos observables y code no-cero; ejecutar sobre fixture bueno => 0 bloqueantes y code 0; ejecutar waiver aprobado => 0 fallo para esa excepción y log de supresion; fixture rota intencionalmente => error scanner distinto de incumplimiento. Mostrar tests y resumen.

#### U2 - Browser Audits + Dark/Light

- Test real de navegador con Playwright sobre fixture/Next sample.
- Inspect dark y light; viewport 360/390/1440 mínimo.
- Detectar overflow horizontal real, heading inconsistency y problema de contraste/axe; documentar false positive overlay intencional.
- Capturas de evidencia y rutas precisas.
- Reduced motion y focus visibles en demo.

**Criterio U2:** casos malos fallan, buenos pasan; error contiene ruta/selector/theme/viewport/screenshot; exception superposicion legitima no bloquea.

#### U3 - Snapshots + Design Drift

- Capturas versionadas con baseline que se acepta SOLO por review.
- Diffs de página o region con tolerancias; normalizacion de fuente/animacion/hora.
- Comparacion de `Button`, `Heading`, `Navbar` entre dos páginas reales/fixtures.
- Policies de contratos aprobados; bocetos protegidos referenciados y revision visual.

**Criterio U3:** un cambio visual accidental genera diff; cambio intencional espera approval; el CI nunca autoaprueba baseline.

#### U4 - Integración GitHub/Reportes

- Workflow seguro con permissions mínimas y sin ejecutar secretos en código de PR no confiable.
- Publicar artefactos/reportes o comentarios mediante mecanismo de permisos revisado.
- Gate configurable, soportar proyectos brownfield (new issues gating).
- JSON/MD/HTML real, SARIF si hay archivo/linea validos.

**Criterio U4:** PR demo con defecto bloquea y enlaza evidencia; PR reparado pasa; workflow documenta limites y no tiene permisos excesivos.

#### U5 - Skills + MCP + AI opcional

- MCP local de solo lectura basado en SDK v2 oficial, tests de seguridad y contratos.
- Skill/AGENTS.md/CLAUDE.md/Kiro guidance generan el mismo flujo, sin duplicacion de logica.
- AI critique como adapter opcional: resultados validados, opt-in, sanitizacion y no bloqueo por opinion.
- Demonstration audit controlado desde Codex y Claude Code (si disponibles).

**Criterio U5:** CLI y MCP leen el MISMO reporte; no hay herramientas mutadoras activas por defecto; AI mode no se ejecuta ni envia datos sin opt-in; funciona completamente offline sin IA.

#### U6 - Product Experience (posterior, no bloquea integración)

- UI HTML local para findings, before/after, contracts, deltas y excepciones.
- Revision creativa y cola de propuestas; historial de cambios.
- Reutilizable entre Starbots.com y otro sitio demo con identidad distinta.
- Preparacion para publicación open-core solo si se aprueba.

**Criterio U6:** se comprende el riesgo de cada cambio en menos de minutos, no hace falta entrar en 15 logs distintos.

### V4. OPERATION / USO CONTINUO

**Objetivo:** integración progresiva con proyectos reales.

1. Instalar versión fija de V-DLC en Starbots.com en una rama nueva.
2. Definir preset + aprobar tokens/componentes y contratos esenciales.
3. Auditoría inicial solo lectura, separar deuda existente de regresiones nuevas.
4. Ejecutar pruebas en 3 rutas piloto, ambos temas y 3 viewports.
5. Reglas estables migran observe -> enforce tras review.
6. PR check con evidencia; reporte periodico de deuda; seguimiento de excepciones caducadas.
7. Realimentar bugs de producción/QA hacia tests de V-DLC.

Gate V4: fundador valida que NO bloqueo trabajo útil por falsos positivos, reportes se entienden y no se filtraron assets o secretos.

## 3. Integración en CI - Definition of Done por PR

- Cambios en branch `feat/*`, nunca commits directos a `main`.
- Unit tests, typecheck, lint, security scans disponibles y documentados.
- Token/component/static scan y browser/visual segun modulo activado.
- Evidencias y reporte consolidado, con `NOT_RUN` explicitos.
- Los cambios de snapshots o contratos aprobados requieren review humano.
- Todas las violaciones nuevas en reglas `enforce` se corrigen o reciben excepción con responsable/fecha.
- La consola informa porcentaje/cobertura de rutas verificadas sin fabricar porcentajes de calidad.
- La aprobación humana sigue siendo obligatoria para decision artistica.

## 4. Orden correcto para minimizar tokens y retrabajo

`Static checks` primero, pues son baratos. `Browser changed-routes` después. `Full visual matrix` programada o antes de release. `AI critique` solo bajo solicitud o cambios visuales relevantes; analizar regiones afectadas y respetar presupuestos. Cache por hash de commit/política/viewport/theme. Evitar 20 tools por cada componente.

## 5. Checkpoints y respuestas del agente

Al cerrar una unidad el agente debe entregar:

- ID de unidad y revision de contrato.
- Archivos realmente creados/modificados, sin ocultar carpetas.
- Funcionalidad verificada vs simulada/no implementada.
- Comandos ejecutados con exit codes y logs relevantes.
- Evidencia reproducible.
- Hallazgos y riesgos pendientes.
- Impacto de seguridad/permisos/licencias.
- Lo próximo a construir y que aprobación solicita.

## 6. Matriz de traceability (ejemplo)

| Requirement | Rule | Unit | Test | Evidence |
|---|---|---|---|---|
| R-COLOR-01 | TOK-001 | U1 | `color-hardcoded.test.ts` | finding file+line |
| R-BTN-01 | BTN-001 | U1 | `button-raw-cta.test.ts` | finding file+line |
| R-TYPO-01 | TYPO-001 | U1 | `typography-offscale.test.ts` | finding class |
| R-LAYOUT-01 | LAY-001 | U2 | `horizontal-overflow.spec.ts` | rect + shot |
| R-THEME-01 | THEME-001 | U2 | `theme-contrast.spec.ts` | axe+shot |
| R-VIS-01 | VIS-001 | U3 | `approved-baseline.spec.ts` | diff artifact |
| R-DRIFT-01 | DRIFT-001 | U3 | `cta-consistency.spec.ts` | computed samples |
| R-CI-01 | CI-REPORT | U4 | GitHub fixture PR | PR artifact |
| R-MCP-01 | MCP-readonly | U5 | MCP integration | safe response |

Cada requisito nuevo debe mapearse a prueba/evidencia antes de concluir.

## 7. Stop conditions

Parar inmediatamente cuando: repo ruta no coincide, cambios desconocidos, privilegios insuficientes, secretos expuestos, dependencias con licencias incompatibles, pruebas no reproducibles, gran porcentaje de falsos positivos sin triage o el plan exige publicar assets corporativos. Nunca declarar finalizado algo que no supero su gate.
