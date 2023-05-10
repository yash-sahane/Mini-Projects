import React from 'react'

const AddOn = ({ add_on }) => {
    const { id, title, desc, amount } = add_on;

    return (
        <div>
            <input type="checkbox" name={title} />
            <div>
                <p>{title}</p>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default AddOn