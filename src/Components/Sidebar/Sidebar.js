import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { GitHub, Instagram, LinkedIn, Mail } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Card className="sidebar__card card__animation">
        <CardContent>
          <Typography variant="h6">Personal Summary</Typography>
          <Typography variant="body2" color="textSecondary">
            An ambitious individual with good problem solving skills and
            proficient in C++, java, Python, JavaScript. Currently seeking a
            challenging assignment which will provide avenues for professional
            learing, hone my technical skills and enrich my experience as well
            as knowledge in the process.
          </Typography>
        </CardContent>
      </Card>
      <Card className="card__animation">
        <CardContent>
          <Typography variant="h6">Contact Me!!</Typography>
          <table>
            <tr>
              <td>
                <span>Name</span>
              </td>
              <td>
                <span>Faisal Khan</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Email</span>
              </td>
              <td>
                {/* <span>faisal.khalik.khan@gmail.com</span> */}
                <IconButton>
                  <Link exact to={{ pathname: "https://faisal.khalik.khan@gmail.com" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }}> <Mail /> </Link>
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <span>Phone</span>
              </td>
              <td>
                <span>7400514604</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>LinkedIn</span>
              </td>
              <td>
                {/* <span>https://www.linkedin.com/in/faisal-khan-b570a2211/</span> */}
                <IconButton>
                  <Link exact to={{ pathname: "https://www.linkedin.com/in/faisal-khan-b570a2211/" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }} >
                    <LinkedIn />
                  </Link>
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <span>Github</span>
              </td>
              <td>
                {/* <span>https://github.com/faisalkhalikkhan</span> */}
                <IconButton>
                  <Link exact to={{ pathname: "https://github.com/faisalkhalikkhan" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }} >
                    <GitHub />
                  </Link>
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <span>Instagram</span>
              </td>
              <td>
                {/* <span>https://github.com/faisalkhalikkhan</span> */}
                <IconButton>
                  <Link exact to={{ pathname: "https://www.instagram.com/_fai_sal_khan/" }} target="_blank" style={{ textDecoration: 'none', color: '#213E3B' }}>
                    <Instagram />
                  </Link>

                </IconButton>
              </td>
            </tr>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
