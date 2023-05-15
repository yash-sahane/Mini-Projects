import React from 'react';
import './plan.css';

const Plan = ({ plan, planDetails, setPlanDetails }) => {
    const { isYearlyBilling, amount } = planDetails;
    const { id, name, icon } = plan;

    const handlePlanClick = () => {
        setPlanDetails((prevDetails) => ({
            ...prevDetails,
            plan: name,
            amount: isYearlyBilling ? plan.amount * 10 : plan.amount,
        }));
    };

    return (
        <div className={`hover:border-purplishBlue h-44 p-5 flex-1 border-2 rounded-lg cursor-pointer ${planDetails.plan === name ? 'border-2 border-purplishBlue bg-magnolia' : ''}`} onClick={handlePlanClick}>
            <img src={icon} alt='' />
            <p className='mt-12 font-bold'>{name}</p>
            {isYearlyBilling ? <span className='text-coolGray'>${plan.amount * 10}/yr</span> : <span className='text-coolGray'>${plan.amount}/mo</span>}
        </div>
    );
};

export default Plan;