import React from 'react'

const AddOn = ({ add_on, formData, addonDetails, setAddonDetails, addonDetailsHandler }) => {
    const { id, title, desc, amount } = add_on;

    return (
        <div>
            <input type="checkbox" name={title} onChange={() => addonDetailsHandler(add_on)} />
            <div>
                <p>{title}</p>
                <p>{desc}</p>
                {formData.duration === 'Monthly' ? <p>+${amount}/mo</p> : <p>+${amount * 10}/yr</p>}
            </div>
        </div>
    )
}

export default AddOn