import CryptoJS from "crypto-js";

export default class CommonUtils {
  private secretKey: string;

  constructor() {
    console.log("SECRET_KEY from process.env:", process.env.SECRET_KEY);
    this.secretKey = process.env.SECRET_KEY ?? "";

    if (!this.secretKey) {
      throw new Error("SECRET_KEY is missing in .env");
    }
  }

  /**
   * Encrypt data
   */
  public encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  /**
   * Decrypt data
   */
  public decryptData(encData: string): string {
    console.log("this is secretkey", this.secretKey);
    return CryptoJS.AES.decrypt(encData, this.secretKey).toString(
      CryptoJS.enc.Utf8,
    );
  }
}
