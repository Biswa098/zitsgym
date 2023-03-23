import express from "express";

import {
    createUser,
    editUserInfoByID,
    getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/edit/:id").post(editUserInfoByID);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoByID);

export default router;