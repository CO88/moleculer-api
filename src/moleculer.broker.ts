import brokerConfig from "./moleculer.config";
import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker(brokerConfig);

/**
 * 서비스를 로드합니다.
 * 1. SERVICES env var가 있으면 해당 서비스를 로드합니다.
 *    SERVICEDIR을 체크합니다.
 * 2. SERVICES env var가 없으면 모든 서비스를 로드합니다.
 */
const fileMask = "*.service.ts";


broker.loadServices("./src/services/**", fileMask);



export = broker