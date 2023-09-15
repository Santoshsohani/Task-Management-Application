import React, { useEffect, useState } from 'react'
import {auth,db} from "../Config/firebase"
import "./TaskDetails.css"
import { setPersistence, browserLocalPersistence } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'

const TaskDetails = () => {

    const current = useNavigate();

    const [userName, setUserName] = useState("")
    
    const [dbUsers, setDbUsers] = useState([])
    
    const usersCollectionRef = collection(db,"users")

    setPersistence(auth, browserLocalPersistence);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserName(user.email)
        } else {
            console.log('User is logged out');
        }
    });

    const routePendingDetails = () => {
        current('/pendingtasks')
    }

    const routeCompltedTask = () => {
        current('/completedtask')
    }

    const routeOverDue = () => {
        current('/overdue')
    }

  return (
      <div className='taskdetails'>
          <h2>Hello {userName}</h2>
          <h2>Your Task Details</h2>
          
          <div onClick={routePendingDetails} className="pendingDetails">
                  Pending Task
              </div>
          <div  onClick={routeCompltedTask}
              className="completedDetails">
                  Completed Task
              </div>
              <div onClick={routeOverDue} className="dueDetails">
                  Over Due Task
              </div>

      </div>
  )
}

export default TaskDetails

