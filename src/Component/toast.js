import React from 'react';
import {toast, Toaster} from "react-hot-toast";
import {useTranslation} from "react-i18next";

function Toast() {
    const { t } = useTranslation();

    const toastMe = () => {
        toast.success(t('Toast message'));
    }

    return (
        <>
            <Toaster/>
            <button className="btn btn-primary m-4" onClick={()=>{toastMe()}}>{t('Toast')}</button>
        </>
    );
}

export default Toast;