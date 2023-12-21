import React ,{useState} from 'react';

import Form from '../components/form/Form';
import Card1  from '../components/card1/Card1';
import Card2 from '../components/card2/Card2'
import Background from '../components/backgraound/Background';


const Main = () => {
  const [formData, setFormData] = useState(null);

  const handleFormChange = (data) => {
    setFormData(data);
  };

  return (
    <div className='app'>
    <Background />
     <Card1 data={formData}  />
     <Card2 />
     <Form onChange={handleFormChange}/>
    </div>
  );
}

export default Main;
