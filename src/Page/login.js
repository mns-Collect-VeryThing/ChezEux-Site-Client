import React, {useEffect, useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {postLogin, postSignUp} from "../service/userService";
import {toast, Toaster} from "react-hot-toast";
function Profil() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const submitForm = async (e) => {
        setLoading(true)
        const response = await postLogin(e);
        console.log(response)
        if (response.status === 200) {
            const { token } = response.data;
            localStorage.setItem('token', token);
            toast.success('Connecté avec succès.');
            window.location.href = '/'
        } else {
            setLoading(false);
            toast.error('Invalid login credentials. Please try again.');
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            window.location.href = '/';
        }
    }, []);

    return (
        <>
            <Header/>
            <Toaster/>
            <div>
                <div className="min-h-screen">
                    <div className="card w-96 bg-base-100 shadow-xl m-auto mt-48">
                        <form className="card-body" onSubmit={handleSubmit(submitForm)}>
                            <h2 className="card-title">{t('login.title')}</h2>
                            <input {...register("email", { required: true })} type="text" placeholder={t('login.email')} className="input input-bordered input-primary w-full max-w-xs" />
                            {errors.email && <span className="text-error">{t('login.error.login')}</span>}
                            <input {...register("password", { required: true })} type="password" placeholder={t('login.password')} className="input input-bordered input-primary w-full max-w-xs" />
                            {errors.password && <span className="text-error">{t('login.error.password')}</span>}
                            <Link to="/forgot-password">{t('login.forgotPassword')}</Link>
                            <div className="card-actions justify-end">
                                <Link to="/signup">
                                    <div className="btn btn-outline btn-primary">{t('login.createAccount')}</div>
                                </Link>
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