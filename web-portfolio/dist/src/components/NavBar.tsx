import "./Navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="container-fluid sticky-top">
      <nav className="navbar">
        <div className="navbar-center nav-links container-fluid">
          <button
            className="btn navbar-brand navbar-right"
            onClick={() => {
              scroll.scrollToTop({ duration: 50 });
            }}
          >
            Edwin Najera
          </button>
          <ul className="navbar-center nav-links">
            <li>
              <ScrollLink
                className="btn"
                to="AboutMe"
                smooth={true}
                duration={50}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="btn"
                to="Projects"
                smooth={true}
                duration={50}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="btn"
                to="Contact"
                smooth={true}
                duration={50}
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <a
                className="btn"
                href="https://github.com/Edwin-Najera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a
                className="btn"
                href="https://www.linkedin.com/in/edwin-najera-49767a30b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
