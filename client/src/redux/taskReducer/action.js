import axios from "axios"
import { TASK_FAILURE, TASK_REQUEST, TASK_SUCCESS } from "./actionType"

export const fetchTasks = (token) => (dispatch) => {
    dispatch({ type: TASK_REQUEST })
    axios.get("http://localhost:5000/api/tasks/", {
        method: "GET",
        headers: {
            Authorization: token
        }
    }).then((res) => {
        console.log(res)
        dispatch({ type: TASK_SUCCESS, payload: res.data })
    }).catch((err) => {
        console.log(err)
        dispatch({ type: TASK_FAILURE })
    })

}

export const updateTask = (token, body, id) => (dispatch) => {
    console.log(id)
    dispatch({ type: TASK_REQUEST });
    return axios.patch(`http://localhost:5000/api/tasks/${id}`, body, {
        headers: {
            Authorization: token
        }
    }).then((res) => {
        // dispatch({ type: TASK_SUCCESS, payload: res.data });
        return res; // Return the response if needed in the component
    }).catch((err) => {
        dispatch({ type: TASK_FAILURE });
    });
}


export const deleteTask = (token, id) => (dispatch) => {
    dispatch({ type: TASK_REQUEST })
    return axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: token
        }
    }).then((res) => {
        return res
    }).catch((err) => {

        dispatch({ type: TASK_FAILURE })
    })
}