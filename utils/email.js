const nodemailer = require('nodemailer');

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    //  service: 'Gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'Görkem Temuroğlu <hello@gorkem.io>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //  html:
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
