import './App.css';
import Weather from './Components/Weather';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import DisplayMoreIcon from './Components/DisplayMoreIcon';
import Activities from './Components/Activities';
import Loader from './Components/Loader';


let today = new Date();

function App() {
  const [mode, setMode] = useState('daytime'); 
  const [displayActivities, setDisplayActivities] = useState(true);
  const [location, setLocation] = useState('Los Angeles');
  const [currTemp, setCurrTemp] = useState(75);

  useEffect(() => {
    if (today.getHours() > 6 && today.getHours() <= 18) {
      setMode('daytime');
    }

    else {
      setMode("nighttime")
    }
  }, [])
  return (
    <div className={mode}>
        <Weather setCurrTemp={setCurrTemp} currTemp={currTemp} location={location} setLocation={setLocation} displayActivities={displayActivities}  ></Weather>
        <DisplayMoreIcon displayActivities={displayActivities} setDisplayActivities={setDisplayActivities} />
        {(displayActivities) ? (<Activities currTemp={currTemp} mode={mode} location={location}></Activities>) : (<></>)}
        <Loader mode={mode}></Loader>
    </div>
  );
}

export default App;
