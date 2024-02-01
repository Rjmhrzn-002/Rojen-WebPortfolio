import { MdVerified } from "react-icons/md";
import "./skill.css";
const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Other Skills</h3>
      <div className="skills-box">
        <div className="skills-data">
          <MdVerified className="badges" size={23} />
          <div>
            <h3 className="skills-name">ADOBE ILLUSTRATOR</h3>
            <span className="skills-level">Basic</span>
          </div>
        </div>
        <div className="skills-data">
          <MdVerified className="badges" />
          <div>
            <h3 className="skills-name">PHP</h3>
            <span className="skills-level">Basic</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
