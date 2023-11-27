
let aes = {}
const CryptoJS = require('crypto-js')

// 加密
aes.encrypt = (key, text) => {
    return CryptoJS.AES.encrypt(text, key).toString()
}

// 解密
aes.decrypt = (key, text) => {
    return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8);
}

export default aes