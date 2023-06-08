import React from "react";
import Footer from "./Footer";
import Filter from "./Filter";
import Header from "./Header";
import { mockDataTime } from "./Tab";
import Tab from "./Tab";

const SecondScreen = () => {
  return (
    <div>
      <Filter locations={mockDataTime}/>
      <Header />
      <Tab />
      <Footer />
    </div>
  );
};

export default SecondScreen;
