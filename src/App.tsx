import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useService from "./useService";
import useServiceRunnerInfo from "./useServiceRunnerInfo";
import { TaskService } from "@etclabscore/jade-service-runner-client";

const ethjsUnit = require("ethjs-unit"); //tslint:disable-line

const App: React.FC = () => {
  const [installed, service] = useService("multi-geth", "1.9.0", "kotti");
  const [runningServices] = useServiceRunnerInfo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h5>Running Services:</h5>
        {runningServices && runningServices.map((s: TaskService) => {
          return (
            <div>{s.name}</div>
          )
        })}
        {!installed && <div>Service Installing</div>}
        {installed && <div>Service Installed</div>}
        {!service && <div>Service not running.</div>}
        {service && <div>Running Service {service.name}, env: {service.env} on localhost:{service.rpcPort}</div>}
      </header>
    </div>
  );
};

export default App;
