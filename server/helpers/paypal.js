const paypal = require("paypal-rest-sdk");

const {
  PAYPAL_MODE,
  PAYPAL_CLIENT_ID,
  PAYPAL_CLIENT_SECRET,
} = process.env;

function resolveConfigValue(value, fallback = "") {
  return (value || fallback || "").trim();
}

paypal.configure({
  mode: resolveConfigValue(PAYPAL_MODE, "sandbox"),
  client_id: resolveConfigValue(PAYPAL_CLIENT_ID),
  client_secret: resolveConfigValue(PAYPAL_CLIENT_SECRET),
});

module.exports = paypal;
