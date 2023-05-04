import React from 'react';
import './reviewlist.css'; 
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import data from '../../db/reviewdata';
import Reviewcard from '../reviewcard/Reviewcard';

const Reviewlist = () => {
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
    <div className='product__reviewList'>
        <Slider {...settings}>
            {
                data.map((value) => {
                    return (
                        <div key={value.id}>
                            <Reviewcard ReviewcardIamge={value.img}
                                        ReviewcardRate={value.rate}
                                        ReviewcardText={value.text}
                                        ReviewcardUjob={value.userjob}
                                        ReviewcardUname={value.username}
                            />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default Reviewlist;