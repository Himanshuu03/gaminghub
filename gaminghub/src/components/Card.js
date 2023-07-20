import React from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  let title = props.title;
  let image = props.img;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ml-2">
        <img className="w-full" src={image.src} alt={image.alt}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded m-3.5">
            Play With Friends
        </button>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            Play With Random
        </button>
        </div>
      </div>
    </div>
  );
}
