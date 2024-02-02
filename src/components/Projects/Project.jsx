import "./project.css";

const Project = () => {
  return (
    <section className="project section" id="projects">
      <h2 className="section-title">Projects</h2>
      <span className="section-subtitle">What I've built</span>

      <div className="project-container container">
        <div className="project-data">
          <div className="project-img">
            <img src="src/assets/images/RPS.png" alt="fail" />
          </div>
          <div className="project-btns">
            <a
              target="_blank"
              href="https://rjmhrzn-002.github.io/Rock_Paper_Scissor/"
              className="project-button"
            >
              Live Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Rjmhrzn-002/Rock_Paper_Scissor"
              className="project-button"
            >
              Source
            </a>
            <p className="project-hover">RPS game built from scratch</p>
          </div>
        </div>

        <div className="project-data">
          <img
            src="src/assets/images/Todo.png"
            alt="fail"
            className="project-img"
          />
          <div className="project-btns">
            <a target="_blank" href="#" className="project-button">
              Live Demo
            </a>

            <a
              target="_blank"
              href="https://github.com/Rjmhrzn-002/React-todo"
              className="project-button"
            >
              Source
            </a>
            <p className="project-hover">React todo-list</p>
          </div>
        </div>

        <div className="project-data">
          <img
            src="src/assets/images/reactRouter.png"
            alt="fail"
            className="project-img"
          />
          <div className="project-btns">
            <a target="_blank" href="#" className="project-button">
              Live Demo
            </a>
            <a
              target="_blank"
              href="https://github.com/Rjmhrzn-002/React_rotuer_dom"
              className="project-button"
            >
              Source
            </a>
            <p className="project-hover">React Router Practice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
