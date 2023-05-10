import React from 'react'

const Step4 = ({ prevStepHandler, nextStepHandler }) => {
    return (
        <div>
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div>
                <button onClick={prevStepHandler}>Go Back</button>
                <button onClick={nextStepHandler}>Next Step</button>
            </div>
        </div>
    )
}

export default Step4