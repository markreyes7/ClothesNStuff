import { useState } from 'react';
import { Icon, Form } from 'semantic-ui-react';

const Location = ({ location, setLocation }) => {

  const handleChange = (e) => {
    setNewLocation(e.target.value);
  }
  const [searchBox, setSearchBox] = useState(false);
  const [newLocation, setNewLocation] = useState('')
  return (
    <div>
      <h1 onClick={() => setSearchBox(!searchBox)}>{location}</h1>
      <Icon name='angle down'></Icon>
      {(searchBox) ? (<Form onSubmit={() => setLocation(newLocation)}>
       <Form.Input placeholder={location} name='newLocation' value={newLocation} onChange={handleChange}>
       </Form.Input>
      </Form>) : <h6>):</h6>}
    </div>
  )
}

export default Location

//change line 7 when user input starts coming in.