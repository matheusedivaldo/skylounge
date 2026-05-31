import React from 'react';
import { MessageSquare, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import logoImg from '../../assets/img/logos/logo-04.png';
import styles from './Footer.module.css';

export default function Footer() {
    const whatsappUrl = "https://wa.me/5511994376464?text=Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es";

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.topSection}>
                    <div className={styles.brandCol}>
                        <img src={logoImg} alt="Sky Lounge" className={styles.logo} />
                        <p className={styles.brandDesc}>
                            A sua nova referência premium em Osasco. Uma experiência elevada onde vista, ambiente e exclusividade se encontram.
                        </p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Navegação</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#proposta">A Casa</a></li>
                            <li><a href="#cardapio">Cardápio</a></li>
                            <li><a href="#reservas">Reservas</a></li>
                            <li><a href="#mapa">Como Chegar</a></li>
                        </ul>
                    </div>

                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>Contato</h4>
                        <ul className={styles.infoList}>
                            <li>
                                <MapPin size={16} />
                                <span>Rua Prof. Jose Azevedo Minhoto, 509<br />Km 18, Osasco - SP</span>
                            </li>
                            <li>
                                <MessageSquare size={16} />
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    +55 11 99437-6464
                                </a>
                            </li>
                            <li>
                                <FaInstagram size={16} />
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    @skylounge
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottomSection}>
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