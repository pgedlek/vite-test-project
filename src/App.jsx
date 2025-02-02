// import { useState } from 'react'
import './App.css'


function App() {
  const name = "John Doe"
  const profession = "Full Stack Developer";
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Node.js",
      link: "#"
    },
    {
      title: "Project Two",
      description: "An eCommerce platform built using Django",
      link: "#"
    }
  ]

  return (
    <div className='App'>
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      {/* About section */}
      <section id='about' className='about-section'>
        <h2>About me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love building web application that solves real world user problems</p>
      </section>

      {/* Projects section */}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel='noopener noreferrer'>View project</a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section id='contact' className='contact-section'>
        <h2>Contact me</h2>
        <p>If you would like to get in touch, feel free to email me at <a href='mail:johndoe@example.com'>johndoe@example.com</a></p>
      </section>

      {/* Footer */}
      <section className='footer'>
        <p>2025. All Right Reserved</p>
      </section>
    </div>
  );
}

export default App
