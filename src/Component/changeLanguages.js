import React from 'react';
import {FR, US} from 'country-flag-icons/react/3x2'
import i18n from "i18next";
function ChangeLanguages() {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then();
    }
    return (
        <div className="space-x-2">
            <button className="p-2 border rounded-md border-black" onClick={()=>{changeLanguage('fr')}}><FR title="United States" className="h-6"/></button>
            <button className="p-2 border rounded-md border-black" onClick={()=>{changeLanguage('en')}}><US title="United States" className="h-6"/></button>
        </div>
    );
}

export default ChangeLanguages;