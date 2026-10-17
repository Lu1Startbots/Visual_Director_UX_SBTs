# 02. Arquitectura de referencia - STARBOTS V-DLC

## 1. Principio de diseño

Una fuente de verdad versionada (config/tokens/contracts) alimenta varios inspectores independientes. Todos emiten el mismo esquema de findings y evidencias. Un orquestador consolida, deduplica, pondera y produce un reporte; un adapter permite a Codex/Claude/Kiro consultarlo o proponer reparaciones. Modos de escritura separados del núcleo y apagados por defecto.

```text
        Source repo + Storybook + Approved assets
                         |
             Config / Tokens / Contracts
                         |
                   SVD ORCHESTRATOR
      +------------------+--------------------+
      |                  |                    |
  Static AST         Browser Runtime       Baselines
  Rules              + A11Y + Layout        + Regions
      |                  |                    |
      +------------------+--------------------+
                         |
                  Findings Normalizer
                  + Severity / Evidence
                         |
            JSON / MD / HTML / SARIF reports
                         |
            +------------+------------------+
            |            |                  |
        CLI / CI       Local MCP          Agent Skills
            |            |                  |
       GitHub PR     Codex/Claude/Kiro   Visual review
                         |
               OPTIONAL AI critique
                         |
            Human review and approval
```

## 2. Propuesta de monorepo (ajustable)

```text
starbots-visual-director/
  AGENTS.md
  README.md
  LICENSE                  # PRIVADO: no elegir publica sin autorizacion
  SECURITY.md
  CONTRIBUTING.md
  CHANGELOG.md
  pnpm-workspace.yaml
  package.json
  tsconfig.base.json
  docs/
    architecture.md
    rules.md
    configuration.md
    lifecycle.md
    security.md
    reports.md
    installation-codex-claude-kiro.md
    design-contracts.md
    integrations.md
    decision-log.md
  packages/
    schema/                # Zod config, contracts, findings, version
    core/                  # orchestrator, registry, dedup, cache, policy
    static-rules/          # AST, CSS, tokens and conventions
    browser-audit/         # Playwright DOM/runtime/a11y
    visual-regression/     # baselines, deterministic capture, comparison
    reports/               # Markdown, HTML, SARIF, JSON
    cli/                   # svd commands, exit codes, help
    mcp-server/            # local stdio MCP v2 (when supported)
    ai-critique/           # optional adapters, consent checks
    integrations-github/   # PR workflow templates and reporting
    skills/                # canonical instructions and exporter
  presets/
    generic-react/
    starbots-web/           # private asset references and exact policies
  examples/
    next-starter/
    intentionally-broken/
    repaired/
  tests/
    contracts/
    integration/
    e2e/
    security/
  .github/workflows/
    ci.yml
    security.yml
    visual.yml
  .agents/skills/starbots-visual-director/
  .claude/skills/starbots-visual-director/
  .kiro/skills/starbots-visual-director/
```

NOTA: este es objetivo por modulos, NO permiso para crear directorios vacios masivamente. Generar solo aquellos que aporten a una unidad completada.

## 3. Dependencias preferidas

- Runtime Node LTS compatible con dependencias y soporte Windows; TypeScript strict.
- Gestor de paquetes `pnpm` solo si esta justificado por monorepo; documentar versión en `packageManager`.
- Zod para config, contracts, reglas y findings.
- Vitest para tests de dominio; Playwright para browser tests.
- Style Dictionary para transformaciones de design tokens DTCG cuando haga falta; sin obligar integración al site.
- ESLint custom rules para JSX/TSX; Stylelint para CSS; examen concreto de soporte Tailwind v4.
- axe-core via adapter Playwright para comprobacion automática a11y.
- SDK TypeScript MCP oficial v2 al implementar server; investigar versión y compatibilidad real.
- AST TS/TSX via TypeScript compiler / ESLint APIs, nunca regex fragil como sustituto general.
- Un motor de screenshots construido sobre Playwright; diffs pixel-perceptuales con tolerancias y entornos fijos.
- Impeccable como comando/adaptador externo opcional si se puede integrar por API/CLI documentada; no intentar replicar 60 reglas existentes.
- Formatos de salida con versión `schemaVersion`, compatibles con PR artifacts.

