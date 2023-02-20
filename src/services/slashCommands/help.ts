import { CommandInteraction, BaseMessageOptions } from "discord.js";
import { helpEmbed } from "../../helpers/embeds";

// Return an Embed object containing all commands' informations
export const help = ({ locale }: CommandInteraction): BaseMessageOptions =>
    helpEmbed();
