import React from 'react'
import { useState, useEffect } from 'react'
import TaskCard from './TaskCard'
import {db,auth} from "../Config/firebase"
import { collection, getDocs } from "firebase/firestore"
import "./TaskCard.css"
import Navbar from './Navbar'

const PendingTask = () => {

    const [pendingTasks,setPendingTasks] = useState([])
    const pendingTaskRefrence = collection(db,"taskDatabase")
    useEffect(() => {
        const getPendingTasks = async () => {
            try {
                const data = await getDocs(pendingTaskRefrence)
                setPendingTasks(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            } catch (error) {
                console.log(error);
            }
        }

        getPendingTasks()
    },[])

    return (
      
        <div>
            <Navbar />
            <h1 className='heading'>Pending Tasks</h1>
            <div className='pendingTask'>

                {
                    pendingTasks.map((task) => {
                        if (!task.Completed && auth?.currentUser?.email === task.Email) {
                            return (
                                <TaskCard data={task} />
                            )
                        }
                    })
                }


            </div>
        </div>
  )
}

export default PendingTask
