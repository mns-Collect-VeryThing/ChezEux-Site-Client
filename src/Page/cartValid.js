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
import {getCart} from "../service/cartService";
import {addAddress, getAddresses} from "../service/addressesService";
import {postOrder} from "../service/orderService";
function CartValid() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const response = await addAddress(decodedToken.username, data);
        console.log(response.data.delivery)
        await createOrder(response.data.delivery, response.data.billing, cartData.id)
    };

    const [useDelivery, setUseDelivery] = useState(true);

    const [cartData, setCartData] = useState([]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetchCart().then();
        fetchAdress().then();
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

    const [addresses, setAddresses] = useState([]);
    const [delivery, setDelivery] = useState(null);

    const fetchAdress = async () => {
        const response = await getAddresses(decodedToken.username);
        setAddresses(response.data);
    };

    const createOrder = async (delivery, billing, id) => {
        const response = await postOrder(decodedToken.username, delivery, billing, id);
        if (response.status === 200) {
            window.location.href = '/cart-payment/' + response.data.id;
        }
    };

    const validOrder = async () => {
        if (delivery) {
            await createOrder(delivery, delivery, cartData.id)
        } else {
            toast.error('Veuillez ajouter une adresse de livraison');
        }
    };

    console.log(addresses)

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
                                {cartData ? <div>
                                    {cartData?.products?.map((item) => (
                                        <div key={item.id} className="flex justify-between">
                                            <span className="text-xl ">{item.name}</span>
                                            <span className="text-xl">{item.price} €</span>
                                        </div>
                                    ))}
                                </div> : <div>Votre panier est vide</div>}
                            </div>

                            <div className="flex justify-between">
                                <h2 className="text-xl font-semibold">Livraison</h2>
                                <h2 className="text-xl">Gratuite</h2>
                            </div>

                            <div className="flex justify-between">
                                <h2 className="text-xl font-semibold">Total</h2>
                                <h2 className="text-xl">{total} €</h2>
                            </div>
                        </div>
                        <div className="border-2 border-primary md:h-min rounded-lg p-4 mt-8">
                            <h2 className="text-3xl font-semibold mb-4">Adresse de livraison</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {addresses.map((item) => (
                                    <div key={item.id}
                                         className={`flex justify-between border-2 rounded-lg p-4 ${delivery === item.id ? 'border-primary' : 'border-secondary'}`} onClick={() => setDelivery(item.id)}>
                                        <ul>
                                            <li>{item.firstname} {item.lastname}</li>
                                            <li>{item.street} {item.lastname}</li>
                                            <li>{item.city} {item.zipcode}</li>
                                        </ul>
                                    </div>
                                ))}
                                <div className="flex justify-center items-center mt-4 col-span-2">
                                    <button onClick={() => validOrder()} type="submit" className="btn btn-primary">Valider</button>
                                </div>
                            </div>
                            <h2 className="text-3xl font-semibold my-4">Nouvelle adresse de livraison</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input {...register("delivery.firstname", {required: true})} type="text"
                                           placeholder={"John"}
                                           className="input input-bordered input-primary w-full "/>
                                    {errors.mail && <span className="text-error">aze{t('login.error.firstname')}</span>}
                                    <input {...register("delivery.lastname", {required: true})} type="text"
                                           placeholder={"Doe"}
                                           className="input input-bordered input-primary w-full "/>
                                    {errors.mail && <span className="text-error">{t('login.error.lastname')}</span>}
                                </div>
                                <input {...register("delivery.street", {required: true})} type="text"
                                       placeholder={"Adresse"}
                                       className="input input-bordered input-primary w-full "/>
                                {errors.mail && <span className="text-error">{t('login.error.login')}</span>}
                                <div className="grid grid-cols-2 gap-4">
                                    <input {...register("delivery.zipcode", {required: true})} type="text"
                                           placeholder={"Code postal"}
                                           className="input input-bordered input-primary w-full "/>
                                    {errors.mail && <span className="text-error">aze{t('login.error.zipcode')}</span>}
                                    <input {...register("delivery.city", {required: true})} type="text"
                                           placeholder={"Ville"}
                                           className="input input-bordered input-primary w-full "/>
                                    {errors.mail && <span className="text-error">{t('login.error.city')}</span>}
                                </div>
                                <h2 className="text-3xl font-semibold my-4">Adresse de facturation</h2>
                                <div className="space-y-4">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Utiliser l'adresse de livraison</span>
                                        <input {...register("usebilling")} onClick={() => {
                                            setUseDelivery(!useDelivery)
                                        }} type="checkbox" defaultChecked className="checkbox"/>
                                    </label>
                                    {useDelivery ? '' :
                                        <>
                                            <div className="grid grid-cols-2 gap-4">
                                                <input {...register("billing.firstname", {required: true})} type="text"
                                                       placeholder={"John"}
                                                       className="input input-bordered input-primary w-full "/>
                                                {errors.mail &&
                                                    <span className="text-error">aze{t('login.error.firstname')}</span>}
                                                <input {...register("billing.lastname", {required: true})} type="text"
                                                       placeholder={"Doe"}
                                                       className="input input-bordered input-primary w-full "/>
                                                {errors.mail &&
                                                    <span className="text-error">{t('login.error.lastname')}</span>}
                                            </div>
                                            <input {...register("billing.street")} type="text"
                                                   placeholder={"Adresse"}
                                                   className="input input-bordered input-primary w-full "/>
                                            {errors.mail &&
                                                <span className="text-error">{t('login.error.login')}</span>}
                                            <div className="grid grid-cols-2 gap-4">
                                                <input {...register("billing.zipcode")} type="text"
                                                       placeholder={"Code postal"}
                                                       className="input input-bordered input-primary w-full "/>
                                                {errors.mail &&
                                                    <span className="text-error">{t('login.error.zipcode')}</span>}
                                                <input {...register("billing.city")} type="text"
                                                       placeholder={"Ville"}
                                                       className="input input-bordered input-primary w-full "/>
                                                {errors.mail &&
                                                    <span className="text-error">{t('login.error.city')}</span>}
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className="flex justify-center items-center mt-4">
                                    <input type="submit" className="btn btn-primary btn-outline" value="Suivant"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default CartValid;