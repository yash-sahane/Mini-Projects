import React, { useState } from 'react';
import { Step1, Step2, Step3, Step4 } from './components/index';

const App = ({ formData, setFormData }) => {
  const [step, setStep] = useState(0);

  const nextStepHandler = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStepHandler = () => {
    setStep(prevStep => prevStep - 1);
  };

  const stepContent = [
    { id: 1, name: 'STEP 1', title: 'YOUR INFO', component: <Step1 nextStepHandler={nextStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 2, name: 'STEP 2', title: 'SELECT PLAN', component: <Step2 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 3, name: 'STEP 3', title: 'ADD-ONS', component: <Step3 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 4, name: 'STEP 4', title: 'SUMMARY', component: <Step4 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} /> },
  ];

  return (
    <>
      <div>
        {stepContent[step].component}
      </div>
    </>
  );
};