import React from 'react';
import Header from "../Component/header";
import Carousel from "../Component/carousel";
import CarouselCard from "../Component/carouselCard";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import PrimaryCard from "../Component/HomeCard/primaryCard";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <div className="min-h-screen">
                <div className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
                    <h1 className="text-3xl text-primary font-semibold mb-4">Bienvenue sur {t('shop.name')} !</h1>


                    <p className="mb-6">
                        Chez <strong>{t('shop.name')}</strong>, nous sommes passionnés par l'innovation,
                        la qualité et la satisfaction de nos clients. Depuis notre création en <strong>{t('shop.creation')}
                    </strong>, nous nous efforçons de vous offrir une expérience d'achat en ligne
                        exceptionnelle, combinant une sélection rigoureuse de produits de haute qualité, un service
                        client dédié et des prix compétitifs.
                    </p>

                    <h2 className="text-3xl text-primary font-semibold mb-4">Notre Mission</h2>

                    <p className="mb-6">
                        Notre mission est simple : rendre vos achats en ligne aussi agréables et faciles que possible.
                        Nous nous engageons à vous fournir :
                    </p>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>
                            <strong>Qualité et Fiabilité</strong> : Nous collaborons avec des fournisseurs de confiance
                            pour vous garantir des produits de haute qualité, durables et conformes à vos attentes.
                        </li>
                        <li>
                            <strong>Service Client Dédié</strong> : Notre équipe de service client est toujours prête à
                            vous aider et à répondre à vos questions. Nous valorisons votre satisfaction et nous nous
                            efforçons de résoudre tous vos problèmes rapidement et efficacement.
                        </li>
                        <li>
                            <strong>Livraison Rapide et Sécurisée</strong> : Profitez de notre service de livraison
                            rapide et fiable. Nous nous assurons que vos commandes arrivent chez vous en parfait état et
                            dans les meilleurs délais.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold mb-4 text-primary">Nos Valeurs</h2>

                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>
                            <strong>Innovation</strong> : Nous cherchons constamment à innover et à améliorer notre
                            plateforme pour vous offrir la meilleure expérience utilisateur possible.
                        </li>
                        <li>
                            <strong>Intégrité</strong> : Nous croyons en la transparence et l'honnêteté dans toutes nos
                            interactions, que ce soit avec nos clients, nos fournisseurs ou nos partenaires.
                        </li>
                        <li>
                            <strong>Engagement</strong> : Votre satisfaction est notre priorité. Nous nous engageons à
                            vous offrir des produits et services de qualité supérieure à chaque étape de votre
                            expérience d'achat.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold mb-4 text-primary">Pourquoi Choisir {t('shop.name')} ?</h2>

                    <ul className="list-disc list-inside mb-6 space-y-2">
                        <li>
                            <strong>Sécurité</strong> : Nous mettons tout en œuvre pour garantir la sécurité de vos
                            informations personnelles et de vos transactions.
                        </li>
                        <li>
                            <strong>Facilité d'Utilisation</strong> : Notre site est conçu pour être intuitif et facile
                            à naviguer, vous permettant de trouver ce que vous cherchez en quelques clics.
                        </li>
                        <li>
                            <strong>Offres Exclusives</strong> : Profitez de nos promotions régulières et de nos offres
                            exclusives pour faire des économies sur vos achats.
                        </li>
                    </ul>

                    <h2 className="text-3xl font-semibold mb-4 text-primary">Rejoignez Notre Communauté</h2>

                    <p className="mb-6">
                        Suivez-nous sur les réseaux sociaux et abonnez-vous à notre newsletter pour être informé des
                        dernières nouveautés, des offres spéciales et des événements à venir. Chez <strong>{t('shop.name')}</strong>, nous sommes plus qu'un simple site d'achat en ligne - nous sommes une
                        communauté de passionnés partageant les mêmes valeurs et la même passion pour la qualité et le
                        service.
                    </p>

                    <p className="mb-6">
                        Merci de faire confiance à <strong>{t('shop.name')}</strong>. Nous sommes ravis de
                        vous compter parmi nos clients et nous nous réjouissons de vous servir.
                    </p>

                    <p className="text-center font-bold text-xl text-primary">{t('shop.name')} - Votre satisfaction,
                        notre priorité.</p>
                </div>
            </div>
            <Footer/>

        </>
    );
}

export default Index;