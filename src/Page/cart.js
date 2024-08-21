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
import {jwtDecode} from "jwt-decode";
import {deleteToCart, getCart} from "../service/cartService";
import {getOrders} from "../service/orderService";
function Cart() {

    const addProduct = () => {
        toast.success('Produit ajouter en taille ' );
    }

    const [cartData, setCartData] = useState([]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart().then();
    }, []);
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);

    const fetchCart = async () => {
        if (token === null) {
            window.location.href = '/login';
        } else {
            const response = await getCart(decodedToken.username);
            setCartData(response.data);

            console.log(response.data.products)

            setTotal(0);
            let total = 0

            response.data.products.forEach((item) => {
                total += parseInt(item.price);
            });
            setTotal(total);
        }
    };

    const removeFromCart = async (id) => {
        console.log(id)
        const response = await deleteToCart(decodedToken.username, id);
        fetchCart().then();
    };

    return (
        <>
            <Header/>
            <Toaster/>
            <div className="mx-auto min-h-screen">
                <div className="max-w-7xl mx-auto md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto px-4">
                        <div className=" md:col-span-3 pr-8">
                            <h1 className="text-3xl font-semibold mb-4">Mon Panier</h1>
                            {cartData ? <div>
                                {cartData?.products?.map((item) => (
                                    <div key={item.id} className="flex items-center mb-4">
                                        <img src={`https://via.placeholder.com/150`} alt={item.name}
                                             className="w-24 h-24 mr-4 rounded"/>
                                        <div className="flex-1">
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-gray-600">Description du produit</p>
                                            <p className="text-gray-800 font-semibold">${item.price} €</p>
                                        </div>
                                        <div className="flex items-center">
                                            <button onClick={() => removeFromCart(item.id)}
                                                    className="btn btn-outline btn-primary ml-4">Supprimer
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div> : <div>Votre panier est vide</div>}
                        </div>
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8">
                            <h2 className="text-xl font-semibold mb-4">Total</h2>
                            <div className="space-y-2 my-4">
                                {/*<div className="flex justify-between">*/}
                                {/*    <p className="text-gray-800">Réduction :</p>*/}
                                {/*    <p className="text-gray-800">${calculateTotal()}</p>*/}
                                {/*</div>*/}
                                {/*<div className="flex justify-between">*/}
                                {/*    <p className="text-gray-800">TVA :</p>*/}
                                {/*    <p className="text-gray-800">${calculateTotal()}</p>*/}
                                {/*</div>*/}
                                <div className="flex justify-between">
                                    <p className="text-gray-800">Livraison :</p>
                                    <p className="text-gray-800">Gratuite</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="py-4">
                            <input type="text" placeholder="Code Promo"
                                       className="input input-bordered input-primary w-full max-w-xs"/>
                            </div>
                            <hr/>
                            <div className="flex justify-between pt-4">
                                <p className="text-xl text-gray-800">Total :</p>
                                <p className="text-xl text-gray-800">{total}</p>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                {
                                    cartData ? (
                                        <Link to="/cart-valid">
                                            <button className="btn btn-primary">Suivant</button>
                                        </Link>
                                    ): (
                                        <button className="btn btn-primary btn-disabled">Suivant</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default Cart;