import { format } from "format";
import { EmbedBuilder, BaseMessageOptions } from "discord.js";
import * as config from "../../config.json";
import messages from "../../messages";
import { getRandomGif } from "../gifsManager/gifs";

export const aboutEmbed = (): BaseMessageOptions => ({
    embeds: [
        new EmbedBuilder()
            .setColor(0x4e4ec8)
            .setDescription(
                format(messages.INFO_ABOUT_DESCRIPTION, config.botName)
            )
            .setImage(getRandomGif())
            .addFields([
                {
                    name: messages.INFO_ABOUT_CREATOR,
                    value: messages.INFO_ABOUT_CREATOR_CONTENT,
                },
                {
                    name: messages.INFO_ABOUT_PROJECTS,
                    value: messages.INFO_ABOUT_PROJECTS_CONTENT,
                },
                {
                    name: messages.INFO_ABOUT_INVITE,
                    value: `[Invitation](${config.inviteLink})`,
                },
            ]),
    ],
});
