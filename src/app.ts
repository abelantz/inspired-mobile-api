
import express, { Request, Response } from "express";
import * as bodyParser from 'body-parser';
import * as bookController from "./controllers/userController";

const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => res.send("hi"))

app.use(bodyParser.json());

// API Endpoints
app.get("/users", bookController.allUsers);
app.get("/user/:id", bookController.getUser);
app.post("/user", bookController.addUser);
app.put("/user/:id", bookController.updateUser);
app.delete("/user/:id", bookController.deleteUser);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});