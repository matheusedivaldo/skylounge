import React from 'react';
import Seo from '../../components/Seo/Seo';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import MenuPreview from '../../components/MenuPreview/MenuPreview';
import Reservation from '../../components/Reservation/Reservation';
import Location from '../../components/Location/Location';

export default function Home() {
    return (
        <>
            <Seo
                title="Bar e Restaurante Rooftop em Osasco"
                description="Sky Lounge Rooftop: o rooftop mais alto de Osasco. Coquetelaria autoral, gastronomia premium e a melhor vista da cidade. Reserve sua mesa."
                path="/"
            />
            <Hero />
            <About />
            <MenuPreview />
            <Reservation />
            <Location />
        </>
    );
}
