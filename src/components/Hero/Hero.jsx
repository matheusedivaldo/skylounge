import React from 'react';
import { Calendar, MessageCircle, MapPin } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <p className={styles.subtitle}>ROOFTOP LOUNGE</p>
                <h1 className={styles.title}>A sua nova referência premium em Osasco</h1>
                <p className={styles.description}>
                    Uma experiência elevada onde a vista, o ambiente e a exclusividade se encontram.
                    Prepare-se para noites memoráveis acima da cidade.
                </p>

                <div className={styles.actions}>
                    <a href="#reservas" className={styles.btnPrimary}>
                        <Calendar size={18} />
                        Reservar Mesa
                    </a>
                    <a href="https://wa.me/511994376464" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                        <MessageCircle size={18} />
                        WhatsApp
                    </a>
                    <a href="#localizacao" className={styles.btnIcon} title="Ver Localização">
                        <MapPin size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}