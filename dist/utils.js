export function random(len) {
    let options = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < len; i++) {
        result += options[Math.floor(Math.random() * options.length)];
    }
    return result;
}
//# sourceMappingURL=utils.js.map