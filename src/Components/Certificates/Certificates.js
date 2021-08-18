import React from "react";
import Certificate from "./Certificate/Certificate";
import "./Certificates.css";


const data = [
  {
    id: 1,
    title: "Google Code Jam",
    imageUrl: "codejam1.png"
  }, {
    id: 2,
    title: "React.js Certification from UpGrad.com",
    imageUrl: "React.png"
  }, {
    id: 3,
    title: "Google kickstart",
    imageUrl: "kickstart.png"
  }, {
    id: 4,
    title: "Hackerrank Problem Solving",
    imageUrl: "3.jpg"
  }
];

const Certificates = () => {
  return (
    <div className="certificates">
      {data.map(certificate => {
        return (<Certificate key={certificate.id} certificateData={certificate} />)
      })}
    </div>
  );
};

export default Certificates;
