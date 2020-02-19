"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var bookController = __importStar(require("./controllers/userController"));
// Our Express APP config
var app = express_1.default();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get("/", function (req, res) { return res.send("hi"); });
app.use(bodyParser.json());
// API Endpoints
app.get("/users", bookController.allUsers);
app.get("/user/:id", bookController.getUser);
app.post("/user", bookController.addUser);
app.put("/user/:id", bookController.updateUser);
app.delete("/user/:id", bookController.deleteUser);
var server = app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
//# sourceMappingURL=app.js.map