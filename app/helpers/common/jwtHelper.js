// External Dependencies
const jwt = require("jsonwebtoken");
const envConfig = require("../../../config/config");

class JWTHelper {
  static sign(payload, isAdmin, isPartner) {
    const token = jwt.sign(
      payload,
      envConfig.jwt_secret,
      {
        expiresIn: 172800, // 2 days in seconds
      },
      { algorithm: "HS256" }
    );

    return token;
  }
}

module.exports = JWTHelper;
