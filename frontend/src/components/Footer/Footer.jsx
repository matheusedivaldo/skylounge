import React from 'react';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaLock } from 'react-icons/fa';
import logoImg from '../../assets/img/logos/sky-lounge-logo-full.svg';
import styles from './Footer.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Footer() {
    const { ref, isVisible } = useScrollReveal(0.1);
    const whatsappUrl = "https://wa.me/551154444408?text=Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es";
    const adminUrl = `${(import.meta.env.VITE_API_URL || '').replace(/\/api\/?$/, '')}/admin`;

    return (
        <footer className={`${styles.footer} ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className={styles.container}>

                <div className={styles.topSection}>
                    <div className={`${styles.brandCol} revealUp`}>
                        <img src={logoImg} alt="Sky Lounge" className={styles.logo} />
                        <p className={styles.brandDesc}>
                            A sua nova referência premium em Osasco. Uma experiência elevada onde vista, ambiente e exclusividade se encontram.
                        </p>
                    </div>

                    <div className={`${styles.linksCol} revealUp delay-1`}>
                        <h4 className={styles.colTitle}>Navegação</h4>
                        <ul className={styles.linkList}>
                            <li><a href="/#proposta">A Casa</a></li>
                            <li><a href="/#cardapio">Cardápio</a></li>
                            <li><a href="/#reservas">Reservas</a></li>
                            <li><a href="/#localizacao">Como Chegar</a></li>
                        </ul>
                    </div>

                    <div className={`${styles.contactCol} revealUp delay-2`}>
                        <h4 className={styles.colTitle}>Contato</h4>
                        <ul className={styles.infoList}>
                            <li>
                                <FaMapMarkerAlt size={16} />
                                <span>Rua Prof. Jose Azevedo Minhoto, 509 - Cobertura<br />Km 18, Osasco - SP</span>
                            </li>
                            <li>
                                <FaWhatsapp size={16} />
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    (11) 5444-4408
                                </a>
                            </li>
                            <li>
                                <FaInstagram size={16} />
                                <a href="https://www.instagram.com/skyloungerftp" target="_blank" rel="noopener noreferrer">
                                    @skyloungerftp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.bottomSection} revealUp delay-3`}>
                    <a href={adminUrl} target="_blank" rel="noopener noreferrer" className={styles.adminLink}>
                        <FaLock size={11} />
                        Acesso Administrativo
                    </a>
                    <p className={styles.developer}>
                        Desenvolvido por <a href="https://matheusedivaldo.com.br/" target="_blank" rel="noopener noreferrer">Matheus Edivaldo</a>
                    </p>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Sky Lounge Rooftop. Todos os direitos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}