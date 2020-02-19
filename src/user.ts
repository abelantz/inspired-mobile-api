import * as mongodb from 'mongodb';
// import mongoose = require("mongoose");

var MongoClient = require('mongodb').MongoClient;

const uri: string = 'mongodb://localhost:27017/inspired_db';

MongoClient.connect(uri, (err:any) =>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Succesfully connected to MongoDb");
    }
})


var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
   
export const UserSchema = new mongoose.Schema({
    id: {type:ObjectId, required:true},
    name: {type:String, required:true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    birthday: {type:Date, required:true}
})

const User = mongoose.model('User', UserSchema);
export default User;
