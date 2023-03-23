import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
    bodyPart: { type: String, required: true },
    equipment: { type: String, required: true },
    gifUrl: { type: String, required: true },
    id: { type: String, required: true },
    name: { type: String, required: true },
    target: { type: String, required: true }, 
});

const Exercise = mongoose.model("exercise", ExerciseSchema);

export default Exercise;