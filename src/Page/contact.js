import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {AiOutlineShoppingCart} from "react-icons/ai";
function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <Header/>
            <div>
                <div className="min-h-screen">
                    <div className="card w-1/2 bg-base-100 shadow-xl m-auto mt-48">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="card-title">Nous contacter</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <input {...register("name", {required: true})} type="text" placeholder={'nom'}
                                           className="input input-bordered input-primary w-full"/>
                                    {errors.name && <span className="text-error">{t('login.error.name')}</span>}

                                    <input {...register("firstname", {required: true})} type="text"
                                           placeholder={'Prénom'}
                                           className="input input-bordered input-primary w-full"/>
                                    {errors.firstname &&
                                        <span className="text-error">{t('login.error.firstname')}</span>}

                                    <input {...register("mail", {required: true})} type="text"
                                           placeholder={t('login.mail')}
                                           className="input input-bordered input-primary w-full"/>
                                    {errors.mail && <span className="text-error">{t('login.error.login')}</span>}
                                </div>
                                <div>
                                    <textarea {...register("message", {required: true})}
                                              placeholder={t('login.message')}
                                           className="input input-bordered input-primary w-full h-40"/>
                                    {errors.message && <span className="text-error">{t('login.error.message')}</span>}
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">{'Envoyer'}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;