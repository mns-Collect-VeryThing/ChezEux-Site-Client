import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link, useNavigate} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {getOrders} from "../service/orderService";
import {Triangle} from "react-loader-spinner";
function Loading() {



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

export default Loading;