import React, {useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {toast, Toaster} from "react-hot-toast";
import FilterSidebar from "../Component/FilterSidebar";
function Shop() {



    return (
        <>
            <Header/>
            <Toaster/>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Filtrer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <FilterSidebar />
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}


export default Shop;