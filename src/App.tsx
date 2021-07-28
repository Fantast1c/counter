import React, {useState} from 'react';
import './App.css';

function App() {

   let [state, setState] = useState(0);

    const increment = ()=>{state<5 ? setState(state+1) :  setState(state) }
    const reset = ()=>{state===5 ? setState(state=0): setState(state)}

    const display = {color : state===5 ? "red":"#2e2e2e"}
    const inc ={backgroundColor : state===5 ? "#1b746c":"#26a69a"}
    const res ={backgroundColor : state===5 ? "#26a69a":"#1b746c"}

  return (
    <div className="App">
      <div className="Container">
        <div className="Display" style={display}>
           {state}
        </div>
        <div className="Container-button">
          <span><button className="Button" style={inc} onClick={increment}>inc</button></span>
            <span><button className="Button" style={res} onClick={reset}>reset</button></span>
        </div>
      </div>
    </div>
  );
}

export default App;
