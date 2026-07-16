import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import PageWrapper from './components/PageWrapper/PageWrapper';
import FloatingButton from './components/FloatingButton/FloatingButton';
import BusinessSchema from './components/Seo/BusinessSchema';
import Home from './pages/Home/Home';
import Proposta from './pages/Proposta/Proposta';
import Cardapio from './pages/Cardapio/Cardapio';
import Reservas from './pages/Reservas/Reservas';
import Localizacao from './pages/Localizacao/Localizacao';
import Galeria from './pages/Galeria/Galeria';
import CardapioCompleto from './pages/CardapioCompleto/CardapioCompleto';

export default function App() {
    return (
        <BrowserRouter>
            <BusinessSchema />
            <Navbar />

            <PageWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/proposta" element={<Proposta />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/reservas" element={<Reservas />} />
                    <Route path="/localizacao" element={<Localizacao />} />
                    <Route path="/cardapio-digital" element={<CardapioCompleto />} />
                </Routes>
            </PageWrapper>

            <FloatingButton />
            <Footer />
        </BrowserRouter>
    );
}
