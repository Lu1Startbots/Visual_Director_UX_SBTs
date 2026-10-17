# 01. Producto y requisitos - STARBOTS V-DLC

## Indice
1. Problema y audiencia
2. Definicion del producto
3. Jobs to be done y escenarios
4. Subproductos y niveles de automatizacion
5. Vocabulario y diferenciadores
6. Alcance e incompatibilidades
7. Criterios no funcionales y privacidad
8. Modelo de adopcion y valor
9. Roadmap de producto y limites

## 1. Problema y audiencia

Los coding agents pueden producir páginas funcionales con apariencias contradictorias. En proyectos grandes o paralelos se multiplican pequenas desviaciones: botones con diferentes alturas, violeta arbitrario, fonts/heading scale incoherentes, grid irregular, sobreposiciones, menus cortados, dark/light desalineados, animaciones invasivas y excepciones invisibles para quien revisa el PR. Una página aislada puede parecer bien mientras el sitio completo pierde identidad profesional. La correccion manual consume revisiones, tokens y tiempo.

**Usuarios iniciales:** fundador/creativo que aprueba identidad, frontend engineer, agente de coding (Codex, Claude Code o Kiro), QA, reviewer de Pull Requests y responsable de diseño. **Caso piloto:** Starbots.com. **Horizonte:** cualquier proyecto React/Next.js con tokens y UI components; en versiones posteriores frameworks adicionales.

## 2. Definicion de producto

V-DLC es un **sistema de gobierno y mejora visual** con tres capas inseparables:

- **Visual Truth:** documenta identidad, contratos, tokens, componentes, ejemplos aprobados, estados y excepciones; versionado y revisable.
- **Quality Engine:** escanea código, DOM y screenshots, comprueba reglas y genera hallazgos auditables.
- **Agent Workflow:** convierte hallazgos en propuestas de correccion, verifica cambios, alimenta CI/PR, adapta el mismo proceso a Claude/Kiro/Codex y conserva rastro de decisiones.

No vende un puntaje magico de estética. **Valor prometido:** menos inconsistencias, regresiones y retrabajo; revisiones más rapidas; identidad y UX coherentes; decisiones visuales explicables y reproducibles.

### Tesis

> La coherencia visual no debe depender de que un desarrollador recuerde cientos de normas ni de que un modelo conozca el producto por telepatia. Se codifican reglas, se comprueban evidencias y se reserva criterio creativo humano para lo verdaderamente subjetivo.

## 3. Escenarios concretos (Jobs to be done)

### ESC-01: Código nuevo con boton equivocado

Claude genera un CTA con `bg-purple-600` y border inventado en la Home. El sistema detecta que existe `Button variant="primary"` o el token `action-primary`, marca archivo/linea, ensena componente aprobado y propone sustitucion sin aplicarla. La comprobacion pasa tras el cambio.

### ESC-02: Tipografias y jerarquía inter-página

Home usa H2 responsivo oficial. AI Agents aplica `text-6xl` a todos los subtítulos. V-DLC compara contra roles semanticos/tokens, reporta desviacion, exige resolverla o registrar excepción con motivo.

### ESC-03: Texto sobrepuesto o cortado

A 360 px, título y CTA se superponen. El browser auditor mide bounding boxes, identifica interseccion potencial inesperada o scroll horizontal; captura prueba y selector. Los overlays intencionales tienen reglas de excepción, con estado y contexto.

### ESC-04: Dark bien, light roto

Componente glass con texto claro sobre superficie blanca: el navegador calcula estilo y contraste. Se reporta en light, con DOM locator y captura de zona. No asumir que invertir paleta alcanza.

### ESC-05: Diseño especial protegido

El boceto Meet Orbit establece dos columnas desktop y prioridad de personaje a la derecha. Un agente cambia a card grid genérico. V-DLC consulta el contrato editorial, revisa estructura y evidencia visual. La violacion semántica de orden puede ser automática si el contrato es estructurado; la fidelidad artistica restante se eleva a revisiones humanas.

### ESC-06: Regresion de proyecto real

Una fusion altera spacing del navbar y varias páginas. Capturas versionadas muestran diferencia contra baseline aprobada, asociada a commit/PR. Reviewer aprueba intencionalmente o solicita correccion. No aceptar baseline automáticamente.

### ESC-07: Crítica cualitativa con IA

Sin errores deterministas, una página se ve saturada y tiene demasiadas cajas. La capa de IA opcional recibe capturas consentidas + tokens + contrato; redacta recomendaciones de jerarquía/densidad. Queda marcada como `ADVISORY`, sin bloquear automáticamente.

### ESC-08: Evolución del design system

Founder aprueba una nueva variante `Button/GithubGlow`; se registra decision, nombre, tokens, estados, alcance, historia del cambio, testing y excepciones. Se despliega a todas las páginas que deben adoptarla.

### ESC-09: Auditoría de otro producto

SearchPoint consume el motor genérico pero con su propia identidad, layout contracts, iconos y baselines. No hereda automáticamente el morado/Orbit de Starbots.com. El preset Starbots queda separado del core.

### ESC-10: Defecto con correccion propuesta

Se produce `finding` con evidencia screenshot + selector + `recommendedAction`. Codex construye patch mínimo en branch, ejecuta tests y devuelve el resultado. Sin reparación automática global; el director comprueba, el humano decide cambios creativos.

## 4. Capacidades del producto

### 4.1 Descubrir e inventariar
- Resolver tokens existentes, css variables y componentes.
- Detectar botones/inputs/cards duplicados con API divergente.
- Catalogar sitios y páginas por ruta; clasificar tipos de componente, rol y estados.
- Construir reporte inicial de deuda de diseño (sin crear reglas nuevas automáticamente).

