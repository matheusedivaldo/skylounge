import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandSide}>
                    <h3>SKY LOUNGE</h3>
                    <p>Experiências elevadas acima da cidade.</p>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomSide}>
                    <p className={styles.copy}>
                        &copy; {currentYear} Sky Lounge Rooftop. Todos os direitos reservados.
                    </p>
                    <p className={styles.credits}>
                        Desenvolvido por <span>dev_matheus</span> &bull; Identidade por <span>Black & White Marketing</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}