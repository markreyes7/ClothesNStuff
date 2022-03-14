import './App.css';
import Weather from './Components/Weather';
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from 'react';

let today = new Date();

function App() {
  
  const [mode, setMode] = useState('daytime'); //for CSS classes this needs to check TIMER!

  useEffect(() => {
     if (today.getHours() > 6 && today.getHours() <= 18){
         console.log("hey its day");
         setMode('daytime');
     }


    else{
      console.log(today.getHours())
      setMode("nighttime")
    }

},[])
  return (
    <div className={mode +  " "}>
      <Weather ></Weather>
    
    </div>
  );
}

export default App;
