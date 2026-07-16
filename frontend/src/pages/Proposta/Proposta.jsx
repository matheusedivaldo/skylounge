import React from 'react';
import Seo from '../../components/Seo/Seo';
import About from '../../components/About/About';
import { SITE_URL } from '../../config/seo';

export default function Proposta() {
    return (
        <>
            <Seo
                title="A Casa"
                description="Conheça a proposta do Sky Lounge Rooftop: o ponto mais alto de Osasco, com atmosfera exclusiva e experiências premium."
                canonicalOverride={`${SITE_URL}/`}
            />
            <About />
        </>
    );
}
