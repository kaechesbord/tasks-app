import React from 'react';
import './Header.css';

const Header = ({ date, shifts, time }) => {
  return (
    <div className='header'>
      <h2>{date}</h2>
      <h4>{shifts + " shifts" + time + "h"}</h4>
    </div>
  );
};

export default Header;