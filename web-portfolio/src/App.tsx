import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import luffy from "./assets/Photos/Subject.png";
import StartPage from "./components/StartPage";
import MyButton from "./components/Learned.Learning/MyButton";

function App() {
  return (
    <div>
      <NavBar />

      <StartPage image={luffy} />

      <section id="AboutMe">
        <AboutMe imageSrc={luffy} />
      </section>

      <section id="Projects" className="in-body header">
        Projects
      </section>

      <section id="Contact" className="in-body header">
        Contact
      </section>

      <MyButton />
    </div>
  );
}

export default App;
