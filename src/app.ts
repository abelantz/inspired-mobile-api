
import express, { Request, Response } from "express";

import * as bookController from "./controllers/userController";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints
app.get("/users", bookController.allUsers);
app.get("/user/:id", bookController.getUser);
app.post("/user", bookController.addUser);
app.put("/user/:id", bookController.updateUser);
app.delete("/user/:id", bookController.deleteUser);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});