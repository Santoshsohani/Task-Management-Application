import React, { useState } from 'react'
import {auth} from "../../../Config/firebase"
import {signInWithEmailAndPassword,signOut} from "firebase/auth"
import "../AuthCSS/LogIn.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';


const LogIn = () => {

    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("") 
    const [loginPassword, setLoginPassword] = useState("")

    const notifySuccess = () => toast("Login Successful", {
        position: toast.POSITION.TOP_CENTER
    });
    const notifyError = (e) => toast(e.message, {
        position: toast.POSITION.TOP_CENTER
    })
    
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            notifySuccess();
            setLoginEmail("")
            setLoginPassword("")
            setTimeout(() => {
                navigate('/home')
            }, 1500);

        } catch (error) {
            notifyError(error)
            setLoginEmail("")
            setLoginPassword("")
        }
    }


  return (
      <div className="loginComponent">
          <div className='loginPage'>
              <h1>Log In</h1>
              <input value={loginEmail}type="email" placeholder='Email...' onChange={(e) => {
                  setLoginEmail(e.target.value)
              }} />
              <input
                  value={loginPassword}
                  type="password" placeholder='Password...' onChange={(e) => {
                  setLoginPassword(e.target.value)
              }} />
              <button onClick={handleLogin}  className='primary-btn'>Login</button>
              
              <div className='label'><Link to="/forgotpassword">Forgot Password?</Link></div>
          </div>
          <div className="label-modify label">Need an Account? <span><Link to="/signup">Sign Up</Link></span></div>
          <small>Test Email : test@test.com</small>
          <small>Test Password : 123456</small>
          <ToastContainer />
      </div>
  )
}

export default LogIn
