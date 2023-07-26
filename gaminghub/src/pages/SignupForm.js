import React, { useState } from 'react'
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const SignupForm = ({setIsLoggedIn}) => {
    const [formData ,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword,setShowPassword]  = useState(false);
    const [showConfirmPassword,setConfirmShowPassword]  = useState(false);
    function changeHandler(event){
        setFormData((prevState)=>{
            return{
                ...prevState,
                [event.target.name] :event.target.value
            }
        })
    }
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            navigate("/");
            setIsLoggedIn(true);
            toast.success("Sccuccesfully Signed up");
        } 
        else{
            toast.warning("Password do'nt match")
        }
    }
  return (
    <div>
    <form onSubmit={submitHandler}>
        <div className='flex justify-between items-center mt-3'> 
        <label>
            <p className="text-[1.3rem] ml-4">First Name<sup className="text-red-700">*</sup></p>
            <input  className="w-[80%] mr-2 px-4 py-3 ml-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required type='text' value={formData.firstName} name='firstName' placeholder='Himanshu' onChange={changeHandler}></input>
        </label>
        <label>
            <p className="text-[1.3rem] ml-4">Last Name</p>
            <input className="w-[80%] mr-2 px-4 py-3 ml-2  border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type='text' value={formData.lastName} name='lastName' placeholder='Jangra' onChange={changeHandler}></input>
        </label>
        </div>
        <label>
            <p className="text-[1.3rem] ml-4 mt-3">Email Address<sup className="text-red-700">*</sup></p>
            <input className="w-[90%] mr-2 px-4 py-3 ml-2  border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            required type="email" value={formData.email} name='email' placeholder='Email Address' onChange={changeHandler}></input>
        </label>
        <label>
            <p className="text-[1.3rem] ml-4 mt-3">Password<sup className="text-red-700">*</sup></p>
            <input className="w-[85%] mr-2 px-4 py-3 ml-2  border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            required type={showPassword ? "text" :"password"} name='password' placeholder='Password' value={formData.password} onChange={changeHandler}></input>
            <span className="inline-block text-[30px]" onClick={()=>{
                setShowPassword((prev) => !prev);
            }}>
                {showPassword ? <BsEyeFill></BsEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>}
            </span>
        </label>
        <label>
            <p className="text-[1.3rem] ml-4 mt-3">Confirm Password<sup className="text-red-700">*</sup></p>
            <input className="w-[85%] mr-2 px-4 py-3 ml-2  border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
             required value={formData.confirmPassword} type={showConfirmPassword ? "text" :"password"} name='confirmPassword' placeholder='Confirm Password' onChange={changeHandler}></input>
            <span className="inline-block text-[30px]" onClick={()=>{
                setConfirmShowPassword((prev) => !prev);
            }}>
                {showConfirmPassword ? <BsEyeFill></BsEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>}
            </span>
        </label>
        <div className="flex justify-center items-center">
                  <button type="submit" className="px-4 py-2 rounded-md bg-slate-600 text-white mt-10 w-[100px] text-xl">Sign In</button>
                </div>
                <div className="flex w-full mt-4 items-center">
                    <div className="w-6/12 h-[1px] bg-gray-300 ml-2 mr-2">
                    </div>
                    <div>
                    <p>OR</p>
                    </div>
                    <div className="w-6/12 h-[1px] bg-gray-300 ml-2 mr-2">
                    </div>
            </div>
    </form>
    <div className="flex justify-center items-center">
    <button className="px-4 py-2 rounded-md bg-slate-600 text-white mt-5 w-10/12 text-xl">Countinue with Google</button>
</div>
</div>
  )
}
