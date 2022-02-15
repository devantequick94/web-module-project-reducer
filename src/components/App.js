import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import { applyNumber, changeOperation, clearDisplay, addMemory, applyMemory, clearMemory } from '../actions';
import reducer, { initialState } from '../reducers';

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  const numClick = (number)=>{
    dispatch(applyNumber(number));
  }

  const opClick = (operator) => {
    dispatch(changeOperation(operator));
  }

  const clickClearDisplay = () => {
    dispatch(clearDisplay());
  }
  
  const handleMemoryAdd = () => {
    dispatch(addMemory());
  }


  const memApply = () => {
    dispatch(applyMemory());
  }

  const memClear = () => {
    dispatch(clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onclick={handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick={memApply}/>
              <CalcButton value={"MC"} onClick={memClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> numClick(1) }/>
              <CalcButton value={2} onClick={()=> numClick(2) }/>
              <CalcButton value={3} onClick={()=> numClick(3) }/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> numClick(4) }/>
              <CalcButton value={5} onClick={()=> numClick(5) }/>
              <CalcButton value={6} onClick={()=> numClick(6) }/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> numClick(7) }/>
              <CalcButton value={8} onClick={()=> numClick(8) }/>
              <CalcButton value={9} onClick={()=> numClick(9) }/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onclick={() => opClick("+")}/>
              <CalcButton value={"*"} onclick={() => opClick("*")}/>
              <CalcButton value={"-"} onclick={() => opClick("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clickClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
