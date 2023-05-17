import React, { useEffect, useState } from 'react';
import { Step1, Step2, Step3, Step4 } from './components/index';
import plans from './utils/plans';
import Steps from './components/Steps';
import Step5 from './components/Step5';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: plans[0].name,
    planAmount: 0,
    duration: '',
    addOn: [],
    total: 0,
  });
  const [step, setStep] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const nextStepHandler = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStepHandler = () => {
    setStep(prevStep => prevStep - 1);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const stepContent = [
    { id: 1, name: 'STEP 1', title: 'YOUR INFO', component: <Step1 nextStepHandler={nextStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 2, name: 'STEP 2', title: 'SELECT PLAN', component: <Step2 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 3, name: 'STEP 3', title: 'ADD-ONS', component: <Step3 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} formData={formData} setFormData={setFormData} /> },
    { id: 4, name: 'STEP 4', title: 'SUMMARY', component: <Step4 nextStepHandler={nextStepHandler} prevStepHandler={prevStepHandler} formData={formData} setStep={setStep} setConfirm={setConfirm} /> },
  ];

  return (
    <div className='w-full h-full flex justify-center align-center'>
      <div className='flex flex-row justify-between mx-auto my-auto w-60rem h-37.5rem p-4 bg-white rounded-2xl app-media'>
        <Steps stepContent={stepContent} step={step} />
        {!confirm ?
          <div className='w-70per p-page'>
            {stepContent[step].component}
          </div> :
          <Step5 />}
      </div>
    </div>
  );
};

export default App;