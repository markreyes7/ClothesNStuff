import { useEffect, useState, useCallback } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ListOfThings from './ListOfThings';
const axios = require('axios');

const Activities = ({ displayActivities, location }) => {

    const [businesses, setBusinesses] = useState();
    const [showCarousel, setShowCarousel] = useState(true);
    const [categories, setCategory] = useState('')

    useEffect(() => {
       
        const fetcher = async () => {
            const result = await axios.get(`${' https://still-bayou-05012.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
                headers: {
                    Authorization: `Bearer gNOy8pw_azDD-1hNT_L4aAbL_pVWwfOM43qngofV89NTDFwe9sQKjkUkqg9CiP6uT7lhbgxB2g-ViWgZ4-qsE272S7aqwjmYFR9ND3zQ8TAs1JOM9QfiWdNY-rgvYnYx`
                },
                params: {
                    categories: {categories}, // will be another dependency i.e categories
                }
            });
            setBusinesses(result.data.businesses);
            console.log(categories);
            console.log(result.data.businesses)
        }
        fetcher();

    }, [location, categories])


    return (
        <>
            {(showCarousel) ? (<div className='poz'>
                <Carousel>
                    <Carousel.Item onClick={() => {
                        setCategory('hiking');
                        setShowCarousel(!showCarousel)
                       
                    }}>
                        <img
                            className="d-block w-100"
                            src="https://visitsumnertn.com/wp-content/uploads/2021/01/95688935_161483288661054_1075673678814904320_o-768x521.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Places to eat now!</h3>
                            <p>It's a nice to day to go out and eat!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item onClick={() => {
                        setCategory('active_life');
                        setShowCarousel(!showCarousel)
                        
                    }}>
                        <img
                            className="d-block w-100"
                            src="https://www.surfertoday.com/images/stories/beach-quotes.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Get Active</h3>
                            <p>The weather is nice, get out there and explore the world !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div >) : (<ListOfThings location={location} categories={categories} setBusinesses={setBusinesses} businesses={businesses}></ListOfThings>)}

        </>
    )
}

export default Activities