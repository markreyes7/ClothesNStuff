import { useEffect, useState } from "react";

const Temperature = ({ temperature }) => {
    const [thisTemp, setThisTemp] = useState(temperature);

    useEffect(() => {
        setThisTemp(temperature)
        console.log(thisTemp)
    }, [thisTemp, temperature])

    return (

        <div>
            <div>
                <h2>{thisTemp.temp}</h2>
            </div>

            <div>
                <span>Todays high: {thisTemp.temp_max}</span>
            </div>
            <div>
                <span>Todays low: {thisTemp.temp_min}</span>
            </div>
        </div>
    )
}

export default Temperature;