const mongoose = require('mongoose');
const { Schema } = mongoose;
// the mongoose object has a property called Schema, 
// and we want to extract that property and assign it to a variable named Schema.

const userSchema = new Schema({
    googleID: String
});

mongoose.model('users', userSchema);