import React, {useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {toast, Toaster} from "react-hot-toast";
import FilterSidebar from "../Component/FilterSidebar";
import ProductCard from "../Component/productCard";
function Shop() {

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
                                <ProductCard id={1} name="toto" price={3} />
                                <ProductCard id={1} name="toto" price={3} />
                                <ProductCard id={1} name="toto" price={3} />
                                <ProductCard id={1} name="toto" price={3} />
                                <ProductCard id={1} name="toto" price={3} />
                                <ProductCard id={1} name="toto" price={13.99} />
                                <ProductCard id={1} name="toto" price={3} />
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