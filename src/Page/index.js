import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { useTranslation } from 'react-i18next';
import ProductCard from "../Component/productCard";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            {/*<Toast />*/}
            {/*<div>{t('Welcome to React')}</div>*/}
            {/*<ChangeLanguages />*/}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-3 gap-4 py-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;