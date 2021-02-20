const CryptoJS = require("crypto-js");

class Utils{    
    _criptografa(dado, chave){
        var ciphertext = CryptoJS.AES.encrypt(dado, chave).toString();
        console.log(ciphertext)
        return ciphertext;
    }

    _decriptografa(dado){
        var bytes  = CryptoJS.AES.decrypt(dado, 'd.a.a.b_2021');
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
        console.log(originalText);
        return originalText;
    }
}
module.exports = Utils;