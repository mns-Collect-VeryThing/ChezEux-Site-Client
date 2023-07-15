import React from 'react';
import Header from "../Component/header";
import Footer from "../Component/footer";
import useGetWeathers from "../Hook/useGetWeathers";
import SquareLoader from "../Utils/Loader/SquareLoader";
import PieChart from "../Utils/Charts/Pie";
function Tools() {
    const weather = useGetWeathers();

    return (
        <>
            <Header/>
            <div>
                <div className="min-h-screen">
                    {weather.isLoading ?
                        <div className="w-full mt-8 grid justify-items-center">
                            <SquareLoader />
                        </div>
                        :
                        <PieChart />
                    }
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Tools;