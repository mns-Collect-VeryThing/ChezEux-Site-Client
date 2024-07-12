import React, {useState} from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import {Link} from "react-router-dom";
import {t} from "i18next";
import { useForm } from "react-hook-form"
function Faq() {

    const [questions, setQuestions] = useState( [
        {question:'Comment m’abonner au service ?', reponse:'Paye', selected: false},
        {question:'Suis-je obliger d’avoir une boutique physique ?', reponse:'Oui', selected: false},
        {question:'La paiement est-il sécurisé ?', reponse:'Oui ! Le paiement de votre abonnement à Collect&verthing est sécurisé ainsi que le moyen de paiement mis à disposition de vos clients. ', selected: false},
    ])

    function selectQuestion(questionIndex) {
        const updatedQuestions = [...questions];  // ou const updatedQuestions = questions.slice();

        updatedQuestions.forEach((question, key) => {
            if (question.selected && key === questionIndex) {
                question.selected = false;
            } else question.selected = key === questionIndex;
        });

        setQuestions(updatedQuestions);
    }

    return (
        <>
            <Header/>
            <div className="mx-4">
                <div className="max-w-screen-lg mx-auto min-h-screen">
                    <h1 className="text-5xl font-bold text-center text-primary mt-8">{t('Foire Au Question')}</h1>

                    <div className="mt-8">
                        <div className="p-6 bg-secondary rounded-t-lg">
                            <h2 className="text-2xl text-white font-semibold mb-4">Pour vous éclairer</h2>
                        </div>
                        {questions.map((question, key)=> (
                            <div onClick={() => {
                                selectQuestion(key)
                            }}
                                 className={`p-6 border-x-2 border-secondary ${questions.length === key + 1 ? 'rounded-b-xl border-b-2 ' : ''}`}>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-medium text-primary">{question.question}</h3>
                                    <svg
                                        className={`w-6 h-6 cursor-pointer text-gray-500 transition-transform duration-300 ${
                                            question.selected && 'transform rotate-180'
                                        }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                                <p
                                    className={`text-gray-600 mt-2 transition-opacity duration-300 overflow-hidden ${
                                        question.selected ? 'opacity-100 h-auto' : 'opacity-0 h-0'
                                    }`}
                                >
                                    {question.reponse}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Faq;