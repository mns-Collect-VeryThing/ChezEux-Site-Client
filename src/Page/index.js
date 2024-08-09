import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Carousel from "../Component/carousel";
import CarouselCard from "../Component/carouselCard";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import PrimaryCard from "../Component/HomeCard/primaryCard";
import ProductCard from "../Component/productCard";
import {getProduct, getProducts} from "../service/productService";
import Loading from "./loading";
import {Link} from "react-router-dom";
function Index() {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // const data = await getProducts();
                // setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders().then();
    }, []);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Header />
            <div className="min-h-screen">
                <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(/mountain.png)' }}>
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold">Bienvenue sur {t('shop.name')}</h1>
                        <p className="mt-4 text-xl">{t('index.hook')}</p>
                        <Link to="/shop"><button className="btn btn-primary mt-6">{t('index.hook.button')}</button></Link>
                    </div>
                </div>

                <div className="py-12 bg-gray-100">
                    <h2 className="text-4xl font-bold text-center mb-8">Nos Produits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-6">
                        {products.slice(0, 4).map(product => (
                            <ProductCard id={product.id} product={product} />
                        ))}
                    </div>
                </div>

                <div className="py-12 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-8">Pourquoi Choisir {t('shop.name')} ?</h2>
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