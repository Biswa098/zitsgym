import Diet from '../mongodb/models/diet.js'
const getDietInfoByname= async (req, res) => {
    try {
        const { id } = req.params;

        const diet = await Diet.find( { name: {'$regex': id} } );

        if (diet) {
            res.status(200).json(diet);
        } else {
            res.status(404).json({ message: "Diet not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getDietInfo= async (req, res) => {
    try {

        const diet = await Diet.find();

        if (diet) {
            res.status(200).json(diet);
        } else {
            res.status(404).json({ message: "Diet not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getDietInfoByname, getDietInfo };
