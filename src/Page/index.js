import React from 'react';
import Header from "../Component/header";
import Carousel from "../Component/carousel";
import CarouselCard from "../Component/carouselCard";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import PrimaryCard from "../Component/HomeCard/primaryCard";
import ProductCard from "../Component/productCard";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <div className="min-h-screen">
                <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x500)' }}>
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold">Bienvenue sur [Nom de votre site e-commerce]</h1>
                        <p className="mt-4 text-xl">Découvrez nos produits de haute qualité</p>
                        <button className="btn btn-primary mt-6">Shop Now</button>
                    </div>
                </div>

                <div className="py-12 bg-gray-100">
                    <h2 className="text-4xl font-bold text-center mb-8">Nos Produits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-6">
                        {/* Exemple de produit */}
                        <ProductCard id={1} name="toto" price={3} />
                        <ProductCard id={2} name="toto" price={3} />
                        {/* Répétez ce bloc pour chaque produit */}
                    </div>
                </div>

                <div className="py-12 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-8">Pourquoi Choisir [Nom de votre site e-commerce] ?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Sécurité</h3>
                                <p>Nous mettons tout en œuvre pour garantir la sécurité de vos informations personnelles et de vos transactions.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Facilité d'Utilisation</h3>
                                <p>Notre site est conçu pour être intuitif et facile à naviguer, vous permettant de trouver ce que vous cherchez en quelques clics.</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Offres Exclusives</h3>
                                <p>Profitez de nos promotions régulières et de nos offres exclusives pour faire des économies sur vos achats.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-12 bg-gray-100">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-8">Rejoignez Notre Communauté</h2>
                        <p>Suivez-nous sur les réseaux sociaux et abonnez-vous à notre newsletter pour être informé des dernières nouveautés, des offres spéciales et des événements à venir.</p>
                        <button className="btn btn-primary mt-6">S'abonner</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;