import { Icon } from 'semantic-ui-react';

const DisplayMoreIcon = ({ displayActivities, setDisplayActivities }) => {
    return (
        <div onClick={() => setDisplayActivities(!displayActivities)} className="display-more">
            <div className='display-more-text'>
                <p>Looking for something to do near you on a day like this? Whether it's too hot or too cold we'll find the right activities for you go out and do more with the weather in mind. CLICK arrow below to find out what you should do. </p>
            </div>
            <div className='arrow-down-icon'>
                Click to display more
                <Icon name='arrow down' />
            </div>

        </div>
    )
}

export default DisplayMoreIcon