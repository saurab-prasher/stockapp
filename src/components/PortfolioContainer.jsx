import React from "react";
import Stock from "./Stock";
function PortfolioContainer({ stocks, onRemoveStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>

      <table className="stock-table">
        <thead>
          <tr>
            <th>Select</th>
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
        <tbody>
          {" "}
          {stocks.map((stock) => (
            <Stock
              key={stock.id}
              stock={stock}
              onClick={() => onRemoveStock(stock)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioContainer;
