'use strict'
const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const ejs = require('ejs')
const path = require('path')
require('dotenv').config()

async function sendMail(subject, text, name, email) {
  try {
    // const transport = nodemailer.createTransport(
    //   nodemailerSendgrid({
    //     apiKey: process.env.KEY_SENDGRID
    //   })
    // );

    /**
     * TODO
     * En espera por sendpulse a ver que tal
     */

    const oauth2Client = new OAuth2(
      '22343052788-3u1150bthkmlesua5dci8jit7cmtmfrs.apps.googleusercontent.com',
      'u0VXs2d-ThvdWoe6rae3onsP',
      'https://developers.google.com/oauthplayground'
    )

    oauth2Client.setCredentials({
      refresh_token:
        '1//04JXmMO50O6JACgYIARAAGAQSNwF-L9Ir5CD6Me0o6e0XJLASHRjqGARSrMV4Ts_151DX70ZEkm1r1cvD0tozmedK7kSQopT-MbM'
    })
    const accessToken = oauth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'jvectronic@gmail.com',
        clientId:
          '22343052788-3u1150bthkmlesua5dci8jit7cmtmfrs.apps.googleusercontent.com',
        clientSecret: 'u0VXs2d-ThvdWoe6rae3onsP',
        refreshToken:
          '1//04JXmMO50O6JACgYIARAAGAQSNwF-L9Ir5CD6Me0o6e0XJLASHRjqGARSrMV4Ts_151DX70ZEkm1r1cvD0tozmedK7kSQopT-MbM',
        accessToken: accessToken
      }
    })

    // let transport = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: 'jvectronic@gmail.com',
    //     pass: '49166752'
    //   }
    // })

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
      // from: '"Admin 👻" <jvectronic@gmail.com>',
      from: 'jvectronic@gmail.com',
      to: 'blackencio33@gmail.com',
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
