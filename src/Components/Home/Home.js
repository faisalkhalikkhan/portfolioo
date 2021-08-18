import './Home.css'
import { useState, useEffect } from "react";
import NavBar from '../Navbar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import Skills from '../Skills/Skills';
import RightSidebar from '../RightSidebar/RightSidebar';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Certificates from '../Certificates/Certificates';

const Home = () => {

  const [certificate, setCertificate] = useState(false);
  const [education, setEducation] = useState(false);
  const [projects, setProjects] = useState(true);
  const [skills, setSkills] = useState(true);

  useEffect(() => {
    if (education) {
      setSkills(false);
    }
  }, [certificate, setCertificate, education, setEducation, projects, setProjects, skills, setSkills]);


  return (
    <div className="home">
      <NavBar educationMethod={setEducation} projectMethod={setProjects} certificateMethod={setCertificate} skillsBack={setSkills} />
      <div className="main">
        <div className="app__left">
          <Sidebar />
        </div>
        <div className="app__middle">
          {certificate ? <Certificates /> : projects ? <Projects /> : <h1>Hello</h1>}
        </div>
        <div className="app__right">
          {skills ? <Skills /> : education ? <Education /> : <h1>Hello</h1>}
        </div>
      </div>
    </div>
  )
}

export default Home;