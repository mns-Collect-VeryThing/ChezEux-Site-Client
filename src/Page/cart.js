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
function Cart() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const { productId } = useParams();

    const product = {
        id: productId,
        name: "Nom du produit",
        description: "Description du produit",
        price: "$99.99",
        imageUrl: "https://via.placeholder.com/300",
    };

    const [selectedColor, setSelectedColor] = useState(null);

    const handleSizeChange = (e) => {
        setSelectedColor(e.target.value)
    };

    const addProduct = () => {
        toast.success('Produit ajouter en taille ' + selectedColor);
    }

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Produit 1", price: 19.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 2, name: "Produit 2", price: 24.99, quantity: 1 },
        { id: 3, name: "Produit 3", price: 29.99, quantity: 1 }
    ]);

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center mb-4">
                                    <img src={`https://via.placeholder.com/150`} alt={item.name}
                                         className="w-24 h-24 mr-4 rounded"/>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">Description du produit</p>
                                        <p className="text-gray-800 font-semibold">${item.price}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="number" className="form-input w-16" value={item.quantity}/>
                                        <button onClick={() => removeFromCart(item.id)}
                                                className="btn btn-outline btn-primary ml-4">Supprimer
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8">
                            <h2 className="text-xl font-semibold mb-4">Total</h2>
                            <div className="space-y-2 my-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-800">Réduction :</p>
                                    <p className="text-gray-800">${calculateTotal()}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-800">TVA :</p>
                                    <p className="text-gray-800">${calculateTotal()}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-800">Livraison :</p>
                                    <p className="text-gray-800">${calculateTotal()}</p>
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
                                <p className="text-xl text-gray-800">${calculateTotal()}</p>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                                <Link to="/cart-valid">
                                    <button className="btn btn-primary">Suivant</button>
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


export default Cart;