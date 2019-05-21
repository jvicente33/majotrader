'use strict';
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
/*const OAuth2 = google.auth.OAuth2;
const nodemailerSendgrid = require('nodemailer-sendgrid');
const key = require('./key-tradersplanet.json')*/

/**
 * blog
 * SG.-1KpRCh8QDGXShWanbncHQ.7sVsMRE46Xh-c6WbC-omCblV2SDRblchcPLHKHaswJg
 * 
 * tradersplanet-blog
 * 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
 */

/*
idClient: 626639286414-4f005ipl6luvq5ak3bvmpeks3j8n94do.apps.googleusercontent.com
keySecret: AJucUDFZ3swcs8IjxdiWKRpZ
refreshToken: 09I3ZkN2kRjezy8OhMRrwQwFF5nMuk7qTrAtHHtLtkA
token: ya29.GlsQBycULfXWbcGSF5wPlUquhuuwu8KsVtRThPtMOdooXtr56VMnq9bfGZt4b3LDBsP4TlSiO2UY4Zi2Y_wQNQ8GSr1CKqT_JCRXrIHKmAGIPVSzCUhhPCwZqZzI
*/

async function sendMail(subject, text, name, email) {
  try {
    // create reusable transporter object using the default SMTP transport
    /*const oauth2Client = new OAuth2(
      '481274889427-852dmbk1rbr32rktim7kcv65r2nri00t.apps.googleusercontent.com',
      'lmV9O0iBV0VsCE4v_BLUUJdo',
      'https://developers.google.com/oauthplayground'
    );

    oauth2Client.setCredentials({
      refresh_token:
        '1/IwQviU9lUMaKxsDhDkZbSZezw1xciUClIiJt-RMjYsT8UazsjOCXqk-bW0ezxoqa'
    });
    const tokens = await oauth2Client.refreshAccessToken();
    const accessToken = tokens.credentials.access_token;*/

    /*const transport = nodemailer.createTransport(
      nodemailerSendgrid({
          apiKey: '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'
      })
  );*/

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      //service: 'gmail',
      port: 25,
      secure: false, 
      auth: {
        //type: 'OAuth2',
        user: 'jvectronic@gmail.com',
        pass: '49166752'
        /*clientId: '626639286414-4f005ipl6luvq5ak3bvmpeks3j8n94do.apps.googleusercontent.com',
        clientSecret: 'AJucUDFZ3swcs8IjxdiWKRpZ',
        refreshToken: '1/09I3ZkN2kRjezy8OhMRrwQwFF5nMuk7qTrAtHHtLtkA',
        accessToken: 'ya29.GlsQBycULfXWbcGSF5wPlUquhuuwu8KsVtRThPtMOdooXtr56VMnq9bfGZt4b3LDBsP4TlSiO2UY4Zi2Y_wQNQ8GSr1CKqT_JCRXrIHKmAGIPVSzCUhhPCwZqZzI',
        expires: 3600*/
      },
      tls: {
        rejectUnauthorized: false
      }
      /*host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'admin@tradersplanet.us',
        clientId:
          '481274889427-852dmbk1rbr32rktim7kcv65r2nri00t.apps.googleusercontent.com',
        clientSecret: 'lmV9O0iBV0VsCE4v_BLUUJdo',
        refreshToken:
          '1/IwQviU9lUMaKxsDhDkZbSZezw1xciUClIiJt-RMjYsT8UazsjOCXqk-bW0ezxoqa',
        accessToken:
          'ya29.GlsJB2N8VlCb4EdJKUSuFLArAJobUi3bliOonCalSmW00ZjslEhrkyXL6XFNghXEglRrg_8U8mAXrDkKQYpa2v09SehbujebKd5nIrnxQiTNgDGqfHM2JYQxbrV0',
        expires: 1484314697598
      }*/

      /*service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'admin@tradersplanet.us',
        clientId:
          '481274889427-852dmbk1rbr32rktim7kcv65r2nri00t.apps.googleusercontent.com',
        clientSecret: 'lmV9O0iBV0VsCE4v_BLUUJdo',
        refreshToken:
          '1/IwQviU9lUMaKxsDhDkZbSZezw1xciUClIiJt-RMjYsT8UazsjOCXqk-bW0ezxoqa',
        accessToken: accessToken
      }*/
    });

    //await transporter.verify()

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: email, //"info@tradersplanet.us",
      subject,
      text
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error.toString());
  }
}

sendMail('Informacion', 'HOla como estas??', 'Jose', 'blackencio33@gmail.com');
