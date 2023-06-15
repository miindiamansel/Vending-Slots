import Machine from "./Machine";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
        <h1> try your luck </h1>
        <Machine spin1="🍒" spin2="🍓" spin3="🍎"/>
        <Machine spin1="🍎" spin2="🍎" spin3="🍎"/>
        <VendingMachine/>
    </div>
  );
}

export default App;
