import { useState, useEffect } from 'react';
const Time = () => {
    var today = new Date();

    const [day, setDay] = useState(today);

    useEffect(() => {
        const interval = setInterval(() => { setDay(new Date()) }, 1000)
        return () => { clearInterval(interval) }
    }, [])

    return (
        <div className="flex-date-time">
            <div>
                <span>{day.toDateString()}</span>
            </div>
            <div>
                <span>{day.toTimeString().substr(0, 8)}</span>
            </div>


        </div>
    )
}

export default Time
