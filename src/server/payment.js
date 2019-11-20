/**
 * @descripcion Controlador para los pagos
 */

'use strict'

require('dotenv').config()

const stripe = require('stripe')(process.env.KEY_SECRET_STRIPE)

async function createSession(req, res) {
  try {
    let data = req.body
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          name: data.name,
          description: data.title,
          images: ['https://tradersplanet.us/img/logo.png'], //urlchange
          amount: data.price,
          currency: 'usd',
          quantity: 1
        }
      ],
      success_url: 'https://tradersplanet.us/#/pay/success', //urlchange
      cancel_url: 'https://tradersplanet.us'
    })
    return res.json({
      success: 1,
      session
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: 0,
      error
    })
  }
}

async function createCharge(req, res) {
  try {
    let data = req.body

    //Create token
    let token = await stripe.tokens.create({
      card: {
        number: data.numbercard,
        exp_month: parseInt(data.monthcard),
        exp_year: data.yearcard,
        cvc: data.cvccard,
        name: data.name
      }
    })

    let charge = await stripe.charges.create({
      amount: data.amount * 100,
      currency: 'usd',
      source: token.id,
      receipt_email: data.email,
      description: data.description
    })

    return res.json({
      success: 1
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: 0,
      error
    })
  }
}

module.exports = { createSession, createCharge }
