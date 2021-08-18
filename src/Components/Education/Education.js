import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <Card className="education__card card__animation">
        <CardContent>
          <Typography variant="h6">
            Truba Institute Of Engineering And Information Technology, Bhopal
          </Typography>
          <br />
          <Typography color="textSecondary">
            BTech (Computer Science)
          </Typography>
          <Typography variant="subtitle1">Duration</Typography>
          <Typography variant="body2" color="textSecondary">
            2018-2022
          </Typography>
          <Typography variant="subtitle1">Current CGPA</Typography>
          <Typography variant="body2" color="textSecondary">
            6.81
          </Typography>
        </CardContent>
      </Card>
      <Card className="education__card card__animation">
        <CardContent>
          <Typography variant="h6">
            Patel Ratilal Boriwala English Higher Secondary School, Burhanpur
          </Typography>
          <br />
          <Typography color="textSecondary">
            12th (Maths, Physics, Chemistry, English, Hindi)
          </Typography>
          <Typography variant="subtitle1">Duration</Typography>
          <Typography variant="body2" color="textSecondary">
            2017-2018
          </Typography>
          <Typography variant="subtitle1">Current CGPA</Typography>
          <Typography variant="body2" color="textSecondary">
            65%
          </Typography>
        </CardContent>
      </Card>
      <Card className="education__card card__animation">
        <CardContent>
          <Typography variant="h6">
            Patel Ratilal Boriwala English Higher Secondary School, Burhanpur
          </Typography>
          <br />
          <Typography color="textSecondary">
            10th (Maths, Social-Science, Science, English, Hindi)
          </Typography>
          <Typography variant="subtitle1">Duration</Typography>
          <Typography variant="body2" color="textSecondary">
            2016-2017
          </Typography>
          <Typography variant="subtitle1">Current CGPA</Typography>
          <Typography variant="body2" color="textSecondary">
            64
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
