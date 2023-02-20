import { BaseMessageOptions } from "discord.js";
import { aboutEmbed } from "../../helpers/embeds";

export const about = (): BaseMessageOptions => aboutEmbed();
