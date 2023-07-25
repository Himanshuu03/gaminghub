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
import { Login } from "./components/Login";
import { SingUp } from "./components/SingUp";
import Memepage from "./pages/Memepage";

function App() {
  const [data ,setData] = useState(gameData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    <div className="w-screen h-screen">
      <Navbar title="Gaming Hub" checkIsThereInput={checkIsThereInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setData={setData}></Navbar>
      <Routes>
        <Route path="/" element={<Cards gameData={data}></Cards>}/>
        <Route path="/tictactoe" element={<TicTacToe></TicTacToe>}/>
        <Route path="/rockpaperscissors" element={<RockPaperScissors></RockPaperScissors>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="/signup" element={<SingUp setIsLoggedIn={setIsLoggedIn}></SingUp>}></Route>
        <Route path="/memepage" element={<Memepage></Memepage>}/>
      </Routes>
    </div>
  );
}

export default App;
