import React, { useRef, useState, useEffect } from 'react'
import './Form.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../actions'



const Form =  ({ editTask }) => {
  const tasks = useSelector(state => state.taskReducer)
  const dispatch = useDispatch()
  const taskform = useRef()
  const task = useRef()
  const date = useRef()
  const time = useRef()
  const user = useRef()

  useEffect(() => {
    if(editTask.task === undefined ){
        task.current.value = ''
    }else{
        if(editTask.edit === false){
            return
        }
        task.current.value = editTask.task
        date.current.value = editTask.date
        time.current.value = editTask.time
        user.current.value = editTask.user
    }
  })


  const toggleTaskForm = () => {
    if (taskform.current.style.display == 'none') {
        taskform.current.style.display = 'flex'
    } else {
        taskform.current.style.display = 'none'
    }
  }




  const saveTask = (e) => {
    e.preventDefault()
    if (editTask.edit == true) {
        var x = []
        tasks.forEach((xTask) => {
            if (xTask.id == editTask.id) {
                var obj = {
                    id: editTask.id,
                    task: task.current.value,
                    date: date.current.value,
                    time: time.current.value,
                    user: user.current.value
                }
                x.push(obj)
            }else{
                x.push(xTask)
            }
        })
        dispatch(addTask(x))
        task.current.value = ''
        date.current.value = ''
        time.current.value = ''
        user.current.value = ''
        editTask.edit = false
    } else {
        var obj = {
            id: tasks.length,
            task: task.current.value,
            date: date.current.value,
            time: time.current.value,
            user: user.current.value
        }
        dispatch(addTask([...tasks, obj]))
        task.current.value = ''
        date.current.value = ''
        time.current.value = ''
        user.current.value = ''
    }
    
  }

  return (
    <div className='w-50'>
        <div className='card mt-5 cardHeader'>
            <div className='card-body'>
                <div className='header'>
                    <div className='taskHeading'>
                        <h5>TASKS {tasks.length}</h5>
                    </div>
                    <div className='add' onClick={toggleTaskForm}>
                        <p>+</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='card' ref={taskform}>
            <div className='card-body cardBody'>
                <form>
                    <div className='form-group'>
                        <label for='task' className='mb-2'>
                            Task Description
                        </label>
                        <input type='text' className='form-control' name='task' id='task' ref={task}/>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <label for='date' className='mb-2'>
                                    Date
                                </label>
                                <input type='date' className='form-control' name='date' id='date' ref={date}/>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <label for='time' className='mb-2'>
                                    Time
                                </label>
                                <input type='time' className='form-control' name='time' id='time' ref={time}/>
                            </div>
                        </div>
                    </div>

                    <div className='form-group mt-3'>
                        <label for='user' className='mb-2'>
                            Assign User
                        </label>
                        <select className='form-control' name='user' id='user' ref={user}>
                            <option>Paul Wesley</option>
                            <option>Grant Gustin</option>
                            <option>Daniel Gillies</option>
                            <option>Joseph Morgan</option>
                        </select>
                    </div>

                    <div className='buttons mt-3'>
                        <button className='btn'>Cancel</button>
                        <button className='btn btn-success' onClick={(e)=> saveTask(e)}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form