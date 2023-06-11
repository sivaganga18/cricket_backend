const crypto = require("crypto");

class Utils {
  // Generate 6 digit random number
  static generateOtp() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Generate unique id
  static generateTransactionId() {
    return String(
      Math.floor(Math.random() * (999999999999999 - 1000000000000 + 1)) +
        1000000000000
    );
  }

  static generateRandomName = (byte = 32) => {
    return crypto.randomBytes(byte).toString("hex");
  };
}

module.exports = Utils;
