import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0},
},{
  timestamps: true
})

const flightsSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
  tickets: [ticketSchema],
  destinations: [{type: Schema.Types.ObjectId, ref:'destination'}]
},{
  timestamps: true
})

const Flight = mongoose.model('Flight', flightsSchema)

export{
  Flight
}