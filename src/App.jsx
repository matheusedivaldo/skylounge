import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MenuPreview from './components/MenuPreview/MenuPreview';
import Reservation from './components/Reservation/Reservation';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import PageWrapper from './components/PageWrapper/PageWrapper';
import FloatingButton from './components/FloatingButton/FloatingButton';
import CardapioCompleto from './pages/CardapioCompleto/CardapioCompleto';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <PageWrapper>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <About />
                            <MenuPreview />
                            <Reservation />
                            <Location />
                        </>
                    } />

                    <Route path="/proposta" element={<About />} />
                    <Route path="/cardapio" element={<MenuPreview />} />
                    <Route path="/reservas" element={<Reservation />} />
                    <Route path="/localizacao" element={<Location />} />
                    <Route path="/cardapio-digital" element={<CardapioCompleto />} />
                </Routes>
            </PageWrapper>

            <FloatingButton />
            <Footer />
        </BrowserRouter>
    );
}