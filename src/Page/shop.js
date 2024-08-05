import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {toast, Toaster} from "react-hot-toast";
import FilterSidebar from "../Component/FilterSidebar";
import ProductCard from "../Component/productCard";
import {useNavigate} from "react-router-dom";
import Loading from "./loading";
import {getProducts} from "../service/productService";
function Shop() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders().then();
    }, []);

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

    console.log(products);

    return (
        <>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <Header/>
                    <Toaster/>
                    <div className="mx-auto min-h-screen">
                        <div className="max-w-7xl mx-auto px-4 md:px-8">
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Filtrer</label>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {products.map(product => (
                                    <ProductCard id={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <FilterSidebar />
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Shop;