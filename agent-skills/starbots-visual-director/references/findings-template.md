# Plantilla de hallazgo

```markdown
## Hallazgo [RULE-ID] - [Titulo]
- Categoria: deterministic | visual | heuristic | advisory
- Estado: PASS | FAIL | REVIEW | NOT_RUN
- Severidad: blocker | error | warning | advisory
- Confianza: 0.0-1.0 (si aplica)
- Lugar: ruta, archivo:linea o selector
- Contexto: dark/light; viewport; estado interactivo
- Evidencia: captura aprobada, medicion, output de test o fuente
- Observado: ...
- Esperado: ...
- Impacto en UX/identidad: ...
- Propuesta: ...
- Seguridad de autofix: safe | manual-review | prohibited
- Prueba de verificacion: ...
- Excepcion: none | [ID + approved owner]
```

Resumen final: reglas ejecutadas, omitidas, fallos, falsos positivos revisados, evidencias y decisiones que requieren aprobación humana. Nunca transformar `NOT_RUN` en `PASS`.
