import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./Page";
import Tools from "./Page/tools";
import './i18n/i18n';
import Profil from "./Page/profil";
import Login from "./Page/login";
import Product from "./Page/product";
import Cart from "./Page/cart";
import Shop from "./Page/shop";
import SignUp from "./Page/signup";
import ForgotPassword from "./Page/forgotPassword";
import Contact from "./Page/contact";
import CartValid from "./Page/cartValid";
import CartPayment from "./Page/cartPayment";
import CartConfirm from "./Page/cartConfirm";
import Faq from "./Page/faq";
import Myorder from "./Page/myorder";
import OrderDetail from "./Page/orderDetail";
import About from "./Page/about";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart-valid" element={<CartValid />} />
            <Route path="/cart-payment" element={<CartPayment />} />
            <Route path="/cart-confirm" element={<CartConfirm />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/my-order" element={<Myorder />} />
            <Route path="/order/:orderId" element={<OrderDetail />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Index />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
