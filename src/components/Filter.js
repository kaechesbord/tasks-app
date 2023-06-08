import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ locations, onSelectLocation }) => {
  const uniqueLocations = Array.from(new Set(locations.map((obj) => obj.area)));
  const [activeLink, setActiveLink] = useState(uniqueLocations[0]);

  const handleLinkClick = (location) => {
    setActiveLink(location);
    onSelectLocation(location);
  };

  return (
    <div className="contain">
      <div className="places">
        {uniqueLocations.map((location, index) => (
          <h1
            key={index}
            className={activeLink === location ? "activeLink" : "inactive"}
            onClick={() => handleLinkClick(location)}
          >
            {`${location} (${locations.filter((item) => item.area === location).length})`}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Filter;
