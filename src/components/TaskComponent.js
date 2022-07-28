import React, { useState, useEffect } from 'react'
import Tasks from './Tasks';
import Form from './Form';
import './TaskComponent.css';



function TaskComponent() {
  const [temp, setTemp] = useState({})
  const taskEdit = (task) => {
    task['edit'] = true
    setTemp(task)
  }
  return (
    <div className='container'>
        <main className='mr-5'>
            <Form editTask={temp}/>
            <Tasks editTask={ taskEdit }/>
        </main>
    </div>
  )
}

export default TaskComponent