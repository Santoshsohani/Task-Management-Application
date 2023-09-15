import React from 'react'
import "./Home.css"
import Navbar from './Navbar'
import TaskForm from './TaskForm'
import TaskDetails from './TaskDetails'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <TaskForm />
        <TaskDetails />
      </div>
    </div>
  )
}

export default Home
