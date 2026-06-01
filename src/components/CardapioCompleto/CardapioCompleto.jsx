import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './CardapioCompleto.module.css';

export default function CardapioCompleto() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>

                <header className={styles.header}>
                    <Link to="/" className={styles.backButton}>
                        <FaArrowLeft size={16} />
                        <span>Voltar para a Casa</span>
                    </Link>
                    <span className={styles.tagline}>NOSSA ASSINATURA</span>
                    <h1 className={styles.title}>Cardápio Digital</h1>
                    <p className={styles.description}>
                        Uma curadoria minuciosa de sabores, projetada para elevar a sua experiência nas alturas.
                    </p>
                </header>

                <div className={styles.menuGrid}>

                    <section className={styles.category}>
                        <h2 className={styles.categoryTitle}>Alta Coquetelaria</h2>
                        <ul className={styles.itemList}>
                            <li>
                                <div className={styles.itemHeader}>
                                    <h3>Sky Sunset</h3>
                                    <span className={styles.price}>R$ 45</span>
                                </div>
                                <p>Gin, licor de pêssego, tônica, espuma de gengibre e flor de hibisco.</p>
                            </li>
                            <li>
                                <div className={styles.itemHeader}>
                                    <h3>Osasco Mule</h3>
                                    <span className={styles.price}>R$ 42</span>
                                </div>
                                <p>Vodka premium, suco de limão, xarope simples e espuma de gengibre autoral.</p>
                            </li>
                            <li>
                                <div className={styles.itemHeader}>
                                    <h3>Negroni Envelhecido</h3>
                                    <span className={styles.price}>R$ 55</span>
                                </div>
                                <p>Gin, Campari e Vermute tinto, descansado em barril de carvalho.</p>
                            </li>
                        </ul>
                    </section>

                    <section className={styles.category}>
                        <h2 className={styles.categoryTitle}>Entradas Premium</h2>
                        <ul className={styles.itemList}>
                            <li>
                                <div className={styles.itemHeader}>
                                    <h3>Burrata Trufada</h3>
                                    <span className={styles.price}>R$ 68</span>
                                </div>
                                <p>Burrata cremosa, azeite trufado, tomatinhos confit e pão de fermentação natural.</p>
                            </li>
                            <li>
                                <div className={styles.itemHeader}>
                                    <h3>Steak Tartare</h3>
                                    <span className={styles.price}>R$ 75</span>
                                </div>
                                <p>Filé mignon picado na ponta da faca, alcaparras, mostarda dijon e chips de batata.</p>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
}