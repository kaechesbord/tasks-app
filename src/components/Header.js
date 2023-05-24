import React from 'react';
import './Header.css';

const Header = ({ date, amnt }) => {
  return (
    <div className='header'>
      <h2>{date}</h2>
      <h4>{amnt}</h4>
    </div>
  );
};

export default Header;