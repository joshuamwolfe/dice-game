import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <div className="App">
      <Dice title={"Roll Me!"} numDice={4} maxVal={6} />
      <Dice />
    </div>
  );
}

export default App;
