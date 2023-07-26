import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function TagsMeme() {
    const [tag,setTag] = useState("");
    const {gif,loading,fetchData} = useGif(tag);
  return (
    <div className='w-6/12 m-2 shadow-xl bg-slate-100 rounded-lg flex flex-col items-center'>
    <h1 className='w-11/12 mt-2 bg-slate-200 text-center text-slate-800 font-bold text-2xl h-[45px] py-1 rounded-lg shadow-xl'>Random {tag} Gifs</h1>
    {
        loading ? (<Spinner></Spinner>) :(<img src={gif} alt='generated gif' className='mt-10 w-10/12'></img>)
    }
    <input className='w-10/12 bg-slate-200 rounded-lg text-xl text-center py-2 mb-[10px] mt-[10px]' value={tag} placeholder='car' onChange={
        (event)=>{
            setTag(event.target.value);
        }
    }></input>
    <button className='w-10/12 bg-slate-300 rounded-lg text-lg py-2 mb-[20px] hover:scale-110' onClick={()=>{
        fetchData(tag)
    }}>Generate Random Gif</button>
</div>
  )
}
