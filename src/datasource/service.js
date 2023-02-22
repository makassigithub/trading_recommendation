import stocksDB, { TIME_WINDOWS } from "./db";
class NoteService {
  getStocks = async () => {
    return stocksDB;
  };

  getTimeWindows = async () => {
    return TIME_WINDOWS;
  };
}

const Service = new NoteService();

export default Service;