### 4.2 Definir e importar identidad
- Config de proyecto y preset con tokens de color, tema, texto, spacing, radius, motion y layout.
- Roles visuales: display, h1, h2, h3, body, caption; screen-specific variants documentadas.
- Inventario de iconos aprobados y excepciones.
- Baselines y bocetos oficiales enlazados a `pageContracts`.
- Approval receipts para cambios visuales mayores.

### 4.3 Auditar de forma reproducible
- Source scan TS/TSX/CSS sin evaluar código arbitrario.
- Browser audit de URLs autorizadas (localhost por defecto).
- Temas dark/light, breakpoints y estados configurables.
- Contraste, overflow, intersecciones sospechosas, tap targets, heading order, forms y focus.
- Visual snapshots por region y página; diffs con metadatos y tolerancias.
- Consistencia inter-páginas de componentes, tipografía, spacing y CTA.
- Comparacion por categoria/rol, no falsa regla de que todas las páginas deban tener identico layout.

### 4.4 Criticar y orientar
- Explicacion de cada hallazgo: regla, por que importa, donde aparece, que hacer y como comprobarlo.
- Priorizacion por severidad, alcance (cuantas páginas), certeza y esfuerzo estimado (aproximado).
- Capa AI multimodal opt-in sobre evidencia sanitizada, claramente diferenciada de reglas reproducibles.
- Historial de decisiones, deudas, excepciones y regeneracion de informes.

### 4.5 Reparar con seguridad
- `suggest` y `dry-run` por defecto.
- Auto-fix limitado a transformaciones muy seguras: clase canonica o token inequivalente, cuando hay reglas de prueba.
- Parches generados por agente externamente, NO por un daemon con escritura espontanea.
- Preview/diff, aprobación explicita, re-test y rollback/reversion.

### 4.6 Integrarse
- CLI local con JSON, Markdown, HTML y SARIF cuando corresponda.
- Skill para agentes, MCP read-only, GitHub Action e integración progresiva con Figma/Storybook.
- Informes por PR con links a capturas sin filtrar datos privados.
- Modo offline/determinista base y AI-provider opcional.

## 5. Tres niveles de evidencia (muy importante)

- **Deterministico / ENFORCE**: valores claros como color fuera de tokens, componente prohibido, overflow medido, tests axe reconocidos, estructura de headings declarada. Se pueden bloquear PR cuando reglas/tolerancias estan aprobadas.
- **Heuristico / REVIEW**: sospecha de solape no declarado, densidad visual, excepciones de spacing, componentes parecidos; entregar evidencia y posibilidad de revisar falso positivo.
- **Creativo / ADVISORY**: juicio sobre belleza, personalidad de marca, storytelling, acierto de composición. Nunca mezclarlos con el resultado de un test de código.

Toda evidencia incorpora: `runId`, `ruleId`, `level`, `confidence`, `engine`, `route`, `theme`, `viewport`, `selector/file:line`, `observed`, `expected`, `screenshots/evidence`, `resolutionHint`, `waiverStatus`, `status`.

## 6. Requisitos de adopcion

### Obligatorios desde primera versión integrable
- CLI documentada en Windows/PowerShell y Linux.
- Sin cuenta externa ni API key obligatoria.
- No escribir código ajeno por defecto.
- Licencia revisada, lockfile, versiones reproducibles.
- Fixtures con defectos intencionales y versión correcta.
- CLI con exit codes coherentes: 0 sin incumplimiento bloqueante, no-cero ante fallos bloqueantes, y estado distinto para error del propio scanner.
- Reporte accionable con enlace preciso a fuente o elemento.
- Unit tests y e2e ejecutados antes de marcar un milestone como completado.

### Evolución posterior
- Dashboard local con comparacion antes/después y flujos de aprobación.
- MCP consumible por agentes; skills por plataforma.
- Análisis AI multimodal por deltas, no cada página en cada commit.
- Soporte other frameworks y export de tokens Figma.

## 7. No metas de V1

- No generar un reemplazo completo de Figma.
- No inferir magicamente un sistema visual perfecto desde screenshots.
- No construir otra libreria de botones/sombras; consumir UI del sitio.
- No desplegar una plataforma SaaS, base de datos o autentificacion del director por defecto.
- No mezclar desarrollo de la web Starbots con desarrollo de V-DLC en un único repositorio sin gobernanza.
- No inspeccionar prod ni URLs externas sin una allowlist/autorización.
- No defender publicamente un porcentaje de mejora que aún no se ha medido.

## 8. Criterios no funcionales

- **Reproducibilidad:** screenshots en mismo entorno de contenedor y fuentes/versión de navegador, animaciones estables.
- **Tiempo:** escaneo determinista rápido y cacheable; browser tests por rutas afectadas en PR, full audit programado.
- **Privacidad:** evitar capturas con PII, no subir private source ni credenciales a IA sin permiso, redaccion/masking.
- **Seguridad:** bloqueo de escapes de ruta, SSRF y ejecucion de scripts no autorizados; principio de menor privilegio.
- **Accesibilidad:** WCAG 2.2 AA como objetivo del sitio; auditoría automática solo cubre subconjunto verificable, complemento manual.
- **Extensibilidad:** reglas y adapters por plugin/modulo, reportes versionados.
- **Portabilidad:** soporte Windows 11 para usuario y Linux en CI; no bash-only.
- **Mantenibilidad:** no duplicar 8 herramientas maduras en un monolito.

## 9. Modelo de negocio futuro (no condicionante)

Inicialmente herramienta privada interna. Posible futuro open-core/CLI público + integraciones premium, pero **no decidir licencia, público, cobro, telemetria ni activacion comercial sin aprobación**. Preset de Starbots con recursos propios debe seguir privado incluso si el core se pública.
