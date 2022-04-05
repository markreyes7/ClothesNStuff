import { useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ListOfThings from './ListOfThings';
const axios = require('axios');

const Activities = ({location, mode, currTemp}) => {

    const [businesses, setBusinesses] = useState();
    const [showCarousel, setShowCarousel] = useState(true);
    const [categories, setCategory] = useState("");

    function handleItemClick(){
        const warmDaytimeFoods = ["brunch", "bakeries", "lunch", "coffee"];
        const hotDaytimeFoods = ["acaibowls", "juicebars", "poke" ,"lunch"]
        const nighttimeFoods = ["foodtrucks", "dinner", "icecream"]
        const coolDaytimeFoods = ["coffee", "diyfood", "food"];
        if (mode === "daytime" && (Math.round(currTemp) > 70 && Math.round(currTemp) <= 80)){
            setCategory(warmDaytimeFoods[Math.floor(Math.random()* warmDaytimeFoods.length)]);
            setShowCarousel(!showCarousel);
        }

        if (mode === "daytime" && (currTemp > 81)){
            setCategory(hotDaytimeFoods[Math.floor(Math.random()* warmDaytimeFoods.length)]);
            setShowCarousel(!showCarousel);
        }

        if(mode === "daytime" && (currTemp < 70)){
            setCategory(coolDaytimeFoods[Math.floor(Math.random() * coolDaytimeFoods.length)]);
            setShowCarousel(!showCarousel);
        }

        if (mode === "nighttime"){
            setCategory(nighttimeFoods[Math.floor(Math.random() * nighttimeFoods.length)]);
            setShowCarousel(!showCarousel);
        }           
    }
    useEffect(() => {
        const fetcher = async () => {
            const result = await axios.get(`${' https://still-bayou-05012.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
                headers: {
                    Authorization: `Bearer gNOy8pw_azDD-1hNT_L4aAbL_pVWwfOM43qngofV89NTDFwe9sQKjkUkqg9CiP6uT7lhbgxB2g-ViWgZ4-qsE272S7aqwjmYFR9ND3zQ8TAs1JOM9QfiWdNY-rgvYnYx`
                },
                params: {
                    categories: `${categories}`, 
                }
            });
            setBusinesses(result.data.businesses);
            console.log(categories);
        }
        fetcher();
    }, [location, categories])

    return (
        <>
            {(showCarousel) ? (<div className='poz'>
                <Carousel fade>
                    <Carousel.Item onClick={handleItemClick}>
                        <img
                            className="d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/5c5c3833840b161566b02a76/1573133725500-Y5PCN0V04I86HDAT8AT0/WBC_7095.jpg?format=2500w"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Places to eat now!</h3>
                            <p>It's a nice to day to go out and eat!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item onClick={() => {
                        if (mode === "daytime") {
                            setCategory("hiking");
                            setShowCarousel(!showCarousel);
                        }
                        else{
                            setCategory("arts");
                            setShowCarousel(!showCarousel);
                        }
                    }}>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1648490295298-ca86ac2b203f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Get Active</h3>
                            <p>The weather is nice, get out there and explore the world !</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div >) : (<ListOfThings businesses={businesses} location={location} categories={categories} ></ListOfThings>)}
        </>
    )
}

export default Activities