import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import Footer from "./components/Footer.jsx";
import Timer from "./components/Timer.jsx";
import Questions from "./questions.json";

function App() {
  const [index, setIndex] = useState(0);
  const [myPoints, setMyPoints] = useState(0);
  const [answered, setAnswered] = useState(false);

  let question = Questions[index];

  let options = question;
  let correct = question.correct;
  let title = question.question;
  let category = question.type;
  let item = question.id;
  let points = question.points;

  let testFinished = true;
  if (item == 61) {
    testFinished = false;
  }
  return (
    <div className="App">
      <div>
        <Header type={category} item={item} />
        {item !== 61 && (
          <div className="subheader container">
            <div className="subheader__quesitons pt-sans">
              Question {item} of 60
            </div>
            <div className="subheader__timer">
              <span className="pt-sans">
                <i
                  className="bi bi-clock"
                  style={{
                    fontSize: "13px",
                    color: "#902b2f",
                    paddingRight: "5px",
                  }}
                ></i>
                Time remaning:{" "}
                <Timer
                  onTimeUp={function () {
                    setIndex(60);
                  }}
                  item={item}
                />
              </span>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="container">
          <QuestionCard
            option={options}
            title={title}
            type={category}
            correct={correct}
            points={points}
            myPoints={myPoints}
            item={item}
            answered={answered}
            setAnswered={setAnswered}
            setMyPoints={setMyPoints}
          />
        </div>
      </div>
      <Footer
      
        option={options}
        title={title}
        type={category}
        correct={correct}
        points={points}
        answered={answered}
        setAnswered={setAnswered}
        onNext={() => setIndex(index + 1)}
        onTimeUp={function () {
          setIndex(60);
        }}
        item={item}
      />
    </div>
  );
}

export default App;
