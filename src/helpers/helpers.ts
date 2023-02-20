export const randomNumber = (highest: number, least: number = 0) => {
    return Math.floor(Math.random() * highest) + least;
};
