import React from 'react';
import './features.css';
import data from '../../db/featurescardData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Featurecard } from '../../components';

const Features = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 0,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 800,
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
        <div className='product__features section__padding'>
            <div className='product__features-heading'>
                <h1>Product  was Built Specifically for You</h1>
            </div>

            <div className='product__features-cardList'>
                <Slider {...settings}>
                    <div>
                        <Featurecard FeaturecardImg={data[0].img}
                                     FeaturecardHeading={data[0].heading}
                                     FeaturecardText={data[0].text}
                        />
                    </div>
                    <div>
                        <Featurecard FeaturecardImg={data[1].img}
                                     FeaturecardHeading={data[1].heading}
                                     FeaturecardText={data[1].text}
                        />
                    </div>
                    <div>
                        <Featurecard FeaturecardImg={data[2].img}
                                     FeaturecardHeading={data[2].heading}
                                     FeaturecardText={data[2].text}
                        />
                    </div>
                    <div>
                        <Featurecard FeaturecardImg={data[3].img}
                                     FeaturecardHeading={data[3].heading}
                                     FeaturecardText={data[3].text}
                        />
                    </div>
                </Slider>
            </div>

            <div className='product__features-btnbox'>
                <Button btnText='SIGN UP NOW' btnBg='#02897A' btnTextColor='#ffffff' btnBorder='none' />
            </div>
      </div>
    )
}

export default Features;