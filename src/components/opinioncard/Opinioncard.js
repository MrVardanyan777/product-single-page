import React from 'react'; 
import './opinioncard.css';

const Opinioncard = ({opinioncardImage, opinioncardText}) => {
  return (
    <div className='product__opinioncard'>
        <div className='product__opinioncard-image'>
            <img src={opinioncardImage} alt='avatar' />
        </div>
        <div className='product__opinioncard-text'>
            <p>{opinioncardText}</p>
        </div>
    </div>
  )
}

export default Opinioncard;