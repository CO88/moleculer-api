"use strict";

import { Service, ServiceBroker, Context } from "moleculer";

export default class HelperService extends Service {
    public constructor(public broker: ServiceBroker) {
        super(broker);
        this.parseServiceSchema({
            name: "helper",

            events: {
                "hello.called"() {
                    this.logger.info('test');
                }
            }
        });
    }
}

