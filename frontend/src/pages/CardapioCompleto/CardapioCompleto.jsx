import React, { useEffect } from 'react';
import styles from './CardapioCompleto.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const menuData = [
    {
        category: 'Alta Coquetelaria',
        items: [
            {
                title: 'Sky Sunset',
                description: 'Gin, licor de pêssego, tônica, espuma de gengibre e flor de hibisco.',
                image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1000'
            },
            {
                title: 'Osasco Mule',
                description: 'Vodka premium, suco de limão, xarope simples e espuma de gengibre autoral.',
                image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000'
            },
            {
                title: 'Negroni Envelhecido',
                description: 'Gin, Campari e Vermute tinto, descansado em barril de carvalho.',
                image: 'https://images.unsplash.com/photo-1568644396922-5c3bfae12521?q=80&w=1000'
            },
            {
                title: 'Botânico G&T',
                description: 'Gin premium, água tônica, zimbro, alecrim fresco e rodela de limão siciliano.',
                image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1000'
            }
        ]
    },
    {
        category: 'Entradas Premium',
        items: [
            {
                title: 'Burrata Trufada',
                description: 'Burrata cremosa, azeite trufado, tomatinhos confit e pão de fermentação natural.',
                image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1200'
            },
            {
                title: 'Steak Tartare',
                description: 'Filé mignon picado na ponta da faca, alcaparras, mostarda dijon e chips de batata.',
                image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000'
            },
            {
                title: 'Carpaccio de Salmão',
                description: 'Lâminas finas de salmão fresco, azeite de ervas, flor de sal e raspas de limão.',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000'
            },
            {
                title: 'Arancini de Cogumelos',
                description: 'Bolinhos de risoto recheados com mix de cogumelos e queijo fontina derretido.',
                image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000'
            }
        ]
    },
    {
        category: 'Pratos Principais',
        items: [
            {
                title: 'Risoto de Filet',
                description: 'Arroz arbóreo cremoso, vinho tinto, parmesão curado e iscas de filet mignon.',
                image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000'
            },
            {
                title: 'Polvo Grelhado',
                description: 'Tentáculos de polvo na brasa, batatas ao murro e páprica defumada.',
                image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1000'
            },
            {
                title: 'Bife Ancho Premium',
                description: 'Corte nobre grelhado, acompanhado de purê de mandioquinha e farofa de bacon.',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000'
            },
            {
                title: 'Salmão em Crosta',
                description: 'Posta de salmão com crosta de amêndoas e risoto de limão siciliano.',
                image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?q=80&w=1000'
            }
        ]
    },
    {
        category: 'Sobremesas',
        items: [
            {
                title: 'Tiramisu Desconstruído',
                description: 'Creme de mascarpone, biscoito champagne embebido no café espresso e cacau em pó.',
                image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000'
            },
            {
                title: 'Cheesecake de Frutas Vermelhas',
                description: 'Base crocante, creme leve de queijo e calda artesanal de frutas do bosque.',
                image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000'
            },
            {
                title: 'Fondant de Chocolate',
                description: 'Petit gâteau com recheio cremoso e sorvete de baunilha em favas.',
                image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1000'
            }
        ]
    }
];

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
                        <img src={item.image} alt={item.title} className={styles.cardImg} loading="lazy" />
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

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
                {menuData.map((section, idx) => (
                    <CategoryBlock key={idx} section={section} />
                ))}
            </main>
        </div>
    );
}