import React from 'react'
import Step from './Step'

const Steps = ({ stepContent, step }) => {
    return (
        <div className='bg-sidebar-desktop'>
            {stepContent.map(stepInfo => <Step step={step} stepInfo={stepInfo} key={stepInfo.id} />)}
        </div>
    )
}

export default Steps