import moment from "moment";

const generateDays = () => {
  const dates = [];
  for (let i = 0; i < 100; ++i) {
    dates.push(moment().subtract(i, "days"));
  }
  return dates;
};

/**
 * This assumes that price is fluctuation between 0 and 100
 * And Social media rating  can be upvoted up to 1000
 */
const fillRecords = (fn) => {
  return fn().map((date) => ({
    day: date,
    price: Math.round(Math.random() * 100 * 1e2) / 1e2,
    socialMediaCount: Math.round(Math.random() * 1000),
    action: "-",
  }));
};

export const TIME_WINDOWS = [10, 25, 50, 75, 100, 200];

export const symbols = ["Facebook", "Apple", "Google", "Microsoft"];
const stocksDB = symbols.reduce((acc, curr) => {
  acc[curr.toUpperCase()] = {
    name: curr,
    records: fillRecords(generateDays),
  };
  return acc;
}, {});

console.log(stocksDB);

export default stocksDB;
