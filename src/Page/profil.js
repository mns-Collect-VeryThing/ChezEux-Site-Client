import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import { Link } from "react-router-dom";
import { t } from "i18next";
import ProductCard from "../Component/productCard";
import {getOrder, getOrdersById} from "../service/orderService";
import {jwtDecode} from "jwt-decode";
import {getAddresses} from "../service/addressesService";

function Profil() {
    const [activeTab, setActiveTab] = useState('orders');

    const [orders, setOrders] = useState(null);

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);

    const fetchOrderById = async () => {
        if (token === null) {
            window.location.href = '/login';
        } else {
            const response = await getOrdersById(decodedToken.username);
            setOrders(response.data);
        }
    };

    useEffect(() => {
        fetchOrderById().then();
    }, []);

    const getDeliveryStatus = (index) => {
        if(index === 'payed')return <div className="badge badge-primary">En attente d'expedition</div>
        else if(index === 'send')return <div className="badge badge-secondary">Votre commande a été éxpédié</div>
        else return <div className="badge badge-secondary">{index}</div>
    }

    const [addresses, setAddresses] = useState([]);

    const fetchAdress = async () => {
        const response = await getAddresses(decodedToken.username);
        setAddresses(response.data);
    };

    useEffect(() => {
        fetchAdress().then();
    }, []);
    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <div>
                    <div className="border-2 shadow-xl md:h-min rounded-lg p-12 mt-8 w-auto" style={{width: '900px'}}>
                        <div className=" md:col-span-3 pr-8">
                            <div className="items-center mb-4">
                                <div>
                                    <h1 className="text-3xl font-semibold mb-4">Mes addresses</h1>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                {addresses.map((item) => (
                                        <div key={item.id}
                                             className={`flex justify-between border-2 rounded-lg p-4 border-primary`}>
                                            <ul>
                                                <li>{item.firstname} {item.lastname}</li>
                                                <li>{item.street} {item.lastname}</li>
                                                <li>{item.city} {item.zipcode}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            case 'orders':
                return <div>
                    <div className="border-2 shadow-xl md:h-min rounded-lg p-12 mt-8 w-auto" style={{width: '900px'}}>
                        <div className=" md:col-span-3 pr-8">
                            <div className="overflow-x-auto">
                                <h1 className="text-3xl font-semibold mb-4">Mes commandes</h1>
                                <table className="table" style={{width: "100%"}}>
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Commande</th>
                                        <th>Statut</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orders?.map((item) => (
                                        <tr>
                                            <td>{item.createdAt}</td>
                                            <td>{item.id}</td>
                                            <td>{getDeliveryStatus(item.status)}</td>
                                            <td>{item.cart.totalPrice} €</td>
                                            <td><a className="link link-primary">Aperçu</a></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>;
            {/*case 'payment':*/}
            {/*    return <div>*/}
            {/*        <div className="border-2 shadow-xl md:h-min rounded-lg p-12 mt-8 w-auto" style={{width: '900px'}}>*/}
            {/*            <div className=" md:col-span-3 pr-8">*/}
            {/*                <div className="overflow-x-auto">*/}
            {/*                    <h1 className="text-3xl font-semibold mb-4">Mes informations de paiement</h1>*/}
            {/*                    <hr/>*/}
            {/*                    <div style={{*/}
            {/*                        width: '100%',*/}
            {/*                        height: '200px',*/}
            {/*                        display: 'flex',*/}
            {/*                        justifyContent: 'center',*/}
            {/*                        alignItems: 'center',*/}
            {/*                        flexDirection: 'column'*/}
            {/*                    }}>*/}
            {/*                        <span>Vous n'avez pas encore enregistré de carte</span>*/}
            {/*                        <a className="link">Ajouter une nouvelle carte</a></div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>;*/}
            {/*case 'favorites':*/}
            {/*    return <div>*/}
            {/*        <div className="border-2 shadow-xl md:h-min rounded-lg p-12 mt-8 w-auto" style={{width: '900px'}}>*/}
            {/*            <div className=" md:col-span-3 pr-8">*/}
            {/*                <h1 className="text-3xl font-semibold mb-4">Mes favoris</h1>*/}
            {/*                <hr/>*/}
            {/*                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">*/}
            {/*                    <ProductCard id={1} name="toto" price={3}/>*/}
            {/*                    <ProductCard id={1} name="toto" price={3}/>*/}
            {/*                    <ProductCard id={1} name="toto" price={3}/>*/}
            {/*                    <ProductCard id={1} name="toto" price={3}/>*/}
            {/*                    <ProductCard id={1} name="toto" price={3}/>*/}
            {/*                    <ProductCard id={1} name="toto" price={13.99}/>*/}
            {/*                    <ProductCard id={1} name="toto" price={3}/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>;*/}
        }
    };

    return (
        <>
            <Header/>
            <div className="mx-auto min-h-screen">
                <div className="max-w-7xl mx-auto md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto px-4">
                        <div className="border-2 md:h-min shadow-xl rounded-lg p-4 mt-8">
                            <div className="avatar placeholder flex items-center justify-center">
                                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                                <span className="text-3xl">D</span>
                                </div>
                            </div>
                            <div className="space-y-2 my-4">
                                <div className="flex justify-between">
                                    <button onClick={() => setActiveTab('profile')}
                                            className={`text-gray-800 ${activeTab === 'profile' ? 'font-bold' : ''}`}>
                                    Mon profil
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <button onClick={() => setActiveTab('orders')}
                                            className={`text-gray-800 ${activeTab === 'orders' ? 'font-bold' : ''}`}>
                                        Mes commandes
                                    </button>
                                </div>
                                {/*<div className="flex justify-between">*/}
                                {/*    <button onClick={() => setActiveTab('payment')}*/}
                                {/*            className={`text-gray-800 ${activeTab === 'payment' ? 'font-bold' : ''}`}>*/}
                                {/*        Mes informations de paiement*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                {/*<div className="flex justify-between">*/}
                                {/*    <button onClick={() => setActiveTab('favorites')}*/}
                                {/*            className={`text-gray-800 ${activeTab === 'favorites' ? 'font-bold' : ''}`}>*/}
                                {/*        Mes favoris*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <div>
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profil;
