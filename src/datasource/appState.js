
import {  useEffect, useReducer } from 'react';
//import StockService from './service';
import stocksDB, { TIME_WINDOWS } from './db';


export function sotckFormReducer(state, action) {
  switch (action.type) {
    case 'LOAD_SYMBOLS':
      return { ...state, isLoading: true };
    case 'SYMBOLS_LOADED':
        return { ...state, isLoading: false,
            stocks: action.stocks, currentSymbol: Object.values(action.stocks)[0] 
        };
    case 'SET_SYMBOL':
      return { ...state, currentSymbol: state.stocks[action.value]};
    case 'SET_TIME_WINDOW':
      return { ...state, currentTimeWindow: action.value};
    case 'SET_USE_SOCIAL_MEDIA':
      return { ...state, useSocilaMedia: !state.useSocilaMedia };
    default:
      break;
  }
}

export const useAppData = () => {

  const initialState = {
    isLoading: true,
    stocks: {},
    timeWindows:TIME_WINDOWS
  }

  const [state, dispatch] = useReducer(sotckFormReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        dispatch({
          type: 'SYMBOLS_LOADED',
          stocks: stocksDB ,
        });
      } catch (error) {}
    })();
  }, []);

  return {
    state,
    dispatch,
  };
};
