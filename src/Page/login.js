import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
function Profil() {

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
                            <h2 className="card-title">{t('login.title')}</h2>
                            <input {...register("mail", { required: true })} type="text" placeholder={t('login.mail')} className="input input-bordered input-primary w-full max-w-xs" />
                            {errors.mail && <span className="text-error">{t('login.error.login')}</span>}
                            <input {...register("password", { required: true })} type="password" placeholder={t('login.password')} className="input input-bordered input-primary w-full max-w-xs" />
                            {errors.password && <span className="text-error">{t('login.error.password')}</span>}
                            <Link to="/forgot-password">{t('login.forgotPassword')}</Link>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-primary">{t('login.createAccount')}</button>
                                <button className="btn btn-primary">{t('login.actionButton')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Profil;