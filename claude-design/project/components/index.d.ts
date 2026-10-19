import type * as React from 'react';
export type On = 'light' | 'dark';
export interface LogoProps { version?: 'apilado' | 'compacto' | 'horizontal' | 'isotipo'; color?: 'full' | 'negativo' | 'mono-selva' | 'mono-blanco' | 'mono-negro'; width?: number; alt?: string }
export declare function Logo(props: LogoProps): React.ReactElement;
export interface Badge621Props { variant?: 'horizontal' | 'vertical' | 'mini'; on?: On; size?: number }
export declare function Badge621(props: Badge621Props): React.ReactElement;
export interface SomosProgresoProps { word?: string; stacked?: boolean; on?: On; size?: number }
export declare function SomosProgreso(props: SomosProgresoProps): React.ReactElement;
export interface CtaVotoProps { label?: 'VOTA' | 'MARCA'; on?: On; size?: number }
export declare function CtaVoto(props: CtaVotoProps): React.ReactElement;
export interface CheckVotoProps { size?: number; on?: On }
export declare function CheckVoto(props: CheckVotoProps): React.ReactElement;
export interface ZocaloProps { nombre?: string; cargo?: string; size?: number }
export declare function Zocalo(props: ZocaloProps): React.ReactElement;
export interface AvatarProps { src?: string; size?: number; badge?: boolean; alt?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface TarjetaPropuestaProps { icon?: IconName; eyebrow?: string; titulo?: string; texto?: string }
export declare function TarjetaPropuesta(props: TarjetaPropuestaProps): React.ReactElement;
export interface TarjetaConcejalProps { src?: string; nombre?: string; apellido?: string; cargo?: string; casillero?: string }
export declare function TarjetaConcejal(props: TarjetaConcejalProps): React.ReactElement;
export type IconName = 'agua' | 'vias' | 'agricultura' | 'salud' | 'educacion' | 'turismo' | 'seguridad' | 'deporte' | 'mujer' | 'juventud' | 'motos' | 'comunidad' | 'ambiente' | 'vivienda' | 'produccion' | 'transparencia' | 'adulto-mayor' | 'cultura';
export interface IconoProps { name: IconName; size?: number; color?: string }
export declare function Icono(props: IconoProps): React.ReactElement;
export interface RioProps { width?: number; height?: number }
export declare function Rio(props: RioProps): React.ReactElement;
export interface GrecaProps { density?: 'sutil' | 'media' | 'protagonista'; on?: On; style?: React.CSSProperties; children?: React.ReactNode }
export declare function Greca(props: GrecaProps): React.ReactElement;
declare global { interface Window { Villacres: { Logo: typeof Logo; Badge621: typeof Badge621; SomosProgreso: typeof SomosProgreso; CtaVoto: typeof CtaVoto; CheckVoto: typeof CheckVoto; Zocalo: typeof Zocalo; Avatar: typeof Avatar; TarjetaPropuesta: typeof TarjetaPropuesta; TarjetaConcejal: typeof TarjetaConcejal; Icono: typeof Icono; Rio: typeof Rio; Greca: typeof Greca } } }
