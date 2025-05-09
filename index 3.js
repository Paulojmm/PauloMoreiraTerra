import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Globe, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const translations = {
    pt: {
        title: 'Paulo Moreira - Terra',
        description: 'Especialista na compra e venda de terrenos em Portugal',
        about: 'Sobre Nós',
        services: 'Serviços',
        properties: 'Terrenos Disponíveis',
        contact: 'Contato',
        contactDesc: 'Entre em contato conosco para saber mais sobre os nossos serviços.',
        contactButton: 'Fale Conosco'
    },
    en: {
        title: 'Paulo Moreira - Terra',
        description: 'Specialist in buying and selling land in Portugal',
        about: 'About Us',
        services: 'Services',
        properties: 'Available Land',
        contact: 'Contact',
        contactDesc: 'Get in touch to learn more about our services.',
        contactButton: 'Contact Us'
    },
    fr: {
        title: 'Paulo Moreira - Terra',
        description: 'Spécialiste dans l'achat et la vente de terrains au Portugal',
        about: 'À propos',
        services: 'Services',
        properties: 'Terrains Disponibles',
        contact: 'Contact',
        contactDesc: 'Contactez-nous pour en savoir plus sur nos services.',
        contactButton: 'Nous Contacter'
    }
};

const terrains = [
    { id: 1, name: 'Terrain Algarve', price: '€150,000', size: '5000 m²', image: '/images/terrain1.jpg', description: 'Terrain avec vue sur mer, idéal pour villa.' },
    { id: 2, name: 'Terrain Lisbonne', price: '€200,000', size: '3000 m²', image: '/images/terrain2.jpg', description: 'Terrain proche du centre-ville avec vue panoramique.' },
    { id: 3, name: 'Terrain Porto', price: '€180,000', size: '4000 m²', image: '/images/terrain3.jpg', description: 'Terrain en pente douce, parfait pour projets architecturaux.' },
    { id: 4, name: 'Terrain Faro', price: '€250,000', size: '6000 m²', image: '/images/terrain4.jpg', description: 'Terrain spacieux avec accès direct à la route principale.' }
];

export default function PauloMoreiraTerra() {
    const [language, setLanguage] = useState('pt');
    const t = translations[language];

    return (
        <div className="bg-gradient-to-b from-blue-200 via-white to-blue-200 min-h-screen p-8 relative overflow-hidden">
            <header className="relative z-10 flex justify-between items-center mb-12">
                <motion.h1 className="text-5xl font-bold text-blue-900 drop-shadow-lg bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text relative" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} whileHover={{ scale: 1.1, rotate: 2 }}>
                    {t.title}
                </motion.h1>
                <div className="flex gap-4">
                    {Object.keys(translations).map((lang) => (
                        <Button key={lang} onClick={() => setLanguage(lang)} className="text-blue-900 bg-white shadow-md hover:bg-blue-100 transition-all rounded-xl">
                            {lang.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </header>
            <main className="relative z-10">
                <section className="relative z-10 mb-12">
                    <motion.h2 className="text-2xl font-semibold text-blue-900 mb-6" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        {t.properties}
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {terrains.map((terrain) => (
                            <Link href={`/terrains/${terrain.id}`} key={terrain.id}>
                                <motion.div className="relative rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform bg-white border border-blue-300" whileHover={{ scale: 1.05 }}>
                                    <img src={terrain.image} alt={terrain.name} className="w-full h-48 object-cover rounded-t-xl" />
                                    <CardContent className="p-4">
                                        <h3 className="text-xl font-bold text-blue-900 mb-2">{terrain.name}</h3>
                                        <p className="text-gray-600 mb-1">{terrain.description}</p>
                                        <p className="text-blue-900 font-semibold">{terrain.price}</p>
                                    </CardContent>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
