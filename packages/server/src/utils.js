import "dotenv/config";
import crypto from "crypto";

const { PW_HASH_SALT } = process.env;

export const getHash = async (password) => {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, PW_HASH_SALT, 64, (err, derivedKey) => {
      if (err) reject(err);
      resolve(derivedKey.toString("hex"));
    });
  });
};
