import { MdClose, MdMenu } from "react-icons/md";
import "./header.css";
import { attachScrollListener } from "./headerLogic";

import {
  GoHome,
  GoTools,
  GoBook,
  GoPaperAirplane,
  GoProject,
} from "react-icons/go";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuIcon, setMenu] = useState(false);

  function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    setMenu((menuIcon) => !menuIcon);

    if (menuIcon) {
      navMenu.style.left = "-100%";
    } else {
      navMenu.style.left = "0";
    }
  }

  useEffect(() => {
    const cleanup = attachScrollListener();

    return cleanup;
  }, []);

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <div className="nav-logo">
            <a href="#home">Portfolio</a>
          </div>
          <ul className="nav-menu">
            <li className="nav-items">
              <a href="#home">
                <GoHome className="nav-icons" />
                Home
              </a>
            </li>
            <li className="nav-items">
              <a href="#skills">
                <GoTools className="nav-icons" />
                Skills
              </a>
            </li>
            <li className="nav-items">
              <a href="#projects">
                <GoProject className="nav-icons" />
                Projects
              </a>
            </li>
            <li className="nav-items">
              <a href="#education">
                <GoBook className="nav-icons" />
                Education
              </a>
            </li>
            <li className="nav-items">
              <a href="#contact">
                <GoPaperAirplane className="nav-icons" />
                Contact
              </a>
            </li>
          </ul>
          <div className="mobile-nav-icon" onClick={toggleMenu}>
            {!menuIcon ? <MdMenu /> : <MdClose />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
