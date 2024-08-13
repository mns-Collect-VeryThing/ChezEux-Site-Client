import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link, useParams} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {toast, Toaster} from "react-hot-toast";
import PrimaryCard from "../Component/HomeCard/primaryCard";
import {getCart} from "../service/cartService";
import {jwtDecode} from "jwt-decode";
import {getOrder, payOrder} from "../service/orderService";

function CartPayment() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { orderId } = useParams();
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);

    const [total, setTotal] = useState(0);
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrder().then();
    }, []);

    const fetchOrder = async () => {
        if (token === null) {
            window.location.href = '/login';
        } else {
            const response = await getOrder(decodedToken.username, orderId);
            setOrder(response.data);

            setTotal(0);
            let total = 0
            response.data.cart.products.forEach((item) => {
                total += parseInt(item.price);
            });
            setTotal(total);
        }
    };


    const confirmPayment = async () => {
        const response = await payOrder(decodedToken.username, orderId);
        if (response.status === 200) {
            window.location.href = '/cart-confirm';
        }
    };

    return (
        <>
            <Header/>
            <Toaster/>
            <div className="mx-auto min-h-screen">
                <div className="max-w-7xl mx-auto md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4">
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8 space-y-4">
                            <h1 className="text-3xl font-semibold">Recapitulatif</h1>
                            {order ? <>
                            <div>
                                <h2 className="text-xl font-semibold">Produit</h2>
                                {order?.cart.products.map((item) => (
                                    <div className="flex justify-between">
                                        <span className="text-xl ">{item.name}</span>
                                        <span className="text-xl">{item.price} €</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between">
                                <h2 className="text-xl font-semibold">Livraison</h2>
                                <h2 className="text-xl">Gratuite</h2>
                            </div>

                            <div className="flex justify-between">
                                <h2 className="text-xl font-semibold">Total</h2>
                                <h2 className="text-xl">{total} €</h2>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Adresse de livraison</h2>
                                <h3>{order.deliveryAddress.firstname} {order.deliveryAddress.lastname}</h3>
                                <h3>{order.deliveryAddress.street}</h3>
                                <h3>{order.deliveryAddress.zipcode} {order.deliveryAddress.city}</h3>
                            </div>

                                <div>
                                    <h2 className="text-xl font-semibold">Adresse de facturation</h2>
                                    <h3>{order.billingAddress.firstname} {order.billingAddress.lastname}</h3>
                                    <h3>{order.billingAddress.street}</h3>
                                    <h3>{order.billingAddress.zipcode} {order.billingAddress.city}</h3>
                                </div>
                            </> : null}
                        </div>
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8">
                            <h2 className="text-3xl font-semibold mb-4">Paiement</h2>
                            ICI CA PAYE
                            <div className="flex justify-center items-center mt-4">
                                <button onClick={() => confirmPayment()} className="btn btn-primary">Payer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default CartPayment;