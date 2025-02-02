import './App.css'

import Header from './components/Header';
import About from './components/About';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      {/* Header section*/}
      <Header />

      {/* About section */}
      <About />

      {/* Projects section */}
      <ProjectsList />

      {/* Contact section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App
