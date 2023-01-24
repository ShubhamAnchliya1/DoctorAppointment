const User = require("../models/UserModel.js");
const Doctor = require("../models/DoctorModel.js");

// const express = require('express');
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const expireTime = process.env.EXPIRE_TIME;

exports.register = async (req, res) => {
  try {
    const userExits = await User.findOne({
      email: req.body.email,
    });
    if (userExits) {
      return res.status(200).send({
        message: "User already exits",
        success: false,
      });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({
      message: " User created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while creating user",
      success: false,
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select("+password");
    if (!user) {
      res.status(200).send({
        message: "User doesn't exist ",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      res.status(200).send({
        message: "Invalid Password ",
        success: false,
      });
    } else {
      const token = jwt.sign({ id: user._id }, jwtSecretKey, {
        expiresIn: expireTime,
      });
      res.status(200).send({
        message: "Successfully Logged In !!!",
        success: true,
        data: token,
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      message: "Error while logging in user",
      success: false,
      error,
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.userId });
    if (!user) {
      res.status(200).send({
        message: "User doesn't exist ",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      message: "Error getting user details",
      success: false,
      error,
    });
  }
};

exports.applyAsDoctor = async(req, res) => {
  try {
    const newDoctor = new Doctor({ ...req.body, status: "pending"});
    await newDoctor.save();
    const adminUser = await findOne({ isAdmin : true });

    const unseenNotifications = adminUser.unseenNotifications;
   
    unseenNotifications.push({
      type: "new-doctor-request",
      message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for a doctor role`,
      data: {
        doctorId : newDoctor._id,
        name: newDoctor.firstName + " " + newDoctor.lastName,
      },
      onClickPath: "/admin/doctorlist"
    });

    await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });
    res.status(200).send({
      success: true,
      message: "Doctor account applied successfully",
    });    
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      message: "Error getting user details",
      success: false,
      error,
    });
  }
}