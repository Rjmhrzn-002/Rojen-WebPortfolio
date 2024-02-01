import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "./home.css";
const Social = () => {
  return (
    <div className="home-social">
      <a
        target="_blank"
        href="https://www.instagram.com/midget_spinnrr"
        className="home-social-icon"
      >
        <FaInstagram />
      </a>
      <a
        target="_blank"
        href="https://github.com/Rjmhrzn-002"
        className="home-social-icon"
      >
        <FaGithub />
      </a>
      <a target="_blank" href="" className="home-social-icon">
        <FaFacebook />
      </a>
    </div>
  );
};

export default Social;
