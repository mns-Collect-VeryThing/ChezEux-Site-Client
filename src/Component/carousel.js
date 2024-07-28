import React from 'react';

function Carousel() {

    return (
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-12 pb-12">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://placehold.co/600x400"
                        className="w-full"/>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://placehold.co/600x400"
                        className="w-full"/>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://placehold.co/600x400"
                        className="w-full"/>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://placehold.co/600x400"
                        className="w-full"/>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-circle bg-transparent border-0 text-gray-700 hover:bg-gray-200">o</a>
                <a href="#item2" className="btn btn-circle bg-transparent border-0 text-gray-700 hover:bg-gray-200">o</a>
                <a href="#item3" className="btn btn-circle bg-transparent border-0 text-gray-700 hover:bg-gray-200">o</a>
                <a href="#item4" className="btn btn-circle bg-transparent border-0 text-gray-700 hover:bg-gray-200">o</a>
            </div>
        </div>
    );
}

export default Carousel;
