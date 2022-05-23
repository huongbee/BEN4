const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = (to, subject, content) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'huonghuong08.php@gmail.com',
      pass: '181290'
    }
  }));

  const mailOptions = {
    from: 'huonghuong08.php@gmail.com',
    to,
    subject,
    html: content
    // text: content
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}