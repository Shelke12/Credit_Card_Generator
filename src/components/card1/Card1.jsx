import React from 'react';
import './Card1.css';
import PropTypes from 'prop-types';

let Card1=({ cardDetails, name, month, year })=> {
    Card1.propTypes = {
        cardDetails: PropTypes.string,
        name: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string
    }
    Card1.defaultProps = {
        cardDetails: '0000 0000 0000 0000',
        name: 'JANE ALENDERS',
        month: '00',
        year: '00'
    
    }
    return (
        <div className='card1'>
           <div className="container">
           <div  className="background">
                <div className="clr1"></div>
                <div className="clr2"></div>
                <div className="clr3"></div>
                <div className="clr4"></div>
                <div className="clr5"></div>
            </div>
            <div className="cardDetail">
                <div className="circle">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>
                <div className="detail">
                    <div className="cardNum">
                        <p id='number'> {cardDetails ? <>{cardDetails}</> : <> 0000 0000 0000 0000</>}</p>
                    </div>
                    <div className="validity">
                        <div className="name">
                            <p> {name ? <>{name}</> : <>JANE APPLESEED</>} </p>
                        </div>
                        <div className="date">
                            <p id='span'>{month}/{year}</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}


export default Card1