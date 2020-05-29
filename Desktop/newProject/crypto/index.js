var crypto = require("crypto");

// //getting the hashes
// console.log(crypto.getHashes());

// //getting the ciphers
// console.log(crypto.getCiphers());

// let password = "SevenDev";
// //creating a hash
// let hash = crypto.createHash("sha1").update(password).digest("latin1");
// console.log(hash);

//random bytes
let randomBytes = crypto.randomBytes(16);
console.log(randomBytes);

//how to creat a cipher
let secret_message = "Na we we";
let key ="12345678901234567890123456789012";

let cipher = crypto.createCipheriv("aes-256-gcm", key, randomBytes);   
encrypted_message = cipher.update(secret_message, "utf8", "hex"); 
encrypted_message += cipher.final("hex"); 
console.log(encrypted_message);

// //todo the decrypting
// let decipher = crypto.createDecipheriv("aes-256-gcm", key, randomBytes);
// let deciphed_message = decipher.update(encrypted_message, "hex", "utf8");
// deciphed_message += decipher.final("utf8");
// console.log(deciphed_message);