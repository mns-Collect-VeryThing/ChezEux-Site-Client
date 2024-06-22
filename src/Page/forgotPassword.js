import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {AiOutlineShoppingCart} from "react-icons/ai";
function ForgotPassword() {

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
                    <div className="card w-96 bg-base-100 shadow-xl m-auto mt-48">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="card-title">Réinitialiser votre mot de passe</h2>

                            <input {...register("mail", {required: true})} type="text" placeholder={'email'}
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            {errors.mail && <span className="text-error">{t('login.error.login')}</span>}

                            <div className="card-actions justify-end">
                                <Link to="/login">
                                    <button className="btn btn-outline btn-primary">{'Retour'}</button>
                                </Link>
                                <button className="btn btn-primary">{'Réinitialiser'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ForgotPassword;