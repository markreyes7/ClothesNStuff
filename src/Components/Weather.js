import React from 'react'
import Location from './Location';
import Time from './Time';
import { useEffect, useState } from 'react'
import Temperature from './Temperature';
import Description from './Description';


const Weather = () => {
    const [location, setLocation] = useState('Los Angeles');  //initial user location. Do it with another react hook? 
    const [temp, setTemperature] = useState({});
    const [description, setDescription] = useState('')


    useEffect(() => {
       const fetchData = async () => {
           const fetcher = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8c6ba1dda915545a944103ffa0d4421a`)
           .then(res => res.json()).then(data => {
               console.log(data.main)
               console.log(data["weather"][0]["description"])
               console.log(location)
               setTemperature(t => data.main)
               setDescription(prevDescription => data["weather"][0]["description"])
               setLocation(location)
            })          
       }
       fetchData();
       console.log("here i am")
    }, [location])

    return (
        <div className='weather-box'>
            <Location location={location} setLocation={setLocation}></Location>
            <Temperature temperature={temp}></Temperature>
            <Description description={description}></Description>
            <Time></Time>
        </div>
    )
}

export default Weather