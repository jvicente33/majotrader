'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestimonySchema = new Schema({
  active: { type: Boolean, required: true },
  name: { type: String, unique: false, required: true },
  content: { type: String, unique: false, required: true },
  email: { type: String, required: false },
  createdAt: { type: Date, required: false }
})

TestimonySchema.pre('save', function(next) {
  this.createdAt = new Date()
  next()
})

module.exports = mongoose.model('Testimonies', TestimonySchema)
