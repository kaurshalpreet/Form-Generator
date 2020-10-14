// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

app.post("/api/member", function(req, res) {
  db.Member.create({
    name: req.body.name,
  })
    .then(function() {
      res.json({});
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

app.post("/api/saveMember", function(req, res) {
  console.log(req.body)
  db.Member.create({
    name: req.body.name,
    m_initial: req.body.m_initial, 
    last_name: req.body.last_name,
    ss_number: req.body.ss_number,
    d_o_b: req.body.d_o_b,
    spouse_first_name: req.body.spouse_first_name,
    spouse_middle_initial: req.body.spouse_middle_initial,
    spouse_last_name: req.body.spouse_last_name,
    spouse_ss_number: req.body.spouse_ss_number,
    spouse_d_o_b: req.body.spouse_d_o_b,
    address_one: req.body.address_one,
    address_two: req.body.address_two,
    apartment_number: req.body.apartment_number,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    foreign_country_name: req.body.foreign_country_name,
    foreign_province_state: req.body.foreign_province_state,
    foreign_postal_code: req.body.foreign_postal_code,
    phone_number: req.body.phone_number,
    email: req.body.email
  })
    .then(function() {
      console.log("hi")
      res.json({});
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});

app.get("/api/member", function(req, res) {
  db.Member.findAll({})
    .then(function(data) {
      res.json({data});
    })
    .catch(function(err) {
      res.status(401).json(err);
    });
});


app.get("/api/member/:id", function(req, res) {
  console.log(req.params)
  db.Member.findOne({ where: {id: req.params.id} })
  .then(function(data) {
    res.json({data});
    console.log(data.dataValues)
  })
  .catch(function(err) {
    res.status(401).json(err);
  });
});



};
