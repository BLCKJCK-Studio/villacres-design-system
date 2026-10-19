Campaña de Mesías Villacrés a la Alcaldía del Cantón Santa Clara (Pastaza), elección del 29 de noviembre de 2026. Alianza Somos Progreso, Lista 62-1 (62 = Movimiento Integración Progreso y Cambio; 1 = partido aliado). Concepto: **SOMOS PROGRESO**, progreso con raíz.

> ⚠ **Toda pieza dice 62-1.** Nunca 61-1. El número de lista es un dato crítico: se verifica en cada pieza antes de publicar o imprimir.

Coherencia antes que creatividad: no inventes símbolos si los existentes resuelven. Todo debe funcionar a 1 tinta, a 3 metros y en un celular de gama baja bajo sol amazónico. La legibilidad del nombre y del número de lista está por encima de la estética.

## Fundamentos

**Esencia:** Progreso con raíz: el que trabajó la tierra de Santa Clara pone al municipio a producir.

**Atributos:** cercano · trabajador · arraigado.

| Es | No es |
| --- | --- |
| Cercano | Populista |
| Trabajador | Tecnocrático |
| Arraigado | Folclórico |
| Firme | Agresivo |
| Sobrio | Triste |

**Símbolos** (texto para prensa y discurso):
- **Sol-pirámide-espiral** (la A de MESÍAS): el origen. Una montaña con el petroglifo en espiral de la Amazonía y el sol que la levanta: raíz ancestral y energía que empieza.
- **Río** (la S de VILLACRÉS): el territorio que nos une. Piatúa, Anzu y Llandia son camino, alimento y continuidad.
- **Greca**: el tejido comunitario. Una espiral cuadrada que se repite módulo a módulo, como se construye una comunidad.

## Voz

- Frases cortas, verbos de acción, "nosotros" comunitario, español ecuatoriano cercano ("plata", "chacra", "mingas").
- Titulares en MAYÚSCULAS Black Italic; texto corrido en oración normal, recta.
- Mensaje único, congelado: **"Santa Clara produce. Ahora que produzca el municipio."**
- Nada de emojis como adorno, ni superlativos, ni cifras que no estén verificadas en la tabla de evidencias.
- Kichwa: solo textos traducidos por el candidato y verificados por un hablante de la PONAKICSC. Nunca traducción automática.
- Detalle en la sección *Voz y mensajes*.

## Color

- Usa los tokens semánticos, no los hex. Tema **crema** (fondo `surface` = Crema `#F8FDEF`) por defecto; tema **selva** (fondo Verde Selva) para negativos, cierres, lonas y banderas.
- Proporción: 60 % `selva-700`/`crema-50` (según el fondo) · 25 % `hoja-500` · 10 % `oro-600`/`oro-300` · 5 % `voto-400`, solo cuando hay llamado a votar.
- Texto corrido en `ink`; titulares y SOMOS en `brand-ink`; etiquetas verdes en `leaf-ink`; secundarios en `ink-muted`.
- `oro-600` es símbolo y gráfico sobre claro, **nunca texto** (3,8:1 sobre crema). Sobre Selva el dorado es `oro-300`.
- `voto-400` (Lima) vive solo en `CheckVoto`, `CtaVoto` y la franja del chaleco, y **siempre sobre Selva** (6,3:1). Sobre crema o blanco no se ve (1,6:1): prohibido.
- Prohibido: texto `hoja-500` sobre `selva-700` (3,0:1), oro sobre Selva en `oro-600`, degradados, colores fuera del sistema.
- Imprenta: CMYK y Pantone de cada color en su nota de token. Son aproximados y se validan con prueba física. Texto menor a 10 pt va en K100 o en Selva, nunca en negro de 4 colores.

## Tipografía

