import React from "react";
import "./Certificate.css";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import logo from "../../../Hero.png";

const Certificate = ({ certificateData }) => {
  return (
    <div className="certificate">
      <Card className="card__color card__animation">
        <CardMedia component="img" image={certificateData.imageUrl} />
        <CardContent>
          <Typography>{certificateData.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Certificate;
