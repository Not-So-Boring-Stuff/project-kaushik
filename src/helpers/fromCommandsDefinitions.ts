import * as commandName from "../slashCommandsDefinitions";

export const getCommandName = (command: string) => commandName[command].name;

export const getOptionName = (command: string, position: number = 0): string =>
    commandName[command].options[position ?? 0].name;
