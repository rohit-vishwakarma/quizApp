import React, { useState, useContext } from "react";

import { QuizContext } from "../Helpers/Contexts";
import { Quizzes } from "../Helpers/quizzes";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleNextQuiz = () => {
    const quiz = Quizzes[currentQuiz];
    if (quiz.answer === selectedOption) {
      setScore(score + 1);
    }

    setCurrentQuiz(currentQuiz + 1);
    setSelectedOption("");
  };

  const handleFinishQuiz = () => {
    const quiz = Quizzes[currentQuiz];
    if (quiz.answer === selectedOption) {
      setScore(score + 1);
    }

    setGameState("end");
  };

  return (
    <div className="Quiz">
      <h1>{Quizzes[currentQuiz].prompt}</h1>

      <div className="options">
        <button
          className={selectedOption === "a" ? "selected" : ""}
          onClick={() => setSelectedOption("a")}
        >
          {Quizzes[currentQuiz].optionA}
        </button>
        <button
          className={selectedOption === "b" ? "selected" : ""}
          onClick={() => setSelectedOption("b")}
        >
          {Quizzes[currentQuiz].optionB}
        </button>
        <button
          className={selectedOption === "c" ? "selected" : ""}
          onClick={() => setSelectedOption("c")}
        >
          {Quizzes[currentQuiz].optionC}
        </button>
        <button
          className={selectedOption === "d" ? "selected" : ""}
          onClick={() => setSelectedOption("d")}
        >
          {Quizzes[currentQuiz].optionD}
        </button>
      </div>
      {currentQuiz === Quizzes.length - 1 ? (
        <button onClick={handleFinishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={handleNextQuiz}>Next Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
