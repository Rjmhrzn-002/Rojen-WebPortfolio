import "./home.css";
import Social from "./Social";
import Data from "./Data";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
