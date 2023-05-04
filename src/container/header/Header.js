import React from 'react';
import './header.css';
import { Button } from '../../components';
import mainImage from '../../assets/header-image.png';

const Header = () => {
    return (
        <div className='product__header section__padding'>
            <div className='product__header-content'>
                <div className='product__header-content_textbox'>
                    <h1>Work at the speed of thought</h1>
                    <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                </div>
                <div className='product__header-content_btnbox'>
                    <Button btnBg='#02897A' btnBorder='none' btnTextColor='#ffffff' btnText='Get started'/>
                    <p>Watch the Video</p>
                </div>
            </div>

            <div className='product__header-image'>
                <img src={mainImage} alt='header' />
            </div>
        </div>
    )
}

export default Header;