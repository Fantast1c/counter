import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incrementAC, initialStateType, resetAC} from "./redux/countReducer";
import {AppRootStateType} from "./redux/store";

const App = () => {


    const dispatch = useDispatch()

    const state   = useSelector<AppRootStateType, initialStateType>(state => state.count)


    const increment = ()=>{if(state.startValue <5) {dispatch(incrementAC())}}
    const reset = ()=>{ dispatch(resetAC())}

    const display = {color : state.startValue===5 ? "red":"#2e2e2e"}
    const inc ={backgroundColor : state.startValue===5 ? "#1b746c":"#26a69a"}
    const res ={backgroundColor : state.startValue===5 ? "#26a69a":"#1b746c"}

  return (
    <div className="App">
      <div className="Container">
        <div className="Display" style={display}>
           {state.startValue}
        </div>
        <div className="Container-button">
          <span><button className="Button" style={inc} onClick={increment}>inc</button></span>
            <span><button className="Button" style={res} onClick={reset}>reset</button></span>
        </div>
      </div>
    </div>
  );
};

export default App;
