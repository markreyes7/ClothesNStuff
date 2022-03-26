import React from 'react'
import Location from './Location';
import Time from './Time';
import { useEffect, useState } from 'react'
import Temperature from './Temperature';
import Description from './Description';
import WeatherIcon from './WeatherIcon';



const Weather = ({ mode, displayActivities, location, setLocation, currTemp, setCurrTemp }) => {
    const [temp, setTemperature] = useState({});
    const [description, setDescription] = useState('');
    const [weatherIcon, setWeatherIcon] = useState();
  
    
    useEffect(() => {
        const fetchData = async () => {
            const fetcher = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=imperial&appid=8c6ba1dda915545a944103ffa0d4421a`) //us only version
                .then(res => res.json()).then(data => {
                    setTemperature(t => data.main)
                    setCurrTemp(data.main.temp)
                    setDescription(prevDescription => data.weather[0].description)
                    setLocation(location)
                    setWeatherIcon(w => data.weather[0].icon)
                })
        }
        fetchData();
       
    }, [location, currTemp])

    return (
        <div className={(displayActivities) ? ("weather-box") : ("weather-box")}>
            <Location location={location} setLocation={setLocation} mode={mode}></Location>
            <Temperature mode={mode} temperature={temp}></Temperature>
            <WeatherIcon mode={mode} weather={weatherIcon}></WeatherIcon>
            <Description mode={mode} description={description}></Description>
            <Time mode={mode} ></Time>
        </div>
    )
}

export default Weather