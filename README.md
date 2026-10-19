# Mesías Villacrés 2026 · Sistema de marca

Kit de marca de la campaña de Mesías Villacrés a la Alcaldía del Cantón Santa Clara (Pastaza). Alianza Somos Progreso, **Lista 62-1**. Incluye el Libro de Dirección Visual del documental de campaña.

> ⚠ **Toda pieza dice 62-1.** Nunca 61-1. Verificar el número en cada pieza antes de publicar o imprimir.

Para descargar todo: botón verde **Code → Download ZIP**, o `git clone https://github.com/BLCKJCK-Studio/villacres-design-system.git`.

## Por dónde empezar

1. Lee el **brand book**: [claude-design/project/README.md](claude-design/project/README.md). Ahí están las reglas de color, tipografía, forma, logo, íconos y fotografía. Las secciones de detalle están en la misma carpeta: [formatos y retículas](claude-design/project/formatos.md), [voz y mensajes](claude-design/project/voz-y-mensajes.md), [fotografía](claude-design/project/fotografia.md) y [cumplimiento y QA](claude-design/project/cumplimiento-y-qa.md).
2. Instala **Montserrat** ([Google Fonts](https://fonts.google.com/specimen/Montserrat)). Sin ella las plantillas SVG no se ven bien.
3. Toma los logos de [assets/](assets/) y arranca cada pieza desde su plantilla en [plantillas/](plantillas/).

## Qué hay en cada carpeta

| Carpeta | Contenido |
| --- | --- |
| [assets/](assets/) | Logos en apilado (principal), compacto (sin año), horizontal e isotipo. Cada uno en full, negativo, mono Selva, mono blanco y mono negro. Los `web-*` son versiones livianas para pantalla. También el recorte del candidato y el logo del Movimiento. |
| [componentes/](componentes/) | Piezas sueltas en SVG: badge 62-1 (horizontal, vertical, mini), SOMOS PROGRESO, CTA de voto, check de voto, zócalo, avatar, tarjetas de concejal y de propuesta, río, greca y los 18 íconos ([componentes/iconos/](componentes/iconos/)). |
| [plantillas/](plantillas/) | 20 plantillas maestras SVG (redes, impresos, exteriores, merch, video, credencial). Cada una trae las capas FONDO, CONTENIDO y GUIAS. Cian marca la zona editable o segura y magenta el corte o pliegue. La capa GUIAS nunca se publica. |
| [tokens/](tokens/) | Colores, tipografía, espaciado y movimiento en `tokens.json` y `tokens.css` (variables como `--color-selva-700`). |
| [claude-design/project/](claude-design/project/) | El brand book, `tokens.json`, `design-system.json`, 12 componentes React y los assets agrupados. Es el mismo design system que está cargado en Claude Design. |
| [docs/auditoria.md](docs/auditoria.md) | Las inconsistencias que se encontraron en la marca original y la decisión que se tomó en cada una. Sirve para saber por qué un color o una tilde están como están. |
| [libro-direccion-visual/](libro-direccion-visual/) | El Libro de Dirección Visual del documental «Santa Clara produce». Ver la sección de abajo. |

## Reglas que no se negocian

**Color.** Usa estos valores, no muestrees de piezas viejas.

| Color | Hex | Uso |
| --- | --- | --- |
| Verde Selva | `#07492A` | Color principal. Fondo de negativos, cierres, lonas y banderas. |
| Verde Hoja | `#50993D` | Caja PROGRESO y VILLACRÉS. Texto solo en tamaño grande. Para texto chico verde sobre crema, Hoja 600 `#438133`. |
| Oro Petroglifo | `#9B7C3F` | Símbolos y gráficos sobre fondo claro. **Nunca texto.** |
| Oro Claro | `#E2B862` | El dorado sobre fondo Selva. |
| Crema | `#F8FDEF` | Fondo claro por defecto. |
| Tinta | `#12241A` | Texto corrido. |
| Lima Voto | `#C1D305` | **Solo** check y CTA de voto, y la franja del chaleco de brigadista. **Siempre sobre Selva.** Sobre crema o blanco no se ve. |

Proporción aproximada: 60 % Selva o Crema (según el fondo), 25 % Hoja, 10 % Oro, 5 % Lima solo cuando hay llamado a votar. Sin degradados ni colores fuera del sistema. CMYK y Pantone están en las notas de cada token; son aproximados y se validan con prueba física.

**Tipografía.** Montserrat para todo el texto. Titulares y cifras en Black Italic, en mayúsculas. Etiquetas en Medium o SemiBold Italic, en mayúsculas. Texto corrido en Regular o Medium recta. «62-1» siempre en Black Italic, con guion corto y sin espacios.

**El nombre del logo no es una fuente.** MESÍAS VILLACRÉS es letra vectorizada propia, no Montserrat. Se usa solo como archivo de logo y nunca se reescribe ni se imita con una tipografía. Siempre lleva sus dos tildes.

**Un solo ángulo.** 12° de inclinación para el badge, la caja PROGRESO, el CTA y el zócalo.

**Jerarquía fija en toda pieza.** (1) rostro → (2) nombre → (3) 62-1 → (4) mensaje → (5) CTA.

**Mensaje único.** «Santa Clara produce. Ahora que produzca el municipio.»

**Co-branding.** El logo del Movimiento va al pie, con altura de hasta el 50 % del logo del candidato, en mono Selva o mono blanco. No va logo de Centro Democrático: el badge dice solo ALIANZA 62-1.

## Libro de Dirección Visual · «Santa Clara produce»

Guía de rodaje del documental de campaña: 8 a 10 minutos, publicado por escenas durante ocho semanas. Trae 21 imágenes de referencia (tres por cada una de las siete unidades del relato) más el plano final, cada una con su ficha de dirección de fotografía: plano, luz, óptica, cámara, paleta, encuadre y lo que hay que evitar.

| Archivo | Para qué |
| --- | --- |
| [Libro-de-Direccion-Visual_Santa-Clara-produce.pdf](libro-direccion-visual/Libro-de-Direccion-Visual_Santa-Clara-produce.pdf) | El libro completo en PDF. |
| [web/](libro-direccion-visual/web/) | La versión web navegable, con visor a pantalla completa. Descarga el repo y abre `libro-direccion-visual/web/index.html` en el navegador. |
| [imagenes-alta/](libro-direccion-visual/imagenes-alta/) | Las referencias en alta resolución, ordenadas por unidad (U1 El Problema … U7 La Recompensa), y los cinco pares que unen el principio con el final. |

Las referencias marcan luz, encuadre, paleta y gesto para el rodaje real. No se publican tal cual, salvo los planos sin personas (llave, río, acta, botas), que sí pueden ir como insertos. Ningún rostro de habitante de Santa Clara se genera con inteligencia artificial: en el rodaje se filma gente real con consentimiento firmado. Si la imagen y la ficha no coinciden, manda la ficha.

## Pendientes conocidos

- Falta redibujar en el .ai el vector final de MESÍAS VILLACRÉS con tildes. Los PNG de [assets/](assets/) son una maqueta raster fiel al logo original.
- El logo animado (.mov) todavía muestra la versión sin tildes y hay que volver a renderizarlo.
- Las versiones mono del logo del Movimiento son siluetas provisionales hasta recibir el logo oficial a 1 tinta.
- El texto de la leyenda CNE está pendiente de validación del equipo legal.

## Uso

Material de la campaña Mesías Villacrés 2026, compartido para producir piezas de la campaña. No es material de licencia abierta. Montserrat se distribuye bajo la [SIL Open Font License](libro-direccion-visual/web/fonts/OFL.txt).
