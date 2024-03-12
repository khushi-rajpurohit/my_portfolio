import React from 'react'
import'./App.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const App:React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }); // Scroll to the top when the component mounts
  }, []
  );
  return (
    <div className='main-div'>
      

      <div className='my-photo-div'>
<img className='my-photo' src='https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58477.jpg' alt='my image'/>
      </div>
      

     <div className='intro'>
     
     <div className='intro-1'>
     <h1 className='my-name'>Khushi Rajpurohit</h1>
     <h3>Full-Stack Developer</h3><br></br>
     <h4>A littile about me</h4>
     <p className='info-para'>I am on a continuous journey of learning, driven by a passion for acquiring new <br/>knowledge and skills. Hailing from a humble village background, my roots inspire <br/>resilience and a deep appreciation for simplicity. My goal is to channel my <br/>creativity  into crafting innovative solutions, aspiring to create meaningful and <br/>impactful contributions to the world.</p>
     </div>
     <div className='info'>

      
     
      <Link className="circle nav-link" id='c1' to="/resume"> Resume</Link>
      <Link className="circle nav-link" id='c2' to="/work" >Work</Link>
      <Link className="circle nav-link" id='c3' to="/about"> About</Link>
     </div>
    
     </div>

     
    </div>
  )
}

export default App
