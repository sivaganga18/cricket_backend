// Internal Modules
const en = require("./en.json");

/**
 * Get the localized message
 */
class Message {
  /**
   * Get the localized message
   * @param {*} message
   */
  static GetMessage(language) {
    if (language === "en") {
      return en;
    }
  }
}

module.exports = Message;
