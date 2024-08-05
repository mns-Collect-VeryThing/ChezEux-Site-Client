import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link, useNavigate, useParams} from "react-router-dom";
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
import {getProduct, getProducts} from "../service/productService";
import Loading from "./loading";
function Product() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const { productId } = useParams();

    // const product = {
    //     id: productId,
    //     name: "Nom du produit",
    //     description: "Description du produit",
    //     price: "$99.99",
    //     imageUrl: "https://via.placeholder.com/500",
    // };

    const [selectedColor, setSelectedColor] = useState(null);

    const handleSizeChange = (e) => {
        setSelectedColor(e.target.value)
    };

    const addProduct = () => {
        toast.success('Produit ajouter en taille ' + selectedColor);
    }

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getProduct();
                setProduct(data[0]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders().then();
    }, []);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <>
            <Header/>
            <Toaster/>

            <div className="mx-auto min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    navigation
                                    pagination={{clickable: true}}
                                >
                                    <SwiperSlide><img src={product.image} alt={product.name}
                                                      className="w-full h-auto"/></SwiperSlide>
                                    <SwiperSlide><img src={product.image} alt={product.name}
                                                      className="w-full h-auto"/></SwiperSlide>
                                    <SwiperSlide><img src={product.image} alt={product.name}
                                                      className="w-full h-auto"/></SwiperSlide>
                                    <SwiperSlide><img src={product.image} alt={product.name}
                                                      className="w-full h-auto"/></SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="p-4">
                                <div className="text-2xl font-bold text-gray-800 mb-4">{product.name}</div>
                                <div className="text-lg text-gray-600 mb-4">{product.description}</div>
                                <div className="text-xl font-bold text-gray-800 mb-4">{product.price} €</div>
                                <div className="rating rating-half mb-4">
                                    <input type="radio" name="rating-10" className="rating-hidden"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-1"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-2"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-1"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-2"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-1"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-2"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-1"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-2"/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-1" checked/>
                                    <input type="radio" name="rating-10" disabled
                                           className="bg-primary mask mask-star-2 mask-half-2"/>
                                </div>
                                <div className="mb-4">
                                    <select className="select select-bordered" onChange={handleSizeChange}>
                                        <option disabled selected>Selectionner une taille</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>Xl</option>
                                    </select>
                                </div>
                                <button className="btn btn-primary" onClick={() => {
                                    addProduct()
                                }}>
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>

                    </div>
            </div>
            <Footer/>
        </>
    );
}


export default Product;