import React, { useState } from 'react';
import InputControl from '../Components/InputControl';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        pass: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        pass: ''
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({
            ...prev,
            [name]: value
        }));
        setErrors(prev => ({
            ...prev,
            [name]: '' // Clear the error when the user starts typing
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Simple validation, checking if fields are not empty
        for (const key in values) {
            if (!values[key]) {
                newErrors[key] = 'This field is required';
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Add your signup logic here using 'values' state
        } else {
            console.log('Form validation failed. Please check the errors.');
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputControl
                    label='Name'
                    name='name'
                    placeholder='Enter name'
                    onChange={changeHandler}
                    error={errors.name}
                />
                <InputControl
                    label='Email'
                    name='email'
                    placeholder='Enter email address'
                    onChange={changeHandler}
                    error={errors.email}
                />
                <InputControl
                    label='Password'
                    name='pass'
                    placeholder='Enter password'
                    onChange={changeHandler}
                    error={errors.pass}
                />
                {Object.values(errors).some((error) => error) && (
                    <div style={{ color: 'red', margin: '10px 0' }}>
                        Please fix the errors before submitting the form.
                    </div>
                )}
                <p>Already have an account <Link to='/login'>Login</Link> </p>
                <button type='submit'>Signup</button>
            </form>
        </div>
    );
};

export default Signup;
