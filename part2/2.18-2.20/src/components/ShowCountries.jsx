import React from 'react'

function ShowCountries({dataCountries, onclickShow, weather}) {
 
  return (
    <div>
    {dataCountries.length>10&&<p>Too many matches, specify another filter</p>}
    {dataCountries.length>1&&dataCountries.length<10&& dataCountries.map(countries => <p key={countries.name.common}>{countries.name.common} 
    <button onClick={() => onclickShow(countries.name.common)}>show</button></p>  )}
    {!dataCountries&&<p></p>}
    {dataCountries.length===1&&

    <div>
        <h1>{dataCountries[0].name.common}</h1>
        <p>capital {dataCountries[0].capital[0]}</p>
        <p>area {dataCountries[0].area}</p>
        <h3>languages</h3>
        <ul>
            {Object.values(dataCountries[0].languages).map(languages => <li key={languages}>{languages}</li>)}
        </ul>
        <img src={dataCountries[0].flags.png} alt={dataCountries[0].name.common} />
    </div>
    }
    {weather&&
    <div>
        <h1>Weather in {weather.name}</h1>
        <p>temperature {Math.round(weather.main.temp)}  </p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        <p>wind {weather.wind.speed} m/s</p>
    </div>

    }
    </div>
  )
}

export default ShowCountries