import React from 'react';
import Seo from '../../components/Seo/Seo';
import Location from '../../components/Location/Location';
import { SITE_URL } from '../../config/seo';

export default function Localizacao() {
    return (
        <>
            <Seo
                title="Como Chegar"
                description="Endereço, horário de funcionamento e como chegar ao Sky Lounge Rooftop, o rooftop mais alto de Osasco."
                canonicalOverride={`${SITE_URL}/`}
            />
            <Location />
        </>
    );
}
