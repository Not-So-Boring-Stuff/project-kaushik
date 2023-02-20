import Server from "../../models/server";
import messages from "../../messages";
import { ServerType } from "../../helpers/types";
import { Message, TextChannel } from "discord.js";
import { format } from "format";
import { bot } from "../../discord";

// Change discord' server prefix
export const prefix = async (
    message: Message,
    line: string[],
    { prefix, id }: ServerType
): Promise<Message> => {
    if (line.length !== 2) {
        // @ts-ignore
        return message.channel.send(
            format(
                messages.ERROR_INSUFFICIENT_ARGUMENT,
                `${prefix}prefix [new_prefix]`
            )
        );
    }
    const new_prefix =
        line[1].epur().length >= 3 ? `${line[1].epur()}` : line[1].epur();
    if (!message.member.permissions.has("ViewAuditLog", true)) {
        // @ts-ignore
        await message.channel.send(messages.ERROR_INSUFFICIENT_PERMISSIONS);
    } else if (prefix === new_prefix) {
        // @ts-ignore
        await message.channel.send(messages.ERROR_PREFIX_ALREADY);
    } else {
        await Server.findOneAndUpdate({ id }, { prefix: new_prefix });
        // @ts-ignore
        await message.channel.send(
            format(
                messages.SUCCESS_PREFIX_CHANGED,
                new_prefix,
                `${new_prefix}help`
            )
        );
    }
};
