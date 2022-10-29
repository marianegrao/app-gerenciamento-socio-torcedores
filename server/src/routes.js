const express = require("express");

const routes = express();
const signIn = require("./controllers/signIn");
const signUp = require("./controllers/signUp");

const isUserLogaded = require("./middleware/isUserLogaded");

const users = require("./controllers/users");
const clubs = require("./controllers/clubs");
const subscriptions = require("./controllers/subscriptions");

routes.post("/signin", signIn);
routes.post("/signup", signUp);

routes.get("/clubs", clubs.listClubs);
routes.post("/clubs", clubs.registerClub);
routes.get("/clubs/:id", clubs.detailClub);
routes.patch("/clubs/:id", clubs.updateClub);
routes.delete("/clubs/:id", clubs.deleteClub);

routes.use(isUserLogaded);
routes.get("/users", users.detailUser);
routes.patch("/users", users.updateUser);
routes.delete("/users", users.deleteUser);

module.exports = routes;
