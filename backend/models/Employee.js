const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   lname: {
      type: String
   },
   phone: {
      type: Number
   }
}, {
   collection: 'reactive'
})

module.exports = mongoose.model('Employee', Employee)