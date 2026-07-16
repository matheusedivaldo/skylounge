import React from 'react';
import Seo from '../../components/Seo/Seo';
import MenuPreview from '../../components/MenuPreview/MenuPreview';
import { SITE_URL } from '../../config/seo';

export default function Cardapio() {
    return (
        <>
            <Seo
                title="Cardápio"
                description="Coquetelaria autoral e gastronomia premium no Sky Lounge Rooftop, o rooftop mais alto de Osasco."
                canonicalOverride={`${SITE_URL}/`}
            />
            <MenuPreview />
        </>
    );
}
