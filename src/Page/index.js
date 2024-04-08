import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import PrimaryCard from "../Component/HomeCard/primaryCard";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>

            <Footer/>
        </>
    );
}

export default Index;