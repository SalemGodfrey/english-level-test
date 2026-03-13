import React from "react";
import "../styles/Header.css";
import ProgressBar from "./ProgressBar";

export default function Header({ type, item }) {
  return (
    <div>
      <div className="header">
        <div className="container">
          <h1>A complex test to determine your level of English </h1>
          {item !== 61 && (
            <p
              className="pt-sans "
              style={{ paddingBottom: "10px", textAlign: "center" }}
            >
              Section: {type} ({item} of 60)
            </p>
          )}
          <ProgressBar item={item} />
        </div>
      </div>
    </div>
  );
}
