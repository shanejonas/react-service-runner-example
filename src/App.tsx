import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ERPC from '@etclabscore/ethereum-json-rpc';
import BN from 'bn.js';

const erpc = new ERPC({
  transport: {
    host: "localhost",
    port: 8545,
    type: "http"
  }
});

const App: React.FC = () => {
  const [balance, setBalance] = useState();
  const [address, setAddress] = useState();
  const onGetBalance = async () => {
    const blockNumber = await erpc.eth_blockNumber();
    const balance = await erpc.eth_getBalance(address, blockNumber);
    setBalance(new BN(balance.substring(2), "hex").toString());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input onChange={(event) => setAddress(event.target.value)} defaultValue="0x"/>
        <button onClick={() => onGetBalance()}>get balance</button>
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
      </header>
    </div>
  );
}

export default App;
