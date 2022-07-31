import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
  .get("/users", UserController.getUsers)
  .get('/users/check', UserController.checkToken)
  .post("/users", UserController.registerUser)
  .post("/users/token", UserController.checkPass)
  .delete("/users/:id", UserController.removeUser);

export default router;
