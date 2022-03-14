import React from 'react'
import Location from './Location';
import Time from './Time';
import { useEffect, useState } from 'react'
import Temperature from './Temperature';
import Description from './Description';
import WeatherIcon from './WeatherIcon';
import { Container } from 'react-bootstrap/Container';


const Weather = ({ mode }) => {
    const [location, setLocation] = useState('Los Angeles');  //initial user location. Do it with another react hook? 
    const [temp, setTemperature] = useState({});
    const [description, setDescription] = useState('');
    const [weatherIcon, setWeatherIcon] = useState();
    const [weatherCondition, setWeatherCondition] = useState('');
    const [currTemp, setCurrTemp] = useState(75);

    useEffect(() => {
        const fetchData = async () => {
            const fetcher = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},us&units=imperial&appid=8c6ba1dda915545a944103ffa0d4421a`) //us only version
                .then(res => res.json()).then(data => {
                    console.log(data.main)
                    console.log(data)
                    console.log(location)
                    setTemperature(t => data.main)
                    setCurrTemp(data.main.temp)
                    console.log(currTemp)
                    setDescription(prevDescription => data["weather"][0]["description"])
                    setLocation(location)
                    setWeatherIcon(w => data["weather"][0]["icon"])
                })
        }
        fetchData();
        console.log("here i am")
    }, [location, currTemp])
    // useEffect(() => {
    //     if (currTemp >= 80 ){
    //         console.log("hot boy")
    //     }
    //     if(currTemp < 80 && currTemp >= 65){
    //         console.log("nice boy")
    //     }
    //     if(currTemp < 65){
    //         console.log("oo dat kinda chilly")
    //     }
    // })

    return (
        <div className='weather-box'>
            <Location location={location} setLocation={setLocation} mode={mode}></Location>
            <Temperature mode={mode} temperature={temp}></Temperature>
            <WeatherIcon mode={mode} weather={weatherIcon}></WeatherIcon>
            <Description mode={mode} description={description}></Description>
            <Time mode={mode} ></Time>
        </div>
    )
}

export default Weather