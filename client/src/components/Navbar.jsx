import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOG_OUT } from '../redux/userReducer/actionType'

const Navbar = () => {
    const token = useSelector((store) => {
        return store.userReducer.token
    })
    const dispatch = useDispatch()
    const handlelogout = () => {
        dispatch({ type: LOG_OUT })
        localStorage.removeItem("token");
        alert("Logout Success")
    }
    
    return (
        <div style={{height:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
            <Link style={{textDecoration:"none",color:"white"}} to="/">Dashboard</Link>
            <Link style={{textDecoration:"none",color:"white"}} to="/login">Login</Link>
            <Link style={{textDecoration:"none",color:"white"}} to="/signup">Signup</Link>
            <button style={{padding:"5px"}} onClick={handlelogout}>Logout</button>
        </div>
    )
}

export default Navbar
