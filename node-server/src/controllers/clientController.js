import mongoose from "mongoose";
import { ClientSchema } from "../models/clientModel";


const Client = mongoose.model("Client", ClientSchema);

export const addNewClient= async (req, res) => {
  try {
    let addNewClient = new Client(req.body);
    let client = await addNewClient.save();
    res.status(200).json({client});


 
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de l\'ajout du client', error: err.message
        });
    }

};


export const getClient = async (req, res) => {
  try {
    let client = await Client.find({});
    res.json(client);
  } catch (err) {
    res.send(err);
  }
};

export const getClientWithID = async (req, res) => {
  try {
    let client = await client.findById(req.params.clientId);
    res.json(client);
  } catch (err) {
    res.send(err);
  }
};
export const updatclient= async (req, res) => {
  try {
    let client = await client.findOneAndUpdate(
      { _id: req.params.clientId },
      req.body,
      { new: true }
    );
    res.json(client);
  } catch (err) {
    res.send(err);
  }
};
export const deleteClient = async (req, res) => {
  try {
    await Employee.remove({ _id: req.params.clientId });
    res.json({ message: "Successfully deleted client" });
  } catch (err) {
    res.send(err);
  }
};