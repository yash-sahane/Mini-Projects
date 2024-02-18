import React, { useEffect, useState } from 'react'
import quiz from '../quiz';

const Result = ({ selectedOptions }) => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const newScore = quiz.reduce((acc, que, id) => {
            if (que.correctAnswer === selectedOptions[id]) {
                return acc + 1;
            }
            return acc;
        }, 0);
        setScore(newScore);
    }, [selectedOptions]);

    return (
        <div>
            Your Score : {score}
        </div>
    )
}

export default Result