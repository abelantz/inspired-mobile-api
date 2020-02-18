import {Request, Response} from 'express';
import User from './../user';


// - GET - /users # returns all users
export let allUsers = (req: Request, res:Response) =>{
    let users = User.find((err:any, users:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send(users);
        }
    })
}


// - GET - /user/1 # returns a user with id 1
export let getUser = (req: Request, res:Response) => {
    User.findById(req.params.id, (err:any, user:any) =>{
        if(err){
            res.send(err);
        }else{
            res.send(user);
        }
    })
}

// - POST - /user # inserts a new user into the table
export let addUser = (req: Request, res:Response) =>{
    let user = new User(req.body);

    user.save((err:any) => {
        if(err){
            res.send(err);
        }else{
            res.send(user);
        }
    })
}

// - DELETE - /user/1 # deletes a user with id of 1
export let deleteUser = (req:Request, res:Response) => {
    User.deleteOne({ _id: req.params.id}, (err:any) =>{
        if(err){
            res.send(err);
        }else {
            res.send("Succesfully Deleted User")
        }
    })
}

// - PUT - /user/1 # updates a user with id of 1


export let updateUser = (req: Request, res: Response) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err:any, user:any) =>{
        if(err){
            res.send(err);
        }else{
            res.send("Succesfully updated")
        }
    })
}

