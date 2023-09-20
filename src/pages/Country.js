import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Card from '../components/Card';

const Country = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36)
    const [selectedRadio, setselectedRadio] = useState('')
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]
    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data))
    }, [])

    return (
        <div className='container'>   
        <Navigation/>         
        <ul className="radio-container">
            <input type="range" min="1" max="255" defaultValue={rangeValue} onChange={(e) => (setRangeValue(e.target.value))}/>
                {
                    radios
                    .map((continent, index) => (
                        <li key={index}  style={{ margin:'10px'}}>
                            <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e) => {
                                setselectedRadio(e.target.id)
                            }}/>
                            <label  style={{margin:'10px'}} htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
                
       </ul>
       {selectedRadio && (
        <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
         <button className='stopSearch' onClick={() => setselectedRadio('')} >Annuler la recherche</button>
        </div>
       )}
        <ul style={{display:'flex', flexFlow:'wrap', justifyContent:'center'}}>
           {
            data
            .filter((country => (country.continents[0].includes(selectedRadio))))
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country, index) => (
               <Card key={index} country={country}/>
            ))
           
           }
        </ul>
        </div>
    );
};

export default Country;