import React from "react";
import "../styles/ProgressBar.css";
export default function ProgressBar({ item }) {
  return (
    <div>
      <div className="progress-bar">
        <div
          className={
            item >= 1 ? "progress-bar__step1 active" : "progress-bar__step1"
          }
          style={{ borderRadius: "100px 0  0 100px" }}
        >
          <div
            className="progress-bar__number pt-sans"
            style={{ transform: "translateY( -5px)" }}
          >
            0
          </div>
          <div className="progress-bar__between"></div>
        </div>
        <div
          className={
            item >= 11 ? "progress-bar__step2 active" : "progress-bar__step2"
          }
        >
          <div
            className="progress-bar__number pt-sans"
            style={{ transform: "translate(-15px, -5px)" }}
          >
            1
          </div>
          <div className="progress-bar__between"></div>
        </div>
        <div
          className={
            item >= 21 ? "progress-bar__step3 active" : "progress-bar__step3"
          }
        >
          <div
            className="progress-bar__number pt-sans"
            style={{ transform: "translate(-15px, -5px)" }}
          >
            2
          </div>
          <div className="progress-bar__between"></div>
        </div>
        <div
          className={
            item >= 31 ? "progress-bar__step4 active" : "progress-bar__step4"
          }
        >
          <div
            className="progress-bar__number pt-sans"
            style={{ transform: "translate(-15px, -5px)" }}
          >
            3
          </div>
          <div className="progress-bar__between"></div>
        </div>
        <div
          className={
            item >= 41 ? "progress-bar__step5 active" : "progress-bar__step5"
          }
        >
          <div
            className="progress-bar__number pt-sans"
            style={{ transform: "translate(-15px, -5px)" }}
          >
            4
          </div>
          <div className="progress-bar__between"></div>
        </div>
        <div
          className={
            item >= 51 ? "progress-bar__step5 active" : "progress-bar__step5"
          }
        >
          <div
            className="progress-bar__number pt-sans"
            style={{ transform: "translate(-15px, -5px)" }}
          >
            5
          </div>
          <div className="progress-bar__between"></div>
        </div>
        <div
          className="progress-bar__number pt-sans"
          style={{ transform: "translate(-15px, -0px)" }}
        >
          6
        </div>
      </div>
    </div>
  );
}
