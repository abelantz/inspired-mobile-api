
import mongoose = require("mongoose");


const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err:any) =>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Succesfully connected to MongoDb");
    }
})


// var mongoose = require('mongoose');
// var Schema = mongoose.Schema
    // ObjectId = Schema.ObjectId;
   
export const UserSchema = new mongoose.Schema({
    // id:mongoose.ObjectId ,
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
