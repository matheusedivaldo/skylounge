import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/img/logos/logo-04.png';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const whatsappUrl = "https://wa.me/5511994376464?text=Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    const handleLogoClick = () => {
        closeMenu();
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>

                <div className={styles.logoWrapper}>
                    <Link to="/" onClick={handleLogoClick}>
                        <img src={logoImg} alt="Sky Lounge" className={styles.logo} />
                    </Link>
                </div>

                <div className={`${styles.navMenu} ${isMenuOpen ? styles.menuActive : ''}`}>
                    <button className={styles.menuClose} onClick={closeMenu} aria-label="Fechar Menu">
                        <FaTimes size={26} />
                    </button>

                    <div className={styles.navLinks}>
                        <a href="/#proposta" onClick={closeMenu}>A Casa</a>
                        <a href="/#cardapio" onClick={closeMenu}>Cardápio</a>
                        <a href="/#reservas" onClick={closeMenu}>Reservas</a>
                        <a href="/#localizacao" onClick={closeMenu}>Como Chegar</a>
                    </div>
                </div>

                <div className={styles.rightActions}>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtnDesktop}>
                        <FaWhatsapp size={16} />
                        <span>Fale Conosco</span>
                    </a>
                    <button className={styles.menuToggle} onClick={() => setIsMenuOpen(true)} aria-label="Abrir Menu">
                        <FaBars size={26} />
                    </button>
                </div>

            </div>
        </nav>
    );
}