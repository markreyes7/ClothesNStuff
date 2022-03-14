import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";
const Temperature = ({ temperature, mode }) => {
    const [thisTemp, setThisTemp] = useState(temperature);

    useEffect(() => {
        setThisTemp(temperature)

    }, [thisTemp, temperature])

    return (

        <div className={mode}>
            <div className="temperature">
                <h2>{thisTemp.temp} <Icon name="thermometer half"></Icon></h2>
            </div>
            <div className="flex-high-low">
                <div>
                    <span>High: {thisTemp.temp_max}</span>
                </div>
                <div>
                    <span>Low: {thisTemp.temp_min}</span>
                </div>

            </div>
        </div>
    )
}

export default Temperature;