- **Montserrat para todo el texto.** League Spartan queda fuera del sistema. Arial Black es la única fuente de respaldo.
- **Única excepción: el nombre MESÍAS VILLACRÉS del logotipo.** Es letra vectorizada propia, no Montserrat. Solo existe como archivo de logo (*Logos*, *Isotipo*, componente `Logo`); nunca se reescribe ni se imita con una fuente.
- Display y cifras: Montserrat **Black Italic** (900) en MAYÚSCULAS, estilos `hero`, `h1`, `h2`, `mega`.
- Etiquetas: Montserrat **Medium/SemiBold Italic** en MAYÚSCULAS con tracking 0,06 em, estilos `label` y `eyebrow`.
- Texto corrido: Montserrat Regular/Medium **recta**, estilos `body` y `text`.
- La itálica es el gesto de avance de la marca: va en titulares, etiquetas, cifras y cajas. Nunca en texto corrido de más de una línea, datos legales ni formularios.
- "62-1" siempre en Black Italic, con guion corto y sin espacios. MESÍAS VILLACRÉS lleva siempre sus dos tildes; las mayúsculas también se tildan.
- Escalas: *Social 1080* para lienzos de 1080 px de ancho, *Pantalla* para web, *Impreso (pt)* para A5/A3. Exterior: altura de mayúscula (mm) ≥ distancia de lectura (m) × 8,5.

## Forma

- Un solo ángulo: `skew` = 12° para el badge, la caja PROGRESO, el CTA y el zócalo. El logotipo conserva su propio dibujo.
- Un solo radio en cajas inclinadas: `radius-box`. Tarjetas: `radius-md` en pantalla, `radius-card` en piezas.
- Sombras: solo `shadow-contact` bajo el recorte del candidato. Nunca en logo, badge ni texto.
- Jerarquía fija en toda pieza: **(1) rostro → (2) nombre → (3) 62-1 → (4) mensaje → (5) CTA.**

## Logo y marcas

- Usa los archivos de *Logos* e *Isotipo* o el componente `Logo`. Nunca reescribas el nombre en tipografía.
- Versiones: apilado (principal), compacto (sin año), horizontal, isotipo (sol-petroglifo para avatares y favicons). Cada una en full, negativo, mono Selva, mono blanco y mono negro.
- Área de protección de 1E por lado (E = altura de la E de MESÍAS = 13,4 % del ancho del apilado).
- Lockup completo: logo + SomosProgreso + Badge621 + "Candidato a la Alcaldía del Cantón Santa Clara" en `label`.
- Logo del Movimiento Integración Progreso y Cambio: no se rediseña. Va en zona de co-branding al pie, con altura ≤ 50 % del logo del candidato, separado por un filete `line`, en mono Selva o mono blanco. El full color solo aparece aislado.
- No va logo de Centro Democrático. El badge dice solo ALIANZA 62-1.
- Logo animado: 6 s para aperturas y 2 s (`dur-logo-corto`) para el cierre de cada reel, sobre Selva o crema, sin audio propio. El .mov actual muestra la versión sin tildes y hay que volver a renderizarlo.

## Iconografía

- 18 íconos propios (componente `Icono` o grupo *Iconos*), en línea de 2,25 sobre retícula de 24 con puntas redondeadas, derivados de los rayos del sol del logo.
- Sobre claro en `selva-700`; sobre Selva en blanco; solos, dentro de un círculo `selva-700` con el ícono blanco.
- Ni emojis ni íconos de otras librerías.

## Elementos gráficos

- **Greca** (`Greca`): de fondo, tono sobre tono. Densidades sutil 6 % / media 10 % / protagonista 18 % sobre crema; máx. 10 % en blanco sobre Selva. Nunca detrás del rostro ni del texto.
- **Río** (`Rio`): conector entre foto y texto o divisor de bloques; uno por pieza, nunca cruza el nombre ni el 62-1.
- **Sol-petroglifo** (isotipo): sello, marca de agua (máx. 8 % sobre claro) o bullet. Nunca reemplaza al logo completo en propaganda.

## Fotografía

- El candidato con **polo verde botella**, gesto firma **puño en el pecho**, mirada a cámara, luz natural cálida.
- Recortes con borde limpio, sin halo, con `shadow-contact` opcional. Exteriores con río, árboles y chacra del cantón.
- Detalle en la sección *Fotografía*.
