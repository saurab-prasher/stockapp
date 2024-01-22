import { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
function MainContainer() {
  // Define state variables using the useState hook
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Technology");
  const [searchTerm, setSearchTerm] = useState("");

  const [activeBtnTab, setActiveBtnTab] = useState("stocks");

  const handleTabSwitch = (tabName) => {
    if (activeBtnTab !== tabName) {
      setActiveBtnTab(tabName);
    }
  };
  // Fetch the list of stocks from the API using the useEffect hook
  useEffect(() => {
    async function fetchStockList() {
      const res = await fetch("/stocks.json");
      const data = await res.json();
      setStocks(data);
    }

    fetchStockList();
  }, []);

  // Handler function for when the user adds a stock to their portfolio
  function handleAddStock(stockToAdd) {
    const stockInPortfolio = portfolio.find(
      (stock) => stock.id === stockToAdd.id
    );
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockToAdd]);
    }
  }

  // Handler function for when the user removes a stock from their portfolio
  function handleRemoveStock(stockToRemove) {
    setPortfolio((portfolio) =>
      portfolio.filter((stock) => stock.id !== stockToRemove.id)
    );
  }

  const handleSearchChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };
  const filterAndSearchStocks = () => {
    return [...stocks]
      .sort((stock1, stock2) => {
        if (sortBy === "Alphabetically") {
          return stock1.name.localeCompare(stock2.name);
        } else {
          return stock1.price - stock2.price;
        }
      })
      .filter(
        (stock) =>
          stock.type === filterBy &&
          stock.name.toLowerCase().includes(searchTerm)
      );
  };

  const filteredStocks = filterAndSearchStocks();

  return (
    <div>
      {/* Render the search bar component */}
      <SearchBar
        sortBy={sortBy}
        onChangeSort={setSortBy}
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
        searchTerm={searchTerm}
        onChangeSearch={handleSearchChange}
      />
      {/* Render the stock and portfolio containers */}

      <div className='btn-container-slider'>
        <button
          className={activeBtnTab === "stocks" ? "active-btn" : ""}
          aria-label='Show stocks'
          onClick={() => handleTabSwitch("stocks")}
        >
          stocks
        </button>
        <button
          className={activeBtnTab === "portfolio" ? "active-btn" : ""}
          aria-label='Show portfolio'
          onClick={() => handleTabSwitch("portfolio")}
        >
          my portfolio
        </button>
      </div>
      <div>
        {activeBtnTab === "stocks" ? (
          <StockContainer stocks={filteredStocks} onAddStock={handleAddStock} />
        ) : (
          <PortfolioContainer
            stocks={portfolio}
            onRemoveStock={handleRemoveStock}
          />
        )}
      </div>
    </div>
  );
}

export default MainContainer;
