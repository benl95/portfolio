import { theme } from 'components/styles/Theme.styles';

const handleFontSize = (
    size: string | undefined,
    fontSizeMap = theme.fontSizes
) => {
    switch (size) {
        case 'm':
            return fontSizeMap.filter((x: string) => x === '1rem');
        case 'l':
            return fontSizeMap.filter((x: string) => x === '1.5rem');
        case 'xl':
            return fontSizeMap.filter((x: string) => x === '1.875rem');
        case 'xxl':
            return fontSizeMap.filter((x: string) => x === '2.5rem');
        case 'xxxl':
            return fontSizeMap.filter((x: string) => x === '2.813rem');
        default:
            return fontSizeMap.filter((x: string) => x === '1rem');
    }
};

const handleContrastLevel = (
    contrast: string | undefined,
    contrastLevelMap = theme.contrastLevels
) => {
    return contrast === 'high'
        ? contrastLevelMap.filter((x: number) => x === 0.87)
        : contrastLevelMap.filter((x: number) => x === 0.6);
};

const handleFontWeight = (
    weight: string | undefined,
    weightMap = theme.fontWeights
) => {
    switch (weight) {
        case 'regular':
            return weightMap.filter((x: number) => x === 300);
        case 'bold':
            return weightMap.filter((x: number) => x === 500);
        case 'black':
            return weightMap.filter((x: number) => x === 800);
        default:
            return weightMap.filter((x: number) => x === 300);
    }
};

const handleTextDecoration = (isTrue: boolean | undefined): string => {
    return isTrue === true ? 'underline' : 'none';
};

export {
    handleFontSize,
    handleContrastLevel,
    handleTextDecoration,
    handleFontWeight,
};