## 4. API de configuración (contrato orientativo)

```ts
import { defineVisualDirector } from "@starbots/visual-director/config";

export default defineVisualDirector({
  schemaVersion: "1",
  project: { name: "starbots-web", root: "." },
  preset: "starbots-web",
  designTokens: "./design/tokens.json",
  componentRegistry: "./design/components.json",
  themes: ["dark", "light"],
  defaultTheme: "dark",
  breakpoints: [360, 390, 768, 1024, 1440, 1920],
  routes: ["/", "/ai-agents", "/contact", "/company"],
  browser: { baseURL: "http://localhost:3000", maxPages: 12 },
  pageContracts: "./design/contracts/*.json",
  snapshots: { dir: "./visual-baselines", approvalRequired: true },
  reports: { dir: "./.visual-director/reports", formats: ["json", "markdown", "html"] },
  gate: { deterministic: "error", visual: "approved-baseline", aiCritique: "advisory" },
  ai: { enabled: false },
});
```

Es ejemplo de futura API, no existe un paquete publicado ni es código ejecutable en este kit.

## 5. Entidades del dominio

### DesignSystem

- `id`, `versión`, `source`, `approval`, `tokens`, `typographyRoles`, `componentPolicies`, `iconPolicies`, `layoutRules`, `themePolicies`, `motionRules`.
- Compatibilidad entre variantes light/dark y regresion de tokens.

### ComponentContract

- `componentId`, `roles`, `allowedVariants`, `states`, `sizing`, `tokens`, `exceptions`, `stories`, `owner`, `lastApprovedAt`.
- Ej.: `Button` variants `primary|secondary|ghost|danger|github-glow`, size `sm|md|lg`. Github-glow solo en contextos aprobados.

### PageContract

- `route`, `status` (`approved|provisional`), `purpose`, `sections`, `layout`, `responsiveAdjustments`, `headings`, `ctas`, `approvedVisualRefs`, `requiredChecks`, `accessibility`, `notes`.
- La página puede tener secciones dinamicas o opcionales; declararlas explicitamente.

### RuleDefinition

- `id`, `category`, `kind` (`deterministic|visual|heuristic|ai`), `severityDefault`, `description`, `detector`, `scope`, `exceptionSchema`, `docsUrl`, `autofixSafety`.

### Finding (v1)

```json
{
  "schemaVersion": "1",
  "id": "f-001",
  "ruleId": "TOK-COLOR-001",
  "category": "tokens",
  "kind": "deterministic",
  "severity": "error",
  "confidence": 1,
  "status": "open",
  "location": {
    "file": "src/components/Hero.tsx",
    "line": 18,
    "route": "/",
    "selector": "[data-testid=hero-cta]",
    "theme": "dark",
    "viewport": "390x844"
  },
  "observed": "bg-purple-600",
  "expected": "Button variant=primary",
  "evidence": [{ "type": "source", "ref": "src/components/Hero.tsx:18" }],
  "explanation": "Un CTA primario no usa la variante aprobada",
  "suggestion": "Sustituir por Button oficial",
  "suggestedFixSafety": "manual-review",
  "waiverId": null
}
```

### Waiver / Exception

`id`, `ruleId`, `scope`, `reason`, `approvedBy`, `createdAt`, `expiresAt`, `sourceCommit`, `ticket`, `status`. No exclusiones permanentes sin propietario/justificacion. Las expiradas vuelven a reportarse.

### AuditRun

`runId`, `commit`, `branch`, `environment`, `versión`, `started`, `completed`, `modulesExecuted`, `modulesSkipped`, `findings`, `artifacts`, `result`. Un modulo no ejecutado debe figurar como NOT_RUN y jamas recibir PASS implicito.

## 6. API/CLI sugerida

