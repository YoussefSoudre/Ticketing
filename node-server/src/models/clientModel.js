import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);
export const ClientSchema = new Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: "Entrer un nom"
  },
  adresse: {
    type: String
  },
  phone: {
    type: String
  },
  status: {
    type: String
  },
  subscriptionPlan: {
    type: String,
    required: "Subscription plan is required"
  },
  employee: {
    type: String
   
  }
});
TicketSchema.plugin(AutoIncrement, { inc_field: "id" });
