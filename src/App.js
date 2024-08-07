import "./App.css";
import UpperPart from "./Components/UpperPart/UpperPart";
import LowerPart from "./Components/LowerPart/LowerPart";

function App() {
  return (
    // <div className="App">
    // <>
      <div className="upper-part">
        <UpperPart />
      {/* </div> */}
      {/* <div className="lower-part"> */}
        <LowerPart />
      </div>
  );
}

export default App;
