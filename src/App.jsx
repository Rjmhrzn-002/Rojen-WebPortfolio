import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Skill from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Scroll from "./components/ScrollUP/scrollUp";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skill />
        <Project />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Scroll />
    </>
  );
};

export default App;
