import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

const slidesData = [
    {
        id: 1,
        subtitle: 'ROOFTOP LOUNGE',
        title: 'A sua nova referência premium em Osasco',
        description: 'Uma experiência elevada onde a vista, o ambiente e a exclusividade se encontram. Conectando pessoas e transformando noites em memórias.',
        image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1920'
    },
    {
        id: 2,
        subtitle: 'ALTA COQUETELARIA',
        title: 'Sabores refinados acima da cidade',
        description: 'Cada detalhe importa. Uma carta de drinks exclusiva desenhada por especialistas para pulsar com a atmosfera da cena noturna.',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920'
    },
    {
        id: 3,
        subtitle: 'CULTURA DA CELEBRAÇÃO',
        title: 'Momentos especiais merecem cenários à altura',
        description: 'Arquitetura contemporânea, iluminação marcante e sofisticação silenciosa para quem busca vivências muito acima do comum.',
        image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920'
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

    const nextSlide = () => {
        setCurrent(current === slidesData.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slidesData.length - 1 : current - 1);
    };

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
                                <Calendar size={16} />
                                Reservar Agora
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                <MessageCircle size={16} />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            ))}

            <button className={styles.arrowLeft} onClick={prevSlide} aria-label="Slide anterior">
                <ChevronLeft size={24} />
            </button>
            <button className={styles.arrowRight} onClick={nextSlide} aria-label="Próximo slide">
                <ChevronRight size={24} />
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