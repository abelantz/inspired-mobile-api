"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = 'mongodb://127.0.0.1:27017/local';
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully connected to MongoDb");
    }
});
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema
// ObjectId = Schema.ObjectId;
exports.UserSchema = new mongoose.Schema({
    // id:mongoose.ObjectId ,
    name: { type: String, required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    birthday: { type: Date, required: true }
});
var User = mongoose.model('User', exports.UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map