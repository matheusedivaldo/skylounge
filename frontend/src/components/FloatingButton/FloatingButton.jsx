import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './FloatingButton.module.css';

export default function FloatingButton() {
    const whatsappUrl = "https://wa.me/5511994376464?text=Ol%C3%A1%21+Vim+pelo+site+e+quero+reservar+uma+mesa+para+curtir+com+voc%C3%AAs%21";

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.floatBtn}>
            <FaWhatsapp size={22} className={styles.icon} />
            <span className={styles.textDesktop}>Reservar Mesa</span>
            <span className={styles.textMobile}>Fale Conosco</span>
        </a>
    );
}