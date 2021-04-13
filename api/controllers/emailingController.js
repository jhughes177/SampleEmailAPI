var nodemailer = require('nodemailer');

//The below username and passwords authenticate via Gmails application password process which you will need to setup via link: https://support.google.com/accounts/answer/185833?hl=en
//There are also other ways to authenticat an email with nodemailer that can be found in their documentation as well link: https://nodemailer.com/
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS ? process.env.EMAIL_ADDRESS :'{replaceWithEmail}',
    pass: process.env.EMAIL_PW ? process.env.EMAIL_PW : '{replaceWithAppPassword}'
  }
});

exports.create_an_email = function(req, res) {
  var request = req.body;

  var mailOptions = {
    from: request.from,
    to: request.to,
    subject: request.subject,
    text: request.text,
  };

  transporter.sendMail(mailOptions, function(error, info) { 
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        res.json({ message: request });
        console.log('Email sent: ' + info.response);
      }
    });
  };