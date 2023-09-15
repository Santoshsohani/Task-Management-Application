import React from 'react'
import { db} from "../Config/firebase"
import { updateDoc, doc,deleteDoc } from "firebase/firestore"
import Navbar from "./Navbar"
import "./TaskCard.css"
const TaskCard = (props) => {

    const {id,DueData, Description, Title } = props.data;
  console.log(id);
  
  const handleComplete = async (uid) => {
    try {
      const ref = doc(db, "taskDatabase", uid)
      const newFields = {Completed : true}
      await updateDoc(ref, newFields)
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }
  

  const handleDelete = async (uid) => {
    try {
      const ref = doc(db, "taskDatabase", uid);
      await deleteDoc(ref);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='card'>
        <h1>{Title}</h1>
        <p>Description : {Description}</p>
        <p>Due Date : {DueData}</p>
        <button onClick={() => {
          handleComplete(id)
        }} className='secondary-btn'>Complete</button>
        <button className='secondary-btn' onClick={() => {
          handleDelete(id)
        }}>Delete</button>  
      </div>
    </div>
  )
}

export default TaskCard