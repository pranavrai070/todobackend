import express from "express";
const router = express.Router();

import { login, signup,recover,changePassword} from "../controller/user-controller.js";
import auth from "../middleware/auth.js";

router.post("/login", login);
router.post("/signup", signup);
router.post("/recover",recover);
router.put("/change",auth,changePassword);


export default router;