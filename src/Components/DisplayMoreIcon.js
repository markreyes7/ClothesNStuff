import { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';

const DisplayMoreIcon = ({ displayActivities, setDisplayActivities }) => {

    return (
        <div onClick={() => setDisplayActivities(!displayActivities)} className={(displayActivities) ? ("display-more-top") : ("display-more")}>
            <Icon name='arrow down' />
        </div>

    )
}

export default DisplayMoreIcon