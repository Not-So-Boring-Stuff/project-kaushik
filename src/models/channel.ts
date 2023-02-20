import { Schema, model } from "mongoose";

// Discord channel model
const channelSchema = new Schema({
    guild: { type: String, required: true },
    channel: { type: String, required: true },
    author: { type: String, required: true },
});

export default model("Channel", channelSchema);
