import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Reservation.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Reservation() {
    const { ref, isVisible } = useScrollReveal(0.2);
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        motivo: 'Reserva de Mesa',
        observacao: ''
    });

    const formatPhone = (value) => {
        const numbers = value.replace(/\D/g, '').slice(0, 11);
        if (numbers.length <= 2) return numbers;
        if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'telefone') {
            setFormData({ ...formData, telefone: formatPhone(value) });
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text =
            `*Olá, Sky Lounge!*%0A%0A` +
            `*Nome:* ${formData.nome}%0A` +
            `*Telefone:* ${formData.telefone}%0A` +
            `*Motivo:* ${formData.motivo}%0A` +
            `*Observações:* ${formData.observacao}`;

        window.open(`https://wa.me/5511994376464?text=${text}`, '_blank');
    };

    return (
        <section className={`${styles.reservationSection} ${isVisible ? 'visible' : ''}`} id="reservas" ref={ref}>
            <div className={styles.container}>
                <div className={styles.contentGrid}>
                    <div className={styles.infoSide}>
                        <span className={`${styles.tagline} revealUp`}>
                            EXPERIÊNCIA EXCLUSIVA
                        </span>

                        <h2 className={`${styles.title} revealUp delay-1`}>
                            Garanta seu lugar acima da cidade
                        </h2>

                        <p className={`${styles.description} revealUp delay-2`}>
                            Reserve sua experiência e permita que nossa equipe
                            cuide de cada detalhe para uma noite memorável,
                            com vista privilegiada, atmosfera sofisticada e
                            atendimento personalizado.
                        </p>
                    </div>

                    <form className={`${styles.form} revealUp delay-3`} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Nome Completo"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />

                        <input
                            type="tel"
                            name="telefone"
                            placeholder="(11) 99999-9999"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                            className={styles.input}
                        />

                        <select
                            name="motivo"
                            value={formData.motivo}
                            onChange={handleChange}
                            className={styles.select}
                        >
                            <option value="Reserva de Mesa">Reserva de Mesa</option>
                            <option value="Comemoração de Aniversário">Comemoração de Aniversário</option>
                            <option value="Evento Corporativo">Evento Corporativo</option>
                            <option value="Apenas Conhecer o Local">Apenas Conhecer o Local</option>
                        </select>

                        <textarea
                            name="observacao"
                            placeholder="Observações ou pedidos especiais"
                            value={formData.observacao}
                            onChange={handleChange}
                            className={styles.textarea}
                        />

                        <button type="submit" className={styles.btnSubmit}>
                            <FaWhatsapp />
                            Reservar Agora
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}