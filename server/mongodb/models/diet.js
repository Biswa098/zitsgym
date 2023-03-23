import mongoose from "mongoose";

const DietSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    calories: { type: Number, required: true },
    serving_size_g: { type: Number, required: true },
    fat_total_g: { type: Number, required: true },
    fat_saturated_g: { type: Number, required: true },
    protein_g: { type: Number, required: true },
    sodium_mg: { type: Number, required: true },
    potassium_mg: { type: Number, required: true },
    cholesterol_mg: { type: Number, required: true },
    carbohydrates_total_g: { type: Number, required: true },
    fiber_g: { type: Number, required: true },
    sugar_g:{ type: Number, required: true } 
});

const Diet = mongoose.model("diet", DietSchema);

export default Diet;