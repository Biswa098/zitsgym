import express from "express";

import {
    createUser,
    editUserInfoByID,
    getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/edit/:id").post(editUserInfoByID);
router.route("/login").post(createUser);
router.route("/info/:id").get(getUserInfoByID);

export default router;