import { BaseMessageOptions } from "discord.js";
import { getRandomGif } from "../../helpers/gifsManager/gifs";

export const randomgif = (): BaseMessageOptions => getRandomGif();
