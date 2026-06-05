import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import logoImg from '../../assets/img/logos/logo-mapa.png';
import styles from './Location.module.css';

export default function Location() {
    return (
        <section className={styles.locationSection} id="localizacao">
            <div className={styles.container}>
                <div className={styles.gridContainer}>

                    <div className={styles.infoSide}>
                        <span className={styles.tagline}>ONDE ESTAMOS</span>
                        <h2 className={styles.title}>O Topo de Osasco</h2>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Endereço</h3>
                                    <p>Rua Prof. Jose Azevedo Minhoto, 509 - Cobertura<br />Km 18, Osasco - SP</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaRegClock size={20} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Horário de Funcionamento</h3>
                                    <p>Quinta e Sexta: 18:00 às 00:00<br />Sábado e Domingo: 11:00 às 01:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapSide}>
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://maps.google.com/maps?q=Rua%20Prof.%20Jose%20Azevedo%20Minhoto,%20509,%20Osasco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                className={styles.mapIframe}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Sky Lounge"
                            ></iframe>
                            <div className={styles.customMarker}>
                                <img src={logoImg} alt="Sky Lounge" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}