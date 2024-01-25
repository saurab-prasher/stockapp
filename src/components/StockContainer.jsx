import React, { useState } from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default to 5 rows per page

  // Calculate the current stocks to display
  const indexOfLastStock = currentPage * rowsPerPage;
  const indexOfFirstStock = indexOfLastStock - rowsPerPage;
  const currentStocks = stocks.slice(indexOfFirstStock, indexOfLastStock);

  // Map over the array of current stocks to display
  const stockList = currentStocks.map((stock) => (
    <Stock key={stock.id} stock={stock} onClick={() => onAddStock(stock)} />
  ));

  // Change page handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(stocks.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Render the list of stocks, pagination controls, and rows per page selector
  return (
    <>
      <table className='stock-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
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

      <div>
        <label htmlFor='rows-per-page'>Rows per page:</label>
        <select
          name='rows per page'
          id='rows-per-page'
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </div>

      <div className='pagination'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &#171; Prev
        </button>

        {pageNumbers
          .slice(
            Math.max(0, currentPage - 2),
            Math.min(currentPage + 1, pageNumbers.length)
          )
          .map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
          }
          disabled={currentPage === pageNumbers.length}
        >
          Next &#187;
        </button>
      </div>
    </>
  );
}

export default StockContainer;
