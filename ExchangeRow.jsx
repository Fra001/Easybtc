import React from 'react';

function ExchangeRow({ exchange, fiatEUR, conversionRate }) {
  const fiatUSD = fiatEUR * conversionRate;

  const priceUSD = exchange.priceUSD;
  const priceEUR = priceUSD * conversionRate;

  const btcFromUSD = (fiatUSD / priceUSD) * (1 - exchange.fee / 100);
  const btcFromEUR = (fiatEUR / priceEUR) * (1 - exchange.fee / 100);

  return (
    <tr>
      <td>
        <a href={exchange.url} target="_blank" rel="noopener noreferrer">
          <img src={`/logos/${exchange.logo}`} alt={exchange.name} className="logo" />
          {exchange.name}
        </a>
      </td>
      <td>${priceUSD.toFixed(2)}</td>
      <td>€{priceEUR.toFixed(2)}</td>
      <td>{exchange.fee.toFixed(3)}%</td>
      <td>{btcFromUSD.toFixed(8)}</td>
      <td>{btcFromEUR.toFixed(8)}</td>
    </tr>
  );
}

export default ExchangeRow;
