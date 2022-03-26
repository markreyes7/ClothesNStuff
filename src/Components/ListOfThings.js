import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Icon} from 'semantic-ui-react';
const axios = require('axios');


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {(props.bizdetails === undefined) ? <>Loading.......</> : <>{props.bizdetails.data.name}</>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='icon-rating'>
                    {(props.bizdetails === undefined) ? <>Loading rating.......</> : 
                    [...Array(Math.round(props.bizdetails.data.rating))].map((el, index) => <Icon name='star' key={index}></Icon> )}
                </div>
                <div className='modal-description-header'>
                    <div>
                        {(props.bizdetails === undefined || props.bizdetails.data.is_closed === true ) ? <>Closed</> : <>Open</>}
                    </div>
                    {(props.bizdetails === undefined) ? <>Loading......</> : <p>{props.bizdetails.data.display_phone}</p>}
                </div>

                {(props.bizdetails === undefined) ? <>LOADING.......</> :
                    (props.bizdetails.data.categories.map((elem, i) =>
                        <li>{elem.title}</li>))}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const ListOfThings = ({ location, categories, businesses, showCarousel, setShowCarousel }) => {
    const [randomActivities, setRandomActivities] = useState();
    const [modal, setShowModal] = useState(false);
    const [modalDetails, setModalDetails] = useState();
    const [modalObj, setModalObj] = useState();

    useEffect(() => {
        const random = () => Math.floor(Math.random() * (19 - 1) + 1);
        let temp = []
        let i = 0;
        while (i !== 8) {
            temp.push(businesses[i]);
            i++;
        }
        setRandomActivities(temp);

    }, [businesses])


    useEffect(() => {
        setModalDetails(modalObj)
    }, [modalObj])

    return (
        <div className='activities'>

            {(typeof randomActivities === 'undefined') ? (<></>) : (randomActivities.map((object, index) =>
                <div className='activity' data-id={object.id} onClick={(e) => {
                    setShowModal(true);
                    const t = e.currentTarget.getAttribute("data-id")
                    const fetcher = async () => {
                        const result = await axios.get(`${' https://still-bayou-05012.herokuapp.com/'}https://api.yelp.com/v3/businesses/${t}`, {
                            headers: {
                                Authorization: `Bearer gNOy8pw_azDD-1hNT_L4aAbL_pVWwfOM43qngofV89NTDFwe9sQKjkUkqg9CiP6uT7lhbgxB2g-ViWgZ4-qsE272S7aqwjmYFR9ND3zQ8TAs1JOM9QfiWdNY-rgvYnYx`
                            },
                        }
                        );
                        console.log("setting the modal object");
                        console.log(result.data.name)
                        setModalObj(result)
                        console.log(modalObj)
                    }

                    fetcher();

                }}>
                    <div className='activity-img'>
                        <img src={object.image_url} alt='Location'></img>
                    </div>
                    <div className='activity-name'>
                        <h5>{object.name}</h5>
                    </div>
                    <div className='activity-location'>
                        <p>{object.location.address1}</p>
                    </div>


                </div>))}
            {(modal) ? (<MyVerticallyCenteredModal
                bizdetails={modalDetails}
                show={modal}
                onHide={() => setShowModal(false)}
            />) : (<></>)}
           
        </div>
    )
}

export default ListOfThings
