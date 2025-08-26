import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "delhi",
        description : "overcast clouds",
        feels_like: 36.29,
        humidity : 63,
        temp     : 31.29,
        tempMax  : 31.29,
        tempMin  : 31.29
    });

    let updateInfo = (newdata)=>{
        setWeatherInfo(newdata);
    }

  return (
    <div>
    <h1>Weather App By Keshav</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  )
}
