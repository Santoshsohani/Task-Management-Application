import React, { useState } from 'react'
import {auth} from "../../../Config/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
import "../AuthCSS/ForgotPassword.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {

  const [forgotEmail, setForgotEmail] = useState("")
  const [errorMsg,setErrorMsg] = useState("")
  
  const notifySuccess = () => toast("Email Sent To The Respective Mail ID", {
    position: toast.POSITION.TOP_CENTER
  });
  const notifyError = (e) => toast(e.message, {
    position: toast.POSITION.TOP_CENTER
  });


    const handleForgotPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, forgotEmail);
          notifySuccess();
          setForgotEmail("")
        } catch (error) {
          setErrorMsg(error)
          notifyError(errorMsg)
          setForgotEmail("")
        }
    }

  return (
    <div className="forgetComponent">
      <div className='resetPage'>
        <h1>Reset Password</h1>
        <input
          value={forgotEmail}
          type="email" placeholder='Email...' onChange={(e) => { setForgotEmail(e.target.value) }} />
        <button className="primary-btn" onClick={handleForgotPassword}>Submit</button>
      </div>
      <div className="label label-modify">Need An Account? <span><Link to='/signup'>Sign Up</Link></span></div>
      <ToastContainer />
    </div>
  )
}

export default ForgotPassword
