import { randomNumber } from "../helpers";

export const gifs = {
    MP: "https://media.tenor.com/5_ngd34a3v0AAAAC/ene-ee-nagaraniki-emaindi.gif",
    REMEMBER: "https://media.tenor.com/aGoA4JaJyEwAAAAC/remember-that-ene.gif",
    DEVELOP: "https://media.tenor.com/zQpd6XsDXzUAAAAC/develop-telugu.gif",
    TAAGUDHAM: "https://media.tenor.com/ysANSVQQHsgAAAAC/taagudham-ene.gif",
};

export const getRandomGif = () => {
    return gifs[Object.keys(gifs)[randomNumber(Object.keys(gifs).length)]];
};
