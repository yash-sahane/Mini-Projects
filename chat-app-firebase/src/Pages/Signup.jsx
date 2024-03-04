import React, { useState } from 'react';
import { registerWithEmailAndPassword } from '../config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        pass: '',
        avatar: null,
    });

    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { value, name } = e.target;

        setUserInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const fileChangeHandler = (e) => {
        const file = e.target.files[0];
        setUserInfo((prev) => ({
            ...prev,
            avatar: file,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await registerWithEmailAndPassword(userInfo);
            console.log('User registered successfully!');
            navigate('/');
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={changeHandler} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={changeHandler} />
                <label htmlFor="displayName">Display Name</label>
                <input type="text" name="displayName" onChange={changeHandler} />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={changeHandler} />
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" onChange={changeHandler} />
                <label htmlFor="avatar">Add an avatar</label>
                <input type="file" onChange={fileChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
