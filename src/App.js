import './App.css';
import Weather from './Components/Weather';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import DisplayMoreIcon from './Components/DisplayMoreIcon';
import Activities from './Components/Activities';


let today = new Date();

function App() {
  const [mode, setMode] = useState('daytime'); 
  const [displayActivities, setDisplayActivities] = useState(false);
  const [location, setLocation] = useState('Los Angeles');
  const [currTemp, setCurrTemp] = useState(75);

  useEffect(() => {
    if (today.getHours() > 6 && today.getHours() <= 18) {
      setMode('daytime');
    }

    else {
      console.log(today.getHours())
      setMode("nighttime")
    }

  }, [])
  return (
    <div className={mode}>
      
        <Weather setCurrTemp={setCurrTemp} currTemp={currTemp} location={location} setLocation={setLocation} displayActivities={displayActivities}  ></Weather>
        <DisplayMoreIcon displayActivities={displayActivities} setDisplayActivities={setDisplayActivities} />
        {(displayActivities) ? (<Activities currTemp={currTemp} mode={mode} location={location}></Activities>) : (<></>)}
      
    </div>
  );
}

export default App;
