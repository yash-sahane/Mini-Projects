import React from 'react'
import './result.css'

const Result = ({ result, questions }) => {
    const { score, correctAnswer, wrongAnswer } = result

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
        </div>
    )
}

export default Result