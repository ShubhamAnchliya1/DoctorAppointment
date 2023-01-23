const User = require("../models/UserModel.js");

// const express = require('express');
const bcrypt = require('bcryptjs');

exports.register = async(req, res) =>  {
    try {
        const userExits = await User.findOne({
            email: req.body.email
        });
        if(userExits){
            return res.status(200).send({ 
                message : "User already exits",
                success: false
            })
        }
        const password  = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({ 
            message : " User created successfully",
            success: true
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({ 
            message : "Error while creating user",
            success: false,
            error
        });
    }
}