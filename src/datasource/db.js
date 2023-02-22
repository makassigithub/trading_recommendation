import moment from "moment";

const tenDaysFormNow = () => {
  const dates = [];
  for (let i = 0; i < 100; ++i) {
    dates.push(moment().subtract(i, "days"));
  }

  console.log(dates);
  return dates;
};

/**
 * This assumes that price is fluctuation between 0 and 100
 * And Social media rating  can be upvoted up to 1000
 */
const fillRecords = (dates) => {
  return dates.map((date) => ({
    day: date,
    price: Math.round(Math.random() * 100 * 1e2) / 1e2,
    socialMediaCount: Math.round(Math.random() * 1000),
    action: "-",
  }));
};

export const dates = tenDaysFormNow();

export const TIME_WINDOWS = [10, 25, 50, 75, 100, 200];

const stocksDB = {
  FACEBOOK: {
    name: "Facebook",
    records: fillRecords(dates),
  },
  APPLE: {
    name: "Apple",
    records: fillRecords(dates),
  },
  GOOGLE: {
    name: "Google",
    records: fillRecords(dates),
  },
  MICROSOFT: {
    name: "Microsoft",
    records: fillRecords(dates),
  },
};

console.log(stocksDB);

export default stocksDB;
