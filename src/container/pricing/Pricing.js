import React from 'react';
import './pricing.css';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Princingcard } from '../../components';

const Pricing = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 0,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
  return (
    <div className='product__pricing section__padding'>
        <div className='product__pricing-heading'>
            <h1>Price Table</h1>
            <p>We offer competitive price</p>
        </div>
        <div className='product__pricing-cardList'>
            <Slider {...settings}>
                <div>
                    <Princingcard pricingcardtitle='Free' 
                                  pricingcarddescription='Brief price description' 
                                  pricingcardprice='0$ Per / month'
                                  pricingcardperformance='Only 2 Operators' />
                </div>
                <div>
                    <Princingcard pricingcardtitle='Standard' 
                                  pricingcarddescription='Brief price description' 
                                  pricingcardprice='5$ Per / month'
                                  pricingcardperformance='5+ Operators' />
                </div>
                <div>
                    <Princingcard pricingcardtitle='Premium' 
                                  pricingcarddescription='Brief price description' 
                                  pricingcardprice='10$ Per / month'
                                  pricingcardperformance='10+ Operators' />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default Pricing;