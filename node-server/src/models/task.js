import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);
export const TaskSchema = new Schema({
  id: {
    type: String,
  
  },
  description: {
    type: String,
    required: "Entrer une description"
  },
  status: {
    type: String
  },
  assignedTo: {
    type: String
  },
  comments: {
    type: Date
  },
  deadline: {
    type: Date
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  completionDate: {
    type: Date
  },
  lastUpdated: {
    type: Date
  }
});
