
import {  useEffect, useReducer } from 'react';
import Service from './service';
import { FORM_ACTIONS } from '../utils/actions';
import {analyseWithFactors, analyseWithPrice} from '../utils/utils';

export function sotckFormReducer(state, action) {
  switch (action.type) {
    case FORM_ACTIONS.LOAD_SYMBOLS:
      return { ...state, isLoading: true };
    case FORM_ACTIONS.LOAD_SYMBOLS_SUCCESS:
        return { ...state, isLoading: false,
            stocks: action.stocks,
            currentSymbol: Object.values(action.stocks)[0],
            timeWindows: action.timeWindows,
        };
    case FORM_ACTIONS.SET_SYMBOL:
      return { ...state, currentSymbol: state.stocks[action.value]};
    case FORM_ACTIONS.SET_TIME_WINDOW:
      return { ...state, timeWindow: action.value};
    case FORM_ACTIONS.SET_USE_SOCIAL_MEDIA:
      return { ...state, useSocilaMedia: !state.useSocilaMedia};
    default:
      break;
  }
}

export const useAppData = () => {

  const initialState = {
    isLoading: true,
    stocks: {},
    timeWindow:10
  }

  const [state, dispatch] = useReducer(sotckFormReducer, initialState);

  useEffect(() => {
    (async () => {
        const [stocks,timeWindows] = await Promise.all([Service.getStocks(),Service.getTimeWindows()]);
        const stockWithActions = await analyseWithPrice(stocks);
        //const stockWithActions = await analyseWithFactors(stocks,state.timeWindow,'price','socialMediaCount');

      try {
        dispatch({
          type: FORM_ACTIONS.LOAD_SYMBOLS_SUCCESS,
          stocks:stockWithActions,
          timeWindows
        });
      } catch (error) {}
    })();
  }, []);

  return {
    state,
    dispatch,
  };
};
