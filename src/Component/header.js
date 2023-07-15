import React from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
function Header() {
    const { t } = useTranslation();

    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to="/"><a className="btn btn-ghost normal-case text-xl">Shoes&Co</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/about">{t('header.about')}</Link></li>
                    <li><Link to="/shop">{t('header.shop')}</Link></li>
                    <li><Link to="/contact">{t('header.contact')}</Link></li>
                    <li><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
                    <li><Link to="/profil"><AiOutlineUser/></Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;