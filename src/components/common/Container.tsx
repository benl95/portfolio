import React, { Component } from 'react';
import { Children } from '@/types/content';

interface className {
    className?: string;
}
type Props = className & Children;

const Container = ({ className, children }: Props) => {
    return <div className={className}>{children}</div>;
};

export default Container;
