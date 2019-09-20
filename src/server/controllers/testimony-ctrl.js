/**
 * @description Controlador de testimonios
 */

'use strict'

// Models
const Testimony = require('../models/testimony')

module.exports = {
  create,
  list
}

/**
 * @param {*} req
 * @param {*} res
 */
async function create(req, res, next) {
  try {
    let data = req.body

    let testimony = await Testimony.create(data)

    return res.status(200).send({
      success: 1,
      data: testimony,
      error: null,
      message: 'Testimonio creado con éxito, gracias.'
    })
  } catch (error) {
    console.log('Error al crear testimonios')
    console.log(error)
    return res.status(403).send({
      success: 1,
      data: null,
      error,
      message: 'Error al crear testimonio, intente de nuevo.'
    })
  }
}

/**
 * @param {*} req
 * @param {*} res
 */
async function list(req, res, next) {
  try {
    let testimony = await Testimony.find({})

    return res.status(200).send({
      success: 1,
      data: testimony,
      error: null,
      message: 'Testimonios obtenidos con éxito.'
    })
  } catch (error) {
    console.log('Error al consultar testimonios')
    console.log(error)
    return res.status(403).send({
      success: 1,
      data: null,
      error,
      message: 'Error al consultar testimonios, refresque la pagina.'
    })
  }
}
