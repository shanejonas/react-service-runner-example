import React from "react";
import "./App.css";
import { TaskService } from "@etclabscore/jade-service-runner-client";
import { useServiceRunner } from "@etclabscore/jade-service-runner-react-hooks";

const ethjsUnit = require("ethjs-unit"); //tslint:disable-line

interface IServiceProps {
  item: TaskService;
  title?: string;
  onClick?: () => any;
}
const Service: React.FC<IServiceProps> = (props) => {
  return (
    <div>
      <span>
        {props.item.name}
      </span>
      |
      <span>
        {props.item.env}
      </span>
      |
      <span style={{ backgroundColor: "#aeaeae" }} onClick={props.onClick}>
        {props.title}
      </span>
    </div>
  );
};

const App: React.FC = () => {
  const [supportedServices, runningServices, installedServices, installService, startService] = useServiceRunner();
  return (
    <>
      <div>
        <h5>Supported Services:</h5>
        {supportedServices && supportedServices.map((s: any) => {
          return (
            <Service item={s} title={"INSTALL"} onClick={() => installService(s.name, s.version)}></Service>
          );
        })}
        <h5>Installed Services:</h5>
        {installedServices && installedServices.map((s: any) => {
          return (
            <Service item={s} title={"RUN"} onClick={() => startService(s.name, s.version, "kotti")}></Service>
          );
        })}
        <h5>Running Services:</h5>
        {runningServices && runningServices.map((s: TaskService) => {
          return (
            <Service item={s}></Service>
          );
        })}
      </div>
    </>
  );
};

export default App;
