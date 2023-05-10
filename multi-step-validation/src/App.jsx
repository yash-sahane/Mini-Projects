import React, { useState } from 'react'
import { Step1, Step2, Step3, Step4 } from './components/index'
import plans from './utils/plans';

const App = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    duration: "",
    addOn: [],
    total: 0
  })
  const [errors, setErrors] = useState({});

  const nextStepHandler = () => {
    setStep(prevStep => prevStep += 1);
  }

  const prevStepHandler = () => {
    setStep(prevStep => prevStep -= 1);
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  const stepContent = [
    { id: 1, name: 'STEP 1', title: 'YOUR INFO', component: <Step1 nextStepHandler={nextStepHandler} changeHandler={changeHandler} setErrors={setErrors} errors={errors} formData={formData} /> },
    { id: 2, name: 'STEP 2', title: 'SELECT PLAN', component: <Step2 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 3, name: 'STEP 3', title: 'ADD-ONS', component: <Step3 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} /> },
    { id: 4, name: 'STEP 4', title: 'SUMMARY', component: <Step4 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} /> },
  ]

  return (
    <>
      <div>
        {stepContent[step].component}
      </div>
    </>
  )
}

export default App