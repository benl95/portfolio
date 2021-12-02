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

export { handleFontSize, handleContrastLevel };
