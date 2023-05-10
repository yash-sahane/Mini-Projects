import React, { useState } from 'react'

const Step1 = ({ nextStepHandler, formData, setFormData }) => {
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    const validateStep = (e) => {
        e.preventDefault();
        const { name, email, phone } = formData;
        const stepErrors = {};
        if (!name.trim()) {
            stepErrors.name = 'Name is required';
        }
        if (!email.trim()) {
            stepErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            stepErrors.email = 'Invalid email';
        }
        if (!phone.trim()) {
            stepErrors.phone = 'Phone Number is required';
        } else if (!/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/.test(phone)) {
            stepErrors.phone = 'Invalid phone number';
        }
        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }
        console.log(formData);
        nextStepHandler();
    }

    return (
        <div className="step1-div">
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <form onSubmit={validateStep}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='eg. Stephen King' onChange={changeHandler} />
                {errors.name && <p>{errors.name}</p>}
                <label htmlFor="email">Email Address</label>
                <input type="text" name="email" placeholder='eg. stephenking@lorem.com' onChange={changeHandler} />
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor="phone">Phone Number</label>
                <input type="number" name="phone" placeholder='eg. +1 234 567 890' onChange={changeHandler} />
                {errors.phone && <p>{errors.phone}</p>}
                <button type='submit'>Next Step</button>
            </form>
        </div>
    )
}

export default Step1