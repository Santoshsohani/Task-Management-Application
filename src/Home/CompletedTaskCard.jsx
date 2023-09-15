import React from 'react'
import { db } from "../Config/firebase"
import { updateDoc, doc } from "firebase/firestore"


const CompletedTaskCard = (props) => {

    const { id, DueData, Description, Title } = props.data;

  return (
    <div className='card'>
          <h1>{Title}</h1>
          <p>{Description}</p>
          <p>{DueData}</p>
    </div>
  )
}

export default CompletedTaskCard
