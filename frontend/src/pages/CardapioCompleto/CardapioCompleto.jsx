import React, { useEffect, useState } from 'react';
import styles from './CardapioCompleto.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const formatPrice = (price) => {
    const value = Number(price);
    if (Number.isNaN(value)) return null;
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const CategoryBlock = ({ section }) => {
    const { ref, isVisible } = useScrollReveal(0.15);

    return (
        <section className={`${styles.categoryBlock} ${isVisible ? 'visible' : ''}`} ref={ref}>
            <div className={`${styles.categoryHeader} revealUp`}>
                <h2 className={styles.categoryTitle}>{section.category}</h2>
                <div className={styles.separator}></div>
            </div>

            <div className={styles.grid}>
                {section.items.map((item, index) => (
                    <div key={index} className={`${styles.card} revealUp delay-${index + 1}`}>
                        {item.image ? (
                            <img src={item.image} alt={item.title} className={styles.cardImg} loading="lazy" />
                        ) : (
                            <div className={styles.cardImgPlaceholder} />
                        )}
                        <div className={styles.cardGradient}></div>
                        <div className={styles.cardInfo}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item.exibirPreco && formatPrice(item.price) && (
                                <span className={styles.cardPrice}>{formatPrice(item.price)}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const MenuSkeleton = () => (
    <div className={styles.skeletonGrid}>
        {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className={styles.skeletonCard} />
        ))}
    </div>
);

export default function CardapioCompleto() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);

    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        fetch(`${import.meta.env.VITE_API_URL}/menu`)
            .then(response => response.json())
            .then(data => {
                const groupedMenu = data.reduce((acc, item) => {
                    const categoryIndex = acc.findIndex(c => c.category === item.category);

                    const formattedItem = {
                        title: item.titulo,
                        description: item.descricao,
                        image: item.imagem_url || null,
                        price: item.preco,
                        exibirPreco: item.exibir_preco
                    };

                    if (categoryIndex > -1) {
                        acc[categoryIndex].items.push(formattedItem);
                    } else {
                        acc.push({ category: item.category, items: [formattedItem] });
                    }

                    return acc;
                }, []);

                setMenuData(groupedMenu);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar o cardápio da API:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <header className={`${styles.heroSection} ${heroVisible ? 'visible' : ''}`} ref={heroRef}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <span className={`${styles.tagline} revealUp`}>Nossa Assinatura</span>
                    <h1 className={`${styles.title} revealUp delay-1`}>Menu Exclusivo</h1>
                    <p className={`${styles.description} revealUp delay-2`}>
                        Uma jornada visual e gastronômica, desenhada para elevar os seus sentidos a um novo patamar.
                    </p>
                </div>
            </header>

            <main className={styles.mainContent}>
                {loading ? (
                    <MenuSkeleton />
                ) : error ? (
                    <p className={styles.errorMessage}>
                        Não foi possível carregar o cardápio agora. Tente novamente em instantes.
                    </p>
                ) : (
                    menuData.map((section, idx) => (
                        <CategoryBlock key={idx} section={section} />
                    ))
                )}
            </main>
        </div>
    );
}