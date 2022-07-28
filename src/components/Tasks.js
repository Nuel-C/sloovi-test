import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'



function Tasks({editTask}) {
  const taskData = useSelector(state => state.taskReducer)
  const taskEdit = (task) => {
    editTask(task)
  }
    return (
      <div className=''>
        {
          taskData.map(task => (
            <Task editTask={ taskEdit } task={task} key={task.task}/>
          ))
        }
      </div>
    )
  }
export default Tasks