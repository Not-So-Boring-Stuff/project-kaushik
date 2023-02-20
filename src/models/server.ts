import { Schema, model } from "mongoose";
import * as config from "../config.json";

// Discord server model
const serverSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    floodMode: { type: String, required: true, default: false },
    prefix: { type: String, required: false, default: config.defaultPrefix },
    displayRank: {
        type: Boolean,
        required: false,
        default: config.displayRank,
    },
});

export default model("Server", serverSchema);
