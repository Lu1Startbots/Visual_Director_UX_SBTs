# STARBOTS V-DLC | Kit fundador para Codex

**Visual Design Lifecycle / Visual Director**
**Estado de entrega:** especificación y kit para construir con Codex. No es un motor ya implementado, no contiene una instalacion funcional ni implica que el repositorio remoto exista.
**Idioma de trabajo:** español. Código, CLI, nombres de artefactos e identificadores: inglés.

## Lo que recibes

1. `prompts/01_PRIMERA_SESION_CODEX.md` - pegar primero. Pide lectura, investigacion de proyecto, especificación, plan y evidencias; SIN crear repositorios ni instalar paquetes aún.
2. `prompts/02_AUTORIZAR_CONSTRUCCION_CODEX.md` - usar una vez aprobados el plan y el repositorio destino.
3. `prompts/03_EVALUAR_RESULTADOS_Y_BRECHAS.md` - usar después de la primera implementación para auditar brechas.
4. `docs/01_VISION_Y_REQUISITOS.md` - definicion del producto, usos y limites.
5. `docs/02_ARQUITECTURA_Y_APIS.md` - componentes internos, CLI, MCP, skills y adaptadores.
6. `docs/03_CATALOGO_DE_REGLAS.md` - reglas detectables, severidades, excepciones y criterios de evidencia.
7. `docs/04_FASES_AI_DLC_Y_CRITERIOS.md` - fases, checkpoints, pruebas y Definition of Done.
8. `docs/05_STARBOTS_PRESET.md` - identidad, Orbit oficial y bocetos protegidos.
9. `docs/06_PRUEBAS_Y_CASOS_ADV.md` - casos positivos/negativos para demostrar que realmente funciona.
10. `docs/07_REFERENCIAS_Y_LICENCIAS.md` - fuentes y precauciones con dependencias.
11. `templates/visual-director.config.example.ts` - contrato de configuración ilustrativo, NO código ejecutable.
12. `agent-skills/starbots-visual-director/` - skill inicial de revision y preparacion, no sustituye el motor.
13. `references-private/` - contexto de Starbots, NO destinado a publicación por GitHub.

## Como comenzar con Codex

**Paso 1.** Crea o abre un proyecto de Codex dedicado exclusivamente a `Starbots Visual Director` (separado de `WEB STARBOTS` en Claude y del repositorio corporativo de la web).

**Paso 2.** Adjunta este ZIP o extraelo en una carpeta de trabajo local. Abre `prompts/01_PRIMERA_SESION_CODEX.md` y envia ese texto. Indica a Codex donde esta la carpeta extraida.

**Paso 3.** Codex debe ENTREGAR un análisis técnico, las decisiones que propone, riesgos, dependencias, una secuencia de hitos y el primer vertical slice. Debe detenerse antes de escribir código o crear GitHub remoto.

**Paso 4.** Comparte esa respuesta con ChatGPT, la revisamos y aprobamos o corregimos.

**Paso 5.** Pega `prompts/02_AUTORIZAR_CONSTRUCCION_CODEX.md`. Codex crea por fases el proyecto verificado, no miles de archivos inertes.

**Paso 6.** Integramos primero en un fixture artificial, luego en una copia/branch de Starbots.com. La publicación, permisos y merge siempre requieren autorización.

## Restricciones no negociables

- Repositorio propio; NO escribir dentro del repo Starbots.com sin autorización expresa.
- Sin push remoto, deploy, modificacion de credenciales ni instalacion global no autorizados.
- PRs y revision humana; no commits directos a main.
- Primer resultado valioso debe ser REAL: detectar tres fallos, explicar evidencia y comprobar correcciones.
- CLI determinista sin proveedor de IA obligatorio; crítica multimodal opcional y bajo consentimiento.
- Diseño Starbots: oscuro primero, claro opcional, morado acotado, glass sutil, iconografía coherente, bocetos protegidos y Orbit oficial.
- No copiar código de librerias sin evaluar licencias y compatibilidad.
- No convertir un prototipo de habilidad o prompt en promesa de un producto ya funcional.
