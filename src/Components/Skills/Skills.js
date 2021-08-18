import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";
import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Card className="card__animation">
        <CardContent>
          <Typography variant="h4">Skills</Typography>
          <Button>
            <Star className="start__btn" />
            Java
          </Button>
          <br />
          <Button>
            <Star className="start__btn"/>
            JavaScript
          </Button>
          <br />
          <Button>
            <Star className="start__btn" />
            Python
          </Button>
          <br />
          <Button>
            <Star  className="start__btn" />
            MERN STACK
          </Button>
        </CardContent>
      </Card>
      <Card className="card__animation margin__top">
        <CardContent>
          <Typography variant="h4">Soft Skills</Typography>
          <Button>
            <Star className="start__btn" />
            Perseverance
          </Button>
          <br />
          <Button>
            <Star className="start__btn"/>
            Problem-solving
          </Button>
          <br />
          <Button>
            <Star className="start__btn" />
            Self-Motivation and Independence
          </Button>
          <br />
          <Button>
            <Star  className="start__btn" />
            Team Work
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
