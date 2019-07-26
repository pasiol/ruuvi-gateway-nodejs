const mongoose = require('mongoose')

const ruuviSchema = new mongoose.Schema({
  deviceId: String,
  eventId: String,
  tag: [
    {
      accelX: Number,
      accelY: Number,
      accelZ: Number,
      dataformat: Number,
      defaultBackground: Number,
      favorite: Boolean,
      gatewayUrl: String,
      humidity: Number,
      id: String,
      name: String,
      pressure: Number,
      rawDataBlob: Array,
      rssi: Number,
      temperature: Number,
      txPower: Number,
      updateAt: String,
      voltage: Number
    }
  ],
  batterylevel: Number,
  location: {
    accuracy: Number,
    latitude: Number,
    longitude: Number
  },
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
