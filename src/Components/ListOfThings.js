import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ListOfThings = ({ businesses }) => {
    const [randomActivities, setRandomActivities] = useState();

    

    useEffect(() => {
        const random = () => Math.floor(Math.random() * 19);
        let temp = []
        let i = 0;
        while (i !== 5) {
            temp.push(businesses[random()]);
            i++;
        }
        setRandomActivities(temp);

    }, [businesses])




    return (
        <div className='activities'>
            <ListGroup>
                {(typeof randomActivities === 'undefined') ? (<></>) : (randomActivities.map((object, index) => <ListGroup.Item key={index}>{object.name}</ListGroup.Item>))}
            </ListGroup>
        </div>
    )
}

export default ListOfThings