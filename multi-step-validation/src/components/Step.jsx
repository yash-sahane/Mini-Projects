import React from 'react'

const Step = ({ stepInfo, step }) => {
    const { id, name, title } = stepInfo;
    return (
        <div>
            <div>
                {id}
            </div>
            <div>
                {name}
                {title}
            </div>
        </div>
    )
}

export default Step