import mongoose from "mongoose";
import { LoginSchema } from "../models/loginModel";


const Login = mongoose.model("Login", LoginSchema);

export const addNewLogin= async (req, res) => {
  try {
    let addNewLogin = new Login(req.body);
    let login = await addNewLogin.save();
    res.status(200).json({ login});
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Erreur lors du login",
        error: err.message,
      });
  }
};


export const getLogin = async (req, res) => {
  try {
    let login = await Login.find({});
    res.json(login);
  } catch (err) {
    res.send(err);
  }
};

export const getLogintWithID = async (req, res) => {
  try {
    let login = await login.findById(req.params.loginId);
    res.json(login);
  } catch (err) {
    res.send(err);
  }
};
export const updateLogin = async (req, res) => {
  try {
    let login = await login.findOneAndUpdate(
      { _id: req.params.loginId },
      req.body,
      { new: true }
    );
    res.json(login);
  } catch (err) {
    res.send(err);
  }
};
export const deleteLogin = async (req, res) => {
  try {
    await Login.findByIdAndRemove(req.params.loginId);
    res.json({ message: "Successfully deleted login" });
  } catch (err) {
    res.send(err);
  }
};