import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MenuPreview from './components/MenuPreview/MenuPreview';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <MenuPreview />
            <Contact />
            <Footer />
        </>
    );
}

export default App;