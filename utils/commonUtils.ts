import CryptoJS from "crypto-js";

export default class CommonUtils {
  private secretKey: string;

  constructor() {
    console.log("SECRET_KEY from process.env:", process.env.SECRET_KEY);
    this.secretKey = process.env.SECRET_KEY ?? "";

    if (!this.secretKey) {
      throw new Error(
        process.env.CI
          ? "SECRET_KEY is missing in Azure DevOps pipeline variables"
          : "SECRET_KEY is missing in env-files/.env",
      );
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
