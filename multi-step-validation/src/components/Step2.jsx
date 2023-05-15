import React, { useEffect, useState } from 'react'
import Plan from './Plan'
import plans from '../utils/plans'
import './step2.css'

const Step2 = ({ prevStepHandler, nextStepHandler, formData, setFormData }) => {
    const [planDetails, setPlanDetails] = useState({
        plan: formData.plan,
        isYearlyBilling: formData.duration === 'Yearly' ? true : false,
        amount: formData.planAmount
    })

    const { plan, isYearlyBilling, amount } = planDetails;

    useEffect(() => {
        console.log(planDetails);
    }, [planDetails])

    const handleToggleChange = () => {
        !isYearlyBilling && setPlanDetails(prevDetails => ({ ...prevDetails, amount: amount * 10 }));
        isYearlyBilling && setPlanDetails(prevDetails => ({ ...prevDetails, amount: amount / 10 }));
        setPlanDetails(prevDetails => ({ ...prevDetails, isYearlyBilling: !prevDetails.isYearlyBilling }))
        // console.log(amount);
    }

    const planHandler = () => {
        setFormData(prevData => ({ ...prevData, plan: plan, planAmount: amount, duration: isYearlyBilling ? 'Yearly' : 'Monthly' }));
        // console.log(formData);
        nextStepHandler();
    }

    return (
        <div className='h-full flex flex-col'>
            <h2 className='text-4xl font-bold'>Select your plan</h2>
            <p className='text-coolGray mt-2'>You have the option of monthly or yearly billing.</p>
            <div className='mt-8 flex justify-between gap-4'>
                {plans.map((plan) => {
                    return <Plan plan={plan} key={plan.id} planDetails={planDetails} setPlanDetails={setPlanDetails} />
                })}
            </div>
            <div className="flex justify-center items-center py-3 bg-magnolia rounded-lg w-full gap-4 mt-10">
                <span className={`ml-2 font-bold ${isYearlyBilling && 'text-coolGray'}`}>Monthly</span>
                <label className="relative inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={planDetails.isYearlyBilling}
                        onChange={handleToggleChange}
                        className="hidden"
                    />
                    <span className="toggle-switch"></span>
                </label>
                <span className={`ml-2 font-bold ${!isYearlyBilling && 'text-coolGray'}`}>Yearly</span>
            </div>
            <div className='flex justify-between mt-auto'>
                <button onClick={prevStepHandler} className='px-5 py-2.5 rounded-md mb-2'>Go Back</button>
                <button onClick={planHandler} className='stepButton'>Next Step</button>
            </div>
        </div>
    )
}

export default Step2