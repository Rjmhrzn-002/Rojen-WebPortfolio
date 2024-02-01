import CV from "/src/assets/Rojen_Maharjan_CV.pdf";

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">Rojen Maharjan</h1>
      <h3 className="home-subtitle">Frontend Developer</h3>
      <p className="home-description">
        I'm a passionate learner with a knack for creating visual contents,
        creative projects and web applications.
      </p>
      <a download="" href={CV} className="button button--flex" id="cv">
        Download CV 📄
      </a>
    </div>
  );
};

export default Data;
