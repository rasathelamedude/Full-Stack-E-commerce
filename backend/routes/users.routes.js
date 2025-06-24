import { Router } from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  createUser,
} from "../controllers/users.controller";
import { authorize } from "../middleware/auth.middleware";

const userRouter = Router();

userRouter.get("/", getAllUsers); // get all the users;
userRouter.get("/user", authorize, getUser); // get a specific user;

userRouter.post("/", authorize, createUser); // create a user;

userRouter.patch("/", authorize, updateUser); // update a user;

userRouter.delete("/", authorize, deleteUser); // delete a user;

export default userRouter;
