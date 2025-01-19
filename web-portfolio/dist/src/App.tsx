import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import luffy from "./assets/Photos/Subject.png";
import StartPage from "./components/StartPage";
import ProjectCards from "./components/ProjectCards";
import image1 from "./assets/Photos/Hasbulla.jpeg";
import image2 from "./assets/Photos/Subject.png";
import image3 from "./assets/Photos/luffy.jpg";

function App() {
  return (
    <div>
      <NavBar />

      <section>
        <StartPage image={luffy} />
      </section>

      <section id="AboutMe">
        <AboutMe imageSrc={luffy} />
      </section>

      <section id="Projects" className="in-body header">
        <h2>Projects</h2>
        <ProjectCards image1={image1} image2={image2} image3={image3} />
      </section>

      <section id="Contact" className="in-body header">
        <h2>Contact</h2>
      </section>
    </div>
  );
}

export default App;
