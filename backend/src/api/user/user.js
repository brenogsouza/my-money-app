const restful = require('node-restful')
const mongoose = restful.mongoose
const useSchema= new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min: 5,
    max: 10,
    required: true
  }
})
module.exports = restful.model('User', useSchema)