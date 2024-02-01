import { MdVerified } from "react-icons/md";

const Frontend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Frontend Skills</h3>
      <div className="skills-box">
        <div className="skills-data">
          <MdVerified className="badges" />
          <div>
            <h3 className="skills-name">HTML</h3>
            <span className="skills-level">Basic</span>
          </div>
        </div>
        <div className="skills-data">
          <MdVerified className="badges" />
          <div>
            <h3 className="skills-name">CSS</h3>
            <span className="skills-level">Intermediate</span>
          </div>
        </div>
        <div className="skills-data">
          <MdVerified className="badges" size={18} />
          <div>
            <h3 className="skills-name">JAVASCRIPT</h3>
            <span className="skills-level">Semi-intermediate</span>
          </div>
        </div>
        <div className="skills-data">
          <MdVerified className="badges" />
          <div>
            <h3 className="skills-name">GIT</h3>
            <span className="skills-level">Intermediate</span>
          </div>
        </div>
        <div className="skills-data">
          <MdVerified className="badges" />
          <div>
            <h3 className="skills-name">TAILWINDCSS</h3>
            <span className="skills-level">Intermediate</span>
          </div>
        </div>
        <div className="skills-data">
          <MdVerified className="badges" />
          <div>
            <h3 className="skills-name">REACT</h3>
            <span className="skills-level">Beginner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
