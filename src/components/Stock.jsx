import React from "react";

function Stock({ stock, onClick, onCheckboxChange, selected }) {
  return (
    <tr onClick={onClick} className="stock-row">
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onCheckboxChange(stock)}
        />
      </td>
      <td>{stock.name}</td>
      <td>{stock.ticker}</td>
      <td>{stock.price}</td>
      {/* <td>{stock.type}</td> */}
      <td>{stock.marketCap}</td>
      <td>{stock.PE_Ratio}</td>
      <td>{stock.dividendYield}</td>
      <td>{stock["52WeekHigh"]}</td>
      <td>{stock["52WeekLow"]}</td>
      <td>{stock.averageVolume}</td>
      <td>{stock.sector}</td>
    </tr>
  );
}

export default Stock;
