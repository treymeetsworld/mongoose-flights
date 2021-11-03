import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: String,
  price: Number,
},{
  timestamps: true
})

const flightsSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
  tickets: [ticketSchema],
},{
  timestamps: true
})

const Flight = mongoose.model('Flight', flightsSchema)

export{
  Flight
}