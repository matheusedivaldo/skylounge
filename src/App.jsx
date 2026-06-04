import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MenuPreview from './components/MenuPreview/MenuPreview';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import PageWrapper from './components/PageWrapper/PageWrapper';
import FloatingButton from './components/FloatingButton/FloatingButton';

// Páginas
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
                            <Contact />
                        </>
                    } />

                    <Route path="/proposta" element={<About />} />
                    <Route path="/cardapio" element={<MenuPreview />} />
                    <Route path="/reservas" element={<Contact />} />
                    <Route path="/localizacao" element={<Contact />} />
                    <Route path="/cardapio-digital" element={<CardapioCompleto />} />
                </Routes>
            </PageWrapper>

            <FloatingButton />
            <Footer />
        </BrowserRouter>
    );
}