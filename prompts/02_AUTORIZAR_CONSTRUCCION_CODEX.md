# PROMPT DE CONTINUACION - AUTORIZAR Construcción POR UNIDADES

Ya revisamos y aprobamos el diagnostico y el plan de STARBOTS V-DLC. Trabaja EXCLUSIVAMENTE dentro del repositorio/carpeta que hayamos confirmado, comenzando por la primera unidad vertical del plan aprobado. No interpretes esta autorización como permiso para crear remotamente repositorios, desplegar, manejar secretos, instalar herramientas globales, forzar pushes o fusionar PRs.

Reglas de ejecucion:

1. Verifica la ruta, el estado Git, la rama actual y que no exista trabajo ajeno sin guardar. Si hay cambios desconocidos, DETENTE y pregunta antes de sobrescribir.
2. Materializa requirements -> contracts -> test cases -> implementation -> verification para la unidad actual. No avances una unidad sin demostrar aceptacion de la anterior.
3. Escribe PRIMERO tests de las reglas a desarrollar. Incluye al menos fixture que DEBE fallar, fixture que DEBE pasar y fixture con excepción permitida.
4. Para cada unidad produce código ejecutable, sin mocks ficticios presentados como integraciones reales. Usa mocks solo en unit tests.
5. Ejecuta typecheck, lint, test, build y pruebas E2E segun el alcance; registra salida y errores reales, no afirmes haber pasado tests que no se ejecutaron.
6. Mantiene README actualizado, ejemplos reproducibles en Windows y Linux, docs de CLI/API y changelog de decisiones.
7. Cuando una dependencia necesite token/API, implementa un adaptador opcional y un modo local que siga funcionando sin credenciales.
8. Asegura que el CLI por defecto es read-only y los cambios sugeridos son dry-run.
9. Desarrolla por ramas `feat/*` con commits logicos, sin tocar main directamente. Prepara PR solo tras pruebas y autorización.
10. Reporta al terminar cada unidad: archivos cambiados, criterios cubiertos, comandos ejecutados, resultados, screenshots/reportes, bugs pendientes, next step y decision que esperas de mi.

Primera unidad mínima sugerida, a revisar con lo aprobado:
- `svd doctor`, `svd init --dry-run`, `svd scan --source <fixture>`.
- Contrato de tokens/colores + botones oficiales + escala de headings.
- Reporte JSON estructurado y reporte Markdown accionable con rule ID, severidad, fichero/linea, evidencia y arreglo.
- 3 errores sembrados (color arbitrario, button sin variante, tipografía fuera de escala) que causan fallo verificable, y una variante corregida que pasa.
- Un test de excepción aprobada no marcada como fallo.

Al cerrar la primera unidad DETENTE para revision antes de implementar Playwright/MCP/IA.
