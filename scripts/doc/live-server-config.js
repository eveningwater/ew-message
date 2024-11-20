
const liveServer = require("live-server");

const params = {
    port: 8284,
    host: process.env.IP || "0.0.0.0",
};

liveServer.start(params);
