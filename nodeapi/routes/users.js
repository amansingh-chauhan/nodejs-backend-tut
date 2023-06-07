import express from "express";

//import { User } from "../models/users.js";
import {
  deleteUser,
  getAllUsers,
  getUserDetails,
  register,
  specialFunc,
  updateUser,
} from "../controllers/users.js";

//creating router
const router = express.Router();

router.get("/all", getAllUsers);

//static api     ****note*** must be decalred before dynamic api
router.get("/userid/special", specialFunc);

//dynamic id passing  ***note*** dynamic apis should be created at very last
/*router.get("/userid/:id",getUserDetails);

  router.put("/userid/:id",updateUser);

  router.delete("/userid/:id",deleteUser);*/

router.route("userid/:id").get(getAllUsers).put(updateUser).delete(deleteUser);

//creating or adding users to database
router.post("/new", register);

export default router;
