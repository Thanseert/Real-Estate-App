import express from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const router = express.Router();

router.post("/signup", async function(req, res, next){  
    const {username, email, password} = req.body;
    const hashedpasssword =  bcryptjs.hashSync(password, 10);
    const newUser = new User({username, email, password: hashedpasssword});

    try {
        await  newUser.save();
        res.status(201).json("user created succesfully");
    } catch (error) {
        next(error);
    }
});


export default router; 
