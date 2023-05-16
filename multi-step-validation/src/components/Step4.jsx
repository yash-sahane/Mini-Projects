import React from 'react'

const Step4 = ({ prevStepHandler, nextStepHandler, formData }) => {
    const { plan, addOn, total, duration, planAmount } = formData;
    return (
        <div className='h-full flex flex-col'>
            <h2 className='text-4xl font-bold'>Finishing up</h2>
            <p className='text-coolGray mt-2 font-ubuntu-medium'>Double-check everything looks OK before confirming.</p>
            <div className='mt-8'>
                <div className='px-6 pt-6 pb-2 bg-magnolia rounded-lg'>
                    <div className='flex justify-between border-b-2 pb-5'>
                        <div>
                            <h2 className='font-ubuntu-bold'>{plan} ({duration})</h2>
                            <span className='hover:text-purplishBlue underline cursor-pointer'>Change</span>
                        </div>
                        <p className='font-ubuntu-bold my-auto'>${planAmount}/{duration === 'Yearly' ? 'yr' : 'mo'}</p>
                    </div>
                    <div className='pt-2'>
                        {addOn.map(addOn => {
                            const { title, amount } = addOn;
                            return <div className='flex justify-between py-3'>
                                <p className='text-coolGray '>{title}</p>
                                <p>+${duration === 'Monthly' ? `${amount}/mo` : `${amount * 10}/yr`}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='flex justify-between p-6'>
                    <p className='text-coolGray'>Total (per {duration === 'Monthly' ? 'month' : 'yearly'})</p>
                    <p className='font-ubuntu-bold text-purplishBlue text-lg my-auto'>+${total}/{duration === 'Monthly' ? 'mo' : 'yr'}</p>
                </div>
            </div>
            <div className='flex justify-between mt-auto'>
                <button onClick={prevStepHandler} className='px-5 py-2.5 rounded-md mb-2 text-coolGray font-bold'>Go Back</button>
                <button className='stepButton'>Confirm</button>
            </div>
        </div>
    )
}

export default Step4