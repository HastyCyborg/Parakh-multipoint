import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  const [showLanding, setShowLanding] = React.useState(() => {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    if (month == 11 && date == 22) {
      return true;
    } else {
      return false;
    }
  });

  const timeover = () => {
    setTimeout(() => {
      setShowLanding(false);
    }, 8000);
  };

  return (
    <div className="hero-container">
      {/* <video src="" autoPlay loop muted /> */}
      {timeover()}
      <h1>{showLanding ? "HAPPY BIRTHDAY MAMA" : "PARAKH MULTIPOINT"}</h1>
      {showLanding?<img style={{height:"300px",width:"300px", borderRadius:"50%"}} alt="kdpic" src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/KD.jpeg?alt=media&token=ed317e0b-d662-4331-83fd-46e3a5aeff8e" /> : <br/>}
      <p>{showLanding?"":"We build your future"}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkTo="/projects"
        >
          OUR PROJECTS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkTo="/gallery"
        >
          GALLERY <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
