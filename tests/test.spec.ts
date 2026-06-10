import CommonUtils from "../utils/commonUtils";

const utils = new CommonUtils();

console.log("SECRET_KEY:", process.env.SECRET_KEY);

console.log("Encrypted USER_NAME:", process.env.USER_NAME);

const username = utils.decryptData(process.env.USER_NAME!);

console.log("Decrypted Username:", username);

const password = utils.decryptData(process.env.PASSWORD!);

console.log("Decrypted Password:", password);
