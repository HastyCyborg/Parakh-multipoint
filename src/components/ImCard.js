import React from "react";
import "./ImCard.css";

export default function ImCard(props) {
  

  return (
    <div className="gallery">
      <a href={props.src} target="_blank">
        <img src={props.src} alt="img here" />
      </a>
      <div className="desc">Parakh Heights</div>
    </div>
  );
}
