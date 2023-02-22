import React from 'react';
import StockForm from './components/stockForm';
import stocksDB from './datasource/db';
import StockDetailsList from './components/stockDetailsList';
import { useAppData } from './datasource/appState';
import './App.css';

function App() {
  const { dispatch, state} = useAppData();

  console.log(state);

  return  state.isLoading ? <div>Loading...</div> : (
    <div className="App">
      <div>
        
      </div>
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
         <StockDetailsList
          currentSymbolRecords={state.currentSymbol.records.slice(0,Number(state.timeWindow))}  
          updateState={dispatch}
        />
      </div>
    </div>
  );
}

export default App;
