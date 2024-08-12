import React, {useEffect} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {Triangle} from "react-loader-spinner";
function Logout() {


    useEffect(() => {
        localStorage.clear();
        window.location.href = '/';
    }, []);

    return (
        <>
            <Header/>
            <div className="min-h-screen flex items-center justify-center mt-10">
                <Triangle
                    visible={true}
                    height="150"
                    width="150"
                    color="#FF69B4"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
            <Footer/>
        </>
    );
}

export default Logout;