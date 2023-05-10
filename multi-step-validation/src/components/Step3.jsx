import React from 'react'
import AddOn from './AddOn'

const Step3 = ({ prevStepHandler, nextStepHandler }) => {
    const add_ons = [
        { id: 0, title: 'Online service', desc: 'Access to multiplayer games', amount: 1 },
        { id: 1, title: 'Large storage', desc: 'Extra 1TB of cloud save', amount: 2 },
        { id: 2, title: 'Customizable Profile', desc: 'Custom theme on your profile', amount: 2 }

    ]

    return (
        <div>
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>
            <div>
                {add_ons.map(add_on => {
                    return <AddOn add_on={add_on} key={add_on.id} />
                })}
            </div>
            <div>
                <button onClick={prevStepHandler}>Go Back</button>
                <button onClick={nextStepHandler}>Next Step</button>
            </div>
        </div>
    )
}

export default Step3