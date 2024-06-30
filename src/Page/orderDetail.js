import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from "../Component/header";
import Footer from "../Component/footer";

const OrderDetail = () => {
    // Simulons une commande spécifique pour les besoins de l'exemple
    const order = {
            id: 1,
            status: 'récente',
            products: [
                { id: 1, name: "Produit 1", price: 19.99, quantity: 1 },
                { id: 2, name: "Produit 2", price: 24.99, quantity: 2 }
            ]
        };

    if (!order) {
        return <div>Commande non trouvée</div>;
    }

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Détails de la commande</h1>

                    TODO

                </div>
            </div>
            <Footer/>
        </>
    );
};

export default OrderDetail;