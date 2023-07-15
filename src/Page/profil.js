import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";

function Profil() {
    return (
        <>
            <Header/>
            <div>
                <div className="min-h-screen">
                    <Link to="/login">{t('login')}</Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profil;