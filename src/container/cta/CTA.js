import React from 'react';
import './cta.css';
import CTAImage from '../../assets/Cta-img.png';
import { Button } from '../../components';

const CTA = () => {
  return (
    <div className='product__cta section__padding'>
        <div className='product__cta-main'>
            <div className='product__cta-main_content'>
                <h1>Join 100 Compannies who boost their business with Product</h1>
                <Button btnBg='#FFFFFF' btnBorder='none' btnText='Get This' btnTextColor='#02897A' />
            </div>
            <div className='product__cta-main_image'>
                <img src={CTAImage} alt='cta' />
            </div>
        </div>
    </div>
  )
}

export default CTA;