import React from 'react';
import './button.css';

const Button = ({btnText, btnBg, btnTextColor, btnBorder}) => {
  return (
    <button style={{backgroundColor: btnBg, color: btnTextColor, border: btnBorder }}>{btnText}</button>
  )
}

export default Button;