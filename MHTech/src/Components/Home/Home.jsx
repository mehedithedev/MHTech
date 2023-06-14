import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
  const username = useSelector((state)=> state.user.value.username)
  return (
    <div>Home: {username}</div>
  )
}

export default Home