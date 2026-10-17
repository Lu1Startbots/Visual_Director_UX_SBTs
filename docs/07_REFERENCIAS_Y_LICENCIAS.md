# 07. Recursos tecnicos, fuentes y evaluacion de licencias

## Fuentes oficiales o repositorios a investigar (17/oct/2026)

### Metodología
- AI-DLC Workflow: https://github.com/awslabs/aidlc-workflows
- Ciclo de fases: https://awslabs.github.io/aidlc-workflows/guide/04-phases-and-stages/

### Direccion visual
- Impeccable: https://github.com/pbakaus/impeccable
- UI UX Pro Max Skill: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Anthropic Skills: https://github.com/anthropics/skills

### Design systems
- Style Dictionary: https://github.com/style-dictionary/style-dictionary
- shadcn: https://github.com/shadcn-ui/ui
- Radix: https://github.com/radix-ui/primitives
- CVA: https://github.com/joe-bell/cva
- Stylelint strict values: https://github.com/AndyOGo/stylelint-declaration-strict-value
- Tailwind ESLint: https://github.com/francoismassart/eslint-plugin-tailwindcss
- Adobe Leonardo contrast: https://github.com/adobe/leonardo

### Browser, tests, QA
- Playwright screenshots: https://playwright.dev/docs/test-snapshots
- Playwright: https://github.com/microsoft/playwright
- axe-core: https://github.com/dequelabs/axe-core
- jsx-a11y: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
- Storybook: https://github.com/storybookjs/storybook
- Vitest: https://github.com/vitest-dev/vitest
- Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci

### MCP e integraciones
- MCP TypeScript SDK v2: https://github.com/modelcontextprotocol/typescript-sdk
- GitHub Actions: https://docs.github.com/en/actions
- Figma MCP / Code Connect: https://www.figma.com/developers/mcp

### Componentes/estilo SOLO como referencia del preset Starbots
- UI Layouts blur-vignette: https://www.ui-layouts.com/components/blur-vignette
- 21st.dev: https://21st.dev/
- Animate UI: https://animate-ui.com/docs/components/radix/sidebar
- React Bits: https://github.com/DavidHDev/react-bits
- Motion Primitives: https://github.com/ibelick/motion-primitives
- Figma iOS 26 UI Kit: https://www.figma.com/es-la/comunidad/file/1527721578857867021/ios-and-ipados-26
- Avatar Lab referencia, no reemplazo Orbit: https://avatars.bible-strong.app/
- Next-Themes para sitio, no core V-DLC: https://github.com/pacocoursey/next-themes

## Regla de evaluacion antes de adoptar

Por cada recurso que realmente se instale, Codex debe registrar:

1. Repo oficial, package exacto, versión/pin y fecha de revision.
2. Licencia, restricciones sobre redistribucion, uso comercial y subdependencias.
3. Ultima actividad, mantenimiento y issues/seguridad relevantes.
4. Compatibilidad con Node/React/Next/Tailwind v4 y Windows.
5. Costes de servicio/API, si aplica, y necesidad de secretos.
6. Si actúa como runtime, dev dependency, fuente de referencia o analizador opcional.
7. Alternativa y justificacion de por que integrarlo o descartarlo.
8. Riesgos de supply chain y permisos de GitHub Action.

No usar stars como único criterio de seleccion. No clonar/redistribuir kits de terceros dentro del paquete sin revisar copyright. El repo original de Impeccable aparece con licencia Apache-2.0 en su fuente; aún asi revisar la versión concreta y NOTICE. El SDK oficial MCP v2 dispone de paquetes de server/client separados; verificar la versión publicada concreta.

## Problemas de licencia a prevenir

- React Bits puede permitir uso en sitios pero tener condiciones de redistribucion de la propia libreria; revisar para el Marketplace.
- Avatar Lab puede ser AGPL; no importar código al producto propietaria sin asesoramiento/licencia pertinente.
- Recursos visuales de Figma/community/UI Layouts tienen licencias distintas a sus snippets; revisar cada caso.
- No colocar assets propietarios ni bocetos del fundador en paquete npm público accidentalmente.
- Repositorios de herramientas usadas como referencias no conceden derecho automático a vender componentes copiados.

## Seguridad operativa del nuevo repo

- Privatizar GitHub inicialmente.
- Pin GitHub Actions y dependencias razonablemente.
- No secrets en CI de un PR sin privilegios; evitar `pull_request_target` ejecutando checkout inseguro.
- Browser tests ejecutan contenido potencialmente no confiable; usar containers, limites y network policy.
- Capturas de datos del usuario son activos privados, con retencion y sanitizacion.
- `npm/pnpm postinstall` es código de tercero: revisar lock y comandos antes de instalar.
- Permisos de MCP local limitados a carpeta aprobada.
