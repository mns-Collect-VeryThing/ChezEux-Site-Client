import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import Toast from "../Component/toast";
import { useTranslation } from 'react-i18next';
import ChangeLanguages from "../Component/changeLanguages";
function Index() {
    const { t } = useTranslation();
    return (
        <>
            <Header/>
            <Toast />
            <div>{t('Welcome to React')}</div>
            <ChangeLanguages />
            <Footer/>
        </>
    );
}

export default Index;