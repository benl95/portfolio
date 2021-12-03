import { ThemeProps } from '@/types/theme';

const fontSizes = ['1rem', '1.875rem', '1.5rem', '2.813rem', '2.5rem'];
const contrastLevels = [0.6, 0.87];
const fontWeights = [300, 500, 800];
const spacing = ['2.25rem', '1.313rem'];

const colors = {
    darkBlue: '#1f2933',
    white: '#ffffff',
};

const theme: ThemeProps = {
    fontSizes,
    contrastLevels,
    fontWeights,
    colors,
    spacing,
};

export { theme, colors };
