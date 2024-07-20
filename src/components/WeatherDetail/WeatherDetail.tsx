import { Weather } from "../../types"
import { formatTemperature } from "../../utils"
import styles from "./WeatherDetail.module.css"

type WheaterDetailProps = {
    weather: Weather
}

export default function WeatherDetail({ weather }: WheaterDetailProps) {



    return (
        <div className={styles.container}>
            <h2>Clima de: {weather.name}</h2>
            <p className={styles.current}>{formatTemperature(weather.main.temp)}&deg;C</p>
            <div className={styles.temp}> 
                <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></p>
                <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></p>
            </div>
        </div>
    )
}
