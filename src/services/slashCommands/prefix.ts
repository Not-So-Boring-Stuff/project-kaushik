import { CommandInteraction } from "discord.js";
import { format } from "format";
import { ServerType } from "../../helpers/types";
import messages from "../../messages";
import Server from "../../models/server";

// Change bot's prefix for message commands
export const prefix = async (
    command: CommandInteraction,
    { id }: ServerType
): Promise<String> => {
    if (!command.memberPermissions.has("ViewAuditLog", true))
        return messages.ERROR_INSUFFICIENT_PERMISSIONS;
    const isSeparated = !!(command.options.get("separated")?.value as boolean);
    const prefix = `${command.options.get("prefix").value}${
        isSeparated ? " " : ""
    }`;
    const { prefix: new_prefix } = await Server.findOneAndUpdate(
        { id },
        { prefix },
        { new: true }
    );
    return format(
        messages.SUCCESS_PREFIX_CHANGED,
        new_prefix,
        `${new_prefix}help`
    );
};
