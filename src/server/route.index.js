/**
 * @descripcion Rutas del server interno
 */

"use strict";

// Modules
const express = require("express");
const router = express.Router();

const nodemailer = require('./nodemailer')

//Email
router.post('/send/contact', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        return res.json({
            success: 0,
            error,
            message: 'No se pudo enviar el correo'
        })
    }
})