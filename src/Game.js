import React, { useContext, useState } from "react";
import shuffle from 'lodash/shuffle';
import originalOrderedQuestions from "./questions.json";
import { Context } from "./Context";
import Question from "./Question";
import Answer from "./Answer";

const questions = shuffle(originalOrderedQuestions);

const Game = () => {
  const {
    questionNr,
    setQuestionNr,
    checkAnswer,
    setCheckAnswer,
    userAnswer,
    setUserAnswer,
    setScore,
  } = useContext(Context);
  const [win, setWin] = useState(false);

  const onClickCheckAnsBtt = () => {
    setCheckAnswer(true);
    if (userAnswer.trim() &&
      questions[questionNr].answer.toLowerCase().includes(userAnswer.trim().toLowerCase())) {
      setScore(score => score + 1);
      setWin(true);
    } else {
      setWin(false);
    }
  };
  const onClickNextQuestion = () => {
    setQuestionNr(questionNr => questionNr + 1);
    setCheckAnswer(false);
    setUserAnswer("");
  };
  const onChangeUserAns = event => setUserAnswer(event.target.value);

  return (
    <>
      <Question
        questionNr={questionNr}
        question={questions[questionNr].question}
        userAnswer={userAnswer}
        onChangeUserAns={onChangeUserAns}
        onClickCheckAnsBtt={onClickCheckAnsBtt}
        disableButton={checkAnswer}
      />
      {checkAnswer && (
        <Answer
          questionNr={questionNr}
          answer={questions[questionNr].answer}
          onClickNextQuestion={onClickNextQuestion}
          win={win}
        />
      )}
    </>
  );
};

export default Game;
