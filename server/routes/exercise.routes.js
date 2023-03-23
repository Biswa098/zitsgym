import express from "express";

import {
  getExerciseInfoBybodyPart,
  getExerciseInfo,
  getExerciseInfoById,
  getExerciseInfoByTarget,
  getExerciseInfoByEquipment,
} from "../controllers/exercise.controller.js";
const router = express.Router();

router.route("/").get(getExerciseInfo);
router.route("/bodypart/:id").get(getExerciseInfoBybodyPart);
router.route("/exercise/:id").get(getExerciseInfoById);
router.route("/target/:id").get(getExerciseInfoByTarget);
router.route("/equipment/:id").get(getExerciseInfoByEquipment);

export default router;
