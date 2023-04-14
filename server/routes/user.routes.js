import express from "express";

import {
    userresister,
    userlogin,
    userotpsend,
    useredit
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/resister").post(userresister);
router.route("/sendotp").post(userotpsend);
router.route("/login").post(userlogin);
router.route("/edit").post(useredit);

export default router;