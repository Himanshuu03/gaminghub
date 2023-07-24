import {React} from 'react'
import {PiUserCircleDuotone} from 'react-icons/pi'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
export const Templete = ({text,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[90vh]'>
        <div className={
          formtype === "login" ? "flex flex-col shadow-xl  w-[372px] h-[450px]" : "flex flex-col shadow-xl h-[640px] w-[450px]"
        }>
            <div className='flex justify-center items-center'>
              <PiUserCircleDuotone className='text-[5rem] m-0'></PiUserCircleDuotone>
            </div>
        <p className='text-[1.8rem] mb-[10px] text-center'>{text}</p>
        {formtype === "login" ? <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm> :<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>}
        </div>
    </div>
  )
}
