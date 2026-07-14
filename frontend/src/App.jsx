import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MenuPreview from './components/MenuPreview/MenuPreview';
import Reservation from './components/Reservation/Reservation';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import PageWrapper from './components/PageWrapper/PageWrapper';
import FloatingButton from './components/FloatingButton/FloatingButton';
import CardapioCompleto from './pages/CardapioCompleto/CardapioCompleto';
import Seo from './components/Seo/Seo';
import BusinessSchema from './components/Seo/BusinessSchema';
import { SITE_URL } from './config/seo';

export default function App() {
    return (
        <BrowserRouter>
            <BusinessSchema />
            <Navbar />

            <PageWrapper>
                <Routes>
                    <Route path="/" element={
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
                    } />

                    <Route path="/proposta" element={
                        <>
                            <Seo
                                title="A Casa"
                                description="Conheça a proposta do Sky Lounge Rooftop: o ponto mais alto de Osasco, com atmosfera exclusiva e experiências premium."
                                canonicalOverride={`${SITE_URL}/`}
                            />
                            <About />
                        </>
                    } />

                    <Route path="/cardapio" element={
                        <>
                            <Seo
                                title="Cardápio"
                                description="Coquetelaria autoral e gastronomia premium no Sky Lounge Rooftop, o rooftop mais alto de Osasco."
                                canonicalOverride={`${SITE_URL}/`}
                            />
                            <MenuPreview />
                        </>
                    } />

                    <Route path="/reservas" element={
                        <>
                            <Seo
                                title="Reservas"
                                description="Reserve sua mesa no Sky Lounge Rooftop em Osasco pelo WhatsApp e garanta seu lugar com a melhor vista da cidade."
                                canonicalOverride={`${SITE_URL}/`}
                            />
                            <Reservation />
                        </>
                    } />

                    <Route path="/localizacao" element={
                        <>
                            <Seo
                                title="Como Chegar"
                                description="Endereço, horário de funcionamento e como chegar ao Sky Lounge Rooftop, o rooftop mais alto de Osasco."
                                canonicalOverride={`${SITE_URL}/`}
                            />
                            <Location />
                        </>
                    } />

                    <Route path="/cardapio-digital" element={
                        <>
                            <Seo
                                title="Cardápio Digital Completo"
                                description="Confira o cardápio completo do Sky Lounge Rooftop: drinks autorais, entradas premium e gastronomia urbana em Osasco."
                                path="/cardapio-digital"
                            />
                            <CardapioCompleto />
                        </>
                    } />
                </Routes>
            </PageWrapper>

            <FloatingButton />
            <Footer />
        </BrowserRouter>
    );
}
