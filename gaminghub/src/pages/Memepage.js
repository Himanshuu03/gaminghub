import React from 'react'
import RandomMeme from '../components/RandomMeme'
import TagsMeme from '../components/TagsMeme'

export default function Memepage() {
  return (
    <div>
        <h1 className='text-center bg-slate-300 text-slate-800 font-bold text-3xl m-2 h-[50px] py-1'>Gif's</h1>
        <div className='w-full flex flex-col items-center'>
            <RandomMeme></RandomMeme>
            <TagsMeme></TagsMeme>
        </div>
    </div>
  )
}
