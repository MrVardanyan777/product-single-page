import React from 'react';
import './newslist.css';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import data from '../../db/newsdata';
import Newscard from '../newscard/Newscard';

const Newslist = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    <div className='product__newslist'>
        <Slider {...settings}>
            {
                data.map((value) => {
                    return (
                        <div key={value.id}>
                            <Newscard newscardImage={value.img}
                                      newscardDate={value.date}
                                      newscardHeading={value.heading}
                            />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default Newslist;