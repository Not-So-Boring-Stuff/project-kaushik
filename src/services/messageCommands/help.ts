import { Message, TextChannel } from "discord.js";
import { helpEmbed } from "../../helpers/embeds";

export const help = async (message: Message, _: void): Promise<void> => {
    // @ts-ignore
    await message.channel.send(helpEmbed());
};
