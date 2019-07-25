const mongoose = require('mongoose')

const ruuviSchema = new mongoose.Schema({
  deviceId: String,
  eventId: String,
  tags: [
    {
      accelX: Number,
      accelY: Number,
      accelZ: Number,
      defaultBackground: Number,
      favorite: Boolean,
      humidity: Number,
      id: String,
      name: String,
      pressure: Number,
      rawDataBlob: Buffer,
      rssi: Number,
      temperature: Number,
      updateAt: String,
      voltage: Number
    }
  ],
  time: String
})

ruuviSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Ruuvi', ruuviSchema)
