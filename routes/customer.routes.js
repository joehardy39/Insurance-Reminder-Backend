
const { CUST, details } = require("../controllers/cust.controllers");
const { customer } = require("../models");


module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post("/api/cust", 
        details
      );

      app.get('/api/cust/dash', async (req, res) => {
        try {
            const data = await customer.find({}); // Retrieve all data
            res.json(data);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    
    
    
      

  
}