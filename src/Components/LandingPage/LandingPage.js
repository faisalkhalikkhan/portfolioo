import { Button, IconButton, Typography } from "@material-ui/core";
import {
  ArrowRightAlt,
  Directions,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
} from "@material-ui/icons";
import React from "react";
import "./LandingPage.css";

import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landingPage__top">
        <Typography variant="subtitle1">
          <strong className="helloText">HELLO, WORLD. </strong>
        </Typography>
        <h1>I'm Faisal Khan</h1>
        <Typography>| MERN STACK DEVELOPER | JAVASCRIPT DEVELOPER |</Typography>
      </div>
      <div className="landingPage__middle">
        <Button variant="contained">
          <Link to="/home" style={{ textDecoration: 'none', color: '#213E3B' }}>
            <strong>MORE ABOUT ME</strong>
          </Link>
          <ArrowRightAlt />
        </Button>
      </div>
      <div className="landingPage__bottom">
        <IconButton>
          {/* {{ pathname: "https://github.com/faisalkhalikkhan" }} target="_blank" */}
          <Link exact to={{ pathname: "https://www.facebook.com/profile.php?id=100028444279949" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }}>
            <Facebook />
          </Link>
        </IconButton>
        <IconButton>
          <Link exact to={{ pathname: "https://www.linkedin.com/in/faisal-khan-b570a2211/" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }}>
            <LinkedIn />
          </Link>
        </IconButton>
        <IconButton>
          <Link exact to={{ pathname: "https://www.instagram.com/_fai_sal_khan/" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }}>
            <Instagram />
          </Link>

        </IconButton>
        <IconButton>
          <Link exact to={{ pathname: "https://github.com/faisalkhalikkhan" }} target="_blank"  style={{ textDecoration: 'none', color: '#213E3B' }}>
            <GitHub />

          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default LandingPage;
