import React from "react";
import "./ParakhHeights.css";
import ParakhHeitSpecs from "./ParakhHeitSpecs";

function ParakhHeights() {
  return (
    <div className="pagesetup">
      <h1>Parakh Heights</h1>
      <div className="table">
        <h2>Premium Specifications</h2>
        <ParakhHeitSpecs />
      </div>

      <h2>Typical floor plan</h2>
      <div className="sidebyside">
        <a
          href="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor-plan.jpeg?alt=media&token=d40b25d7-09fb-4a0e-b19b-81e4970b6818"
          target="_blank"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor-plan.jpeg?alt=media&token=d40b25d7-09fb-4a0e-b19b-81e4970b6818"
            alt="Floorplan image"
          />
        </a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor-plan-2.jpeg?alt=media&token=71583591-9b3a-48bc-9bcb-c3549787f116"
          target="_blank"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor-plan-2.jpeg?alt=media&token=71583591-9b3a-48bc-9bcb-c3549787f116"
            alt="Floorplan image"
          />
        </a>
      </div>

      <h2>Ground Floor</h2>
      <a href="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-groundf.jpeg?alt=media&token=4bfc65aa-d210-4a1a-a177-6882b48e06e5">
        <img className="images"
          src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-groundf.jpeg?alt=media&token=4bfc65aa-d210-4a1a-a177-6882b48e06e5"
          alt="Groundfloor image"
        />
      </a>
      <h2>First Floor</h2>
      <a href="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor1.jpeg?alt=media&token=160b4a00-68af-4050-8905-60c3b6255373">
        <img className="images"
          src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor1.jpeg?alt=media&token=160b4a00-68af-4050-8905-60c3b6255373"
          alt="First Floor image"
        />
      </a>
      <h2>Second Floor</h2>
      <a href="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor2.jpeg?alt=media&token=aaf8a9c4-52f2-4321-81cd-eb86f9e2c632">
        <img className="images"
          src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-floor2.jpeg?alt=media&token=aaf8a9c4-52f2-4321-81cd-eb86f9e2c632"
          alt="Second Floor image"
        />
      </a>
      <h2>Location</h2>
      <a href="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-location.jpeg?alt=media&token=8c977cb4-b0f2-4590-803c-5fd20e633b31">
        <img className="images"
          src="https://firebasestorage.googleapis.com/v0/b/parakhmultipoint-44acc.appspot.com/o/sps-proj%2Fsps-proj-location.jpeg?alt=media&token=8c977cb4-b0f2-4590-803c-5fd20e633b31"
          alt="Location image"
        />
      </a>
    </div>
  );
}

export default ParakhHeights;
