import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import Button from '../button/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavbarLinks = () => {
    return (
        <>
            <p>Product</p>
            <p>Customers</p>
            <p>Pricing</p>
            <p>Resources</p>
        </>
    )
}

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='product__navbar section__padding'>
            <div className='product__navbar-logo'>
                <img src={logo} alt='logo' />
                <h1>Product</h1>
            </div>

            <div className='product__navbar-links'>
                <NavbarLinks />
            </div>

            <div className='product__navbar-btnbox'>
                <Button btnText='Sign In' btnBg='#ffffff' btnTextColor='#173A56' btnBorder='1px solid #BCD0E5' />
                <Button btnText='Sign Up' btnBg='#02897A' btnTextColor='#ffffff' btnBorder='none' />
            </div>

            <div className='product__navber-menu'>

        {
          toggleMenu ?
            <CloseIcon
              onClick={() => setToggleMenu(!toggleMenu)}
              fontSize='large'
              sx={{
                cursor: 'pointer',
                zIndex: '10'
              }}
            />
            :
            <MenuIcon
              onClick={() => setToggleMenu(!toggleMenu)}
              fontSize='large'
              sx={{
                cursor: 'pointer',
                zIndex: '10'
              }} />
        }
        {
          toggleMenu && (
            <div className='product__navbar-menu_container'> 
                <div className='product__navbar-menu_container-links'>
                    <NavbarLinks /> 
                </div>
                <div className='product__navbar-menu_container-btns'>
                <Button btnText='Sign In' btnBg='#ffffff' btnTextColor='#173A56' btnBorder='1px solid #BCD0E5' />
                <Button btnText='Sign Up' btnBg='#02897A' btnTextColor='#ffffff' btnBorder='none' />
                </div>
            </div>
          )
        }
      </div>



        </div>
    )
}

export default Navbar;