import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Filter.css'
import { mockDataTime } from "./Tab";

const Filter = ({ locations }) => {
  const uniqueLocations = Array.from(new Set(locations.map((obj) => obj.area)));
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath === '/available-shifts' ? 'home' : 'about');
  }, []);

  return (
    <div className="contain">
      <div className="places">
        {uniqueLocations.map((location, index) => (
          <Link to={location} key={index}>
            <h1 className={activeLink === location ? "activeLink" : "inactive"} onClick={() => handleLinkClick(location)}>
              {`${location} (${mockDataTime.length})`}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;

