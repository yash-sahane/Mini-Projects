import React from 'react'
import InputControl from '../Components/InputControl'
import { Link } from 'react-router-dom'

const Login = () => {
    const changeHandler = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <form action="">
                <InputControl label='Email' name='email' placeholder='Enter email address' onChange={changeHandler} />
                <InputControl label='Password' name='pass' placeholder='Enter password' />
                <p>Don't have an account <Link to='/signup'>Signup</Link> </p>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login