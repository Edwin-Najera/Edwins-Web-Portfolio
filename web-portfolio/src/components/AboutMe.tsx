import { Fragment, useState } from "react";
import "./AboutMe.css";
import { Collapse } from "react-collapse";

interface Props {
  imageSrc: string;
}

const AboutMe = ({ imageSrc }: Props) => {
  const [isSkillsOpen, setSkillsOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);
  const [isCertificationOpen, setCertificationOpen] = useState(false);

  return (
    <Fragment>
      <div className="inline">
        <img src={imageSrc} className="image-center" />
        <div className="txt">
          <section id="AboutMe" className="header">
            About Me
          </section>
          Hello, my name is Edwin (Leo) Najera Gonzalez, and I am a sophomore
          currently pursuing a degree in Computer Science. I have developed a
          growing interest and passion for software development. As I continue
          my academic journey, I am also working to strengthen my foundation in
          computer science, focusing on languages such as C++, Python, and Java,
          along with front-end technologies like React using TypeScript and
          JavaScript. While I don’t have many major projects under my belt yet,
          I am actively building smaller projects that allow me to explore and
          apply the concepts I learn in class and during my personal time.
          <br />
          <br />I am eager to expand my knowledge and experience, excited to
          take on new challenges and tasks in the tech world. Currently, my
          focus is on improving my coding skills and tackling real-world
          problems through the projects I’m creating. My goal is to build a
          strong portfolio and continue to grow as both a software developer and
          a computer scientist.
          <br />
        </div>
      </div>
      {/* Buttons for the following items => skills, education, certifications */}
      <div className="buttons-inline">
        <div className="button-container">
          <button
            className="btn button-collapse"
            type="button"
            formTarget="skills"
            aria-expanded="false"
            aria-controls="skills"
            id="skills"
            onClick={() => {
              setEducationOpen(false);
              setSkillsOpen(!isSkillsOpen);
              setCertificationOpen(false);
            }}
          >
            <span className="button-text">Skills</span>
            <div className="filler"></div>
          </button>
          <Collapse id="skills" isOpened={isSkillsOpen}>
            <ul className="list-group">
              <li className="txt">C++</li>
              <li className="txt">Java</li>
              <li className="txt">Python</li>
              <li className="txt">React</li>
            </ul>
          </Collapse>
        </div>
        <div className="button-container">
          <button
            className="btn button-collapse"
            type="button"
            formTarget="education"
            aria-expanded="false"
            aria-controls="education"
            id="education"
            onClick={() => {
              setEducationOpen(!isEducationOpen);
              setSkillsOpen(false);
              setCertificationOpen(false);
            }}
          >
            <span className="button-text">Education</span>
            <div className="filler"></div>
          </button>
          <Collapse isOpened={isEducationOpen}>
            <ul id="skils" className="list-group">
              <li className="txt" style={{ width: "140%" }}>
                CS-Undergraduate
              </li>
            </ul>
          </Collapse>
        </div>
        <div className="button-container">
          <button
            className="btn button-collapse"
            type="button"
            formTarget="certification"
            aria-expanded="false"
            aria-controls="certification"
            id="certification"
            onClick={() => {
              setEducationOpen(false);
              setSkillsOpen(false);
              setCertificationOpen(!isCertificationOpen);
            }}
          >
            <span className="button-text">Certifications</span>
            <div className="filler"></div>
          </button>
          <Collapse isOpened={isCertificationOpen}>
            <ul style={{ width: "200px" }} className="list-group"></ul>
          </Collapse>
        </div>
      </div>
      <br />

      {/* Begginning of the collapse for the buttons to open and close */}
    </Fragment>
  );
};

export default AboutMe;
