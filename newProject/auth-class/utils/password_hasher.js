const crypto = require('crypto');

exports.getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    console.log(`password hasher: ${hash}`);
    return hash;
}