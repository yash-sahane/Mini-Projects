import React from 'react'
// import './step.css'

const Step = ({ stepInfo, step }) => {
    const { id, name, title } = stepInfo;
    return (
        <div className='flex p-4'>
            <div>
                <p className={`rounded-full px-4 py-2 border font-bold ${step + 1 === id ? 'bg-lightBlue text-black' : 'border-white text-magnolia'}`}>{id}</p>
            </div>
            <div className='flex flex-col ml-4 step-media'>
                <p className='text-pastelBlue text-sm'>{name}</p>
                <h1 className='text-magnolia font-semibold tracking-widest text-sm'>{title}</h1>
            </div>
        </div>
    )
}

export default Step