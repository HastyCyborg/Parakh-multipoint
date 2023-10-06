import React from "react";

export default function Contact() {
  const parastyle = {
    marginTop: "15px",
  };

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <div style={{ alignItems: "center", textAlign: "center", fontSize:"17px" }}>
      <h1 style={{ marginTop: "3vh", fontSize:"35px" }}>Get in touch with us</h1>
      <br />
      <p style={parastyle}>
        <i class="fas fa-envelope"></i> Email us at:
        <Mailto email="parakhmultipoint@gmail.com" subject="Subject" body="">
          parakhmultipoint@gmail.com
        </Mailto>
      </p>

      <p style={parastyle}>
        <i class="fas fa-map-marked-alt"></i> Visit us at: <a href="https://maps.google.com?q=+23.199236718268608+,+77.42920010469898" target="_blank">Community hall shahpura</a>
      </p>

      <p style={parastyle}>
        <i class="fas fa-phone-square-alt"></i> Call us at:{" "}
        <a href="tel:9827043939"> 9827043939 </a> ,{" "}
        <a href="tel:9425025115"> 9425025115 </a> ,{" "}
        <a href="tel:9425008505"> 9425008505 </a> ,{" "}
        <a href="tel:9876767233"> 9876767233 </a>
      </p>
    </div>
  );
}
