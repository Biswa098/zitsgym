import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone:{ type: String, default:0, required: true },
    age:{ type: String, default:0, required: true },
    bw:{ type: String, default:0, required: true },
    height:{ type: String, default:0, required: true }
});

const User = mongoose.model("user", UserSchema);

export default User;