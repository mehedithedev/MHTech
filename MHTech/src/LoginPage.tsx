import React , {useState} from 'react'
import {login, logout} from '../src/store';
import {useDispatch, useSelector} from 'react-redux';

const LoginPage = () => {
  
  const [newUserName, setNewUserName] = useState('')
  const dispatch = useDispatch()
  const username = useSelector((state: any)=> state.user.value.username)
    return (
    <div>
        <h1>The user name is: {username}</h1>
            <input type="text" 
             onChange={(evt)=>{setNewUserName(evt.target.value)}}
            />
            <button onClick={()=> dispatch(login({username: newUserName}))}>Login</button>
            <button onClick={()=> dispatch(logout())}>Logout</button>
    </div>
  )
}

export default LoginPage