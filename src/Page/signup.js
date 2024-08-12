import React, {useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
import {AiOutlineShoppingCart} from "react-icons/ai";
import {postLogin, postSignUp} from "../service/userService";
import {toast, Toaster} from "react-hot-toast";
function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const submitForm = async (e) => {
        setLoading(true)
        const response = await postSignUp(e);
        console.log(response)
        if (response.status === 201) {
            toast.success('Compte créer avec succès');
            window.location.href = '/login'
        } else {
            setLoading(false);
            toast.error('Invalid login credentials. Please try again.');
        }
    }

    return (
        <>
            <Toaster/>
            <Header/>
            <div>
                <div className="min-h-screen">
                    <div className="card w-96 bg-base-100 shadow-xl m-auto mt-48">
                        <form className="card-body" onSubmit={handleSubmit(submitForm)}>

                            {errors.firstname && <span className="text-error">{t('login.error.firstname')}</span>}
                            <h2 className="card-title">Vos informations</h2>
                            <input {...register("email", {required: true})} type="text" placeholder={t('login.email')}
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            {errors.email && <span className="text-error">{t('login.error.login')}</span>}

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