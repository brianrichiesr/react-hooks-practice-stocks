import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myPortfolio, handleClick }) {
  const mappedStocks = myPortfolio.map(stock => {
    return <Stock key={`portfolio-${stock.id}`} stock={stock} handleClick={handleClick} />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {mappedStocks}
    </div>
  );
}

export default PortfolioContainer;
