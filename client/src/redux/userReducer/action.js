import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"
export const Signup = (data) => (dispatch) => {

    axios.post("http://localhost:5000/api/auth/register", data).then((res) => {
        console.log("user Registered")
        alert("User Registered")
    }).catch((err) => {
        console.log(err)
    })


}




export const Loginuser = (data) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    axios.post("http://localhost:5000/api/auth/login", data).then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token))
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
        alert("User Login Success")
    }).catch((err) => {
        console.log(err)
        dispatch({ type: LOGIN_FAILURE })
    })
}


