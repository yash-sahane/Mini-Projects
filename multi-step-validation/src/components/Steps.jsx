import React from 'react'
import Step from './Step'

const Steps = ({ stepContent, step }) => {
    return (
        <div className='bg-sidebar-desktop w-30per bg-no-repeat'>
            <div className='p-8'>
                {stepContent.map(stepInfo => <Step step={step} stepInfo={stepInfo} key={stepInfo.id} />)}
            </div>
        </div>
    )
}

export default Steps