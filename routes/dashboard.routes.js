module.exports = app => {

    const customer = require("../controllers/cust.controllers");
    var router = require("express").Router();

    router.get("/api/cust/dash",customer.findAll)
}