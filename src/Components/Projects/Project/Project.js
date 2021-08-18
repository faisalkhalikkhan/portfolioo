import { Card, CardContent, CardMedia, IconButton, Popover, Button } from "@material-ui/core";
import { GitHub } from "@material-ui/icons";
import { useState } from "react";
import "./Project.css";
import { Link } from "react-router-dom";

const Project = ({ projectDetails }) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }


  return (
    <div className="project">
      <div className="card__box">
        <Card className="card__animation card__color card__project">
          <CardMedia className="video" component="video" image={projectDetails.videoUrl} autoPlay />
          <CardContent>
            <div className="links__projects">
              <Button onClick={handleClick} variant="text" style={{ color: '#FFF' }}>{projectDetails.title}</Button>
              <IconButton className="github">
                <Link exact to={{ pathname: projectDetails.github }} target="_blank">
                  <GitHub className="git__btn" />
                </Link>
              </IconButton>
            </div>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference='anchorPosition'
              anchorPosition={{ top: 200, left: 400 }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <div className="description">
                <p className="description__text">{projectDetails.description}</p>
                {projectDetails.technology.map(tech => {
                  return (<p className="description__text__tech">{tech}</p>)
                })}
              </div>
            </Popover>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Project;


