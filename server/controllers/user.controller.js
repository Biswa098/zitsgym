import User from "../mongodb/models/user.js";

const createUser = async (req, res) => {
    try {
        const { name, email, phone, age, bw, height ,pic ,sex} = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) return res.status(200).json(userExists);

        const newUser = await User.create({
            name, 
            email, 
            phone, 
            age, 
            bw, 
            height,
            pic,
            sex
        });

        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const editUserInfoByID = async (req, res) => {
    try {
        const { id } = req.params;
        const { name,  phone, age, bw, height,sex } = req.body;

        const userExists = await User.findOne({ email: id });

        if (userExists) {
            userExists.name=name; 
            userExists.phone=phone; 
            userExists.age=age; 
            userExists.bw=bw; 
            userExists.height=height;
            userExists.sex=sex;
            userExists.save();
            res.status(201).json(userExists);
        };
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserInfoByID = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ email: id });

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { editUserInfoByID, createUser, getUserInfoByID };