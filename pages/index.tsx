import type { NextPage } from "next";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
