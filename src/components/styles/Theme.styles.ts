const fontSizes = ['1rem', '1.875rem', '1.5rem'];
const contrastLevels = [0.6, 0.87];
const fontWeights = [300, 500];

const colors = {
    darkBlue: '#1f2933',
    white: '#ffffff',
    red: '#ff0000',
};

interface ThemeProps {
    fontSizes: string[];
    contrastLevels: number[];
    fontWeights: number[];
    colors: { [key in keyof typeof colors]: string };
}

const theme: ThemeProps = {
    fontSizes,
    contrastLevels,
    fontWeights,
    colors,
};

export { theme };
export type { ThemeProps };
