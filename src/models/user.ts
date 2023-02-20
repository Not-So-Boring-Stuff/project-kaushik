import { Schema, model } from "mongoose";
import * as config from "../config.json";

// Discord user model
const userSchema = new Schema({
    id: { type: String, required: true, unique: true },
    balance: { type: Number, required: true, default: config.defaultBalance },
    lastClaim: { type: Date },
});

export default model("User", userSchema);
