import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import gameData from "./gameData.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data ,setData] = useState(gameData);
  function checkIsThereInput(title){
    const updatedData = gameData.filter((e)=>(e.title === title));
    if(title === "all"){
      setData(gameData);
    }
    else if(updatedData.length === 0){
      setData(gameData);
      toast.error("Invalid Search !!!");
    }
    else{
      setData(updatedData);
    }
  }
  return (
    <div>
      <Navbar title="Gaming Hub" checkIsThereInput={checkIsThereInput}></Navbar>
      <Cards gameData={data}></Cards>
    </div>
  );
}

export default App;
