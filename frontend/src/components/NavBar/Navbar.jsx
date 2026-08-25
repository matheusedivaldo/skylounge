import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import logoImg from '../../assets/img/logos/sky-lounge-logo-full.svg';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

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
                        <Link to="/proposta" onClick={closeMenu}>A Casa</Link>
                        <Link to="/cardapio" onClick={closeMenu}>Cardápio</Link>
                        <Link to="/galeria" onClick={closeMenu}>Galeria</Link>
                        <Link to="/localizacao" onClick={closeMenu}>Como Chegar</Link>
                    </div>
                </div>

                <div className={styles.rightActions}>
                    <a href="tel:+551154444408" className={styles.phoneLink}>
                        <FaPhoneAlt size={15} />
                        <span>(11) 5444-4408</span>
                    </a>
                    <button className={styles.menuToggle} onClick={() => setIsMenuOpen(true)} aria-label="Abrir Menu">
                        <FaBars size={26} />
                    </button>
                </div>

            </div>
        </nav>
    );
}