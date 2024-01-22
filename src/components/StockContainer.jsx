import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  // Map over the array of stocks and create a Stock component for each stock
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onClick={() => onAddStock(stock)} />
  ));

  // Render the list of stocks and a heading
  return (
    <table className='stock-table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          {/* <th>Type</th> */}
          <th>Market Cap</th>
          <th>P/E Ratio</th>
          <th>Dividend Yield</th>
          <th>52-Week High</th>
          <th>52-Week Low</th>
          <th>Avg Volume</th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>{stockList}</tbody>
    </table>
  );
}

export default StockContainer;
