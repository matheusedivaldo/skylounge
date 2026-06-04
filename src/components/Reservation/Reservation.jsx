import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Reservation.module.css';

export default function Reservation() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        motivo: 'Reserva de Mesa',
        observacao: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `*Olá, Sky Lounge!*%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}%0A*Motivo:* ${formData.motivo}%0A*Observações:* ${formData.observacao}`;
        const url = `https://wa.me/5511994376464?text=${text}`;
        window.open(url, '_blank');
    };

    return (
        <section className={styles.reservationSection} id="reservas">
            <div className={styles.container}>
                <div className={styles.headerBox}>
                    <span className={styles.tagline}>EXPERIÊNCIA EXCLUSIVA</span>
                    <h2 className={styles.title}>Garanta seu lugar</h2>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Seu Nome Completo"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            className={styles.input}
                        />
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Seu WhatsApp"
                            required
                            value={formData.telefone}
                            onChange={handleChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.inputGroupFull}>
                        <select
                            name="motivo"
                            value={formData.motivo}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="Reserva de Mesa">Reserva de Mesa</option>
                            <option value="Comemoração de Aniversário">Comemoração de Aniversário</option>
                            <option value="Evento Corporativo">Evento Corporativo</option>
                            <option value="Apenas Conhecer">Apenas Conhecer o Local</option>
                        </select>
                    </div>

                    <div className={styles.inputGroupFull}>
                        <textarea
                            name="observacao"
                            placeholder="Alguma observação ou pedido especial? (Opcional)"
                            value={formData.observacao}
                            onChange={handleChange}
                            className={styles.textarea}
                            rows="4"
                        ></textarea>
                    </div>

                    <div className={styles.actionBox}>
                        <button type="submit" className={styles.btnSubmit}>
                            <span>Enviar Reserva</span>
                            <FaWhatsapp size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}