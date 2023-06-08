import React from 'react';
import './Header.css';

const Header = ({ date, shifts, time, showElement, onClick }) => {
  return (
    <div className='header' onClick={onClick}>
      <h2>{date}</h2>
      {showElement && <h4>{shifts + " shifts " + time + "h"}</h4>}
    </div>
  );
};

export default Header;