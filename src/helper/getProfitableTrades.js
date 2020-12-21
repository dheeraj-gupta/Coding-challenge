export function getProfitableTrades(data) {
  const getPossibleTrades = quotes => quotes.map((quote, index, quotes) => { // sort out possible trades
    let createTrade = (entry, exit) => ({ entry, exit, profit: exit.price - entry.price });
    let trades = [];
    for(let nextIndex=index+1; nextIndex<quotes.length ; nextIndex++) {
        trades.push(createTrade(quotes[index], quotes[nextIndex]));
    }
    return trades;
  });

  const findMostProfitableTrade = quotes => { // find most profitable trade for each Crypto
    let trades = getPossibleTrades(quotes).flatMap(x => x); 
    const mostProfitableTrade = trades.sort((a, b) => b.profit - a.profit)[0];
    return mostProfitableTrade;
  }

  const findProfitableTrades = currencies => { // get whole trade data
    return currencies.map(priceData => ({
        ...priceData, profitableTrade: findMostProfitableTrade(priceData['quotes'])
    }));
  }
  return findProfitableTrades(data);
}