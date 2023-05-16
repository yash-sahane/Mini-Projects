import React from 'react';
// import './addOn.css'

const AddOn = ({ add_on, formData, addonDetails, setAddonDetails, addonDetailsHandler }) => {
    const { id, title, desc, amount } = add_on;

    const isChecked = addonDetails.some((addon) => addon.id === id);

    const handleAddOnClick = () => {
        addonDetailsHandler(add_on);
    };

    return (
        <div
            className={`flex items-center p-4 gap-7 border-2  rounded-lg cursor-pointer hover:border-purplishBlue ${isChecked && 'bg-magnolia border-purplishBlue'}`}
            onClick={handleAddOnClick}>
            <input
                type="checkbox"
                id={`addon-${id}`}
                name={title}
                checked={isChecked}
                onChange={() => { }}
                className="mr-2 cursor-pointer h-5 w-5 bg-purplishBlue rounded focus:outline-none focus:ring focus:border-purplishBlue"
            />
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-coolGray">{desc}</p>
            </div>
            {formData.duration === 'Monthly' ? (
                <p className="ml-auto text-purplishBlue">+${amount}/mo</p>
            ) : (
                <p className="ml-auto text-purplishBlue">+${amount * 10}/yr</p>
            )}
        </div>
    );
};

export default AddOn;