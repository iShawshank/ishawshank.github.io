import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navContainer">
      <div className="navbar">
        <Link
          activeClass="none"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          id="headerName"
        >
          Kevin Shaw
        </Link>
        <div className="desktopMenu hidden lg:flex">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktopMenuListItem"
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>
        </div>

        <div></div>
        <button
          className="desktopMenuBtn hidden lg:flex"
          onClick={() =>
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          <FontAwesomeIcon
            className="desktopMenuImg"
            icon="comment-dots"
          />
          Contact Me
        </button>

        <FontAwesomeIcon
          className="mobMenuIcon lg:hidden pr-5"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="mobileMenu bg-zinc-800 rounded"
          style={{ display: showMenu ? 'flex' : 'none' }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktopMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktopMenuListItem "
            onClick={() => setShowMenu(false)}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktopMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="desktopMenuListItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