```text
svd doctor                                      # versions, rights, files, connectors
svd init --dry-run                              # proposes files; no write
svd init --apply                                # requires explicit user confirmation
svd scan --source ./src --report markdown,json
svd audit --base-url http://localhost:3000 --routes /,/ai-agents
svd screenshots --themes dark,light --viewports mobile,tablet,desktop
svd compare --baseline-dir ./visual-baselines
svd contracts validate
svd baselines propose                          # produces reviewable candidate; no approval
svd baselines approve --run <ID>               # gated human action, local operation
svd critique --provider <configured> --consent
svd explain --finding <ID>
svd suggest-fix --finding <ID> --dry-run
svd report --format html,markdown,json,sarif
svd github init --dry-run                       # prints changes, never silently installs
```

Establecer exit codes distintos para `audit_failed`, `scanner_failed` y `not_run`; documentar oficialmente. No inventar un resultado `PASS` en los comandos que no se implementen. MVP puede tener solo doctor/init/scan/report.

## 7. MCP server - herramientas iniciales read-only

- `svd_get_project_policy`: obtener identidad y decisiones aprobadas.
- `svd_list_components`: inventario de componentes autorizados.
- `svd_list_rules`: catalogo activo de reglas.
- `svd_scan_source`: lanzar escaneo del proyecto local autorizado.
- `svd_audit_url`: lanzar browser audit solo de URLs autorizadas.
- `svd_findings`: consultar resultados y filtros.
- `svd_explain_finding`: evidencia, regla, recomendacion.
- `svd_suggest_fix`: obtener propuesta/pseudopatch con `dryRun: true`.
- `svd_compare_pages`: informe de diferencias por ruta/tema/componentes.

Los tools potencialmente mutadores (`svd_apply_fix`, `svd_update_baseline`, `svd_edit_contract`) NO se exponen inicialmente. Antes de implementarlos, autorización humana y safety review. Escanear una URL puede tener efectos secundarios por JS de la página; privilegiar fixtures/local y aislamiento de browser.

## 8. Reportes

- `JSON`: esquema de maquina y versionado.
- `Markdown`: resumen para PR (máxima severidad, links, acciones, reglas, screenshots).
- `HTML`: galeria side-by-side, overlay diff, rutas y severidades.
- `SARIF`: cuando hay locations de código validas; no inventar ubicación de linea para hallazgos creativos.
- `Quality Gate`: PASS/FAIL/PARTIAL/NOT_RUN, lista explicita de checks ejecutados y omitidos.

Evitar un único número 0-100 como decision autoritaria. Un score auxiliar solo es orientativo, calculado desde pesos documentados y acompanado por detalles.

## 9. Coordinacion con Claude, Kiro y Codex

- Un archivo canonico de contrato vive en el repo del sitio o director; habilidades solo lo consultan.
- Codex: `AGENTS.md` + `.agents/skills/.../SKILL.md` si la versión lo soporta.
- Claude Code: `CLAUDE.md` + `.claude/skills/.../SKILL.md`.
- Kiro: `.kiro/skills` o integración que corresponda a la versión instalada.
- Proveer CLI local igual para todos; hacer doctor/check de herramientas presentes.
- Context7, 21st.dev y Figma MCP no se sustituyen ni se meten como dependencias runtime del inspector.

## 10. Plan seguridad de servicios/agentes

- CLI sin telemetria oculta ni tareas en segundo plano.
- Acceso al árbol del proyecto restringido; no leer `.env*`, secretos o node_modules salvo lo necesario para metadata.
- Browser bajo sandbox sin credenciales prod, allowlist de hosts, limites de navegacion y de uso.
- AI adapters opt-in; controlar payload, redactar datos personales, tratar prompt inyectado dentro de capturas/textos como datos no instrucciones.
- Workflows GitHub `permissions: contents: read` por defecto; solicitudes mayores solo cuando imprescindibles y con aprobación.
- Evitar `pull_request_target` ejecutando código no confiable; restriccion de token y dependencia pinneada.
- Separacion `node tests` / static read / browser runtime / PR side effects.
- Artefactos privados con retencion, sin publicar screenshots que contengan usuarios reales.
