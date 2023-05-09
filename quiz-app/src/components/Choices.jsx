import React from 'react'
import '../styles/choices.css'

const Choices = ({ choices, answer, setIsCorrectSelected, setSelectedAnsIdx, selectedAnsIdx }) => {
    const onAnsSelected = (choice, idx) => {
        setSelectedAnsIdx(idx)
        if (choice === answer) {
            setIsCorrectSelected(true);
        } else {
            setIsCorrectSelected(false);
        }
    }

    return choices.map((choice, idx) => {
        return (
            <li
                key={idx}
                className={selectedAnsIdx === idx ? 'selected-answer' : ''} onClick={() => onAnsSelected(choice, idx)}
            >{choice}</li>
        )
    })
}

export default Choices