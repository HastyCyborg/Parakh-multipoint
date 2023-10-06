import React from "react";

export default function About() {
  const aboutstyles = {
    textAlign: "center",
    margin: "3vh",
    fontSize: "3vh",
    color:"white",
    background:"#a17b13",
    borderRadius:"10px",
    marign:"10px",
    padding:"10px"
  };
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "3vh", fontSize: "5vh" }}>
        About us
      </h1>
      <p style={aboutstyles}>
        Building dreams since 1990 (some date here) We have undertaken several
        projects in Bhopal like... etc etc...
        <p style={{marginTop:"25px"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          dolorum consequatur possimus voluptate. Nemo mollitia, dolore quos
          dolor possimus blanditiis. Hic quibusdam consectetur blanditiis
          facere? Obcaecati exercitationem repudiandae recusandae sequi quod
          repellat ipsam quaerat quibusdam, ullam totam dicta reiciendis eius
          nostrum, nisi accusamus atque inventore fugit cum a. Nulla, harum!
        </p>
      </p>
      <p style={{position:"absolute"}}>Developed with ❤️ by <a href="https://github.com/HastyCyborg" target="_blank">Pax</a></p>
    </>
  );
}
