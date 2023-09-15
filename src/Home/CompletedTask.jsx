import React from 'react'
import { useState,useEffect } from 'react'
import { auth, db } from "../Config/firebase"
import { collection, getDocs } from 'firebase/firestore'
import CompletedTaskCard from './CompletedTaskCard'
import "./CompletedTask.css"
import Navbar from "./Navbar"

const CompletedTask = () => {

    const [completedTasks, setCompletedTasks] = useState([])
    const completedTaskRefrence = collection(db, "taskDatabase")

    useEffect(() => {
        const getCompltedTask = async () => {
            try {
                const data = await getDocs(completedTaskRefrence)
                setCompletedTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (error) {
                console.log(error);
            }
        }
        getCompltedTask()
    }, [])
    

    return (
        <div>
            <Navbar />
            <div className="heading">Completed Task</div>
            <div className='completedTask'>
                
                {
                    completedTasks.map((task) => {
                        if (task.Completed && auth?.currentUser?.email === task.Email) {
                            return (
                                <CompletedTaskCard
                                    data={task}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}


export default CompletedTask
