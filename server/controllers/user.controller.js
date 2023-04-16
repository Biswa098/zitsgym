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
const userresister = async (req, res) => {
    const { name, email, password, age, bw, height } = req.body;

    if (!name || !email || !password || !age || !bw || !height) {
        res.status(400).json({ error: "Please enter all input data !" })
    }else {
        try {
            const preuser = await User.findOne({ email: email });
            if (preuser) {
                res.status(400).json({ error: "Already Existed User" })
            } else {
                const userresister = new User({
                    name, email, password, age, bw, height
                });
                userresister.save();
                res.status(200).json(userresister);
            }
        } catch (error) {
            res.status(400).json({ error: "Invalid Details", error });
        }
    }
}
    const userotpsend = async (req, res) => {
        const { email,password } = req.body;
        if (!email) {
            res.status(400).json({ error: "Please Enter your Email" });
        }else{
            try {
                const preuser = await User.findOne({ email: email });
                if (preuser) {
                    if(preuser.password===password){
                        const OTP = Math.floor(100000 + Math.random() * 900000);
        
                        const existEmail = await userotp.findOne({ email: email });
            
                        if (existEmail) {
                            const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, { otp: OTP }, { new: true });
                            await updateData.save();
                            const mailoption = {
                                from: process.env.EMAIL,
                                to: email,
                                subject: "OTP for email Validation from THE FITNESS ZONE",
                                text: `YOUR OTP IS:- ${OTP}`
                            }
                            transporter.sendMail(mailoption, (error, info) => {
                                if (error) {
                                   
                                    res.status(400).json({ error: "Otp not sent" });
                                } else {
                                   
                                    res.status(200).json({ message: "OTP Sent Succesfully" })
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
                                subject: "OTP for email Validation from THE FITNESS ZONE",
                                text: `YOUR OTP IS:- ${OTP}`
                            }
                            transporter.sendMail(mailoption, (error, info) => {
                                if (error) {
                                   
                                    res.status(400).json({ error: "opt not sent" });
                                } else {
                                   
                                    res.status(200).json({ message: "OTP Sent Succesfully" })
                                }
                            })
                        }
                    }else{
                        res.status(400).json({ error: "Wrong PassWord" })
                    }
                } else {
                    res.status(400).json({ error: "User not exist" });
                }
            } catch (error) {
                res.status(400).json({ error: "Invalid Details" });
            }
        }
        
    };
    const userotpsendreset = async (req, res) => {
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
                        subject: "OTP for Reset password from THE FITNESS ZONE",
                        text: `YOUR OTP FOR RESET PASSWORD IS:- ${OTP}`
                    }
                    transporter.sendMail(mailoption, (error, info) => {
                        if (error) {
                           
                            res.status(400).json({ error: "Otp not sent" });
                        } else {
                           
                            res.status(200).json({ message: "OTP Sent Succesfully" })
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
                        subject: "OTP for Reset password from THE FITNESS ZONE",
                        text: `YOUR OTP FOR RESET PASSWORD IS:- ${OTP}`
                    }
                    transporter.sendMail(mailoption, (error, info) => {
                        if (error) {
                           
                            res.status(400).json({ error: "opt not sent" });
                        } else {
                           
                            res.status(200).json({ message: "OTP Sent Succesfully" })
                        }
                    })
                }
            } else {
                res.status(400).json({ error: "User not exist" });
            }
        } catch (error) {
            res.status(400).json({ error: "Invalid Details" });
        }
    };

const userlogin = async(req,res)=>{
    const {email,otp} = req.body;

    if(!otp || !email){
        res.status(400).json({ error: "Please Enter Your OTP and Email" })
    }else {
        try {
            const otpverification = await userotp.findOne({email:email});
    
            if(otpverification.otp === otp){
                const preuser = await User.findOne({email:email});
    
                // token generate
                const token = await preuser.generateAuthtoken();
               res.status(200).json({message:"Login Succesfully Done",userToken:token,preuser});
    
            }else{
                res.status(400).json({error:"Invalid Otp"})
            }
        } catch (error) {
            res.status(400).json({ error: "Invalid Details", error })
        }
    }
} ;
 const useredit = async(req,res)=>{
    const {name, email, password, age, bw, height} = req.body;
    if (!name || !email || !password || !age || !bw || !height) {
        res.status(400).json({ error: "Please enter all input data !" });
    }else {
        try {
            const preuser = await User.findOne({ email: email });
            if (!preuser) {
                res.status(400).json({ error: "Somethinh Went Wrong" })
            } else {
                const userresister = await User.findByIdAndUpdate({ _id: preuser._id }, { name:name, password:password, age:age, bw:bw, height:height }, { new: true });
                res.status(200).json({message:"Edit Succesfully Done",userresister});
            }
        } catch (error) {
            res.status(401).json({ error: "Invalid Details", error });
        }
    }
 }
 const resetpassword = async(req,res)=>{
    const {email, password, otp} = req.body;
    if (!email || !password ) {
        res.status(400).json({ error: "Please enter all input data !" });
    }else {
        try {
            const preuser = await User.findOne({ email: email });
            const otpverification = await userotp.findOne({email:email});
            if (!preuser) {
                res.status(400).json({ error: "Somethinh Went Wrong" })
            } else {
               if(otpverification.otp === otp){
                await User.findByIdAndUpdate({ _id: preuser._id }, {  password:password }, { new: true });
                res.status(200).json({message:"Password Reset Succesfully "});
               }else{
                res.status(400).json({error:"Invalid Otp"})
               }
            }
        } catch (error) {
            res.status(401).json({ error: "Invalid Details", error });
        }
    }
 }

export { userresister, userotpsend, userotpsendreset, userlogin, useredit,resetpassword };