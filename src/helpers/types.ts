import { Locale } from "discord.js";

export type ServerType = {
    _id?: string;
    id?: string;
    name?: string;
    floodMode?: string;
    prefix?: string;
    displayRank: boolean;
};

export type HelpOption = {
    locale?: Locale;
};
