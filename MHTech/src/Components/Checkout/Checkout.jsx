import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

const Checkout = () => {
  const username= useSelector((stateofComponent)=>{
    return(
      stateofComponent.user.value.username
    )
  })
  return (
    <div>Checkout:  {username}</div>
  )
}

export default Checkout