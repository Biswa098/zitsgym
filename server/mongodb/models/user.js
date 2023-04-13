import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'biswajitdash'
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique:true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Not Valid Email")
        }
    }
    },
    password:{ type: String, minlength:6 },
    tokens:[
        {
            token:{type: String, required: true}
        }
    ],
    age:{ type: String, default:0, required: true },
    bw:{ type: String, default:0, required: true },
    height:{ type: String, default:0, required: true },

});

//hash pass
UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12);
    }

    next();
});

//token generate
UserSchema.methods.generateAuthtoken = async function(){
    try {
        let newtoken = jwt.sign({_id:this._id},SECRET_KEY,{
            expiresIn:"1d"
        });
        this.tokens = this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model("user", UserSchema);

export default User;