import React from "react";
import Project from "./Project/Project";
import "./Projects.css";

const data = [
  {

    id: 1,
    title: "Movies Mela",
    description: "This application in build on React.js powered by Firebase, This one is Disney+ clone full responsive for mobile devices ",
    technology: ["React.js", "Material UI", "Firebase"],
    date: "Feb/2021",
    videoUrl: "videos/dieny.mp4",
    github: "https://github.com/faisalkhalikkhan/moviesmela/"
  }, {
    id: 2,
    title: "Codebook",
    description: "This application in build on React.js powered by Firebase, This one is facebook clone unfortunatly it does not have complete functionality of facebook but peoples can share there message of their lovely memories with everyone ",
    technology: ["React.js", "Material UI", "Firebase"],
    date: "Feb/2021",
    videoUrl: "videos/codebook.mp4",
    github: "https://github.com/faisalkhalikkhan/codebook/"
  }, {
    id: 3,
    title: "Library Mangement System",
    description: "This application in build on MERN STACK, This one is a simple CRUD operation application nothing else ",
    technology: ["React.js", "Express.js", "Node.js", "Mongodb"],
    date: "Feb/2021",
    videoUrl: "videos/library.mp4",
    github: "https://github.com/faisalkhalikkhan/book-library-mern-app/"
  }, {
    id: 4,
    title: "GYM managment system",
    description: "This application in build on JAVAFX with the MYSQL database, This one is Desktop application build on demand of a client, admin can send bill and manage there clients on it. ",
    technology: ["JAVAFX", "MYSQL"],
    date: "AUG/2020",
    videoUrl: "videos/Mjva.mp4",
    github: "https://github.com/faisalkhalikkhan/gym-management-system"
  }, {
    id: 5,
    title: "AirBnB Clone",
    description: "This application in build on React.js powered by Firebase, This one is AirBnB clone full responsive for mobile devices ",
    technology: ["React.js", "Material UI", "Firebase"],
    date: "Feb/2021",
    videoUrl: "videos/My Project.mp4",
    github: "https://github.com/faisalkhalikkhan/airbnb/"
  }
];

const Projects = () => {

  return (
    <div className="projects">
      {data.map((projectData) => {
        return (<Project key={projectData.id} projectDetails={projectData} />)
      })}

    </div>
  );
};

export default Projects;
