import React from 'react';
import styles from './SideLink.module.css';
import { Children } from '@/types/elements';

interface Orientation {
    orientation: any;
}

type Props = Orientation & Children;

const SideLink = ({ children, orientation }: Props) => {
    return (
        <div className={styles.Container} style={{ float: orientation }}>
            <div className={styles.Wrapper}>{children}</div>
        </div>
    );
};

export default SideLink;
