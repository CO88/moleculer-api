import broker from "./moleculer.broker";

broker
    .start()
    .then(() => broker.repl());