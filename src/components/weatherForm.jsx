import { useState } from "react"
import styles from './weatherApp.module.css';

export const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')
    
    const handleOnchange = (e) => {
        const value = e.target;
        setCity(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }


    return (
        <form type="text" onSubmit={handleSubmit} className={styles.container} >
        <input type="text"  onChange={handleOnchange} className={styles.input}/>
        </form>
    )
}


export default WeatherForm