import React, {  useState } from "react";
import { Link } from "react-router-dom";
import './Filter.css'
import { mockDataTime } from "./Tab";

const Filter = ({ locations }) => {
  const uniqueLocations = Array.from(new Set(locations.map((obj) => obj.area)));
  const [activeLink, setActiveLink] = useState(uniqueLocations[0]);

  const checkLocation = (location) => {
    setActiveLink(location);
  }

  return (
    <div className="contain">
      <div className="places">
        {uniqueLocations.map((location, index) => (
          <Link to={location} key={index} style={{ textDecoration: 'none' }}>
            <h1 className={activeLink === location ? "activeLink" : "inactive"} onClick={() => checkLocation(location)}>
              {`${location} (${mockDataTime.length})`}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Filter;
