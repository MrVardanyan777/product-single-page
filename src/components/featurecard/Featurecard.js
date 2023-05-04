import React from 'react';
import './featurecard.css';

const Featurecard = ({FeaturecardImg, FeaturecardHeading, FeaturecardText}) => {
  return (
    <div className='product__featurecard'>
        <div className='product__featurecard-image'>
            <img src={FeaturecardImg} alt='feature-icon' />
        </div>
        <div className='product__featurecard_content'>
            <h2>{FeaturecardHeading}</h2>
            <p>{FeaturecardText}</p>
        </div>
    </div>
  )
}

export default Featurecard;