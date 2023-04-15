import express from "express";

import {
    userresister,
    userlogin,
    userotpsend,
    useredit,
    userotpsendreset,
    resetpassword
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/resister").post(userresister);
router.route("/sendotp").post(userotpsend);
router.route("/sendotpreset").post(userotpsendreset);
router.route("/login").post(userlogin);
router.route("/edit").post(useredit);
router.route("/resetpass").post(resetpassword);

export default router;