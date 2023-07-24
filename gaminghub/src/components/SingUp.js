import React from 'react'
import { Templete } from '../pages/Templete'

export const SingUp = ({setIsLoggedIn}) => {
  return (
    <div>
        <Templete
        text ="Sign Up"
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        ></Templete>
    </div>
  )
}
