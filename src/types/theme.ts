import { colors } from 'components/styles/Theme.styles';
interface ThemeProps {
    fontSizes: string[];
    contrastLevels: number[];
    fontWeights: number[];
    colors: { [key in keyof typeof colors]: string };
    spacing: string[];
}

interface DimensionProps {
    size?: string;
    contrast?: string;
    underline?: boolean;
    weight?: string;
}

export type { ThemeProps, DimensionProps };
