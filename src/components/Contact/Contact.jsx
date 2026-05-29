import React from 'react';
import { MapPin, Phone, Camera, Clock, CalendarCheck } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contact} id="reservas">
            <div className={styles.container}>
                <div className={styles.infoSide}>
                    <span className={styles.tagline}>RESERVAS E CONTATO</span>
                    <h2 className={styles.title}>Planeje sua noite exclusiva</h2>
                    <p className={styles.description}>
                        Garante o seu lugar no topo. Entre em contato para reservas de mesas, lounges privativos ou eventos corporativos na nova referência premium da região.
                    </p>

                    <div className={styles.detailsList}>
                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}>
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4>Localização</h4>
                                <p>Osasco - SP (Em breve endereço completo)</p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}>
                                <Clock size={20} />
                            </div>
                            <div>
                                <h4>Horários (Inauguração)</h4>
                                <p>Quinta a Domingo — Das 18h às 02h</p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}>
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4>WhatsApp</h4>
                                <p>(11) 99437-6464</p>
                            </div>
                        </div>

                        <div className={styles.detailItem}>
                            <div className={styles.iconBox}>
                                <Camera size={20} />
                            </div>
                            <div>
                                <h4>Instagram</h4>
                                <p>@blackewhitemkt</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.actionSide}>
                    <div className={styles.bookingCard}>
                        <CalendarCheck size={40} className={styles.bookingIcon} />
                        <h3>Pré-Reserva & Lista VIP</h3>
                        <p>Seja um dos primeiros a vivenciar a experiência do rooftop antes da abertura oficial para o público geral.</p>
                        <a href="https://wa.me/511994376464?text=Quero+garantir+minha+reserva+no+Sky+Lounge" target="_blank" rel="noopener noreferrer" className={styles.btnBooking}>
                            Solicitar Reserva via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}