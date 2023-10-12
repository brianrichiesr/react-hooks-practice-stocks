import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const Url = "http://localhost:3001/stocks";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [unmodifiedStocks, setUnmodifiedStocks] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    fetch(Url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw (response.statusText);
      }
    })
    .then(data => {
      setStocks(data);
      setUnmodifiedStocks(data);
    })
    .catch(err => alert(err))
  }, [])
  const addToPortfolio = (stockObj) => {
    if (!myPortfolio.includes(stockObj)) {
      setMyPortfolio(currentValue => [...currentValue, stockObj])
    }
  }

  const removeFromPortfolio = (stockObj) => {
    const newList = [...myPortfolio].filter(stock => {
      return stock.id !== stockObj.id
    })
    setMyPortfolio(newList);
  }


  
  const toggleSort = (sortStr) => {
    if (sortStr === "Alphabetically") {
      const newList = [...stocks].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setStocks(newList)
    } else if (sortStr === "Price") {
      const newList = [...stocks].sort((a, b) => {
        return a.price - b.price
      })
      setStocks(newList)
    } else {
      setStocks(unmodifiedStocks);
    }
    setSortBy(sortStr)
  }

  const filterHelper = (filterStr) => {
    if (filterStr) {
      const newList = [...unmodifiedStocks].filter(stock => {
        if (stock.type === filterStr) {
          return stock
        }
        return null;
      })
      setStocks(newList)
    } else {
      setStocks([...unmodifiedStocks])
    }
    setSortBy("")
  }

  const handleFilter = (e) => {
    
    toggleSort(e.target.value)
    filterHelper(e.target.value)
  }



  return (
    <div>
      <SearchBar sortBy={sortBy} toggleSort={toggleSort} handleFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleClick={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer myPortfolio={myPortfolio} handleClick={removeFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
