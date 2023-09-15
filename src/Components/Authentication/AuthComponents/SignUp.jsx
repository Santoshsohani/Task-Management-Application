import React, { useState } from 'react'
import { auth } from "../../../Config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import "../AuthCSS/SignUp.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate, Link} from "react-router-dom"


const SignUp = () => {

    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const notifySuccess = () => toast("SignUp Successful! Welcome", {
        position: toast.POSITION.TOP_CENTER
    });
    
    const notifyError = (e) => toast(e.message, {
        position: toast.POSITION.TOP_CENTER
    });

    console.log(auth?.currentUser?.email);

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            notifySuccess();
            setTimeout(() => {
                navigate('/home')
            }, 1500);
            setRegisterEmail("")
            setRegisterPassword("")
        } catch (error) {
            notifyError(error)
            setRegisterEmail("")
            setRegisterPassword("")
        }
    }

  return (
      <div className="signUpComponent">
          <div className='signUpPage'>
              <h1>Sign Up</h1>
              <input
                  value={registerEmail}
                  type="email" placeholder='Email...' onChange={(e) => {
                  setRegisterEmail(e.target.value)
              }} />
              <input
                    value={registerPassword}
                  type="password" placeholder='Password...' onChange={(e) => {
                  setRegisterPassword(e.target.value)
              }} />
              <button onClick={handleSignUp} className='primary-btn'>Sign Up</button>
          </div>
          <div className="label label-modify">Already Have An Account? <span><Link to='/'>Login</Link></span></div>
          <small>Test Email : test@test.com</small>
          <small>Test Password : 123456</small>
          <ToastContainer />
      </div>
  )
}

export default SignUp
