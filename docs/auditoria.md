# Auditoría de inconsistencias

| Problema | Decisión | Justificación |
| --- | --- | --- |
| Lista '61-1' en una versión, '62-1' en las demás | 62-1 en todo el sistema. Cada plantilla lleva en su capa de guías: ⚠ VERIFICAR 62-1. | Un número equivocado anula la pieza. La Caja de Mensajes confirma 62-1. |
| MESIAS / MESÍAS | MESÍAS con tilde. La tilde es una barra de puntas redondeadas, misma geometría que los rayos del sol, en Verde Selva. | Ortografía correcta. Si sale de la geometría de los rayos, no parece un parche. |
| VILLACRES / Villacrés | VILLACRÉS con tilde también en el logo (aprobado). Se abrió interlineado entre filas para alojarla. | Aguda terminada en s. El redibujo vectorial final se hace en el .ai sobre esta maqueta. |
| Tres dorados: #9B7357, #CFA05E, #A58807 (y #987C3C en el .ai) | Oro Petroglifo #9B7C3F (dado por el cliente) sobre claro · Oro Claro #E2B862 sobre Selva. | El valor del cliente coincide con el #987C3C del .ai. Sobre Selva mide 2,7:1 y no alcanza, así que se mantiene Oro Claro (mismo tono, 40°) solo para fondo Selva. |
| Verdes oscuros: #084E28, #043A24, #0C4125, #07492A (badge y slogan en #043824) | Verde Selva #07492A. | Valor central del grupo; 10,5:1 sobre blanco. |
| Verde hoja sin valor definido (muestreado #608834 / #588028) | Verde Hoja #50993D (dado por el cliente) + Hoja 600 #438133 para texto pequeño. | El cliente fija el valor. Blanco sobre Hoja da 3,5:1: solo texto grande. Hoja 600 da 4,6:1 sobre crema para cuerpos chicos. |
| Lima #AECF08 fuera del sistema | Lima Voto #C1D305 (dado por el cliente), solo para acción de voto: check, CTA 'Marca 62-1', franja de chaleco. Solo sobre Selva. Máx. 5 %. | Sobre crema da 1,6:1. Sobre Selva da 6,3:1 y se vuelve la señal de 'votar'. |
| Check lima sobre crema (sticker moto actual) | Check oficial: cuadro Selva lleno + visto Lima. | Así el Lima siempre descansa sobre Selva. |
| Logo del movimiento con degradados | No se rediseña. Zona de co-branding en el pie, máx. 50 % de la altura del logo del candidato, en mono blanco o Selva. | La marca del candidato manda; los degradados no aguantan 1 tinta. |
| Tres tipografías sin roles | Montserrat para todo el texto: Black Italic (display y cifras), Medium/SemiBold Italic (etiquetas), Regular/Medium recta (texto). League Spartan sale. Única excepción: el nombre MESÍAS VILLACRÉS del logotipo, que es letra vectorizada propia y solo se usa como archivo de logo. | Una familia gratuita que cualquier imprenta puede instalar. El logotipo no se reescribe con ninguna fuente. |
| Ángulos distintos: badge 11,5°, slogan 11,6°, logotipo 7,5° | Ángulo del sistema: 12° para badge, caja PROGRESO, CTA, zócalo. El logotipo conserva su dibujo. | Se midió lo existente y se unificó en el valor más cercano. |
| Fondo crema verdoso #F1FFE4 / #FDFFE7 | Crema #F8FDEF (dado por el cliente). | Reemplaza a la Crema Tierra #F7F3E6 que se había propuesto. Selva sobre crema da 10,2:1 y Tinta 15,7:1. |
| Nombre de la alianza | El badge dice ALIANZA 62-1. No entra logo de Centro Democrático. La línea legal lleva 'Alianza Somos Progreso · Lista 62-1'. | Decisión aprobada: solo la alianza. |

## Corrección de color del cliente (2026-09-29)

El cliente fijó cuatro valores. Reemplazan a los que había propuesto esta auditoría en tokens, componentes, plantillas, logos full y Claude Design. Verde Selva #07492A, Tinta #12241A y Oro Claro #E2B862 no cambian.

| Color | Antes | Correcto (cliente) | Contraste medido (WCAG) | Uso que permite |
| --- | --- | --- | --- | --- |
| Verde Hoja | #5E8834 | **#50993D** | blanco 3,5:1 · crema 3,4:1 · Selva 3,0:1 | Caja PROGRESO y VILLACRÉS; texto solo grande. Texto chico en Hoja 600 #438133 (4,6:1 sobre crema). |
| Lima Voto | #AECF08 | **#C1D305** | Selva 6,3:1 · crema 1,6:1 | Solo check/CTA de voto sobre Selva. |
| Oro Petroglifo | #A97C2F | **#9B7C3F** | crema 3,8:1 · blanco 3,9:1 · Selva 2,7:1 | Símbolo y gráfico sobre claro, nunca texto. Sobre Selva sigue Oro Claro #E2B862 (5,7:1). |
| Crema | #F7F3E6 | **#F8FDEF** | Selva 10,2:1 · Tinta 15,7:1 | Fondo claro por defecto. |

La escala Hoja 50–900 se recalculó alrededor de #50993D. CMYK de los valores nuevos: conversión con el perfil Generic CMYK (aproximada). Pantone: por definir con la imprenta.
