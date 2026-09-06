import { randomInt } from "crypto";
/** Cryptographically-secure URL-safe random string.
 *  Used for public share-link hashes, so it must not be guessable. */
export function random(len) {
    const options = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < len; i++) {
        result += options[randomInt(options.length)];
    }
    return result;
}
//# sourceMappingURL=utils.js.map