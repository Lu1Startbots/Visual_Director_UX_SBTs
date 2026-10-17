# PROMPT CODEX - Auditoría CONTRA LA Especificación (SOLO LECTURA)

Actúa como auditor independiente del repositorio STARBOTS V-DLC. NO cambies código durante esta revision.

1. Lee el plan aprobado, las notas de aprobaciones humanas, matriz de requirements y toda documentación de test.
2. Compara la implementación real con cada criterio de `docs/04_FASES_AI_DLC_Y_CRITERIOS.md` y `docs/03_CATALOGO_DE_REGLAS.md`.
3. Ejecuta pruebas verificables; registra comandos con exit code, logs y versión del entorno. Distingue REAL, SIMULADO, OMITIDO y NO DISPONIBLE.
4. Prueba los fixtures intencionalmente defectuosos, sanos y con excepciones. Intenta falsos positivos y negativos.
5. Verifica read-only defaults, absence of secret leakage, unsafe URL/path, prompt injection in copied webpages and no unsafe CI permissions.
6. Para screenshots, valida que el entorno es reproducible y que ninguna baseline se aprueba sola.
7. Examina documentación para usuarios de Windows, Claude Code, Codex y Kiro.
8. Reporta una tabla con: ID, criterio, evidencia concreta, estado PASS/FAIL/PARTIAL/NOT TESTED, ubicación, gravedad, correccion sugerida.
9. Ordena por brechas bloqueantes reales; evita recomendaciones cosmeticas sin evidencia.
10. Resume si la primera unidad esta lista para que Starbots.com la consuma. No confundir 'demo funciona' con 'producto listo'.

No hagas commits, PR, push, install, deploy o cambios sin confirmacion posterior.
