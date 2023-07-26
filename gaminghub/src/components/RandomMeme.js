import React from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

export default function RandomMeme() {
    const {gif,loading,fetchData} = useGif("");
  return (
    <div className='w-6/12 m-2 shadow-xl bg-slate-100 rounded-lg flex flex-col items-center'>
        <h1 className='w-11/12 mt-2 bg-slate-200 text-center text-slate-800 font-bold text-2xl h-[45px] py-1 rounded-lg shadow-xl'>Random Gifs</h1>
        {
        loading ? (<Spinner></Spinner>) :(<img src={gif} alt='random gif' className='mt-10 w-10/12'></img>)
        }
        <button className='w-10/12 bg-slate-300 rounded-lg text-lg py-2 mb-[20px] mt-[10px] hover:scale-110' onClick={()=>{
            fetchData();
        }}>Generate Random Gif</button>
    </div>
  )
}
