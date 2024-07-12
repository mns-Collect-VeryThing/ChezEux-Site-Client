import React, { useState } from 'react';
import ProductCard from "./productCard";

function CarouselCard() {
    const cardData = [
        { id: 1, img: 'https://placeimg.com/400/225/arch', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 2, img: 'https://placeimg.com/400/225/nature', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 3, img: 'https://placeimg.com/400/225/tech', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 4, img: 'https://placeimg.com/400/225/animals', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 5, img: 'https://placeimg.com/400/225/people', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 6, img: 'https://placeimg.com/400/225/food', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 7, img: 'https://placeimg.com/400/225/travel', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 8, img: 'https://placeimg.com/400/225/sports', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 9, img: 'https://placeimg.com/400/225/fashion', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 10, img: 'https://placeimg.com/400/225/music', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 11, img: 'https://placeimg.com/400/225/music', description: 'If a dog chews shoes whose shoes does he choose?' },
        { id: 12, img: 'https://placeimg.com/400/225/music', description: 'If a dog chews shoes whose shoes does he choose?' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerSlide = 6;
    const totalCards = cardData.length;

    const nextSlide = () => {
        setCurrentIndex((currentIndex + cardsPerSlide) % totalCards);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - cardsPerSlide + totalCards) % totalCards);
    };

    const renderCards = () => {
        const visibleCards = cardData.slice(currentIndex, currentIndex + cardsPerSlide);
        if (visibleCards.length < cardsPerSlide) {
            return [...visibleCards, ...cardData.slice(0, cardsPerSlide - visibleCards.length)].map(card => (
                <div key={card.id} className="card w-60 bg-base-100 shadow-xl m-2">
                    <figure><img src={card.img} alt={card.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{card.title}</h2>
                        <p>{card.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            ));
        }
        return visibleCards.map(card => (
            <div key={card.id} className="card w-60 bg-base-100 shadow-xl m-2">
                <ProductCard id={1} name="toto" price={3} />
            </div>
        ));
    };

    return (
        <div className="pb-12">
            <div className="w-1/2 bg-base-100 shadow-xl m-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow focus:outline-none" placeholder="Recherche"/>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"/>
                    </svg>
                </label>
            </div>
            <div className="relative w-full pt-12 pb-12">
                <div className="flex justify-center flex-wrap">
                    {renderCards()}
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button
                        onClick={prevSlide}
                        className="btn btn-circle bg-transparent border-0 text-gray-700 hover:bg-gray-200"
                    >
                        <span className="text-2xl">❮</span>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="btn btn-circle bg-transparent border-0 text-gray-700 hover:bg-gray-200"
                    >
                        <span className="text-2xl">❯</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CarouselCard;
