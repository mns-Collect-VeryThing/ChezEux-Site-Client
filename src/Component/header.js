import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
function Header() {
    const { t } = useTranslation();

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/about">{t('header.about')}</Link></li>
                        <li><Link to="/shop">{t('header.shop')}</Link></li>
                        <li><Link to="/contact">{t('header.contact')}</Link></li>
                        <li><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
                        <li><Link to="/profil"><AiOutlineUser/></Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">{t('shop.name')}</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/about">{t('header.about')}</Link></li>
                    <li><Link to="/shop">{t('header.shop')}</Link></li>
                    <li><Link to="/contact">{t('header.contact')}</Link></li>
                    <li><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
                    <li><Link to="/profil"><AiOutlineUser/></Link></li>
                </ul>
            </div>
            <div className="navbar-end" />
        </div>
    );
}

export default Header;