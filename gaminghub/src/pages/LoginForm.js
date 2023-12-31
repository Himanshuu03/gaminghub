import { useState } from "react"
import React from 'react'
import {BsEyeFill,BsEyeSlashFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const [showPassword ,setShowPassword] = useState(false);
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name] : event.target.value
            }
        })
    }
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        navigate("/");
        setIsLoggedIn(true);
        toast.success("Sccuccesfully Login");
    }
  return (
    <div>
         <form onSubmit={submitHandler} className="mt-3">
                <label>
                    <p className="text-[1.3rem] ml-4">Email Address<sup className="text-red-700">*</sup></p>
                    <input className="w-[85%] mr-2 px-4 py-3 ml-2  border-b border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent" 
                    required type="email" placeholder='Email Address' name='email' value={formData.email} onChange={changeHandler}></input>
                </label>
                <label>
                    <p className="text-[1.3rem] mt-4 ml-4">Password<sup className="text-red-700">*</sup></p>
                    <input className="w-[85%] mr-2 px-4 py-3 ml-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent"
                    required type= {showPassword ? "text" : "password"} placeholder="Password" name='password' value={formData.password} onChange={changeHandler}></input>
                    <span className="inline-block text-[30px]" onClick={()=>{
                        setShowPassword((prev) => !prev)
                    }}>
                        {showPassword ? <BsEyeFill></BsEyeFill> :<BsEyeSlashFill></BsEyeSlashFill>}
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
