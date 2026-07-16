import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import styles from './Galeria.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Seo from '../../components/Seo/Seo';

const CATEGORIAS = ['Todos', 'Ambiente', 'Drinks', 'Vista', 'Eventos'];

const GallerySkeleton = () => (
    <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={styles.skeletonCard} />
        ))}
    </div>
);

export default function Galeria() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollReveal(0.1);

    const [fotos, setFotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        fetch(`${import.meta.env.VITE_API_URL}/galeria`)
            .then(response => response.json())
            .then(data => {
                setFotos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar a galeria:", error);
                setError(true);
                setLoading(false);
            });
    }, []);

    const fotosFiltradas = categoriaAtiva === 'Todos'
        ? fotos
        : fotos.filter(foto => foto.categoria === categoriaAtiva);

    const abrirLightbox = (index) => setFotoSelecionada(index);
    const fecharLightbox = () => setFotoSelecionada(null);

    const irParaAnterior = () => {
        setFotoSelecionada((current) =>
            current === 0 ? fotosFiltradas.length - 1 : current - 1
        );
    };

    const irParaProxima = () => {
        setFotoSelecionada((current) =>
            current === fotosFiltradas.length - 1 ? 0 : current + 1
        );
    };

    useEffect(() => {
        if (fotoSelecionada === null) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') fecharLightbox();
            if (event.key === 'ArrowLeft') irParaAnterior();
            if (event.key === 'ArrowRight') irParaProxima();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [fotoSelecionada, fotosFiltradas.length]);

    return (
        <div className={styles.pageWrapper}>
            <Seo
                title="Galeria"
                description="Confira o ambiente, os drinks autorais e a vista do Sky Lounge Rooftop, o rooftop mais alto de Osasco."
                path="/galeria"
            />

            <header className={`${styles.heroSection} ${heroVisible ? 'visible' : ''}`} ref={heroRef}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <span className={`${styles.tagline} revealUp`}>Nosso Universo</span>
                    <h1 className={`${styles.title} revealUp delay-1`}>Galeria</h1>
                    <p className={`${styles.description} revealUp delay-2`}>
                        Um retrato do ambiente, dos drinks autorais e da vista que fazem do Sky Lounge Rooftop um lugar único em Osasco.
                    </p>
                </div>
            </header>

            <main className={styles.mainContent}>
                <div className={styles.filters}>
                    {CATEGORIAS.map((categoria) => (
                        <button
                            key={categoria}
                            className={`${styles.filterBtn} ${categoriaAtiva === categoria ? styles.filterBtnActive : ''}`}
                            onClick={() => setCategoriaAtiva(categoria)}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <GallerySkeleton />
                ) : error ? (
                    <p className={styles.errorMessage}>
                        Não foi possível carregar a galeria agora. Tente novamente em instantes.
                    </p>
                ) : fotosFiltradas.length === 0 ? (
                    <p className={styles.errorMessage}>
                        Nenhuma foto encontrada nessa categoria.
                    </p>
                ) : (
                    <div className={styles.grid}>
                        {fotosFiltradas.map((foto, index) => (
                            <button
                                key={foto.id}
                                className={styles.card}
                                onClick={() => abrirLightbox(index)}
                                aria-label={`Ampliar foto: ${foto.legenda || 'foto da galeria'}`}
                            >
                                <img
                                    src={foto.imagem_url}
                                    alt={foto.legenda || ''}
                                    className={styles.cardImg}
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </main>

            {fotoSelecionada !== null && fotosFiltradas[fotoSelecionada] && (
                <div className={styles.lightbox} onClick={fecharLightbox}>
                    <button className={styles.lightboxClose} onClick={fecharLightbox} aria-label="Fechar">
                        <FaTimes size={28} />
                    </button>

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                        onClick={(event) => { event.stopPropagation(); irParaAnterior(); }}
                        aria-label="Foto anterior"
                    >
                        <FaChevronLeft size={28} />
                    </button>

                    <img
                        src={fotosFiltradas[fotoSelecionada].imagem_url}
                        alt={fotosFiltradas[fotoSelecionada].legenda || ''}
                        className={styles.lightboxImg}
                        onClick={(event) => event.stopPropagation()}
                    />

                    <button
                        className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                        onClick={(event) => { event.stopPropagation(); irParaProxima(); }}
                        aria-label="Próxima foto"
                    >
                        <FaChevronRight size={28} />
                    </button>

                    {fotosFiltradas[fotoSelecionada].legenda && (
                        <p className={styles.lightboxCaption} onClick={(event) => event.stopPropagation()}>
                            {fotosFiltradas[fotoSelecionada].legenda}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
