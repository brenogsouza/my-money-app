const server = require("./config/server");
require("./database/database");
require("./config/routes")(server);
