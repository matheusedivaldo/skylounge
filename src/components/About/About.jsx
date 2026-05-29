import React from 'react';
import { GlassWater, Sparkles, Music, ShieldCheck } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.about} id="proposta">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tagline}>NOSSA PROPOSTA</span>
                    <h2 className={styles.title}>O ponto mais alto da experiência em Osasco</h2>
                    <p className={styles.subtitle}>
                        O Sky Lounge Rooftop nasceu do encontro entre oportunidade e visão. Identificamos o potencial de criar um espaço elevado não apenas em altura, mas em sofisticação e atmosfera envolvente.
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <GlassWater size={24} />
                        </div>
                        <h3>Drinks Exclusivos</h3>
                        <p>Uma carta de alta coquetelaria pensada para surpreender, unindo sabores refinados e uma apresentação impecável.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Sparkles size={24} />
                        </div>
                        <h3>Ambiente Premium</h3>
                        <p>Arquitetura contemporânea, iluminação marcante e uma vista privilegiada que transformam a noite em um cenário único.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Music size={24} />
                        </div>
                        <h3>Curadoria Musical</h3>
                        <p>Sons envolventes que ditam o ritmo da casa, criando o clima perfeito de um rooftop lounge sofisticado.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3>Exclusividade</h3>
                        <p>Atendimento altamente personalizado em um espaço seleto, feito para quem busca momentos acima do comum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}