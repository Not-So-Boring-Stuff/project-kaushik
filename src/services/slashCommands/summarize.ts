import {
    CommandInteraction,
    BaseMessageOptions,
    Channel,
    Message,
    TextChannel,
} from "discord.js";

import { SummarizeChat } from "../../modules/ai/ask-ai";

import { bot } from "../../discord";

export const summarize = async (
    { channelId }: CommandInteraction,
    config: any
): Promise<BaseMessageOptions> => {
    const channel = await bot.channels.fetch(channelId);
    if (!(channel instanceof TextChannel))
        return {
            content: "Available only in Text Channels",
        };
    const { lastMessageId } = channel;

    let messages: Message[] = [];
    const fetchMessages = await channel.messages.fetch({
        limit: 12,
        before: lastMessageId,
    });
    messages = messages.concat(Array.from(fetchMessages.values()));

    const ParsedMessages = messages
        .map((item) => {
            return `${item.author.username}: ${item.content}`;
        })
        .reverse()
        .join("\n");

    const SummarizedMessage = await SummarizeChat(ParsedMessages);

    return {
        content: SummarizedMessage,
    };
};
