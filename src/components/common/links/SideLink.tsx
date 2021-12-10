import React from 'react';
import styles from './SideLink.module.css';
import { Children } from '@/types/elements';

const SideLink = ({ children }: Children) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Wrapper}>{children}</div>
        </div>
    );
};

export default SideLink;
