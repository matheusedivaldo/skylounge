import React from 'react';
import styles from './About.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
    const { ref, isVisible } = useScrollReveal(0.2);

    return (
        <section className={`${styles.aboutSection} ${isVisible ? 'visible' : ''}`} id="proposta" ref={ref}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>
                    <div className={styles.textSide}>
                        <span className={`${styles.tagline} revealUp`}>A EXPERIÊNCIA</span>

                        <h2 className={`${styles.title} revealUp delay-1`}>
                            O ponto mais alto de Osasco
                        </h2>

                        <p className={`${styles.description} revealUp delay-2`}>
                            O Sky Lounge Rooftop representa uma experiência elevada, onde vista, ambiente e exclusividade se encontram. Um espaço desenvolvido para entregar atmosfera envolvente e uma nova referência de entretenimento premium na região.
                        </p>

                        <div className={`${styles.pillars} revealUp delay-3`}>
                            <div className={styles.pillar}>
                                <span>01</span>
                                <div>
                                    <h3>Qualidade Absoluta</h3>
                                    <p>Excelência operacional e curadoria em cada ponto de contato.</p>
                                </div>
                            </div>
                            <div className={styles.pillar}>
                                <span>02</span>
                                <div>
                                    <h3>Cultura da Celebração</h3>
                                    <p>Experiências que elevam emoções e transformam noites em memórias.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.imageSide} revealUp delay-4`}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.mainImage}></div>
                            <div className={styles.decorCard}>
                                <h4>EXCLUSIVIDADE SILENCIOSA</h4>
                                <p>Ambiente seleto e atenção personalizada.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}