import React from 'react';
import Seo from '../../components/Seo/Seo';
import Reservation from '../../components/Reservation/Reservation';
import { SITE_URL } from '../../config/seo';

export default function Reservas() {
    return (
        <>
            <Seo
                title="Reservas"
                description="Reserve sua mesa no Sky Lounge Rooftop em Osasco pelo WhatsApp e garanta seu lugar com a melhor vista da cidade."
                canonicalOverride={`${SITE_URL}/`}
            />
            <Reservation />
        </>
    );
}
