import { Avatar, IconButton, Typography , Button} from "@material-ui/core";
import React from "react";
import "./Navbar.css";
import logo from "../../Hero.png";
import { AssignmentInd, CardMembership, School, Stars } from "@material-ui/icons";

const NavBar = ({educationMethod, projectMethod, certificateMethod , skillsBack}) => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Avatar src={logo} />
        <span className="hero_name">Faisal Khan</span>
      </div>
      <div className="navbar__middle">
        <div className="nav__btn">
          <Button className="btn"  onClick={() => {
             projectMethod(false)
             certificateMethod(true)
          }}>
            <CardMembership />
            Certificates
          </Button>
        </div>
        <div className="nav__btn">
          <Button className="btn" onClick={() => {
             projectMethod(true)
             certificateMethod(false)
          }}>
            <AssignmentInd />
            Projects
          </Button>
        </div>
        <div className="nav__btn">
          <Button className="btn" onClick={() => {
             educationMethod(true)
          }}>
            <School />
            Education
          </Button>
        </div>
        <div className="nav__btn">
          <Button className="btn" onClick={() => {
             educationMethod(false)
             skillsBack(true)
          }}>
            <Stars />
            Skills
          </Button>
        </div>
      </div>
      <div className="navbar__right"></div>
    </div>
  );
};

export default NavBar;
