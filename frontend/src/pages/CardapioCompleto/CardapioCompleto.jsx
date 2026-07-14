import React, { useEffect, useState } from 'react';
import styles from './CardapioCompleto.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default function CardapioCompleto() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);

    // Estados para armazenar os dados do banco e o status de carregamento
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // Busca os dados da nossa nova API
        fetch('http://127.0.0.1:8000/api/menu')
            .then(response => response.json())
            .then(data => {
                // Agrupa a lista plana que vem do banco por "categoria"
                const groupedMenu = data.reduce((acc, item) => {
                    const categoryIndex = acc.findIndex(c => c.category === item.categoria);

                    const formattedItem = {
                        title: item.titulo,
                        description: item.descricao,
                        image: item.imagem_url || null,
                        price: item.preco
                    };

                    if (categoryIndex > -1) {
                        acc[categoryIndex].items.push(formattedItem);
                    } else {
                        acc.push({ category: item.categoria, items: [formattedItem] });
                    }

                    return acc;
                }, []);

                setMenuData(groupedMenu);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar o cardápio da API:", error);
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
                {/* Exibe uma mensagem de carregamento enquanto busca os dados */}
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
                        Carregando o menu...
                    </div>
                ) : (
                    menuData.map((section, idx) => (
                        <CategoryBlock key={idx} section={section} />
                    ))
                )}
            </main>
        </div>
    );
}