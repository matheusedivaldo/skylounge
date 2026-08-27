import React from 'react';
import { FaMapMarkerAlt, FaRegClock, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
    const whatsappUrl = "https://wa.me/551154444408?text=Vim+pelo+site+e+gostaria+de+fazer+uma+reserva";

    return (
        <section className={styles.contactSection} id="reservas">
            <div className={styles.container}>

                <div className={styles.gridContainer}>
                    <div className={styles.infoSide}>
                        <span className={styles.tagline}>CONCIERGE & LOCALIZAÇÃO</span>
                        <h2 className={styles.title}>Sua noite começa aqui</h2>
                        <p className={styles.description}>
                            Garanta seu espaço no rooftop mais exclusivo de Osasco. Entre em contato com nosso concierge para reservas de mesas, camarotes ou eventos corporativos.
                        </p>

                        <div className={styles.infoList}>
                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Onde Estamos</h3>
                                    <p>Rua Prof. Jose Azevedo Minhoto, 509<br />Km 18, Osasco - SP</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconWrapper}>
                                    <FaRegClock size={20} />
                                </div>
                                <div className={styles.infoText}>
                                    <h3>Horário de Funcionamento</h3>
                                    <p>Quinta a Sábado: 19h às 04h<br />Domingo: 16h às 00h</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.actionGroup}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                <span>Reservar via WhatsApp</span>
                                <FaWhatsapp size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                <span>Siga o Instagram</span>
                                <FaArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.mapSide} id="mapa">
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://maps.google.com/maps?q=Rua%20Professor%20Jose%20Azevedo%20Minhoto,%20509%20-%20Osasco&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                className={styles.mapIframe}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Sky Lounge"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}