import { useState, useEffect } from "react";
import ServiceRunner from "@etclabscore/jade-service-runner-client";

const serviceRunner = new ServiceRunner({
  transport: {
    host: "localhost",
    port: 8002,
    type: "http",
  },
});
// start geth on eth classic
const useService = (name: string, version: string, env: string) => {
  const [installed, setInstalled] = useState(false);
  const [service, setService] = useState();

  useEffect(() => {
    if (!installed) {
      serviceRunner.installService(name, version).then(setInstalled).catch((e) => {
        console.log('e', e); //tslint:disable-line
      });
    }
    if (!service && installed) {
      serviceRunner.startService(name, version, env).then(setService).catch((e) => {
        console.log('e', e); //tslint:disable-line
      });
    }
  });
  return [installed, service];
};

export default useService;
