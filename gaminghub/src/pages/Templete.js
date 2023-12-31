import {React} from 'react'
import {PiUserCircleDuotone} from 'react-icons/pi'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
export const Templete = ({text,formtype,setIsLoggedIn}) => {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[90vh]'>
        <div className={
          formtype === "login" ? "flex flex-col shadow-2xl rounded-md border-2 border-slate-100 w-[372px] h-[520px]" : "flex flex-col shadow-2xl rounded-md border-2 border-slate-100 h-[700px] w-[450px]"
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
