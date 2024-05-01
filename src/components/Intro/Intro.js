import React from 'react';
import './Intro.css';
import bg from '../../assets/bg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
    <section
      id="intro"
      className="grid grid-cols-1 lg:grid-cols-2 w-full pt-20 lg:pt-0"
    >
      <div className="introImage lg:order-2 flex flex-col justify-center items-center">
        <div className="bgContainer">
          <img src={bg} alt="profile" className="bg" />
        </div>
      </div>
      <div className="introContent lg:order-1">
        <p className="hello">Hello,</p>
        <p className="introText">
          I'm <span className="introName">Kevin Shaw</span>
        </p>
        <span className="introTitle">Senior Full Stack Engineer</span>
        <p className="introDescription mb-3">
          I'm a dedicated husband, a proud father of two, and a
          seasoned Software Engineer. With more than seven years of
          engineering experience under my belt and a professional
          journey spanning over two decades, I'm passionate about
          solving complex problems and creating innovative solutions.
        </p>
        <div className="buttonContainer flex justify-start gap-4">
          <a
            href="https://www.linkedin.com/in/ishawshank39/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="linkImg"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://github.com/iShawshank"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="linkImg"
              icon={faSquareGithub}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
