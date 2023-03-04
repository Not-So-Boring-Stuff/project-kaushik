import { CommandInteraction, BaseMessageOptions } from "discord.js";

export const ping = ({}: CommandInteraction): BaseMessageOptions => {
    return {
        content: "Pong!",
    };
};
