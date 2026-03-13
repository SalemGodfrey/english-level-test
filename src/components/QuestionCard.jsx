import React, { useState } from "react";
import "../styles/QuestionCard.css";

export default function QuestionCard({
  title,
  option,
  category,
  correct,
  points,
  question,
  myPoints,
  setMyPoints,
  item,
  setAnswered,
  answered,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  function checkIfCorrect(option) {
    console.log("Нажали на:", option);
    console.log("Текущий выбранный:", selectedOption);
    console.log("Правильный ответ:", correct);
    console.log("Очки до:", myPoints);

    if (selectedOption === option) {
      console.log("Тот же ответ — игнорируем");
      return;
    }

    if (selectedOption === correct) {
      console.log("Меняем с правильного — отнимаем", points, "очков");
      setMyPoints(myPoints - points);
    }

    if (option === correct) {
      console.log("Новый ответ правильный — добавляем", points, "очков");
      setMyPoints(myPoints + points);
    } else {
      console.log("Новый ответ неправильный — очки не меняются");
    }

    setSelectedOption(option);
    console.log("Новый выбранный:", option);
  }
  // const [answered, setAnswered] = useState(false);
  let level = "";
  if (myPoints <= 30) level = "A1";
  else if (myPoints <= 60) level = "A2";
  else if (myPoints <= 100) level = "B1";
  else if (myPoints <= 150) level = "B2";
  else if (myPoints <= 185) level = "C1";
  else level = "C2";

  return (
    <div className="QuestionCard">
      <div className="card">
        {item !== 61 && (
          <div>
            <h2>{title}</h2>
            <div className="card-grid">
              <div className="card-grid1">
                <button
                  className={
                    selectedOption === option.options[0]
                      ? "card-grid__button selected"
                      : "card-grid__button"
                  }
                  onClick={function () {
                    checkIfCorrect(option.options[0]);
                  }}
                >
                  {option.options[0]}
                </button>
              </div>
              <div className="card-grid2">
                <button
                  className={
                    selectedOption === option.options[1]
                      ? "card-grid__button selected"
                      : "card-grid__button"
                  }
                  onClick={function () {
                    checkIfCorrect(option.options[1]);
                  }}
                >
                  {option.options[1]}
                </button>
              </div>
              <div className="card-grid3">
                <button
                  className={
                    selectedOption === option.options[2]
                      ? "card-grid__button selected"
                      : "card-grid__button"
                  }
                  onClick={function () {
                    checkIfCorrect(option.options[2]);
                  }}
                >
                  {option.options[2]}
                </button>
              </div>
              <div className="card-grid4">
                <button
                  className={
                    selectedOption === option.options[3]
                      ? "card-grid__button selected"
                      : "card-grid__button"
                  }
                  onClick={function () {
                    checkIfCorrect(option.options[3]);
                  }}
                >
                  {option.options[3]}
                </button>
              </div>
            </div>
          </div>  
        )}
        {item == 61 && (
          <div>
            <h2>Your Level is {level}</h2>
            <p
              style={{ textAlign: "center", fontFamily: "Raleway, sans-serif" }}
            >
              You gained {myPoints} points out of 210.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
