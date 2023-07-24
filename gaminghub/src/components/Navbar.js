import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {SlHome} from 'react-icons/sl'
const Navbar = (props) => {
  let checkIsThereInput = props.checkIsThereInput;
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  const [text,setText] = useState("");
  const [click,setClick] = useState("all");
  function changeHandler(event){
    setText(event.target.value);
    setClick(event.target.value);
  }
  function clickHandler(){
    checkIsThereInput(click);
    setText("");
  }
  const navigate = useNavigate();
  function mainPageHandler(){
    navigate("/");
  }
  return (
    <div>
     <nav className='flex flex-wrap items-center justify-between bg-blue-700 w-[100vw] h-[70px]'>
     <span className="ml-2 text-[1.8rem] text-white cursor-pointer" onClick={mainPageHandler}>{props.title}</span>
     { isLoggedIn ? (
     <div className='flex'>
     <input value={text} onChange={changeHandler} type="search" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[30vw]" placeholder="Search"  />
    <FaSearch onClick={clickHandler} className='text-3xl ml-3 mt-1 text-white cursor-pointer hover:text-4xl'/>
    </div>
     )
     :(
      <></>
     )
     }
     <div>
     {
      !isLoggedIn &&
      <Link to="/login">
        <button className='bg-blue-500 hover:bg-white hover:text-blue-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4  w-[100px]'>Login</button>
      </Link>
     }
     {
      !isLoggedIn &&
      <Link to="/signup">
        <button className='bg-blue-500 hover:bg-white hover:text-blue-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4 w-[100px]'>Sign In</button>
      </Link>
     }
     </div>
     {
       isLoggedIn &&
      <Link to="/login">
       <button onClick={()=>{
        setIsLoggedIn(false);
       }}
       className='text-white text-[1.8rem] hover:scale-125'>
        <SlHome></SlHome>
        </button>
      </Link>
     }
     </nav>
    </div>
  )
}

export default Navbar;

