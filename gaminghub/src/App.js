import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import gameData from "./gameData.js";

function App() {
  return (
    <div>
      <Navbar title="Gaming Hub"></Navbar>
      <Cards gameData={gameData}></Cards>
    </div>
  );
}

export default App;
