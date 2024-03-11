import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { logoutHandler } from '../config';
import { AuthContext } from '../Context/AuthContextProvider';
import { FaPowerOff } from "react-icons/fa";
import './UserProfile.css'

const UserProfile = () => {
    const { currentUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const signoutHandler = async () => {
        try {
            await logoutHandler();
            navigate('/login');
        } catch (e) {
            console.error('Logout failed:', e.message);
        }
    };

    return (
        <div className='user_profile'>
            <div className='profile_img_div'>
                <img src={currentUser.photoURL} alt="" className='user_profile_img' />
            </div>
            <p>{currentUser.displayName}</p>
            <FaPowerOff className='signout_btn' onClick={signoutHandler} />
        </div>
    )
}

export default UserProfile