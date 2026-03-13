import React, { useState } from "react";
import "../styles/Footer.css";

export default function Footer({ onNext, setAnswered, answered, onTimeUp, item }) {
  return (
    <div>
      <div className="footer">
        <div className="container">
          {item !== 61 && (
            <div className="footer-button-wrapper">
              <button
                className="footer-button finish"
                onClick={function () {
                  onTimeUp();
                }}
              >
                FINISH TEST
              </button>
              <button
                className="footer-button next"
                onClick={function () {
                  onNext();
                  setAnswered(false);
                }}
              >
                NEXT QUESTION
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
