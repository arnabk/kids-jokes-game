import React, { useState } from 'react';
import 'animate.css';
import AppBar from './Bar';
import Game from './Game';
import { Provider } from './Context';

function App() {
  const [questionNr, setQuestionNr] = useState(0);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  return (
    <Provider value={{
      questionNr, setQuestionNr,
      checkAnswer, setCheckAnswer,
      userAnswer, setUserAnswer,
      score, setScore,
    }}>
      <AppBar />
      <Game />
    </Provider>
  );
}

export default App;
