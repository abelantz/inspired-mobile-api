"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./../user"));
// - GET - /users # returns all users
exports.allUsers = function (req, res) {
    var users = user_1.default.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
// - GET - /user/1 # returns a user with id 1
exports.getUser = function (req, res) {
    user_1.default.findById(req.params.id, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
// - POST - /user # inserts a new user into the table
exports.addUser = function (req, res) {
    var user = new user_1.default(req.body);
    user.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
// - DELETE - /user/1 # deletes a user with id of 1
exports.deleteUser = function (req, res) {
    user_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully Deleted User");
        }
    });
};
// - PUT - /user/1 # updates a user with id of 1
exports.updateUser = function (req, res) {
    user_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated");
        }
    });
};
//# sourceMappingURL=userController.js.map