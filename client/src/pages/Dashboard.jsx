import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTasks, updateTask } from '../redux/taskReducer/action'

const Dashboard = () => {
    const [render, setrender] = useState(false)
    const tasks = useSelector((store) => {
        return store.taskReducer.tasks
    })
    const isAuth = useSelector((store) => {
        return store.userReducer.isAuth
    })
    let token = JSON.parse(localStorage.getItem("token"))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks(token))
    }, [])
    useEffect(() => {
        dispatch(fetchTasks(token))
    }, [render])

    const handledelete = (id) => {


        dispatch(deleteTask(token, id)).then((res) => {
            setrender(!render)
        })


    }
    const handleToggleCompletion = (id, completed) => {
        const updatedTask = {
            completed: !completed
        };
       
        dispatch(updateTask(token, updatedTask, id)).then(() => {
            setrender(!render);
        });
    };
    
    return (
        <div>
            <h1>Tasks</h1>
            <hr />
            <br />
            {
              isAuth &&  tasks.length > 0 ? tasks.map((el) => {
                    return (
                        <>
                        <div>
                            <p>Title: {el.title}</p>
                            <p>Description: {el.description}</p>
                            <p>DueDate: {el.dueDate}</p>
                            <p>Active: {el.completed ? "yes" : "no"}</p>
                            <input
                            type="checkbox"
                            checked={el.completed}
                            onChange={() => handleToggleCompletion(el._id, el.completed)}
                        />
                            <button onClick={() => handledelete(el._id)}>Delete</button>
                        </div>
                        <hr />
                        </>
                    )
                }):<p>Login First....</p>
            }
        </div>
    )
}

export default Dashboard
