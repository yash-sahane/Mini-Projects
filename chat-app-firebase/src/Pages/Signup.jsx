import React, { useState } from 'react'
import { logInWithEmailAndPassword, registerWithEmailAndPassword } from '../config'

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        pass: '',
    })

    const changeHandler = (e) => {
        const { value, name } = e.target;

        setUserInfo(userInfo => ({
            ...userInfo, [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        registerWithEmailAndPassword(userInfo);
        console.log(userInfo);
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' onChange={changeHandler} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name='lastName' onChange={changeHandler} />
                <label htmlFor="userName">Username</label>
                <input type="text" name='userName' onChange={changeHandler} />
                <label htmlFor="email">Email</label>
                <input type="text" name='email' onChange={changeHandler} />
                <label htmlFor="pass">Pass</label>
                <input type="pass" name='pass' onChange={changeHandler} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup