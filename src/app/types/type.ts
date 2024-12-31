export interface CodeCardType {
    title: string;
    tech: string [];
    description: string;
    logo: string;
    children?: React.ReactNode;
    cumstomCss?: string;
    stripColor?: StripBgColor
}

export interface ProjectCardType {
    title?: string;
    img: string;
    demo: string;
    repo: string;
    description: string;
    children?: React.ReactNode;
    cumstomCss?: string;
}

export interface ButtonType {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export enum StripBgColor {
    Blue = 'after:bg-blue-500',
    Green = 'after:bg-green-600',
    Indigo = 'after:bg-indigo-500',
    Pink = 'after:bg-pink-500',
    Gray = 'after:bg-gray-600',
    Red = 'after:bg-red-400',
}

export type AOSAnimationSide =
| "fade"
| "fade-up"
| "fade-down"
| "fade-left"
| "fade-right"
| "fade-up-right"
| "fade-up-left"
| "fade-down-right"
| "fade-down-left"
| "flip-left"
| "flip-right"
| "flip-up"
| "flip-down"
| "slide-up"
| "slide-down"
| "slide-left"
| "slide-right"
| "zoom-in"
| "zoom-in-up"
| "zoom-in-down"
| "zoom-in-left"
| "zoom-in-right"
| "zoom-out"
| "zoom-out-up"
| "zoom-out-down"
| "zoom-out-left"
| "zoom-out-right";