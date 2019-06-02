import { useState, useEffect } from "react";
import ServiceRunner from "@etclabscore/jade-service-runner-client";

const serviceRunner = new ServiceRunner({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
  },
});

const useService = () => {
  const [runningServices, setRunningServices] = useState();


  useEffect(() => {
    serviceRunner.listRunningServices().then(setRunningServices);
    serviceRunner.listRunningServices().then(setRunningServices);
  });
  return [runningServices];
};

export default useService;
