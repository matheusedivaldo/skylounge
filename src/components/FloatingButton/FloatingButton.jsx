import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingButton.module.css';

export default function FloatingButton() {
    const whatsappUrl = "https://wa.me/5511994376464?text=Vim+pelo+site+e+gostaria+de+fazer+uma+reserva";

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.floatBtn}>
            <FaWhatsapp size={22} className={styles.icon} />
            <span className={styles.text}>Reservar Mesa</span>
        </a>
    );
}