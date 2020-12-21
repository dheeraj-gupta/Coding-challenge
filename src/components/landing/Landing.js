import React from 'react';
import { connect } from 'react-redux';
import { getProfitableTrades } from '../../helper/getProfitableTrades';
import { formatDate } from '../../helper/dateFormat';
const Landing = ({currencies}) => {

const displayCryptoCurrencies = (data) => {
    const cryptoData = getProfitableTrades(data);
    return cryptoData.map(crypto => (
      <ul key={crypto.currency} className="flex-container">
        <li className="crypto-list">
        <h2 className="crypto-date">{formatDate(crypto.date)}</h2>
        <h2 className="crypto-label">{crypto.currency}</h2>
          <div className="crypto-details"> 
          <table>
            <tbody>
              <tr>
                <th>Buy</th>
                <th>Sell</th>
              </tr>
              <tr>
                <td>{crypto.profitableTrade.entry.time}</td>
                <td>{crypto.profitableTrade.exit.time}</td>
              </tr>
              <tr>
                <td>${crypto.profitableTrade.entry.price}</td>
                <td>${crypto.profitableTrade.exit.price}</td>
              </tr>
              <tr>
              <td colSpan="2">Profit: ${crypto.profitableTrade.profit.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </li>
      </ul>
  ));
}
  return(
    <div className="container">
      <div className="currencies-list">
      {currencies.length > 0 && displayCryptoCurrencies(currencies[0])}   
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  currencies: state.currencies
})

export default connect(mapStateToProps)(Landing);