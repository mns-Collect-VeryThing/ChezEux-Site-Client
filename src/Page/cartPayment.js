import React, {useState} from 'react';
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
function CartPayment() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const [useDelivery, setUseDelivery] = useState(true);

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Produit 1", price: 19.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 3, name: "Produit 3", price: 29.99, quantity: 1 }
    ]);

    return (
        <>
            <Header/>
            <Toaster/>

            <div className="mx-auto min-h-screen">
                <div className="max-w-7xl mx-auto md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4">
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8 space-y-4">
                            <h1 className="text-3xl font-semibold">Recapitulatif</h1>
                            <div>
                                <h2 className="text-xl font-semibold">Produit</h2>
                                {cartItems.map((item) => (
                                    <div className="flex justify-between">
                                        <span className="text-xl ">{item.name}</span>
                                        <span className="text-xl">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between">
                                <h2 className="text-xl font-semibold">Livraison</h2>
                                <h2 className="text-xl">10,00</h2>
                            </div>

                            <div className="flex justify-between">
                                <h2 className="text-xl font-semibold">Total</h2>
                                <h2 className="text-xl">75,00</h2>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Adresse de livraison</h2>
                                <h3>Metz Numeric School</h3>
                                <h3>86 Rue aux arenes</h3>
                                <h3>57050 Metz</h3>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold">Adresse de facturation</h2>
                                <h3>Metz Numeric School</h3>
                                <h3>86 Rue aux arenes</h3>
                                <h3>57050 Metz</h3>
                            </div>


                        </div>
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8">
                            <h2 className="text-3xl font-semibold mb-4">Paiement</h2>
                            ICI CA PAYE
                            <div className="flex justify-center items-center mt-4">
                                <Link to="/cart-confirm">
                                    <button className="btn btn-primary">Payer</button>
                                </Link>
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