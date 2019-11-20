'use strict'
const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')
const ejs = require('ejs')
const path = require('path')
require('dotenv').config()

async function sendMail(subject, text, name, email) {
  try {
    const transport = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.KEY_SENDGRID
      })
    )

    let template = await ejs.renderFile(
      path.join(__dirname, '/templates/' + 'info.ejs'),
      {
        nombre: name,
        asunto: subject,
        email,
        mensaje: text
      }
    )

    let attachments = [
      {
        filename: 'logo.png',
        path: path.join(__dirname, '/templates/logo.png'),
        cid: 'logo@cid'
      }
    ]

    let info = await transport.sendMail({
      from: '"Admin 👻" <admin@tradersplanet.us>',
      // from: 'jvectronic@gmail.com',
      to: 'info@tradersplanet.us',
      subject,
      html: template,
      attachments
    })

    await transport.close()

    console.log('Correo enviado con exito.')
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendMail
}
