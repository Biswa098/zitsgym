import User from "../mongodb/models/user.js";
import userotp from "../mongodb/models/userOtp.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();



//email config
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const createUser = async (req, res) => {
    try {
        const { name, email, phone, age, bw, height, pic, sex } = req.body;

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
const userresister = async (req, res) => {
    const { name, email, password, age, bw, height } = req.body;

    if (!name || !email || !password || !age || !bw || !height) {
        res.status(400).json({ error: "Please enter all input data !" })
    }

    try {
        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(400).json({ error: "Already Existed User" })
        } else {
            const userresister = new User({
                name, email, password, age, bw, height
            });
            //here password hashing
            const storeData = await userresister.save();
            res.status(200).json(storeData);
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
    }
};

const userotpsend = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Please Enter your Email" });
    }

    try {
        const preuser = await User.findOne({ email: email });
        if (preuser) {
            const OTP = Math.floor(100000 + Math.random() * 900000);

            const existEmail = await userotp.findOne({ email: email });

            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, { otp: OTP }, { new: true });
                await updateData.save();
                const mailoption = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending otp for email Validation from THE FITNESS ZONE",
                    text: `OTP:- ${OTP}`
                }
                transporter.sendMail(mailoption, (error, info) => {
                    if (error) {
                       
                        res.status(400).json({ error: "email not sent" });
                    } else {
                       
                        res.status(200).json({ message: "Email Sent Succesfully" })
                    }
                })
            } else {
                const saveotpdata = new userotp({
                    email, otp: OTP
                });
                await saveotpdata.save();
                const mailoption = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending otp for email Validation from THE FITNESS ZONE",
                    text: `OTP:- ${OTP}`
                }
                transporter.sendMail(mailoption, (error, info) => {
                    if (error) {
                       
                        res.status(400).json({ error: "email not sent" });
                    } else {
                       
                        res.status(200).json({ message: "Email Sent Succesfully" })
                    }
                })
            }
        } else {
            res.status(400).json({ error: "User not exist" });
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error });
    }
};

const userlogin = async(req,res)=>{
    const {email,otp} = req.body;

    if(!otp || !email){
        res.status(400).json({ error: "Please Enter Your OTP and email" })
    }

    try {
        const otpverification = await userotp.findOne({email:email});

        if(otpverification.otp === otp){
            const preuser = await User.findOne({email:email});

            // token generate
            const token = await preuser.generateAuthtoken();
           res.status(200).json({message:"User Login Succesfully Done",userToken:token});

        }else{
            res.status(400).json({error:"Invalid Otp"})
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
} 

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

export { userresister, userotpsend, userlogin, createUser, getUserInfoByID };