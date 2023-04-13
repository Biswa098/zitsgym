import express from "express";

import {
    createUser,
    userresister,
    userlogin,
    userotpsend,
    getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/resister").post(userresister);
router.route("/sendotp").post(userotpsend);
router.route("/login").post(userlogin);


router.route("/login").post(createUser);
router.route("/info/:id").get(getUserInfoByID);

export default router;