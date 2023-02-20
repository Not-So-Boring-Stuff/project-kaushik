import {
    Client,
    REST,
    Routes,
    Message,
    Interaction,
    Guild,
    ActivityType,
    GatewayIntentBits,
    BaseMessageOptions,
    Events,
} from "discord.js";

import { messageCommands, slashCommands } from "./services/";
import * as config from "./config.json";
import * as commands from "./slashCommandsDefinitions";
import messages from "./messages";
import Server from "./models/server";

const rest = new REST({ version: "10" }).setToken(config.discordToken);
export const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildIntegrations,
    ],
});

// Bot online.
bot.on(Events.ClientReady, async (): Promise<void> => {
    console.log(`Currently connected on (${bot.guilds.cache.size}) servers:`);
    const commandsList = Object.keys(commands)?.map(
        (name: string) => commands[name]
    );
    console.log(commandsList);
    bot.guilds.cache
        .map(({ id, name, joinedTimestamp }) => ({
            id,
            name,
            joinedTimestamp,
        }))
        .sort((a: Guild, b: Guild) => b.joinedTimestamp - a.joinedTimestamp)
        .reverse()
        .map(({ name }) => console.log(`🔶 ${name}`));
    const importedCmd: any = await rest.put(
        Routes.applicationCommands(bot.user.id),
        { body: commandsList }
    );
    console.log(
        `${importedCmd.length} imported command${
            importedCmd.length ? "s" : ""
        }.`
    );
    bot.user.setActivity(config.botDescription, {
        type: ActivityType.Playing,
    });
});

// bot.on("error", ({ message }) => {
//     console.trace(`Error: ${message}`);
// });

bot.on(Events.GuildCreate, async (guild: Guild): Promise<void> => {
    console.log("Guild Create: ", guild.id);
    const server = await Server.findOne({ id: guild.id });
    if (server) return;
    await Server.create({
        id: guild.id,
        name: guild.name,
    });
    const owner = await guild.fetchOwner();
    config.greetOwner && owner?.send("Ee time la janal pantar. Artham aindha.");
});

bot.on(Events.GuildDelete, async ({ id }): Promise<void> => {
    await Server.findOneAndDelete({ id });
});

bot.on(Events.MessageCreate, async (message: Message): Promise<void> => {
    if (message.author.bot) return;
    const { content, guild } = message;
    const { username, discriminator } = message.author;
    const server = await Server.findOne({ id: guild.id });
    if (message.mentions.has(bot.user) && !message.mentions.everyone) {
        // @ts-ignore
        await message.channel.send(messages.INFO_MENTION);
    } else if (content.toLowerCase().startsWith(server?.prefix)) {
        const author = `${username}#${discriminator}`;
        const response = content.epur().replace(server.prefix, "").trim();
        const inputs = response.split(" ");

        if (config.handlePrefix) {
            const command = messageCommands[inputs[0]];

            command
                ? await command(message, inputs, server)
                : // @ts-ignore
                  await message.channel.send(
                      `Command \`/${inputs[0]}\` doesn't exist. Use \`/suggest\` to suggest new features or ideas.`
                  );
        } else {
            // @ts-ignore
            await message.channel.send(
                `I don't support prefixed commands, use Slashcommands`
            );
        }
    }
});

bot.on(
    Events.InteractionCreate,
    async (interaction: Interaction): Promise<void> => {
        const { username, discriminator } = interaction.user;
        const server = await Server.findOne({ id: interaction.guild?.id });

        if (interaction.isCommand()) {
            const { commandName } = interaction;
            const message: BaseMessageOptions = await slashCommands[
                commandName
            ](interaction, server);
            message && (await interaction.reply(message));
        } else if (interaction.isButton()) {
            console.info(
                `${username}#${discriminator}: ${interaction.customId}`
            );
            await slashCommands.button(interaction, server);
        }
    }
);
