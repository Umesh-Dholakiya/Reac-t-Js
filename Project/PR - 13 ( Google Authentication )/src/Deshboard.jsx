import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../FIrebase';
import { useNavigate } from 'react-router-dom';
import './Style.css'


const Deshboard = () => {

    const navigate = useNavigate();

    const logout = async () => {
        try{
            await signOut(auth);
            alert("Logout SuccessFully...👍")
            navigate('/')

        }catch(err){
            console.log(err);
            return false;
        }
    }
  return (
    <div align="center">
        <h2>Deshboard</h2>
        <button onClick={() => logout() }>LogOut</button>
      
    </div>
  )
}

export default Deshboard
