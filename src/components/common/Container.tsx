import React, { Component } from 'react';
import { Children } from '@/types/content';

const Container = ({ children }: Children) => {
    return <div>{children}</div>;
};

export default Container;
