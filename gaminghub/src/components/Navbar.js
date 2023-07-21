import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
const Navbar = (props) => {
  let checkIsThereInput = props.checkIsThereInput;
  const [text,setText] = useState("");
  const [click,setClick] = useState("all");
  function changeHandler(event){
    setText(event.target.value);
  }
  function clickHandler(){
    setClick(text);
    setText("");
  }
  useEffect(()=>{
    checkIsThereInput(click);
  },[click])
  return (
    <div>
      <nav className="relative flex w-full flex-wrap items-center justify-between bg-blue-800 py-2 text-neutral-500 shadow-lg lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <span className="ml-2 text-xl text-white">{props.title}</span>
    <div className="ml-5 flex w-[30%] items-center">
      <input value={text} onChange={changeHandler} type="search" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Search"  />
      <FaSearch onClick={clickHandler} className='text-3xl ml-3 text-white cursor-pointer hover:text-4xl'/>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;