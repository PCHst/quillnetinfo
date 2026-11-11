# Quillnet

Sitio web de **Quillnet** · Proyecto de Ciberseguridad · Departamento de TICS · Expotec 2026.

## Estructura
```
index.html          Página principal
documentacion.html  Documentación oficial: informe escrito ES/EN (descarga, vista previa, enlaces por capítulo)
recursos.html       Página de recursos (guía, glosario, preguntas, fuentes)
css/styles.css      Estilos base compartidos (modo claro y oscuro)
css/quill.css       Capa de identidad Quillnet (órbitas, esferas, tarjetas, etiquetas); se carga después de styles.css
css/recursos.css    Estilos de recursos
js/main.js          Contadores, modo claro/oscuro, vista previa de PDF y copiar referencia
assets/img/         Logos, erizo, capturas de la app, mapa en órbita e infraestructura
assets/docs/        quillnet-informe-escrito-es.pdf · quillnet-written-report-en.pdf
```

## Abrir en VS Code
1. Abre `quillnet.code-workspace` (Archivo → Abrir área de trabajo desde archivo).
2. Instala la extensión **Live Server** cuando VS Code lo sugiera.
3. Clic derecho en `index.html` → **Open with Live Server**.

Tipografías: Rowdies (títulos) y Noto Sans Telugu (texto), cargadas desde Google Fonts.

## Datos verificados contra el informe escrito
Precio proyectado ₡3,500/mes por hogar (escenario hipotético con un ISP), hardware del prototipo ₡127,900,
52,246 reglas (12,860 en modo drop), 13 tipos de ataque, 238 pruebas, 112 hogares encuestados.
Si cambia el informe, actualiza `index.html` (sección #precio y #seguridad) y `documentacion.html` (cifras y enlaces `#page=`).
