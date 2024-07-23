const events = require('events');
const appEvents = new events.EventEmitter();

appEvents.on("ping", function (data) {
    console.log("Ping event received:", data);
});

appEvents.emit("ping", "Pinging data");