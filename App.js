import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Easy BTC Store</h1>
      <p>Calcola BTC ricevuto da più exchange.</p>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';

function App() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/exchange-rate')
      .then(res => res.json())
      .then(data => {
        setRate(data.rate);
      })
      .catch(err => {
        console.error("Errore nella chiamata API:", err);
      });
  }, []);

  return (
    <div>
      <h1>Easy BTC Store</h1>
      {rate ? (
        <p>💱 Tasso EUR → USD: <strong>{rate}</strong></p>
      ) : (
        <p>⏳ Caricamento tasso di cambio...</p>
      )}
    </div>
  );
}

export default App;
