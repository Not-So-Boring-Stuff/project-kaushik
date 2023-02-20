// No field should be left empty. Embed throw error if fields are empty.
const messages = {
    INFO_MENTION: "Hey!",
    INFO_HELP_BASE: "🔍 Print this menu",
    INFO_HELP_ABOUT: "🔍 Display bot's info.",
    INFO_HELP_PREFIX: "🔍 Change textual command's prefix",
    INFO_ABOUT_DESCRIPTION: "`Hey! I'm %s, your Discord bot`",
    INFO_ABOUT_CREATOR: "Origins:",
    INFO_ABOUT_CREATOR_CONTENT: "Let's fill this later",
    INFO_ABOUT_PROJECTS: "Other Projects:",
    INFO_ABOUT_PROJECTS_CONTENT: "Let's see.",
    INFO_ABOUT_INVITE: "Invite Link:",
    SUCCESS_PREFIX_CHANGED:
        "⚡️ New prefix: `%s`. You can now start using the following prefix: `%s`.",
    ERROR_COMMAND_NOT_FOUND: "🥵 Command `%s` not found. Try `%s`.",
    ERROR_PREFIX_ALREADY: "🥵 This prefix is already enabled on this server.",
    ERROR_INSUFFICIENT_ARGUMENT: "🥵 This command is used like this: `%s`.",
    ERROR_INSUFFICIENT_PERMISSIONS:
        "🥵 You don't have required permissions, ask an Admin.",
};

export default messages;
