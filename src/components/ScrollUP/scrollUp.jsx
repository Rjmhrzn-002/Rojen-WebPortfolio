import { FaArrowUp } from "react-icons/fa";
import { attachScrollHandler } from "./scroll";
import React, { useEffect } from "react";
import "./scrollUp.css";

const Scroll = () => {
  useEffect(() => {
    const scrollClean = attachScrollHandler();

    return scrollClean;
  }, []);
  return (
    <a href="#" className="scrollup">
      <FaArrowUp />
    </a>
  );
};

export default Scroll;
