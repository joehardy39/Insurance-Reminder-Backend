const db = require("../models");
const Customer = db.customer;

exports.details = (req, res) => {
  debugger
  const customer = new Customer({
    firstname: req.body.firstname,
    Lname: req.body.Lname,
    email: req.body.email,
    mother: req.body.mother,
    father: req.body.father,
    phone: req.body.phone,
    sphone: req.body.sphone,
    spouse: req.body.spouse,
    type: req.body.type,

  });
  customer.save((err, customer) => {
    if (err) {
      res.send('failed');
      return;
    }
  });

  //Dashboard//

  exports.findAll = (req, res) => {
    const title = req.query.email;
    var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};
  
    customer.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
  };



}


