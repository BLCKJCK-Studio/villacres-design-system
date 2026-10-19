# Formatos y retículas

Jerarquía fija en todos: **(1) rostro → (2) nombre → (3) 62-1 → (4) mensaje → (5) CTA.** Las vistas previas de cada plantilla están en el grupo *Plantillas*: cian = zona editable o segura, magenta = corte o pliegue. Las guías nunca se publican.

| Formato | Tamaño | Zonas y reglas |
| --- | --- | --- |
| Post cuadrado | 1080 × 1080 px | Margen seguro 64 px (`space-16`). Foto a la izquierda; logo, badge y CTA a la derecha. |
| Post vertical | 1080 × 1350 px | Margen 64 px. En la grilla de IG se ve el recorte 3:4 central (1080 × 1440 sobre la story), así que nada crítico fuera de él. |
| Story / reel | 1080 × 1920 px | UI superior `safe-story-top` 250 px, inferior `safe-story-bottom` 340 px, botones de TikTok `safe-story-right` 120 px. Rostro en el tercio medio; badge por encima de la franja inferior. |
| Banner vehicular | 6496 × 886 px | Máx. 4 elementos: foto, logo, slogan y badge. Badge con alto ≥ 75 % del banner. Se lee en movimiento. |
| Valla / gigantografía | 8 × 3 m | 62-1 ≥ 40 % del alto. Mayúsculas ≥ 255 mm (lectura a 30 m). Sangrado 30 mm. |
| Lona de tarima | 6 × 2,5 m | Fondo Selva. Los 700 mm inferiores quedan tapados por personas y atril: nada crítico ahí. |
| Sticker de moto | Ø 100 mm | Troquel circular, zona segura 3 mm, fondo crema. Check oficial, no el Lima suelto. |
| Sticker de auto | 200 × 70 mm | '62-1' ≥ 26 mm de alto. |
| Calcomanía de parabrisas | 300 × 80 mm | Franja superior; impresión reversa si va por dentro; fuera del campo visual del conductor. |
| Volante | A5 | Sangrado 3 mm, zona segura 5 mm, franja Selva inferior con 3 propuestas y CTA. |
| Díptico | A4 abierto | Portada a la derecha en Selva; interior con máx. 3 `TarjetaPropuesta` por cara. |
| Afiche | A3 | 62-1 ≥ 50 mm de alto; franja Selva inferior con slogan y CTA. |
| Papeleta demostrativa | A5 horizontal | "PAPELETA DEMOSTRATIVA · NO VÁLIDA PARA VOTAR". Casilleros ajenos en gris, sin nombres ni logos de terceros. La posición del 62-1 se confirma con la papeleta oficial del CNE. |
| Camiseta | espalda 280 × 350 mm | Serigrafía de 2 tintas (blanco + oro) sobre Selva; isotipo de 70 mm en el pecho. |
| Gorra | frente 110 × 55 mm | Bordado: compacto mono blanco; trazo mínimo de 1,2 mm. |
| Chaleco de brigadista | espalda 320 × 360 mm | Franja Lima con "BRIGADA 62-1", el único uso textil del Lima. |
| Bandera | 1500 × 1000 mm | Jareta de 80 mm; se ve al revés desde atrás, así que nada crítico en el borde libre. |
| Zócalo de video | 1920 × 1080 px | Title-safe de 96 px (`space-24`). `Zocalo` ≥ 4 s. |
| Placa de cierre | 1080 × 1920 px | Obligatoria en los últimos 2 s de todo reel: logo negativo + badge + CTA. |
| Credencial | CR80 54 × 86 mm | Franja Lima con BRIGADISTA o TESTIGO ELECTORAL; foto, nombre, C.I., JRV y recinto. |

## Reels

- En los primeros 2 s: rostro del candidato o el tema en `hero`; nunca el logo animado.
- Subtítulos en Montserrat Bold recta, 44–52 px, blancos sobre caja Selva al 85 %, centrados sobre la franja inferior de UI, máx. 2 líneas de 32 caracteres.
- Cierre obligatorio: logo animado corto (2 s) + `Badge621` + `CtaVoto`.

## Movimiento

- El río fluye: entradas en S con `ease-rio` (400 ms). El sol irradia: el badge aparece con `ease-sol` y un pulso único. La greca se teje: aparece módulo a módulo en 8 pasos.
- Nunca más de un movimiento a la vez. Respeta la preferencia de movimiento reducido.
