import express from "express";
import { getDietInfoByname, getDietInfo } from '../controllers/diets.controller.js'

const router = express.Router();

router.route("/").get(getDietInfo);
router.route("/:id").get(getDietInfoByname);

export default router;