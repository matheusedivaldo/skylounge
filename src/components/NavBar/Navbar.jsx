import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    SKY LOUNGE<span>ROOFTOP</span>
                </div>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <a href="#proposta" onClick={() => setIsMenuOpen(false)}>A Casa</a>
                    <a href="#cardapio" onClick={() => setIsMenuOpen(false)}>Cardápio</a>
                    <a href="#reservas" onClick={() => setIsMenuOpen(false)}>Reservas</a>
                    <a href="https://wa.me/511994376464" target="_blank" rel="noopener noreferrer" className={styles.btnNav}>
                        Contato
                    </a>
                </div>

                <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}