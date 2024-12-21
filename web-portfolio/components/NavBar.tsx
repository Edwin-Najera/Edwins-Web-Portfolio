import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="container-fluid sticky-top">
      <nav className="navbar">
        <div className="navbar-center nav-links container-fluid">
          <ScrollLink
            className="btn navbar-brand navbar-right"
            to="startPage"
            smooth={true}
            duration={50}
          >
            Edwin Najera
          </ScrollLink>
          <ul className="navbar-center nav-links">
            <li className="">
              <ScrollLink
                className="btn"
                to="AboutMe"
                smooth={true}
                duration={50}
              >
                About
              </ScrollLink>
            </li>
            <li className="">
              <ScrollLink
                className="btn"
                to="Projects"
                smooth={true}
                duration={50}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="">
              <ScrollLink
                className="btn"
                to="Contact"
                smooth={true}
                duration={50}
              >
                Contact
              </ScrollLink>
            </li>
            <li className="">
              <a
                className="btn"
                href="https://chatgpt.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} color="#000" />
              </a>
            </li>
            <li className="">
              <a
                className="btn"
                href="https://www.linkedin.com/in/edwin-najera-49767a30b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} color="#000" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
