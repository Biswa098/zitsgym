import Exercise from '../mongodb/models/exercise.js'

const getExerciseInfoBybodyPart= async (req, res) => {
    try {
        const { id } = req.params;

        const user = await Exercise.find( { bodyPart: {'$regex': id} } );

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getExerciseInfoByEquipment= async (req, res) => {
    try {
        const { id } = req.params;

        const user = await Exercise.find( { equipment: {'$regex': id} } );

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getExerciseInfoByTarget= async (req, res) => {
    try {
        const { id } = req.params;

        const user = await Exercise.find( { target: {'$regex': id} } );

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getExerciseInfoById= async (req, res) => {
    try {
        const { id } = req.params;

        const user = await Exercise.find( { id: id } );

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getExerciseInfo= async (req, res) => {
    try {

        const user = await Exercise.find();

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getExerciseInfoBybodyPart, getExerciseInfo, getExerciseInfoById, getExerciseInfoByTarget, getExerciseInfoByEquipment };
