import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <p style={{ fontSize: "40px", textAlign: "center", margin: "10px" }}>
        Our Projects
      </p>
      <div className="page">
        <div className="card">
          <img alt="Image" src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/gallery%20images%2Fsps-proj-frontpg.jpeg?alt=media&token=0b6face8-f770-4f7f-a6b6-9ef42168f525" />
          <div className="Projdesc">Parakh Heights</div>
          <Link to='/parakhheights'>
          <button className="button" >Know More</button>
          </Link>
        </div>
      </div>
    </>
  );
}
