import mongoose from "mongoose";

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {
    type: String,
    enum: ["AUS", 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true,
    default: 'DEN'
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().setFullYear(new Date().getFullYear() + 1)
    }
  },
})

const Flight = mongoose.model("Flight", flightSchema)

export{
  Flight
}