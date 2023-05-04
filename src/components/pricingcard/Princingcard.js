import React from 'react';
import './pricingcard.css';
import Button from '../button/Button';

const Princingcard = ({pricingcardtitle, pricingcarddescription, pricingcardprice, pricingcardperformance}) => {
  return (
    <div className='product__pricing-card'>
        <h4>{pricingcardtitle}</h4>
        <p>{pricingcarddescription}</p>
        <h1>{pricingcardprice}</h1>
        <p>{pricingcardperformance}</p>
        <p>{pricingcardperformance}</p>
        <p>{pricingcardperformance}</p>
        <Button btnBg='#02897A'btnBorder='none' btnText='Order now' btnTextColor='#FFFFFF' />
    </div>
  )
}

export default Princingcard;