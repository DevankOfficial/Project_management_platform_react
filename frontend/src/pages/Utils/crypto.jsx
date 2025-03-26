import CryptoJS from 'crypto-js';


export default class CryptoUtils {
    constructor() {
        this.AES_SECRET_KEY = process.env.REACT_APP_AES_SECRET_KEY;
        this.AES_IV = process.env.REACT_APP_AES_IV;

        if (this.AES_SECRET_KEY && this.AES_IV) {
            this.bs = 16; // AES block size
            this.key = CryptoJS.enc.Utf8.parse(this.AES_SECRET_KEY);
            this.iv = CryptoJS.enc.Utf8.parse(this.AES_IV);
        } else {
            console.error("Unable to get the key from environment.");

            throw new Error("Unable to get the key from environment.");
        }
    }

    encrypt(raw) {
        try {
            const data = JSON.stringify(raw);
            const paddedData = this._pad(data);
            const encrypted = CryptoJS.AES.encrypt(paddedData, this.key, { iv: this.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });

            return [true, encrypted.toString()];
        } catch (error) {
            console.error("Encryption error:", error);

            return [false, error.message];
        }
    }

    decrypt(enc) {
        try {
            const decrypted = CryptoJS.AES.decrypt(
                enc, 
                this.key, 
                { 
                    iv: this.iv, 
                    mode: CryptoJS.mode.CBC, 
                    padding: CryptoJS.pad.Pkcs7 
                }
            );

            const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
            const data = JSON.parse(decryptedStr);

            return data;
        } catch (error) {
            console.error("Decryption error:", error);
            
            return null;
        }
    }

    _pad(data) {
        const blockSize = 16;
        const padding = blockSize - (data.length % blockSize);
        const paddingText = String.fromCharCode(padding).repeat(padding);

        return data + paddingText;
    }

    _unpad(data) {
        const padding = data.charCodeAt(data.length - 1);

        return data.slice(0, -padding);
    }
}