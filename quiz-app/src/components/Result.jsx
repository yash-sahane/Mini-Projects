import React from 'react'
import '../styles/result.css'

const Result = ({ result, questions, setShowResult, setCurrQue, setResult }) => {
    const { score, correctAnswer, wrongAnswer } = result

    const retryHandler = () => {
        setResult({ score: 0, correctAnswer: 0, wrongAnswer: 0 })
        setCurrQue(0)
        setShowResult(false);
    }

    return (
        <div className='result'>
            <p>
                Total Question: <span>{questions.length}</span>
            </p>
            <p>
                Total Score:<span> {score}</span>
            </p>
            <p>
                Correct Answers:<span> {correctAnswer}</span>
            </p>
            <p>
                Wrong Answers:<span> {wrongAnswer}</span>
            </p>
            <div className='flex-mid'>
                <button onClick={retryHandler}>Retry</button>
            </div>
        </div>
    )
}

export default Result