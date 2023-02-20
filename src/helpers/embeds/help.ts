import { EmbedBuilder, BaseMessageOptions, Base } from "discord.js";
import { getCommandName, getOptionName } from "../fromCommandsDefinitions";
import * as config from "../../config.json";
import messages from "../../messages";

export const helpEmbed = (): BaseMessageOptions => ({
    embeds: [
        new EmbedBuilder()
            .setColor(0x4e4ec8)
            .setThumbnail(config.thumbnailHelp)
            .addFields([
                {
                    name: `\`/${getCommandName("help")}\``,
                    value: messages.INFO_HELP_BASE,
                },
                {
                    name: `\`/${getCommandName("about")}\``,
                    value: messages.INFO_HELP_ABOUT,
                },
                {
                    name: `\`/${getCommandName("prefix")} [${getOptionName(
                        "prefix"
                    )}]\``,
                    value: messages.INFO_HELP_PREFIX,
                },
            ]),
    ],
});
