import React, { useState } from 'react'
import { quiz } from './assets/quiz'
import Result from './Result';
import Choices from './Choices';
import './App.css'

const App = () => {
  const { questions } = quiz;
  const [currQue, setCurrQue] = useState(0);
  const { choices, question, correctAnswer } = questions[currQue]
  const [isCorrectSelected, setIsCorrectSelected] = useState(false);
  const [selectedAnsIdx, setSelectedAnsIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0
  })

  const nextQueHandler = () => {
    setSelectedAnsIdx(null);
    currQue < quiz.totalQuestions - 1 ? setCurrQue((prev) => prev + 1) : setShowResult(true);
    setResult(prev => {
      return isCorrectSelected ? {
        ...prev, score: prev.score + 5, correctAnswer: prev.correctAnswer + 1
      } : {
        ...prev, wrongAnswer: prev.wrongAnswer + 1
      }
    })
  }

  const prevQueHandler = () => {
    currQue > 0 && setCurrQue((prev) => prev - 1);
    console.log(currQue);
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className='quiz-container'>
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(currQue + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            <Choices
              choices={choices}
              answer={correctAnswer}
              setResult={setResult}
              setIsCorrectSelected={setIsCorrectSelected}
              setSelectedAnsIdx={setSelectedAnsIdx}
              selectedAnsIdx={selectedAnsIdx}
            />
          </ul>
          <div className='flex-right'>
            <button onClick={prevQueHandler}>Prev</button>
            <button
              onClick={nextQueHandler}
              disabled={selectedAnsIdx === null}>
              {currQue < quiz.totalQuestions - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        </div>
      ) : (
        <Result result={result} questions={questions} />
      )}
    </div>
  )
}

export default App