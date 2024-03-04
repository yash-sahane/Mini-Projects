import React, { useEffect, useState } from 'react'
import { auth, logInWithEmailAndPassword } from '../config';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        pass: ''
    })

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/");
    }, [user, loading])

    const changeHandler = (e) => {
        const { value, name } = e.target;

        setUserInfo(userInfo => ({
            ...userInfo, [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        logInWithEmailAndPassword(userInfo.email, userInfo.pass);
        console.log(userInfo);
    }

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' onChange={changeHandler} />
                <label htmlFor="pass">Pass</label>
                <input type="pass" name='pass' onChange={changeHandler} />
                <button type='submit'>Submit</button>
                <Link to='/signup'>Signup Here</Link>
            </form>
        </div>
    )
}

export default Login