"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var uri = 'mongodb://localhost:27017/local';
mongoose.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Succesfully connected to MongoDb");
    }
});
exports.UserSchema = new mongoose.Schema({
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