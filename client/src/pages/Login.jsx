import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loginuser } from '../redux/userReducer/action'

const Login = () => {
    const data=useSelector((store)=>{
        return store.userReducer
    })
    const dispatch = useDispatch()
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault()
        let data = {
            username,
            password
        }
        dispatch(Loginuser(data))
        setpassword("")
        setusername("")
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handlesubmit}>
                <label htmlFor="">Username</label>
                <br />
                <input style={{padding:"5px"}} type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
                <br />
                <label htmlFor="">Password</label>
                <br />
                <input style={{padding:"5px"}} type="text" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} />
               <br />
               <br />
                <input style={{padding:"5px",backgroundColor:"teal",color:"white"}} type="submit" />
            </form>
        </div>
    )
}

export default Login
