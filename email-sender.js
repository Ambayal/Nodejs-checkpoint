const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your-email-service', // e.g., 'Gmail'
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
