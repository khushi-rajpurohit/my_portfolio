import React from 'react';
import './about.css';
import { useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'; // Specify Free Brands icons

import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons/faGitAlt';




// Define the About component using React.FC for type safety
const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <div className="main-div-2 ">
      <h1 className="w-h1">ABOUT</h1>
      <div className="para-about">
        <p>
          Growing up in a village presented unique challenges, and access to regular college studies was one of them. However, fueled by an insatiable curiosity and the boundless possibilities of the internet, I embarked on a self-directed learning journey before even completing my formal education. This led me to the fascinating world of coding and product engineering.
        </p>
        <p>
          Starting with the fundamentals, I devoured online resources and honed my skills by actively building websites. Immersed in the world of code, I discovered a hidden talent – the ability to combine existing elements in creative and insightful ways. This knack for creative problem-solving and a passion for making things better has become my driving force.
        </p>
        <p>
          My story is a testament to the power of self-motivation and a relentless pursuit of knowledge. I am eager to leverage the skills and experiences I've garnered to contribute meaningfully to a team environment and continuously grow as a product engineering professional.
        </p>
      </div>
      <div className="skills">
        <h2>Skills and Tools</h2>
        <div className='icon-div'>
          <span className='icon'>

            <FontAwesomeIcon className='icon-hover' icon={faHtml5} size="2x" color="#000000" title="GitHub" />
            <FontAwesomeIcon className='icon-hover' icon={faCss3} size="2x" color="#000000" title="GitHub" />
            <FontAwesomeIcon className='icon-hover' icon={faSquareJs} size='2x' color="#000000" title="js" />
            <FontAwesomeIcon className='icon-hover' icon={faReact} size="2x" color="#000000" title="GitHub" />
            <i className="fa-brands fa-node node-Icon icon-hover" style={{ textAlign: 'center' }} ></i>
            <FontAwesomeIcon className='icon-hover' icon={faGithub} size="2x" color="#000000" title="GitHub" />
            <FontAwesomeIcon className='icon-hover' icon={faGitAlt} size="2x" color="#000000" title="GitHub" />





          </span>
          <ul className='icon i-names'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>NodeJs</li>
            <li>Github</li>
            <li>Git</li>

          </ul>
          <ul className='icon i-names'>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>SQL</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
