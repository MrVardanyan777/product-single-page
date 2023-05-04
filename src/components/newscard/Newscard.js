import React from 'react';
import './newscard.css';

const Newscard = ({newscardImage, newscardDate, newscardHeading}) => {
  return (
    <div className='product__newscard'>
        <div className='product__newscard-image'>
            <img src={newscardImage} alt='news' />
        </div>
        <div className='product__newscard-content'>
            <p>{newscardDate}</p>
            <h2>{newscardHeading}</h2>
        </div>
    </div>
  )
}

export default Newscard;