import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import styles from './MenuPreview.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { formatPrice } from '../../utils/format';

const POSITIONS = [
    { wrapperClass: 'itemLarge', placeholderClass: 'imgCocktail1' },
    { wrapperClass: 'itemSmall', placeholderClass: 'imgPlate1' },
    { wrapperClass: 'itemSmall', placeholderClass: 'imgCocktail2' },
    { wrapperClass: 'itemHorizontal', placeholderClass: 'imgPlate2' },
];

const MosaicSkeleton = () => (
    <div className={styles.mosaicGrid}>
        {POSITIONS.map((position, index) => (
            <div
                key={index}
                className={`${styles.mosaicItem} ${styles[position.wrapperClass]}`}
            >
                <div className={`${styles.image} ${styles.skeletonItem}`}></div>
            </div>
        ))}
    </div>
);

export default function MenuPreview() {
    const { ref, isVisible } = useScrollReveal(0.15);

    const [destaques, setDestaques] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/menu/destaque`)
            .then(response => response.json())
            .then(data => {
                setDestaques(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar os destaques do cardápio:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <section className={`${styles.menuSection} ${isVisible ? 'visible' : ''}`} id="cardapio" ref={ref}>
            <div className={styles.container}>
                <div className={styles.headerBox}>
                    <span className={`${styles.tagline} revealUp`}>CURADORIA GASTRONÔMICA</span>
                    <h2 className={`${styles.title} revealUp delay-1`}>Uma prévia do extraordinário</h2>
                </div>

                {loading ? (
                    <MosaicSkeleton />
                ) : error ? (
                    <p className={styles.stateMessage}>
                        Não foi possível carregar os destaques agora. Tente novamente em instantes.
                    </p>
                ) : (
                    <div className={styles.mosaicGrid}>
                        {POSITIONS.map((position, index) => {
                            const item = destaques[index];
                            if (!item) return null;

                            return (
                                <div
                                    key={item.id}
                                    className={`${styles.mosaicItem} ${styles[position.wrapperClass]} revealUp delay-${index + 2}`}
                                >
                                    {item.imagem_url ? (
                                        <div
                                            className={styles.image}
                                            style={{ backgroundImage: `url(${item.imagem_url})` }}
                                        ></div>
                                    ) : (
                                        <div className={`${styles.image} ${styles[position.placeholderClass]}`}></div>
                                    )}
                                    <div className={styles.itemOverlay}>
                                        <h3>{item.titulo}</h3>
                                        <p>{item.descricao}</p>
                                        {item.exibir_preco && formatPrice(item.preco) && (
                                            <span className={styles.itemPrice}>{formatPrice(item.preco)}</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className={`${styles.actionBox} revealUp delay-6`}>
                    <Link to="/cardapio-digital" className={styles.btnMenu}>
                        <span>Acessar Cardápio Digital</span>
                        <FaArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
