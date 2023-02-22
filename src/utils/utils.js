async function analyseWithFactors(stocks, ...factors){

    // Could be implemented with with more factors like: Price,Media,....
    Object.keys(stocks).forEach(function(symbol){
        const stockSymbol = stocks[symbol];
        const records = stockSymbol.records;
        let previousAction = '_';
        
        for(let i = records.length-1; i > 0; i--){
          //when Symbol is been upvoted on social media
          if(records[i-1].socialMediaCount > records[i].socialMediaCount){
             //when price goes up we should Buy
             if(records[i-1].price > records[i].price){
                records[i].action = previousAction !== 'Buy' ? 'Buy' : previousAction ;
                previousAction = 'Buy';
                //when price goes down we should Sell
             }else if(records[i-1].price < records[i].price){
                records[i].action = previousAction === 'Buy' ? 'Sell': previousAction ;
                previousAction = 'Sell';
             }else{
                //Otherwise we should hold.
                records[i+1].action = '_';
             }

          //when Symbol is been downVoted on social media
          }else if(records[i-1].socialMediaCount < records[i].socialMediaCount){
             //when price goes up sell before it suddenly collapse
            if(records[i-1].price > records[i].price){
                records[i].action = previousAction === 'Buy' ? 'Sell' : '_';
                previousAction = 'Sell' ;
            }else if (records[i-1].price < records[i].price){
                records[i].action =  'Sell';
                previousAction='Sell'
            }else{
                records[i+1].action = '_';
            }
          }
        }
     })
     return stocks;
}



async function analyseWithPrice(stocks){
    Object.keys(stocks).forEach(function(symbol){
        const stockSymbol = stocks[symbol];
        const records = stockSymbol.records;
        records[records.length-1].action = 'Buy';
        let previousAction = 'Buy';
        for(let i = records.length-1; i > 0; i--){
           if(records[i-1].price > records[i].price){
                records[i-1].action = '_';
           }else if (records[i-1].price < records[i].price){
            records[i].action = 'Sell';
              //previousAction = 'Sell';
           }
        }
     })
     return stocks;
}

export { analyseWithFactors, analyseWithPrice } ;