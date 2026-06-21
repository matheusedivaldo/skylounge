import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styles from './MenuPreview.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function MenuPreview() {
    const { ref, isVisible } = useScrollReveal(0.15);

    return (
        <section className={`${styles.menuSection} ${isVisible ? 'visible' : ''}`} id="cardapio" ref={ref}>
            <div className={styles.container}>
                <div className={styles.headerBox}>
                    <span className={`${styles.tagline} revealUp`}>CURADORIA GASTRONÔMICA</span>
                    <h2 className={`${styles.title} revealUp delay-1`}>Uma prévia do extraordinário</h2>
                </div>

                <div className={styles.mosaicGrid}>
                    <div className={`${styles.mosaicItem} ${styles.itemLarge} revealUp delay-2`}>
                        <div className={`${styles.image} ${styles.imgCocktail1}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Alta Coquetelaria</h3>
                            <p>Drinks autorais assinados por mixologistas renomados.</p>
                        </div>
                    </div>

                    <div className={`${styles.mosaicItem} ${styles.itemSmall} revealUp delay-3`}>
                        <div className={`${styles.image} ${styles.imgPlate1}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Entradas Premium</h3>
                            <p>Sabores sofisticados para abrir a noite.</p>
                        </div>
                    </div>

                    <div className={`${styles.mosaicItem} ${styles.itemSmall} revealUp delay-4`}>
                        <div className={`${styles.image} ${styles.imgCocktail2}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Clássicos Reinventados</h3>
                            <p>A perfeição técnica em releituras contemporâneas.</p>
                        </div>
                    </div>

                    <div className={`${styles.mosaicItem} ${styles.itemHorizontal} revealUp delay-5`}>
                        <div className={`${styles.image} ${styles.imgPlate2}`}></div>
                        <div className={styles.itemOverlay}>
                            <h3>Gastronomia Urbana</h3>
                            <p>Pratos minimalistas com execução impecável.</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.actionBox} revealUp delay-6`}>
                    <Link to="/cardapio-digital" className={styles.btnMenu}>
                        <span>Acessar Cardápio Digital</span>
                        <FaArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}