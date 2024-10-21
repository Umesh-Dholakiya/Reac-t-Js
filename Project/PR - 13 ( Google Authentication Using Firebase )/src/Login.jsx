import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { googleAuthProvider , auth } from '../FIrebase';
import './Style.css'

const Login = () => {

    const navigate = useNavigate();

    const  handleSubmit = async () => {
        try{
            let data = await signInWithPopup(auth , googleAuthProvider);
            navigate('/Deshboard');
        }
        catch(err){
            console.log(err);
            return false;
        }
    }
  return (
    <div align="center">
        <h2>Login Page</h2>
        <div align="center">
            <h2>Sign in With Google in React</h2>
            <img src="./src/11.png" onClick={() => handleSubmit()} />
        </div>
    </div>
  )
}

export default Login
