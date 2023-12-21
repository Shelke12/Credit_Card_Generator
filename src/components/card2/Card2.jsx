import React from 'react'
import './Card2.css';
import PropTypes from 'prop-types'
function Card2({cvc}) {
  return (
    <div className="card2">
      <div id="blackline"></div>
      <div className="cvv">
        <p id='cvc'>{cvc}</p>
      </div>
      <div className="lines">
        <div className="line1">
          <div className="linea"></div>
          <div className="lineb"></div>
          <div className="lineb"></div>
          <div className="linec"></div>
        </div>
        <div className="line2">
          <div className="lineb"></div>
          <div className="linea"></div>
          <div className="linec"></div>
        </div>
        <div className="line3">
          <div className="linec"></div>
          <div className="lineb"></div>
           <div className="lineb"></div>
          <div className="linea"></div>
        </div>
      </div>
    </div>
  )
 
}
Card2.propTypes={
  cvc: PropTypes.string
}
Card2.defaultProps={
  cvc:'000'
}
export default Card2