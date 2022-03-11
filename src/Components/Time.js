import  { useState, useEffect } from 'react';
const Time = () => {
    var today = new Date();

    const [day, setDay] = useState(today);
    
    useEffect(() =>{
        const interval = setInterval(() => {setDay(new Date())}, 1000)
        return () =>{clearInterval(interval)}
    },[] )
    
    return (
        <div className="center header-text">
            <p>{day.toDateString() + " " + day.toTimeString().substr(0,8)}</p>
           
        </div>
    )
}

export default Time
