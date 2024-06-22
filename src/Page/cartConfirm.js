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
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
// https://www.npmjs.com/package/react-confetti
function CartConfirm() {

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

    const { width, height } = useWindowSize()


    return (
        <>
            <Header/>
            <Toaster/>
            <Confetti
                width={width}
                height={height}
            />

            <div className="mx-auto min-h-screen">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">Commande validé</h1>
                    <div className="mx-auto mt-8 flex items-center justify-center flex-col">
                        <div className="py-4">
                            <Link to="/order">
                                <button className="btn btn-primary">Vos commandes</button>
                            </Link>
                        </div>
                        {/*<Finish style={{width: '600px', height: '600px'}}/>*/}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default CartConfirm;