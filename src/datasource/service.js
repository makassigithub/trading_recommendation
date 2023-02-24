import stocksDB, { TIME_WINDOWS, SYMBOL_NAMES } from "./db";
class NoteService {
  getStocks = async () => {
    return stocksDB;
  };

  getTimeWindows = async () => {
    return TIME_WINDOWS;
  };

  getSymbolNames = async () => {
    return SYMBOL_NAMES;
  };
}

const Service = new NoteService();

export default Service;
