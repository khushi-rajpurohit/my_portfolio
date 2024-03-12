import React from 'react'
import './resume.css'
import { useEffect } from 'react';

const Resume:React.FC = () => { 
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
      }, []);
    return (
        <div className='div-resume'>
            <div className='div2-resume'> 
            <div className='div-r-header'>
                <div className='r-name'>
                    <h1> Khushi Rajpurohit </h1>
                    <h4>Product Engineer</h4>
                </div>

                <div className='div-r-info'>
                    <p>Phone : 9022210024</p>
                    <p> Email : rajpurohitkhushi36@gmail.com</p>
                    <p>Linkedin : www.linkedin.com/in/khushi-rajpurohit-36a424279 </p>
                    <p>Address : Khichan , Phalodi<br />Jodhpur</p>
                </div>
            </div>

            <div className='r-div-all'>
                <h3 className='r-h1'>PROFILE SUMMARY</h3>
                <p className='p-summary'>As a dedicated and quick learner with a strong
                    interest in problem-solving, I bring expertise in
                    critical thinking, teamwork, and proficiency in
                    the MERN (MongoDB, Express.js, React.js,
                    Node.js) stack. Specializing as a backend
                    developer, I also possess frontend skills,
                    particularly in developing React applications. My
                    commitment to continuous learning and
                    adaptability ensures a proactive approach to
                    addressing challenges and contributing
                    effectively to collaborative projects.
                </p>
                <h3 className='r-h1'>EDUCATION HISTORY</h3>

                <h6 style={{paddingTop:'1rem',fontWeight:'bold'}}> Class XII</h6>
               
                <div className='edu-div'>
                    <div className='result-div' >
                       <ul> Board </ul>
                        <ul>Medium</ul> 
                        <ul>Year of Passing</ul> 
                        <ul>Grade</ul> 

                    </div>

                    <div>
                    <ul>CBSE</ul>
                    <ul>English</ul>
                    <ul>2020</ul>
                    <ul>75-79.9%</ul>
                    </div>
                </div>

                <h6 style={{paddingTop:'1rem',fontWeight:'bold'}}> Class X</h6>
                <div className='edu-div'>
                    <div className='result-div' >
                       <ul> Board </ul>
                        <ul>Medium</ul> 
                        <ul>Year of Passing</ul> 
                        <ul>Grade</ul> 

                    </div>

                    <div>
                    <ul>CBSE</ul>
                    <ul>English</ul>
                    <ul>2018</ul>
                    <ul>70-74.9%</ul>
                    </div>
                </div>
               
                <h3 className='r-h1' >TECHNICAL SKILLS</h3>
                <li className='result-div'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React.Js</li>
                    <li>Node.Js</li>
                    <li> API Development</li>
                    <li>Github</li>

                </li>
                <h3 className='r-h1'>PROJECTS</h3>
                <h6>Upwan</h6>
                <p>Contributed to the development of Upwan, an innovative
                    e-commerce platform specializing in plant sales.
                    Leveraged technical skills to implement features such as
                    seamless plant purchases, personalized plant
                    recommendations based on user preferences, and a
                    cutting-edge 'Find by Photo' functionality. Enhanced user
                    experience by incorporating a user-friendly cart system for
                    effortless plant selection and checkout</p>
            </div>
            </div>
        </div>
    )
}

export default Resume
