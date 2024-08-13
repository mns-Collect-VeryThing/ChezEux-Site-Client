import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link, useNavigate} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {getOrders} from "../service/orderService";
import Loading from "./loading";
function Myorder() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const data = await getOrders();
    //             setOrders(data);
    //         } catch (error) {
    //             setError(error.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchOrders().then();
    // }, []);

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/order/${id}`);
    };


    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

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
                                                // <li key={product.id}>
                                                    {/*{product.name} - ${product.price.toFixed(2)} x {product.quantity}*/}
                                                // </li>
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