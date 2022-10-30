const express = require("express");

const routes = express();
const signIn = require("./controllers/signIn");
const signUp = require("./controllers/signUp");

const isUserLogaded = require("./middlewares/isUserLogaded");

const users = require("./controllers/users");
const clubs = require("./controllers/clubs");
const subscriptions = require("./controllers/subscriptions");
const invoices = require("./controllers/invoices");

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

routes.post("/clubs/:id/subscription", subscriptions.registerSubscription);
routes.get("/invoices", invoices.listInvoices);
routes.patch("/invoices/:id", invoices.payInvoice);

module.exports = routes;
