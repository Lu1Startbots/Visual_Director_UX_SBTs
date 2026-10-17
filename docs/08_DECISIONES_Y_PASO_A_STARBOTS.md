# 08. Decisiones, alcance inicial y entrega a Starbots.com

## CERRADO

- Nombre de trabajo: STARBOTS V-DLC / Visual Director.
- Un repositorio separado de Starbots.com, privado inicialmente.
- Metodología por etapas con gates y aprobación humana, inspirada en AI-DLC.
- Core offline y determinista; modelo multimodal AI opt-in.
- Arquitectura reutilizable CLI + reportes + futuras interfaces MCP/Skill/CI.
- Primer caso de uso: Next.js 16, React 19, TypeScript, Tailwind v4, shadcn/Radix.
- Preset Starbots.com respeta dark-first, modo claro, tokens, tipografía, componentes y tres bocetos obligatorios.
- Orbit oficial es un asset protegido y no se rediseña.
- No publicar/leer datos privados sin autorización ni automatizar merge/deploy.
- Reutilizar Impeccable, Playwright, Storybook, axe, ESLint/Stylelint/Style Dictionary donde convenga.
- Empezar por un vertical slice real con fixtures defectuosos y tests verificables.

## PENDIENTE DE Aprobación (no bloqueante para plan inicial)

1. Repo remoto GitHub y propietario exactos; Codex NO debe adivinarlos.
2. Licencia futura/publicación open source y posibilidad de monetizacion.
3. Valores oficiales de los tokens corporativos (derivar de identidad visual aprobada, no inventar hex).
4. Versión exacta de paquetes y soporte Windows en la maquina del usuario.
5. Tipografía oficial de Starbots y variantes de heading.
6. Contratos finos de pantallas Meet Orbit / Ask Contact / Film tras primer prototipo.
7. Flujo de excepciones y responsables/owners de aprobación.
8. Proveedor de IA multimodal y presupuesto si más adelante se desea critique cloud.
9. Reglas definitivas que bloquean PR vs solo warn después de calibrar falsos positivos.
10. Formato de distribution: paquete npm privado, monorepo local o acción GitHub versionada (Codex propone tradeoff).

## QUE SE ENTREGA AL EQUIPO WEB (CLAUDE)

Cuando U1/U2/U3 esten verificados, Codex prepara un `INTEGRATE_STARBOTS_WEB.md` que incluya:

- Versión/tag exacto del motor.
- Instalacion de dev dependency o CLI sin credenciales.
- Config con rutas y tokens del sitio, y directorio de contratos/baselines.
- Comandos `doctor`, `scan` y `audit` reales con sample output.
- Rutas piloto y design tokens/metadata necesarios.
- Reglas activadas y tipo de enforcement.
- GitHub CI workflow propuesto y scopes de permisos.
- Ejemplos de excepciones/waivers aprobadas.
- No convertir los tres bocetos en diseño automático sin aprobar baseline.
- Procedimiento para crear nuevas variantes de componente y actualizar contratos.
- Checklist de capturas light/dark/responsive que Claude debe adjuntar en PR.

El proyecto `WEB STARBOTS` de Claude tiene instrucciones, archivos de negocio y referencias. Ese contexto NO instala CLI/MCP en la maquina local; integrar por Git y dependencias tras revision y permiso.

## NO FRENA LA WEB

El director se construye en paralelo, con sus primeros gates en modo `observe`. No detener la web esperando MCP/AI/Dashboard. Una vez calibradas reglas, se migra a `enforce` paulatinamente. El costo de cumplimiento debe ser inferior a los defectos que evita.

## ESCENARIO DE ACEPTACION FUNDADOR

"Claude cambio una card y la hizo azul por accidente; Codex ejecuta V-DLC en su PR, detecta color sin token y heading off-scale con archivo/linea; en Playwright identifica que en mobile el CTA se sale de pantalla; propone correccion. Claude corrige. El reporte cambia a PASS sin tocar otros componentes. Si el cambio era parte de un diseño aprobado, el fundador registra una excepción acotada con evidencia."

Si el producto no puede demostrar eso en fixtures reales, no se considera listo para Starbots.com.
