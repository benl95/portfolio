import { colors } from '@/styles/Theme.styles';

interface ThemeProps {
    fontSizes: string[];
    contrastLevels: number[];
    fontWeights: number[];
    colors: { [key in keyof typeof colors]: string };
}

interface DimensionProps {
    size?: string;
    contrast?: number;
}

export type { ThemeProps, DimensionProps };
