import React from 'react'

const AddOn = ({ add_on, formData, addonDetails, setAddonDetails, addonDetailsHandler }) => {
    const { id, title, desc, amount } = add_on;

    const isChecked = addonDetails.some((addon) => addon.id === id);

    return (
        <div>
            <input type="checkbox" name={title} checked={isChecked} onChange={() => addonDetailsHandler(add_on)} />
            <div>
                <p>{title}</p>
                <p>{desc}</p>
                {formData.duration === 'Monthly' ? <p>+${amount}/mo</p> : <p>+${amount * 10}/yr</p>}
            </div>
        </div>
    )
}

export default AddOn