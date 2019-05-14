"use strict";
const nodemailer = require("nodemailer");

async function sendMail(subject, text, name, email) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.gmail.com",
      port: 587,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "admin@tradersplanet.us",
        pass: "administrador"
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${name} 👻" <${email}>`,
      to: email,//"info@tradersplanet.us",
      subject,
      text
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
}

sendMail('Informacion', 'HOla como estas??', 'Jose', 'blackencio33@gmail.com')
