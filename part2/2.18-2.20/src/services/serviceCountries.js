import axios from 'axios';
const variable = import.meta.env.VITE_SOME_KEY;

const urlCountries = 'https://studies.cs.helsinki.fi/restcountries/api/all';

const getCountries =() =>{
    const countries = axios.get(urlCountries);
    return countries.then(response => response.data);
}

const getWeather = Countrie =>{
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${Countrie[0].latlng[0]}&lon=${Countrie[0].latlng[1]}&appid=${variable}&units=metric`;
    const weather = axios.get(urlWeather);
    return weather.then(response => response.data);
}

export default {getCountries, getWeather}