import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import styles from './Location.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Location() {
    const { ref, isVisible } = useScrollReveal(0.2);

    return (
        <section className={`${styles.locationSection} ${isVisible ? 'visible' : ''}`} id="localizacao" ref={ref}>
            <div className={styles.container}>
                <div className={styles.gridContainer}>

                    <div className={styles.infoSide}>
                        <span className={`${styles.tagline} revealUp`}>ONDE ESTAMOS</span>
                        <h2 className={`${styles.title} revealUp delay-1`}>O Topo de Osasco</h2>

                        <div className={`${styles.infoList} revealUp delay-2`}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Endereço</h3>
                                    <p>
                                        Rua Prof. Jose Azevedo Minhoto, 509 - Cobertura
                                        <br />
                                        Km 18, Osasco - SP
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaRegClock size={20} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Horário de Funcionamento</h3>
                                    <p>
                                        Quinta e Sexta: 18:00 às 00:00
                                        <br />
                                        Sábado e Domingo: 11:00 às 01:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.mapSide} revealUp delay-3`}>
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58529.20812470849!2d-46.86633591048591!3d-23.52978647805707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceffbe51b91623%3A0x11d52f2cef640622!2sTERRA%C3%87O%20I%20Sky%20Bar!5e0!3m2!1spt-BR!2sbr!4v1780881455843!5m2!1spt-BR!2sbr"
                                className={styles.mapIframe}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Sky Lounge"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}