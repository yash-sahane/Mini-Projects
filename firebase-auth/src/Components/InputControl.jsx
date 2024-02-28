import React from 'react'

const InputControl = (props) => {
    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <input type='text' {...props} />
        </>
    )
}

export default InputControl