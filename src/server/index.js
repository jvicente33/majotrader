/**
 * @descripcion Rutas del server interno
 */

'use strict'

// Modules
const express = require('express')
const router = express.Router()
const path = require('path')
const fsp = require('promise-fs')

const nodemailer = require('./nodemailer')
const payment = require('./payment')

//Controladores
const testimonyCtrl = require('./controllers/testimony-ctrl')

//Email
router.post('/send/contact', async (req, res) => {
  try {
    let { email, nombre, asunto, mensaje } = req.body
    await nodemailer.sendMail(asunto, mensaje, nombre, email)
    return res.json({
      success: 1,
      message: 'Correo enviado.'
    })
  } catch (error) {
    console.log(error)
    return res.json({
      success: 0,
      error,
      message: 'No se pudo enviar el correo, por favor intente de nuevo.'
    })
  }
})

router.get('/view/logo', async (req, res) => {
  try {
    let file = path.join(__dirname, `/templates/logo.png`)
    let data = await fsp.readFile(file)
    res.contentType('image/png')
    res.send(data)
  } catch (error) {
    res.status(404).json({
      message: 'Error al consultar imagen',
      error: error
    })
  }
})

router.get('/view/pdf/:name', async (req, res) => {
  try {
    let file = path.join(__dirname, `../../public/pdf/${req.params.name}`)
    let data = await fsp.readFile(file)
    res.contentType('application/pdf')
    res.send(data)
  } catch (error) {
    res.status(404).json({
      message: 'Error al consultar pdf',
      error: error
    })
  }
})

router.get('/view/img/:name', async (req, res) => {
  try {
    let file = path.join(__dirname, `../../public/img/${req.params.name}`)
    let data = await fsp.readFile(file)
    res.contentType('image/png')
    res.send(data)
  } catch (error) {
    res.status(404).json({
      message: 'Error al consultar pdf',
      error: error
    })
  }
})

//Payment
router.post('/create/session', payment.createSession)

//Testimonios
router.post('/testimony/create', testimonyCtrl.create)
router.get('/testimony/list', testimonyCtrl.list)

module.exports = router
