import { Message, TextChannel } from "discord.js";
import { aboutEmbed } from "../../helpers/embeds";

export const about = async (message: Message, _line: void): Promise<void> => {
    // @ts-ignore
    await message.channel.send(aboutEmbed());
};
