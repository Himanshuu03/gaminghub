import React from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  let title = props.title;
  let image = props.img;
  let text = props.text.length > 100?`${props.text.substring(0,100)}...`:props.text;

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-xl ml-2">
        <img className="" src={image.src} alt={image.alt}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {text}
          </p>
        </div>
        <div>
        <button className="bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded m-3.5 hover:scale-110">
            Play With Friends
        </button>
        <button className="bg-slate-500 hover:bg-white hover:text-slate-600 text-white font-bold py-2 px-4 rounded  hover:scale-110">
            Play With Random
        </button>
        </div>
      </div>
    </div>
  );
}
