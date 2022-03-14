import { useState } from 'react';
import { Icon, Form } from 'semantic-ui-react';

const Location = ({ location, setLocation, mode }) => {

  const handleChange = (e) => {
    setNewLocation(e.target.value);
  }
  const [searchBox, setSearchBox] = useState(false);
  const [newLocation, setNewLocation] = useState('')
  return (
    <div className="header">
      <h1 onClick={() => setSearchBox(!searchBox)}>{location} <Icon fitted name='angle down'></Icon></h1>
      {(searchBox) ? (<Form onSubmit={() => setLocation(newLocation)}>
       <Form.Input placeholder  ={location} name='newLocation' value={newLocation} onChange={handleChange}>
       </Form.Input>
      </Form>) : <></>}
    </div>
  )
}

export default Location

//change line 7 when user input starts coming in.