import React, { useState } from 'react'
import "./TaskForm.css"
import {db,auth} from "../Config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TaskForm = () => {

    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [dueData, setDueDate] = useState()
  
  const usersCollectionRef = collection(db, "taskDatabase")

  const notifySuccess = () => toast("Task Added!", {
    position: toast.POSITION.TOP_CENTER
  });

  const notifyError = (e) => toast(e.message, {
    position: toast.POSITION.TOP_CENTER
  });

    
  const handleAddDoc = async () => {
    try {
      await addDoc(usersCollectionRef, {
        Completed: false,
        Description: description,
        DueData: dueData,
        Email: auth?.currentUser?.email,
        Title:task,
      })
      setDescription("")
      setDueDate("")
      setTask("")
      notifySuccess()
     
    } catch (error) {
      notifyError(error)
      setDescription("")
      setDueDate("")
      setTask("")
    }
  }
  
    return (
    <div className='taskForm'>
            <h2 className='head-modify'>Add Your Tasks</h2>
        <input className='input-modify' value={task}type="text" placeholder='Title...' onChange={(e)=>{setTask(e.target.value)}} />
            <textarea placeholder='Description...' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <small>Due Date : </small>
            <input className='input-modify' type="date" value={dueData} onChange={(e)=>{setDueDate(e.target.value)}}/>
        <button className='primary-btn primary-btn-modify' onClick={handleAddDoc}>Add Task</button>
        <ToastContainer />
    </div>
  )
}

export default TaskForm
