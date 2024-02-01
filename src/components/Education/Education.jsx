import { useState } from "react";
import "./education.css";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const [toggleState, setToggle] = useState(1);

  const ToggleTab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <section className=" section" id="education">
        <h2 className="section-title">Qualification</h2>
        <span className="section-subtitle">My personal journey</span>

        <div className="qualification-container container">
          <div className="qualification-tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification-button qualification-active button-flex"
                  : "qualification-button button-flex"
              }
              onClick={() => ToggleTab(1)}
            >
              <FaBriefcase size={toggleState === 1 ? 20 : 18} /> Experience
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification-button qualification-active button-flex"
                  : "qualification-button button-flex"
              }
              onClick={() => ToggleTab(2)}
            >
              <FaGraduationCap size={toggleState === 1 ? 20 : 22} /> Education
            </div>
          </div>
          <div className="qualification-section">
            <div
              className={
                toggleState === 1
                  ? "qualification-content qualification-content-active"
                  : "qualification-content"
              }
            >
              <div className="qualification-data">
                <div className="qualification-empty"></div>

                <div className="qualification-divider">
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    Art workshops and Exhibitions
                  </h3>
                  <span className="qualification-subtitle">
                    Partake and contribute in Exhibitions
                  </span>
                  <div className="qualification-calendar">
                    <FaCalendarAlt /> 2020 - Present
                  </div>
                </div>
              </div>

              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                    Html5 and CSS3 bootcamps
                  </h3>
                  <span className="qualification-subtitle">
                    8 weeks of physical course
                  </span>
                  <div className="qualification-calendar">
                    <FaCalendarAlt /> Oct - Nov 2022
                  </div>
                </div>

                <div className="qualification-divider">
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="qualification-empty"></div>
              </div>

              <div className="qualification-data">
                <div className="qualification-empty"></div>
                <div className="qualification-divider">
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
                <div>
                  <h3 className="qualification-title">Self Projects</h3>
                  <span className="qualification-subtitle">
                    Develop skills with personal projects.
                  </span>
                  <div className="qualification-calendar">
                    <FaCalendarAlt /> 2022 - Present
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification-content qualification-content-active"
                  : "qualification-content"
              }
            >
              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                    A.V.M Higher Secondary School
                  </h3>
                  <span className="qualification-subtitle">Schooling</span>
                  <div className="qualification-calendar">
                    <FaCalendarAlt /> 2008-2018
                  </div>
                </div>
                <div className="qualification-divider">
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div className="qualification-empty"></div>
              </div>

              <div className="qualification-data">
                <div className="qualification-empty"></div>

                <div className="qualification-divider">
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>

                <div>
                  <h3 className="qualification-title">
                    A.V.M Higher Secondary School
                  </h3>
                  <span className="qualification-subtitle">
                    Intermediate(+2)
                  </span>
                  <div className="qualification-calendar">
                    <FaCalendarAlt /> 2018-2020
                  </div>
                </div>
              </div>

              <div className="qualification-data">
                <div>
                  <h3 className="qualification-title">
                    Nagarjuna College of I.T
                  </h3>
                  <span className="qualification-subtitle">BCA</span>
                  <div className="qualification-calendar">
                    <FaCalendarAlt /> 2020 - Present
                  </div>
                </div>

                <div className="qualification-divider">
                  <span className="qualification-rounder"></span>
                  <span className="qualification-line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
