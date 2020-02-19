
import mongoose = require("mongoose");


const uri: string = 'mongodb://localhost:27017/local';

mongoose.connect(uri, (err:any) =>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Succesfully connected to MongoDb");
    }
})

   
export const UserSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    birthday: {type:String, required:true},
    date_added: { type: Date, default: Date.now }
})

const User = mongoose.model('User', UserSchema);
export default User;
