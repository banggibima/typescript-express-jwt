import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import userhandler from "../handlers/user";

const users = Router();

users.use(authenticate);

users.get("/", userhandler.getUsersHandler);
users.get("/:id", userhandler.getUserByIdHandler);
users.post("/", userhandler.createUserHandler);
users.put("/:id", userhandler.updateUserHandler);
users.delete("/:id", userhandler.destroyUserHandler);

export default users;
