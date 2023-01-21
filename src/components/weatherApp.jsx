import { useState } from "react"
import WeatherForm from "./weatherForm";
import { useEffect } from "react";
import WeatherMainInfo from "./weatherMainInfo";
import style from './weatherApp.module.css';

export const WeatherApp = () => {
    
    const [weather,setWather] = useState('');

    useEffect( () => {
        loadInfo();
    },[])


    useEffect( () => {
        document.title = `Weather in ${weather?.location?.name}`;
    },[weather]);


    
    const loadInfo = async (city = 'london') => {
        
        try {
            console.log(import.meta.env.VITE_APP_URL);
            const request = await fetch(
                `http://api.weatherapi.com/v1/current.json?aqi=no&key=c780496d19ec471d86f30040221304}&q=${city}`
                );
                const json = await request.json();
                console.log(json);

                setWather(json);

        } catch (error) {
            
        }
    }


    const hadleChangeCity = (city) => {
        setWather(null);
        loadInfo(city);
    }


    return (
        <div>
            <div className={style.wheatherContainer} >
            <WeatherForm onChangeCity={hadleChangeCity} />
            <WeatherMainInfo weather={weather} />
            </div>
        </div>
    )

}





export default WeatherApp