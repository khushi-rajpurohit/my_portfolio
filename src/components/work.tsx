import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './work.css'

const Work:React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  const images = [
    '/images/plants1.png',
    '/images/plants2.png',
    '/images/plants3.png',
  ];
  const imagesWeather = [
    '/images/weather1.png',
    '/images/weather2.png',
    
  ];

  const imagesPuzzle = [
    '/images/puzzle1.png',
    '/images/puzzle2.png',
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickArrow: false
  };

  return (
    <div>
      <div className='w-div'>
        <h1 className='w-h1'> PROJECTS</h1>
      </div>


      <div className='w1'>
      
        <div className='w-photos-container'>
        
          <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='w-photos'>
            <img className='w-p' src={image} alt={`Plant ${index + 1}`} />
          </div>
        ))}
      </Slider>
      
         
      <Link to='http://52.193.203.240/' target='_blank' className='upwan'>
          <h1 className='upwan'> Upwan </h1>
        </Link>


        </div>
        <div className='w-text'>
          
          <p>
            I played a pivotal role in the creation of Upwan, a website designed to cater to plant enthusiasts. As a key member of the team, I contributed both to the backend and frontend development. My responsibilities included crafting backend routes to seamlessly manage plant data in the database. Since our team lacked a dedicated frontend developer, I took charge of this aspect, focusing on enhancing the site's aesthetics, improving styling, and efficiently rendering data on components. Notably, I spearheaded the development of the 'Suggest Me a Plant' feature, utilizing a set of intuitive questions to recommend the ideal plant based on user preferences. This project reflects my ability to collaborate across domains and deliver a comprehensive web solution.
          </p>
        </div>
      </div>
      

      <div className='w1'>
      
        <div className='w-photos-container'>
        
          <Slider {...settings}>
        {imagesWeather.map((image, index) => (
          <div key={index} className='w-photos'>
            <img className='w-p' src={image} alt={`Plant ${index + 1}`} />
          </div>
        ))}
      </Slider>
     

      <Link to='https://wheather-api-8z2y.vercel.app/' target='_blank' className='upwan'>
          <h1 className='upwan'> Weather API </h1>
        </Link>
         
        </div>
        <div className='w-text'>
          
          <p>
          
In my early stages of learning web development, I undertook a project to build a Weather API application. This interactive tool allows users to access weather data by searching for a specific city. It marked my initial foray into API integration, utilizing React and Axios for seamless backend-to-frontend connectivity. Bootstrap played a key role in crafting an aesthetically pleasing user interface. As I delved into state management, this project laid the foundation for my evolving skills in web development.
          </p>
        </div>
      </div>




      <div className='w1'>
      
      <div className='w-photos-container'>
      
        <Slider {...settings}>
      {imagesPuzzle.map((image, index) => (
        <div key={index} className='w-photos'>
          <img className='w-p' src={image} alt={`Plant ${index + 1}`} />
        </div>
      ))}
    </Slider>
    

    <Link to='https://grid-game-ashen.vercel.app/' target='_blank' className='upwan'>
          <h1 className='upwan'> Puzzle Game </h1>
        </Link>
       
      </div>
      <div className='w-text'>
        
        <p>
        Crafted a puzzle game using HTML, CSS, and JavaScript during my learning phase. Collaborated with a colleague for JavaScript logics, enhancing both functionality and interactivity. This project not only resulted in an engaging game but also strengthened collaborative skills and practical web development experience.
        </p>
      </div>
    </div>



    </div>
  )
}

export default Work
