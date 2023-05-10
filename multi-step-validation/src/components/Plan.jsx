import React from 'react';
import './plan.css';

const Plan = ({ plan, planDetails, setPlanDetails }) => {
    const { isYearlyBilling, amount } = planDetails;
    const { id, name, icon } = plan;

    const handlePlanClick = () => {
        setPlanDetails((prevDetails) => ({
            ...prevDetails,
            plan: name,
            amount: plan.amount,
        }));
    };

    return (
        <div className={`${planDetails.plan === name ? 'active' : 'plan-div'}`} onClick={handlePlanClick}>
            <img src={icon} alt='' />
            <p>{name}</p>
            {isYearlyBilling ? <span>${plan.amount * 10}/yr</span> : <span>${plan.amount}/mo</span>}
        </div>
    );
};

export default Plan;