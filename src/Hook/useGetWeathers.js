import React, {useEffect, useState} from 'react';
import axios from "axios";

function useGetWeathers () {
    const [weather, setWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        weather.length=0;
        setIsLoading(false);

    }, []);

    return {weather, isLoading};
}

export default useGetWeathers;