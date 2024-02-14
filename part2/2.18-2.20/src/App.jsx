import { useState, useEffect} from 'react'
import FormGetCountries from './components/FormGetCountries'
import serviceCountries from './services/serviceCountries';
import ShowCountries from './components/ShowCountries';

function App() {
  
  
  const [countries, setCountries] = useState('');
  const [lookingCountries, setLookingCountries] = useState('');
  const [resultSearch, setResultSearch] = useState('');
  const [weather, setWeather] = useState('');
  

  function filterCountries(word){
    const result = countries.filter(countrie => countrie.name.common.toUpperCase().includes(word.toUpperCase()));
    setResultSearch(result);
    setWeather('');
    if(result.length===1){
      serviceCountries.getWeather(result).then(response => setWeather(response)) ;
    }
    if (!word){ 
    setResultSearch('');
    setWeather('');
  };
  }

  function filterShowCountries(countrieSelected){
    const result = countries.filter(countrie => countrie.name.common.toUpperCase() === countrieSelected.toUpperCase());
    setResultSearch(result);
    serviceCountries.getWeather(result).then(response => setWeather(response)) ;
  }

  const onchangeLookingCountries = (event) =>{
    setLookingCountries(event.target.value);
    filterCountries(event.target.value);
  }
  
  useEffect(()=>{
      serviceCountries.getCountries().then(response => setCountries(response));
  },[]);

  const showFilter = (name) =>{
    filterShowCountries(name);
    
  }
 

  return (
    <>
     <FormGetCountries valueInput={lookingCountries} onchangeInput={onchangeLookingCountries} />
     {resultSearch&&<ShowCountries dataCountries={resultSearch} onclickShow={showFilter} weather={weather} />}
    </>
  )
}

export default App
