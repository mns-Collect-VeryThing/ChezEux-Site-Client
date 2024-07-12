import React from 'react';
import Header from "../Component/header";
import Carousel from "../Component/carousel";
import CarouselCard from "../Component/carouselCard";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import PrimaryCard from "../Component/HomeCard/primaryCard";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <Carousel/>
            <CarouselCard/>
            <Footer/>
        </>
    );
}

export default Index;