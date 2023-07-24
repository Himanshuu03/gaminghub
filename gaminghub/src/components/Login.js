import React from 'react'
import { Templete } from '../pages/Templete'

export const Login = ({setIsLoggedIn}) => {
  return (
    <div>
        <Templete
        text = "Log In"
        formtype = "login"
        setIsLoggedIn={setIsLoggedIn}
        ></Templete>
    </div>
  )
}
