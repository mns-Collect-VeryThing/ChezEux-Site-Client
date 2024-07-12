import React, {useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link, useNavigate} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
function Myorder() {


    const [orders, setOrders] = useState([
        {
            id: 1,
            status: 'récente', // statut de la commande
            products: [
                { id: 1, name: "Produit 1", price: 19.99, quantity: 1 },
                { id: 2, name: "Produit 2", price: 24.99, quantity: 2 }
            ]
        },
        {
            id: 2,
            status: 'livrée', // statut de la commande
            products: [
                { id: 3, name: "Produit 3", price: 15.99, quantity: 1 },
                { id: 4, name: "Produit 4", price: 9.99, quantity: 3 }
            ]
        },
        {
            id: 3,
            status: 'récente', // statut de la commande
            products: [
                { id: 5, name: "Produit 5", price: 29.99, quantity: 1 },
                { id: 6, name: "Produit 6", price: 39.99, quantity: 1 }
            ]
        }
    ]);

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/order/${id}`);
    };

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Vos commandes</h1>

                    <div className="container mx-auto p-4">
                        <h1 className="text-3xl font-bold mb-4">Commandes</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {orders.map(order => (
                                <div key={order.id}
                                     className={`card shadow-lg compact bg-base-100 ${order.status === 'récente' ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-500'}`} onClick={() => handleCardClick(order.id)}>
                                    <div className="card-body">
                                        <h2 className="card-title">Commande {order.id}</h2>
                                        <p className={`badge ${order.status === 'récente' ? 'badge-success' : 'badge-secondary'}`}>
                                            {order.status === 'récente' ? 'Récente' : 'Livrée'}
                                        </p>
                                        <ul className="list-disc pl-5 mt-2">
                                            {order.products.map(product => (
                                                <li key={product.id}>
                                                    {product.name} - ${product.price.toFixed(2)} x {product.quantity}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Myorder;