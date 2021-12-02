import { ThemeProps } from '@/types/theme';

const fontSizes = ['1rem', '1.875rem', '1.5rem'];
const contrastLevels = [0.6, 0.87];
const fontWeights = [300, 500];

const colors = {
    darkBlue: '#1f2933',
    white: '#ffffff',
    red: '#ff0000',
};

const theme: ThemeProps = {
    fontSizes,
    contrastLevels,
    fontWeights,
    colors,
};

export { theme, colors };
