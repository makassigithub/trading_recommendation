/* eslint-disable no-unused-vars */

import { DECISION } from "./actions";
async function analyseWithFactors(stocks, ...factors) {
  // Could be implemented with with more factors like: Price,Media,....
  Object.keys(stocks).forEach(function (symbol) {
    const stockSymbol = stocks[symbol];
    const records = stockSymbol.records;
    let previousAction = "_";

    for (let i = records.length - 1; i > 0; i--) {
      //when Symbol is been upvoted on social media
      if (records[i - 1].socialMediaCount > records[i].socialMediaCount) {
        //when price goes up we should Buy
        if (records[i - 1].price > records[i].price) {
          records[i].action =
            previousAction !== DECISION.BUY ? DECISION.BUY : previousAction;
          previousAction = DECISION.BUY;
          //when price goes down we should Sell
        } else if (records[i - 1].price < records[i].price) {
          records[i].action =
            previousAction === DECISION.BUY ? DECISION.SELL : previousAction;
          previousAction = DECISION.SELL;
        } else {
          //Otherwise we should hold.
          records[i + 1].action = DECISION.HOLD;
        }

        //when Symbol is been downVoted on social media
      } else if (
        records[i - 1].socialMediaCount < records[i].socialMediaCount
      ) {
        //when price goes up sell before it suddenly collapse
        if (records[i - 1].price > records[i].price) {
          records[i].action =
            previousAction === DECISION.BUY ? DECISION.SELL : DECISION.HOLD;
          previousAction = DECISION.SELL;
        } else if (records[i - 1].price < records[i].price) {
          records[i].action = DECISION.SELL;
          previousAction = DECISION.SELL;
        } else {
          records[i + 1].action = DECISION.HOLD;
        }
      }
    }
  });
  return stocks;
}

async function analyseWithPrice(stocks) {}

export { analyseWithFactors, analyseWithPrice };
