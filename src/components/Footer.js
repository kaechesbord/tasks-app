import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath === "/" ? "my" : "avlbl");
  }, []);

  return (
    <div className="footer">
      <Link
        to={"/"}
        onClick={() => handleLinkClick("my")}
        className={activeLink === "my" ? "activeLink" : "inactive"}
      >
        {" "}
        <h2>My shifts</h2>
      </Link>
      <Link
        to={"/available-shifts"}
        onClick={() => handleLinkClick("avlbl")}
        className={activeLink === "avlbl" ? "activeLink" : "inactive"}
      >
        <h2>Available shifts</h2>
      </Link>
    </div>
  );
};

export default Footer;
