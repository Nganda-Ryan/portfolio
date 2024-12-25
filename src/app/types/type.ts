export interface CodeCardType {
    title?: string;
    tech?: string [];
    description?: string;
    logo: string;
    children?: React.ReactNode;
    cumstomCss?: React.ReactNode;
}

export interface ProjectCardType {
    title?: string;
    img: string;
    demo: string;
    repo: string;
    children?: React.ReactNode;
    cumstomCss?: React.ReactNode;
}

export interface ButtonType {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
