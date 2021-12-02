import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/styles/Theme.styles';
import { Children } from '@/types/content';

const Theme = ({ children }: Children) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
