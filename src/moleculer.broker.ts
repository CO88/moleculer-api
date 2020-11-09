import brokerConfig from "./moleculer.config";
import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker(brokerConfig);
broker.loadServices("./src/services/**", "*service.ts");

export = broker