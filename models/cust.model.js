const mongoose = require("mongoose");

const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        firstname: String,
        Lname: String,
        email: String,
        phone: String,
        father: String,
        mother: String,
        type: String,
        stat: String,
        padd: String,
        sadd: String,
        sphone: String,
        spouse: String,
        kids: String,
        ifsc: String,
        comp: String,
        agent: String,
    })
);
module.exports = Customer;