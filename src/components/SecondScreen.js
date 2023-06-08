import React, { useState } from "react";
import Filter from "./Filter";
import Header from "./Header";
import TabContainer from "./Tab";
import Footer from "./Footer";
import { mockDataTime } from "./Tab";
import { mockData } from "../App";

const SecondScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const filteredTabs = mockDataTime.filter((tab) => tab.area === selectedLocation);


  return (
    <div>
      <Filter
        locations={mockDataTime}
        onSelectLocation={handleSelectLocation}
      />
      {mockData.map((item, index) => {
        return (
          <div key={index}>
            <Header date={item.date} />
            <TabContainer location={filteredTabs} />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default SecondScreen;
