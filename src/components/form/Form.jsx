import React, { useState } from 'react'
import './Form.css';
import Card1 from '../card1/Card1';
import Card2 from '../card2/Card2';
function Form(props) {
  const [confirmed, setConfirmed] = useState(false);

  let [cardDetails, setCardDetails] = useState('');
  let [name, setName] = useState('');
  let [month, setMonth] = useState('');
  let [year, setYear] = useState('');
  let [cvc, setCvc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      name.length <= 0 ||
      cardDetails.length === 0 ||
      cardDetails.length < 19 ||
      month.length === 0 ||
      month.length < 2 ||
      year.length === 0 ||
      year.length < 2 ||
      cvc.length === 0 ||
      cvc.length < 3
    ) {
      setConfirmed(true);
      
    }
    else {
      let data = {name, cardDetails, month, year, cvc};
      props.onChange(data);

    } 
    console.log(name, cardDetails, month, year, cvc);
   
  }



  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="row1">
          <lable htmlFor='name'>
            CARDHOLDER NAME
            <input id='name' name='e.g. Jane Appleseed'
              placeholder="e.g. Jane Appleseed" value={name} onChange={(e) => setName(e.target.value)} />
          </lable>
        </div>
        <div className="row1">
          <lable>
            CARD NUMBER
            <input maxLength={16} placeholder='e.g. 1234 5678 9123 0000' value={cardDetails} onChange={(e) => setCardDetails(e.target.value)} />
          </lable>

        </div>
        <div className="row1">
          <div className="row4">
            <div className="row2">
              <lable>EXP.DATE (MM/YY)</lable>
              <div className="inputs">
                <input placeholder='MM'   maxLength={2} value={month} onChange={(e) => setMonth(e.target.value)} />
                <input placeholder='YY'  maxLength={4}  value={year} onChange={(e) => setYear(e.target.value)} />
              </div>
            </div>
            <div className="row3">
              <lable>CVC</lable>
              <input placeholder='e.g. 123' value={cvc} maxLength={3} onChange={(e) => setCvc(e.target.value)} />
            </div>
          </div>
        </div>
        
        <button className=" Submit">Confirm</button>
        {!setConfirmed && (
          <p className="error-message">Please enter valid card details.</p>
        )}
      </form>


    </div>

  )
}

export default Form