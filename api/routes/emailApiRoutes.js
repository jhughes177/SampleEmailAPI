'use strict';
var cors = require('cors')

module.exports = function(app) {

  app.use(cors())

  var email = require('../controllers/emailingController');

  // Send Email
  app.route('/sendemail')
    .post(email.create_an_email);

};