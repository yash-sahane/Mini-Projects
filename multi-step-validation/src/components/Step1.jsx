import React, { useState } from 'react'
import './step1.css'

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
      stepErrors.name = 'This field is required';
    }
    if (!email.trim()) {
      stepErrors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      stepErrors.email = 'Invalid email';
    }
    if (!phone.trim()) {
      stepErrors.phone = 'This field is required';
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
    <div className=' h-full'>
      <h1 className='text-4xl font-bold'>Personal info</h1>
      <p className='text-coolGray mt-2'>Please provide your name, email address, and phone number.</p>
      <form onSubmit={validateStep} className='mt-8 h-4/5 flex flex-col'>
        <div className='flex flex-col'>
          <div className='flex justify-between'>
            <label htmlFor="name">Name</label>
            {errors.name && <p className='error'>{errors.name}</p>}
          </div>
          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            placeholder="eg. Stephen King"
            onChange={changeHandler}
          />
        </div>
        <div className='flex flex-col'>
          <div className='mt-5 flex justify-between'>
            <label htmlFor="email">Email Address</label>
            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <input type="text" name="email" className='input' value={formData.email} placeholder='eg. stephenking@lorem.com' onChange={changeHandler} />
        </div>
        <div className='flex flex-col'>
          <div className='mt-5 flex justify-between'>
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <p className='error'>{errors.phone}</p>}
          </div>
          <input type="number" name="phone" className='input' value={formData.phone} placeholder='eg. +1 234 567 890' onChange={changeHandler} />
        </div>
        <button type='submit' className='stepButton ml-auto mt-auto'>Next Step</button>
      </form>
    </div>
  )
}

export default Step1