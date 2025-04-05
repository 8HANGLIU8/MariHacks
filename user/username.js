const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    name: String,
    email: String
})

module.exports = mangoose.model('User', userSchema);