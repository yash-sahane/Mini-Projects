import React, { useEffect, useState } from 'react'
import quiz from '../quiz'
import Result from './Result';

const Quiz = ({ currQueIdx, setCurrQueIdx }) => {
    const [selectedOptions, setSelectedOptions] = useState(Array(quiz.length).fill(null));
    const [isFinished, setIsFinished] = useState(false);
    const { question, choices } = quiz[currQueIdx];

    const nextHandler = () => {
        if (currQueIdx + 1 < quiz.length) {
            setCurrQueIdx(prev => prev + 1);
        } else {
            setIsFinished(true);
        }
    }

    const optionSelectionHandler = (e) => {
        console.log(e.target.innerText);
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currQueIdx] = e.target.innerText;
        setSelectedOptions(updatedSelectedOptions);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (currQueIdx + 1 < quiz.length) {
                setCurrQueIdx(prev => prev + 1);
            } else {
                setIsFinished(true);
            }
        }, 60000);

        return () => clearInterval(interval);
    }, [currQueIdx, setCurrQueIdx]);

    return (
        <div>
            {isFinished ? (
                <Result selectedOptions={selectedOptions} />
            ) : (
                <>
                    <h5>{currQueIdx + 1}/{quiz.length}</h5>
                    <h2>{question}</h2>
                    {choices.map((ch, id) => (
                        <button key={id} onClick={optionSelectionHandler}>{ch}</button>
                    ))}
                    <br />
                    {currQueIdx !== quiz.length - 1 ? (
                        <button onClick={nextHandler} disabled={currQueIdx === quiz.length - 1}>Next</button>
                    ) : <button onClick={() => setIsFinished(true)}>Finish</button>}
                </>
            )}
        </div>
    )
}

export default Quiz