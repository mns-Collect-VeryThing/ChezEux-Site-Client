import React, {useEffect, useState} from 'react';
import axios from "axios";

function useGetWeathers () {
    const [weather, setWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        weather.length=0;
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=1&lon=1&appid=407165e99deffff1d3b70d3360f1edd0&units=metric')
            .then((response) => {
                setWeather(statistics => [...statistics, {name: 'Température', value: response.data.main.temp}]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return {weather, isLoading};
}

export default useGetWeathers;