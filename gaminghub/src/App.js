import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import gameData from "./gameData.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes ,Route } from "react-router-dom";
import TicTacToe from "./games/TicTacToe";
import RockPaperScissors from "./games/RockPaperScissors";

function App() {
  const [data ,setData] = useState(gameData);
  function checkIsThereInput(title){
    const updatedData = gameData.filter((e)=>((e.title).toLowerCase() === (title).toLowerCase()));
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
      <Routes>
        <Route path="/" element={ <Cards gameData={data}></Cards>}/>
        <Route path="/tictactoe" element={<TicTacToe></TicTacToe>}/>
        <Route path="/rockpaperscissors" element={<RockPaperScissors></RockPaperScissors>}/>

      </Routes>
     
    </div>
  );
}

export default App;
