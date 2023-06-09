import React, { useEffect, useState } from 'react'
import AddOn from './AddOn'
import add_ons from '../utils/addon'

const Step3 = ({ prevStepHandler, nextStepHandler, formData, setFormData }) => {
    const [addonDetails, setAddonDetails] = useState(formData.addOn);

    const addonDetailsHandler = (add_on) => {
        const isSelected = addonDetails.find(addon => addon.id === add_on.id);
        if (isSelected) {
            setAddonDetails(addonDetails.filter(addon => addon.id !== add_on.id));
        } else {
            setAddonDetails(prevDetails => [...prevDetails, add_on]);
        }
    }

    const addonHandler = () => {
        let amount = 0;
        addonDetails.forEach(addon => amount += formData.duration === 'Monthly' ? addon.amount : addon.amount * 10);

        const total = amount + formData.planAmount;

        setFormData(prevData => ({ ...prevData, addOn: addonDetails, total: total }));
        nextStepHandler()
            ;
    }

    useEffect(() => {
        console.log(addonDetails);
    }, [addonDetails])

    return (
        <div className='h-full flex flex-col'>
            <h2 className='text-4xl font-bold'>Pick add-ons</h2>
            <p className='text-coolGray mt-2'>Add-ons help enhance your gaming experience.</p>
            <div className='flex flex-col gap-3 mt-8'>
                {add_ons.map(add_on => {
                    return <AddOn add_on={add_on} key={add_on.id} addonDetails={addonDetails} setAddonDetails={setAddonDetails} addonDetailsHandler={addonDetailsHandler} formData={formData} />
                })}
            </div>
            <div className='flex justify-between mt-auto'>
                <button onClick={prevStepHandler} className='px-5 py-2.5 rounded-md mb-2 text-coolGray'>Go Back</button>
                <button onClick={addonHandler} className='stepButton'>Next Step</button>
            </div>
        </div>
    )
}

export default Step3