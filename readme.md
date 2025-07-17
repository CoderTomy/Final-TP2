
# Final TP2 - Gestión de vuelos

## Observaciones
- El archivo principal es `app.js` (no `index.js`).
- El script `npm start` ejecuta dicho archivo.
- Se utiliza ES Modules con `type: module` en `package.json` (no Common.js).
- La estructura de carpetas y archivos está en inglés para mantener coherencia general, según recomendaciones de clase respecto al estándar de inglés, pero los comentarios están en español (para mayor entendimiento).
- Tengo 8 como nota de cursada (para final corto), pero decidí agregar toda la funcionalidad del enunciado (es decir, el punto 1) - b), por las dudas. Por si tuve algún error anterior y eso podría ayudar.
- Repositorio: https://github.com/CoderTomy/Final-TP2

## Ejemplo de estructura JSON para agregar vuelos

```json
{
  "id": "AAA001",
  "xa": 1000,
  "ya": 1000,
  "za": 100
}

{
  "id": "BBB002",
  "xa": 1200,
  "ya": 1200,
  "za": 100
}

{
  "id": "CCC003",
  "xa": 1100,
  "ya": 1100,
  "za": 100
}
```

- URL general para endpoint: http://localhost:3000/flights
- Se puede probar el funcionamiento enviando estos datos por POST a `/flights`.
- También consultar todos los vuelos con GET a `/flights`.