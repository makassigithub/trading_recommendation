import React from "react";
import StockForm from "./components/stockForm";
import StockDetailsList from "./components/stockDetailsList";
import { useAppData } from "./datasource/appState";
import "./App.css";

function App() {
  const { dispatch, state } = useAppData();

  return (
    <div className="App">
      {state.isLoading ? (
        <div>Loading...</div>
      ) : state.stocks === null ? (
        <div style={{ backgroundColor: "pink", color: "red", padding: "10px" }}>
          Failing to load Symbols
        </div>
      ) : (
        <>
          <h2>Stock Market Recommender</h2>
          <div className="form">
            <StockForm
              symbols={Object.keys(state.stocks).map((key) =>
                key.toUpperCase()
              )}
              timeWindows={state.timeWindows}
              updateState={dispatch}
              currentSymbol={state.currentSymbol}
            />
            <StockDetailsList
              currentSymbolRecords={state.currentSymbol.records.slice(
                0,
                Number(state.timeWindow)
              )}
              updateState={dispatch}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
