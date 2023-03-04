import { CommandInteraction, BaseMessageOptions } from "discord.js";
import { helpEmbed } from "../../helpers/embeds";

// Return an Embed object containing all commands' information
export const help = ({}: CommandInteraction): BaseMessageOptions => helpEmbed();
