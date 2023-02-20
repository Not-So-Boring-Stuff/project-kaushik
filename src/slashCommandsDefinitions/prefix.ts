import { ApplicationCommandOptionType } from "discord.js";

export const prefix = {
    name: "prefix",
    description: "Change message commands prefix",
    options: [
        {
            name: "prefix",
            description: "The new prefix",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "separated",
            description:
                "If enabled, the prefix will be separated from the command by a space, ie: `% help`",
            type: ApplicationCommandOptionType.Boolean,
        },
    ],
};
