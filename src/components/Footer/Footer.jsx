import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Rojen</h1>
        <ul className="footer-list">
          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="footer-link">
              Education
            </a>
          </li>
          <li>
            <a href="#skill" className="footer-link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/midget_spinnrr"
            className="footer-social-link"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.github.com/Rjmhrzn-002"
            className="footer-social-link"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer-social-link"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
        <span className="footer-copy">
          &#169; Rojen_Maharjan_{new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
