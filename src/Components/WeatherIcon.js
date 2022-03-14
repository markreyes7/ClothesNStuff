import React, { useEffect, useState } from 'react'

const WeatherIcon = ({weather, mode}) => {
    const [thisIcon ,setThisIcon] = useState(weather);
    const [url, setThisUrl] = useState("");

    useEffect(() => {
        console.log("from weather icon")
        setThisIcon(weather);
        console.log(thisIcon);
        setThisUrl(`http://openweathermap.org/img/w/${thisIcon}.png`)
    },[weather, thisIcon])
  return (
    <div className={mode}>
        <img src={url} alt='weather icon'></img>
    </div>
  )
}

export default WeatherIcon