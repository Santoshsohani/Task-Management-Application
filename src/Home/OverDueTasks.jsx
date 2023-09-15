import React from 'react'
import { useState, useEffect } from 'react'
import { auth, db } from "../Config/firebase"
import { collection, getDocs } from 'firebase/firestore'
import OverDueTaskCard from './OverDueTaskCard'
import "./OverDue.css"
import Navbar from "./Navbar"
const OverDueTasks = () => {

    const [overdueTasks, setOverdueTasks] = useState([])
    const completedTaskRefrence = collection(db, "taskDatabase")

    useEffect(() => {
        const getOverdueTasks = async () => {
            try {
                const data = await getDocs(completedTaskRefrence)
                setOverdueTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            } catch (error) {
                console.log(error);
            }
        }
        getOverdueTasks()
    }, [])

  return (
      <div>
          <Navbar />
          <h1 className='heading'>Over Due Tasks</h1>
          <div className='overdue'>
              {
                  overdueTasks.map((task) => {
                      const currentDate = new Date()
                      const dueDate = new Date(task.DueData);

                      if (currentDate > dueDate) {
                          return (
                              <OverDueTaskCard data={task} />
                          )
                      }
                  })
              }
          </div>
      </div>
  )
}

export default OverDueTasks
