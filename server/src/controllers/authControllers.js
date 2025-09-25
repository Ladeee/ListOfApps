import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import User from "../models/user.model"

export const signup = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // check if user exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({ message: "User already exists" })
        };

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // create new user
        const user = new User({ fullName, email, passord:hashedPassword });
        await user.save();
        
        // generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.status(201).json({
            message: "User created successfully",
            user: { id: user._id, fullName: user.fullName, email: user.email },
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};