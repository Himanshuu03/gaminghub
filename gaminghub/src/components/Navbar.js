import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import gameData from '../gameData';
const Navbar = (props) => {
  let checkIsThereInput = props.checkIsThereInput;
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  let setData = props.setData;
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
    setData(gameData);
  }
  return (
    <div className='flex items-center justify-between bg-slate-700'>
     <nav className='flex flex-wrap items-center justify-between bg-slate-700 w-[100vw] h-[70px]'>
     <span className="ml-2 text-[1.8rem] text-white cursor-pointer" onClick={mainPageHandler}>{props.title}</span>
     { isLoggedIn ? (
     <div className='flex'>
     <input value={text} onChange={changeHandler} type="search" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[30vw]" placeholder="Search"  />
     <button onClick={clickHandler}className='bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4 w-[100px] hover:scale-110'>
      Search
     </button>
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
        <button className='bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4  w-[100px] hover:scale-110'>Login</button>
      </Link>
     }
     {
      !isLoggedIn &&
      <Link to="/signup">
        <button className='bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4 w-[100px] hover:scale-110'>Sign In</button>
      </Link>
     }
     </div>
     </nav>
     {
       isLoggedIn &&
      <Link to="/login">
       <button onClick={()=>{
        setIsLoggedIn(false);
       }}
       className='bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4 w-[100px] hover:scale-110'>
        Logout
        </button>
      </Link>
     }
     {
      isLoggedIn && 
      <Link to="/memepage">
      <button
      className='bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded mr-4 ml-4 w-[170px] hover:scale-110'
      >
        Meme Page
      </button>
      </Link>
     }
    </div>
  )
}

export default Navbar;

