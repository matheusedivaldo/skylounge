import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './MenuPreview.module.css';

export default function MenuPreview() {
    return (
        <section className={styles.menuSection} id="cardapio">
            <div className={styles.container}>

                <div className={styles.headerBox}>
                    <span className={styles.tagline}>CURADORIA GASTRONÔMICA</span>
                    <h2 className={styles.title}>Uma prévia do extraordinário</h2>
                </div>

                <div className={styles.mosaicGrid}>

                    <div className={`${styles.mosaicItem} ${styles.itemLarge}`}>
                        <div className={`${styles.image} ${styles.imgCocktail1}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Alta Coquetelaria</h3>
                            <p>Drinks autorais assinados por mixologistas renomados.</p>
                        </div>
                    </div>

                    <div className={`${styles.mosaicItem} ${styles.itemSmall}`}>
                        <div className={`${styles.image} ${styles.imgPlate1}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Entradas Premium</h3>
                            <p>Sabores sofisticados para abrir a noite.</p>
                        </div>
                    </div>

                    <div className={`${styles.mosaicItem} ${styles.itemSmall}`}>
                        <div className={`${styles.image} ${styles.imgCocktail2}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Clássicos Reinventados</h3>
                            <p>A perfeição técnica em releituras contemporâneas.</p>
                        </div>
                    </div>

                    <div className={`${styles.mosaicItem} ${styles.itemHorizontal}`}>
                        <div className={`${styles.image} ${styles.imgPlate2}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Gastronomia Urbana</h3>
                            <p>Pratos minimalistas com execução impecável.</p>
                        </div>
                    </div>

                </div>

                <div className={styles.actionBox}>
                    <a href="#cardapio-digital" className={styles.btnMenu}>
                        <span>Acessar Cardápio Digital</span>
                        <ArrowUpRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
}