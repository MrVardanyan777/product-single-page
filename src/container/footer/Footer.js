import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '../../components';

const Footer = () => {
  return (
    <div className='product__footer section__padding'>
        <footer>
            <div className='product__footer-logo'>
                <div className='product__footer-image'>
                    <img src={logo} alt='logo' />
                    <h1>Product</h1>
                </div>
                <div className='product__footer-socialMedia'>
                    <InstagramIcon fontSize='medium' sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                        backgroundColor: '#EDFFFC',
                        color: '#02897A',
                        padding: '0.3rem',
                        cursor:'pointer',
                        transition: 'all .4s',
                        '&:hover': {
                            color: '#EDFFFC',
                            backgroundColor: '#02897A'
                        }
                    }} />
                    <FacebookIcon fontSize='medium' sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                        backgroundColor: '#EDFFFC',
                        color: '#02897A',
                        padding: '0.3rem',
                        margin: '0 1rem',
                        cursor:'pointer',
                        transition: 'all .4s',
                        '&:hover': {
                            color: '#EDFFFC',
                            backgroundColor: '#02897A'
                        }
                    }} />
                    <TwitterIcon fontSize='medium' sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                        backgroundColor: '#EDFFFC',
                        color: '#02897A',
                        padding: '0.3rem',
                        cursor:'pointer',
                        transition: 'all .4s',
                        '&:hover': {
                            color: '#EDFFFC',
                            backgroundColor: '#02897A'
                        }
                    }} />
                </div>
            </div>

            <div className='product__footer-links'>
                <div className='product__footer-links_groupA'>
                    <h3>Resource</h3>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
                <div className='product__footer-links_groupB'>
                <h3>Legal Stuff</h3>
                    <p>Disclaimer</p>
                    <p>Financing</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>

            <div className='product__footer-form'>
                <h2>knowing you're always on the best energy deal. </h2>
                <input type='e-mail' />
                <Button btnBg='#02897A' btnBorder='none' btnText='Sign up Now' btnTextColor='#ffffff' />
            </div>
        </footer>

        <div className='product__footer-underfooter'>
            <p>Made With Love By Figmaland All Right Reserved</p>            
        </div>
    </div>
  )
}

export default Footer;