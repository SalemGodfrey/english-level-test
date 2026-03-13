import React, { useEffect, useState, useRef } from "react";

export default function Timer({ onTimeUp }) {
  let [minutes, setMinutes] = useState(29);
  let [seconds, setSeconds] = useState(59);

  const minutesRef = useRef(minutes);
  const secondsRef = useRef(seconds);
   
  useEffect(
    function () {
      minutesRef.current = minutes;
      secondsRef.current = seconds;
    },
    [minutes, seconds],
  );
  useEffect(function() {
    const interval = setInterval(function() {
      if (secondsRef.current === 0) {
        if (minutesRef.current === 0) {
          clearInterval(interval);
          onTimeUp(); // время вышло — говорим App.js
          return;
        }
        setMinutes(minutesRef.current - 1);
        setSeconds(59);
      } else {
        setSeconds(secondsRef.current - 1);
      }
    }, 1000);

    return function() {
      clearInterval(interval);
    };
  }, []); 

  return (
    <span style={{ color: "#902b2f" }}>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
}
