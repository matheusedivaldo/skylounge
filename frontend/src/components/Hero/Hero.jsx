import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './Hero.module.css';
import banner01 from '../../assets/img/banners/01.jpeg';
import banner02 from '../../assets/img/banners/02.jpeg';
import banner03 from '../../assets/img/banners/03.jpeg';

const slidesData = [
    {
        id: 1,
        subtitle: 'ROOFTOP LOUNGE',
        title: 'A sua nova referência em Osasco',
        description: 'Uma experiência elevada onde vista, ambiente e exclusividade se encontram.',
        image: banner01
    },
    {
        id: 2,
        subtitle: 'ALTA COQUETELARIA',
        title: 'Sabores refinados acima da cidade',
        description: 'Carta exclusiva desenhada para pulsar com a atmosfera da cena noturna.',
        image: banner02
    },
    {
        id: 3,
        subtitle: 'CULTURA DA CELEBRAÇÃO',
        title: 'Cenários à altura do seu momento',
        description: 'Arquitetura marcante e sofisticação para vivências muito acima do comum.',
        image: banner03
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const whatsappUrl = "https://wa.me/5511994376464?text=Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es";

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent(current === slidesData.length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? slidesData.length - 1 : current - 1);

    return (
        <section className={styles.heroWrapper}>
            <div className={styles.outerFrame}></div>

            {slidesData.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`${styles.slide} ${index === current ? styles.activeSlide : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <span className={styles.subtitle}>{slide.subtitle}</span>
                        <h1 className={styles.title}>{slide.title}</h1>
                        <p className={styles.description}>{slide.description}</p>
                        <div className={styles.actions}>
                            <a href="#reservas" className={styles.btnPrimary}>
                                <FaCalendarAlt size={16} />
                                Reservar Agora
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                <FaWhatsapp size={16} />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            <button className={styles.arrowLeft} onClick={prevSlide}>
                <FaChevronLeft size={24} />
            </button>
            <button className={styles.arrowRight} onClick={nextSlide}>
                <FaChevronRight size={24} />
            </button>

            <div className={styles.heroFooter}>
                <div className={styles.indicators}>
                    {slidesData.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === current ? styles.activeDot : ''}`}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}