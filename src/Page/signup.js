import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {AiOutlineShoppingCart} from "react-icons/ai";
function SignUp() {

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
                            <h2 className="card-title">Votre identité</h2>

                            <input {...register("name", {required: true})} type="text" placeholder={'nom'}
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            {errors.name && <span className="text-error">{t('login.error.name')}</span>}

                            <input {...register("firstname", {required: true})} type="text" placeholder={'Prénom'}
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            {errors.firstname && <span className="text-error">{t('login.error.firstname')}</span>}
                            <h2 className="card-title">Vos informations</h2>
                            <input {...register("mail", {required: true})} type="text" placeholder={t('login.mail')}
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            {errors.mail && <span className="text-error">{t('login.error.login')}</span>}

                            <input {...register("password", {required: true})} type="password"
                                   placeholder={t('login.password')}
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            {errors.password && <span className="text-error">{t('login.error.password')}</span>}

                            <div className="card-actions justify-end">
                                <Link to="/login">
                                    <button className="btn btn-outline btn-primary">{'Se connecter'}</button>
                                </Link>
                                <button className="btn btn-primary">{'Créer'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default SignUp;