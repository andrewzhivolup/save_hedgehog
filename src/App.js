import "./App.scss";
import { CodesInput } from "./widgets/CodesInput";
import { Hedgehog } from "./widgets/Hedgehog";
import { HedgehogSlider } from "./widgets/HedgehogSlider";

function App() {
  const promoLength = 10;
  const hedgehogSize = 100;

  return (
    <div className="App">
      <Hedgehog size={hedgehogSize} />
      <HedgehogSlider />
      <CodesInput promoLength={promoLength} defaultValue="D1SQ8EPDS3" />
    </div>
  );
}

export default App;
