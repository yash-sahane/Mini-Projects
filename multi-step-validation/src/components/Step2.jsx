import React, { useEffect, useState } from 'react'
import Plan from './Plan'
import plans from '../utils/plans'

const Step2 = ({ prevStepHandler, nextStepHandler, formData, setFormData }) => {
    const [planDetails, setPlanDetails] = useState({
        plan: plans[0].name,
        isYearlyBilling: false,
        amount: plans[0].amount
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
        setFormData(prevData => ({ ...prevData, plan: plan, total: amount, duration: isYearlyBilling ? 'Yearly' : 'Monthly' }));
        // console.log(formData);
        nextStepHandler();
    }

    return (
        <div>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <div className="plan-section">
                {plans.map((plan) => {
                    return <Plan plan={plan} key={plan.id} planDetails={planDetails} setPlanDetails={setPlanDetails} />
                })}
            </div>
            <div className="toggle-container">
                <span className="toggle-label">Monthly</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={planDetails.isYearlyBilling}
                        onChange={handleToggleChange}
                    />
                    <span className="slider"></span>
                </label>
                <span className="toggle-label">Yearly</span>
            </div>
            <div>
                <button onClick={prevStepHandler}>Go Back</button>
                <button onClick={planHandler}>Next Step</button>
            </div>
        </div>
    )
}

export default Step2