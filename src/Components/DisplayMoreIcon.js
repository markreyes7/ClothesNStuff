import { Icon } from 'semantic-ui-react';
import {useState} from 'react';
const DisplayMoreIcon = ({ displayActivities, setDisplayActivities }) => {
   const [isDisplayed, setIsDisplayed] = useState(false);
    return (
        <div onClick={() => {
            setDisplayActivities(!displayActivities);
            setIsDisplayed(!isDisplayed);
        }} className="display-more">
            <div className='display-more-text'>
                <p>Looking for something to do near you on a day like this? Whether it's too hot or too cold we'll find the right activities for you go out and do more with the weather in mind. CLICK arrow below to find out what you should do. </p>
            </div>
            <div className='arrow-down-icon'>
                Click to  {(isDisplayed) ? (<>display less</>) : (<>display more</>)}
                <Icon name='arrow down' />
            </div>

        </div>
    )
}

export default DisplayMoreIcon