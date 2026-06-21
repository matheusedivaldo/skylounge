import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageWrapper.module.css';

export default function PageWrapper({ children }) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [location.pathname]);

    return (
        <div key={location.pathname} className={styles.pageContent}>
            {children}
        </div>
    );
}