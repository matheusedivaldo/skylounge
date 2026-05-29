import React from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './MenuPreview.module.css';

export default function MenuPreview() {
    const featuredItems = [
        { name: 'Signature Sky', price: 'R$ 38', desc: 'Gin premium, infusão de frutas azuis, tônica e toque cítrico.' },
        { name: 'Golden Sunset', price: 'R$ 42', desc: 'Bourbon, xarope de mel trufado, limão siciliano e lâminas de ouro.' },
        { name: 'Rooftop Mules', price: 'R$ 36', desc: 'Vodka, suco de limão fresco, xarope de gengibre artesanal e espuma densa.' },
        { name: 'Dark Eclipse', price: 'R$ 40', desc: 'Rum envelhecido, licor de café, café espresso e finalização com cacau.' }
    ];

    return (
        <section className={styles.menuPreview} id="cardapio">
            <div className={styles.container}>
                <div className={styles.sideContent}>
                    <span className={styles.tagline}>EXPERIÊNCIA GASTRONÔMICA</span>
                    <h2 className={styles.title}>Alta coquetelaria e sabores refinados</h2>
                    <p className={styles.description}>
                        Nossa carta de drinks foi desenhada por especialistas para traduzir a sofisticação da noite. Cada ingrediente é selecionado para elevar sua experiência acima do comum.
                    </p>
                    <a href="#cardapio-completo" className={styles.btnMenu}>
                        Acessar Cardápio Digital
                        <ExternalLink size={16} />
                    </a>
                </div>

                <div className={styles.sideList}>
                    <div className={styles.listWrapper}>
                        {featuredItems.map((item, index) => (
                            <div key={index} className={styles.menuItem}>
                                <div className={styles.itemHeader}>
                                    <h3 className={styles.itemName}>{item.name}</h3>
                                    <span className={styles.itemDivider}></span>
                                    <span className={styles.itemPrice}>{item.price}</span>
                                </div>
                                <p className={styles.itemDesc}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}