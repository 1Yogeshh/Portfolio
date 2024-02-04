import React from 'react'
import "./home.css";
import yogesh from "./yogesh.jpeg"
import mywork from "./pexels-sanket-mishra-18610082.jpg"
import mywork1 from "./_131718847_gettyimages-1542315161.jpg"
import hkkall from "./WhatsApp Image 2024-01-24 at 7.37.11 PM.jpeg"
import skill1 from "./atom.png"
import skill2 from "./html.png"
import skill3 from "./css-3.png"
import skill4 from "./js.png"
import email from "./gmail (1).png"
import github from "./github (1).png"
import linkdin from "./linkedin (1).png"

const Home=()=> {
  
    return (
    <>
    
    <div className='my-portfolio'>

      <div className='navbar'>
        <div className='navbar-buttons'>
          <li>
            <button>Home</button>
            <button>About me</button>
            <button>Projects</button>
            <button>Skills</button>
            <button>Contact</button>
          </li>
        </div>
      </div>


      <div className='main-section'>

      <div>
      <div className='hero-section'>
        <div className='hero-heading'>
          <h1>Hi, I am <span>Yogesh Kumar.</span></h1>
        </div>
        <div className='hero-heading-1'>
          <h1>A <span>Front End</span> Web-Developer.</h1>
        </div>
        <div className='hero-para'>
          <p>I am a student of Computer Science and Engineering who loves developing front end of web pages. Currently I am in quest of an internship where apart from working I can fulfil my desire of learning new technologies.</p>
        </div>
      </div>

      <div className='resume-button'>
        <button><a href='https://www.linkedin.com/in/yogesh-kumar-b41ab6221/'>Connect🚀</a></button>
      </div>
      </div>

      <div className='pic'>
        <img src={hkkall}></img>
      </div>

      </div>

      <div className='line-11'></div>



      <div className='about-me'>
        
        <div className='about-me-hero'>
        <div className='about-me-heading'>
          <h1>About me</h1>
        </div>
          
          <div className='about-me-pic'>
            <img src={yogesh}></img>
          </div>
          <div className='about-me-para'>
          
            <p>Hi! my name is <strong>Yogesh Kumar</strong> and I am a computer science student with a strong passion for front-end development, particularly specializing in React.js. I thoroughly enjoy crafting user-friendly interfaces and stay updated on the latest web development trends. My projects showcase my expertise in JavaScript, HTML, and CSS, aiming to deliver seamless and visually appealing user experiences.</p>
          </div>
        </div>
      </div>

      <div className='line-11'></div>

      


      <div className='project'>
        <div className='project-heading'>
          <h1>PROJECTS</h1>
        </div>
        <div className='project-buttons'>
          
          <div className='work-list'>
          <a href='/'>
            <div className='work'>
              <img src={mywork}></img>
              <div className='layer'>
                <h3>Instagram frontend clone</h3>
                <h4>clone of instagram frontend web application</h4>
                <p>React js</p>
              </div>
            </div>
            </a>
            <a href='/'>
            <div className='work'>
              <img src={mywork1}></img>
              <div className='layer'>
                <h3>Thread frontend clone</h3>
                <h4>clone of thread frontend web application</h4>
                <p>React js</p>
              </div>
            </div>
            </a>
          </div>

        </div>
      </div>

      <div className='line-11'></div>


      <div className='skills'>
        <div className='skills-heading'>
          <h1>Skills</h1>
        </div>
        <div className='skill-list'>
          <div className='skills-1'>
            <img src={skill1}></img>
          </div>
          <div className='skills-1'>
            <img src={skill4}></img>
          </div>
          <div className='skills-1'>
            <img src={skill3}></img>
          </div>
          <div className='skills-1'>
            <img src={skill2}></img>
          </div>
        </div>
      </div>

      <div className='line-11'></div>

      <div className='contact-me'>
        <div className='contact-me-heading'>
          <h1>Contact me</h1>
        </div>
        <div className='contact-name'>
        <div className='contact-name-1'>
          <input type='text' placeholder='Name'></input>
          
        </div>  
        <div className='contact-name-1'>  
          <input type='text' placeholder='Email'></input>
          
        </div>  
        </div>
        <div className='contact-message'>
        <input type='text' placeholder='Write your message...'></input>
        <div className='line-1'></div>
        </div>
        <div className='contact-button'>
          <button>SEND MESSAGE</button>
        </div>
      </div>
      

      <div className='contact-buttons'>
        <div className='contact-buttons-1'>
          <a href='https://github.com/1Yogeshh'><img src={github}></img></a>
        </div>
        <div className='contact-buttons-1'>
       <a href='https://www.linkedin.com/in/yogesh-kumar-b41ab6221/' > <img src={linkdin}></img></a>
        </div>
      </div>


    </div>

    </>
    )
  
}

export default Home;
