import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, MapPin } from 'lucide-react';
import logoImg from '../../assets/img/logos/logo-04.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>

                <div className={styles.logoWrapper}>
                    <img src={logoImg} alt="Sky Lounge" className={styles.logo} />
                </div>

                <div className={`${styles.navMenu} ${isMenuOpen ? styles.menuActive : ''}`}>
                    <button className={styles.menuClose} onClick={() => setIsMenuOpen(false)} aria-label="Fechar Menu">
                        <X size={26} />
                    </button>

                    <div className={styles.navLinks}>
                        <a href="#proposta" onClick={() => setIsMenuOpen(false)}>A Casa</a>
                        <a href="#cardapio" onClick={() => setIsMenuOpen(false)}>Cardápio</a>
                        <a href="#reservas" onClick={() => setIsMenuOpen(false)}>Reservas</a>
                        <a href="#mapa" onClick={() => setIsMenuOpen(false)} className={styles.mobileOnlyLink}>Como Chegar</a>
                    </div>

                    <a href="https://wa.me/511994376464" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtnMobile}>
                        <MessageSquare size={16} />
                        <span>Fale Conosco</span>
                    </a>
                </div>

                <div className={styles.rightActions}>
                    <a href="#mapa" className={styles.mapsBtnDesktop}>
                        <MapPin size={14} />
                        <span>Como Chegar</span>
                    </a>
                    <a href="https://wa.me/511994376464" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtnDesktop}>
                        <MessageSquare size={14} />
                        <span>Fale Conosco</span>
                    </a>
                    <button className={styles.menuToggle} onClick={() => setIsMenuOpen(true)} aria-label="Abrir Menu">
                        <Menu size={26} />
                    </button>
                </div>

            </div>
        </nav>
    );
}