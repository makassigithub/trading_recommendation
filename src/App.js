import React, {useState} from 'react';
import StockForm from './components/stockForm';
import stocksDB from './datasource/db';
import { dates } from './datasource/db';
import StockDetailsList from './components/stockDetailsList';
import { useAppData } from './datasource/appState';
import './App.css';



function App() {
  const { dispatch, state} = useAppData();

  console.log(state);

  return  state.isLoading ? <div>Loading...</div> : (
    <div className="App">
      <h2>
          Stock Market Recommender
      </h2>
      <div className='form'>
        <StockForm 
          symbols={Object.keys(stocksDB)}
          timeWindows = {state.timeWindows}
          updateState={dispatch}
          currentSymbol={state.currentSymbol}
        />
      </div>
      <StockDetailsList
        currentSymbol={state.currentSymbol}  
        updateState={dispatch}
      />
      </div>
  );
}

export default App;
