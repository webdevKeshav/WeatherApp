import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let API_KEY = process.env.API_KEY;

    let getWeather = async ()=>{
       try{
          let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
          let data = await response.json();
          let result = {
          city : city,
          temp : data.main.temp,
          tempMin : data.main.temp_min,
          tempMax : data.main.temp_max,
          humidity : data.main.humidity,
          feels_like : data.main.feels_like,
          description : data.weather[0].description
          }
          console.log(result);
          return result;
      }
       catch(err){
         throw err;
       }
    }

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt)=>{
      try{evt.preventDefault();
      let newData = await getWeather();
      // console.log(updateInfo(newData));
      await updateInfo(newData);
      setCity("");}
      catch(err){
       setError(true);
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange}/>
         <br /> <br />
         <Button variant="contained" type='submit'>
          Send
         </Button>
      </form>
      {error && <h2 style={{color : "red"}}>Coudn't Find the given location Weather info </h2>}
    </div>
  )
}
