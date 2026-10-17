---
name: starbots-visual-director
description: Auditar la coherencia de un frontend (tokens, colores, botones, tipografía, layout responsive, dark/light, accesibilidad y regresiones) contra las reglas de Starbots Visual Director. Usar cuando el usuario pida revisar, construir, mejorar o aprobar componentes/páginas de una web, analizar screenshots, detectar UI drift o preparar visual QA y quality gates. Guiar el proceso lectura segura, evidencia, propuesta, permiso y nuevas pruebas. No afirmar que el motor SVD existe o esta instalado hasta comprobarlo.
---

# STARBOTS VISUAL DIRECTOR - workflow skill inicial

Este skill proporciona una **metodología reutilizable**; no incluye aún un scanner CLI implementado. El repositorio V-DLC que construira Codex debe desarrollar el motor real. No confundir el Skill con un detector automático.

## 1. Buscar la fuente de verdad

1. Ubicar el repositorio autorizado y comprobar `AGENTS.md`, `CLAUDE.md`, `DESIGN.md`, config SVD, tokens, registry y contratos versionados.
2. Para Starbots.com, consultar `docs/05_STARBOTS_PRESET.md` del kit (o la copia aprobada en el repo); preservar Orbit original y los tres bocetos prioritarios.
3. Distinguir reglas `approved`, `provisional` y `advisory`; no congelar propuestas de copy o arquitectura comercial.
4. Si los archivos no estan disponibles, declararlo y solicitar el mínimo imprescindible. No inventar tokens, paletas, capturas o resultados.

## 2. Identificar el tipo de trabajo

- **Diseñar nuevo componente:** investigar componentes existentes y contratos antes de crear variante.
- **Auditar:** comenzar read-only con evidencia de código/DOM/capturas disponibles.
- **Corregir:** proponer parche mínimo y esperar permiso si afecta identidad aprobada, contrato o baselines.
- **Revisar PR:** priorizar cambios nuevos y separar deuda historica de regresiones.
- **Polish creativo:** separar sugerencias subjetivas de fallos tecnicos comprobados.

## 3. Ejecutar o guiar el diagnostico

- Si existe CLI `svd` instalada: ejecutar `svd doctor` y consultar `svd --help`; usar SOLO comandos realmente disponibles, sin asumir interface de la especificación.
- Si CLI no existe: usar herramientas comprobadas en el proyecto (ESLint, Stylelint, Playwright, Storybook, axe, Impeccable) y reportar cobertura parcial. Nunca decir `PASS` si no se realizaron pruebas.
- Examinar, segun alcance: tokens, buttons, headings, spacing, components, icons, gradients/glass, dark/light, viewports, DOM clipping, accessibility y screenshots aprobadas.
- Evitar falsos positivos: overlays, arte de marca, ASCII art y video pueden ser intencionales y deben tener contrato/excepción.
- Si hay screenshots de usuarios/clientes o secretos, no enviarlos a un proveedor de IA externo sin consentimiento claro, redaccion y política de datos.

## 4. Entregar findings auditables

Consultar [references/findings-template.md](references/findings-template.md). Separar `deterministic`, `visual`, `heuristic` y `advisory`.

Para cada hallazgo: rule ID, ruta, archivo/linea o selector, viewport, tema, evidence, esperado vs observado, severidad, certeza, correccion y re-test recomendado. Si la evidencia no es accesible, marcar `NOT_TESTED`.

## 5. Corregir y verificar con gates

1. Priorizar hallazgos por gravedad y confianza.
2. Proponer patch o plan acotado; `dry-run` como default.
3. Solicitar aprobación para cambios de diseño, nuevas variantes, baselines, installs, remoto GitHub o publicación.
4. Tras autorización, modificar la menor superficie posible, ejecutar tests y mostrar antes/después.
5. No crear PR, fusionar ni desplegar sin autorización.

## 6. Referencias del skill

- [references/policies.md](references/policies.md): reglas de Starbots y seguridad.
- [references/findings-template.md](references/findings-template.md): formato de diagnostico y salida.

## 7. Advertencia

Este Skill es un **starter validado** para guiar auditorias, no el motor definitivo. Las verificaciones automáticas, MCP y CLI deben ser implementadas, probadas e integradas por Codex siguiendo la especificación V-DLC.
