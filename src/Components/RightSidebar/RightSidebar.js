import {
  Card,
  CardContent,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="rightsidebar">
      <Card className="card__animation">
        <CardContent>
          <Typography variant="h6">Project Title</Typography>
          <Typography variant="body2">
            description :An ambitious individual with good problem solving
            skills and proficient in C++, java, Python, JavaScript. Currently
            seeking a challenging assignment which will provide avenues for
            professional learing, hone my technical skills and enrich my
            experience as well as knowledge in the process.
          </Typography>
          <br />
          <Typography variant="subtitle1">
            <strong>Technology Used</strong>
          </Typography>
          <List>
            <ListItemText>
              <span className="listItem">React js</span>
            </ListItemText>
            <ListItemText>
              <span className="listItem">Firebase</span>
            </ListItemText>
          </List>
          <Typography variant="subtitle1">Date: may/2021</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
