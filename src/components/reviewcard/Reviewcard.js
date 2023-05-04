import React from 'react';
import './reviewcard.css';
import StarsRating from 'react-star-rate';

const Reviewcard = ({ReviewcardRate, ReviewcardText, ReviewcardIamge, ReviewcardUname, ReviewcardUjob}) => {
  return (
    <div className='product__reviewcard'>
        <StarsRating 
            size={5}
            count={5}
            defaultValue={ReviewcardRate}  
            disabled={true}
        />
        <p>{ReviewcardText}</p>
        <div className='product__reviewcard-user'>
            <div className='product__reviewcard-user_image'>
                <img src={ReviewcardIamge} alt='user' />
            </div>
            <div className='product__reviewcard-user_info'>
                <h3>{ReviewcardUname}</h3>
                <p>{ReviewcardUjob}</p>
            </div>
        </div>
    </div>
  )
}

export default Reviewcard;