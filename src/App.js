import { Slider } from "antd";
import "./App.scss";
import { Hedgehog } from "./widgets/Hedgehog";

function App() {
  return (
    <div className="App">
      <header className="App-header">спаси ежа!</header>
      <Hedgehog />
      <Slider defaultValue={30} />
    </div>
  );
}

export default App;
