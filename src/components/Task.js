import React from 'react'
import   './Task.css'
import { useSelector } from 'react-redux'


function Task({task, editTask}) {
    const tasks = useSelector(state => state.taskReducer)

    const taskEdit = () => {
        editTask(task)
    }

    return (
    <div className='card w-50' >
        <div className='card-body'>
            <div className='main'>
                <div className='details'>
                    <img src='https://cdn.pixabay.com/photo/2017/07/14/07/54/books-2502976_1280.jpg' />
                    <div className='info'>
                        <p>{task.task}</p>
                        <p>{task.date}</p>
                    </div>
                </div>
                <div className='controls'>
                <div className='card'>
                    <div className='card-body'>
                        <i className='la la-pen' onClick={taskEdit}></i>
                    </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <i className='la la-bell'></i>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <i className='la la-check'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Task