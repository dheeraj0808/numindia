/**
 * Sanitizes input to extract digits only.
 * @param {string} input - Any string potentially containing phone numbers.
 * @returns {string} - Cleaned digits.
 */
function sanitize(input) {
  if (!input || typeof input !== "string") return "";
  return input.replace(/\D/g, "");
}

/**
 * Validates whether a given string is a valid Indian mobile number.
 * Rules:
 * - Must be 10 digits long (after cleaning 91/+91 prefix).
 * - Must start with 6, 7, 8, or 9.
 * @param {string} phone - Input phone number.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
function isValid(phone) {
  if (!phone || typeof phone !== "string") return false;

  const digits = sanitize(phone);

  // Normalizing numbers starting with 91
  let normalized;
  if (digits.length === 12 && digits.startsWith("91")) {
    normalized = digits.substring(2);
  } else if (digits.length === 10) {
    normalized = digits;
  } else {
    return false;
  }

  // Validate: 10 digits starting with 6, 7, 8, or 9
  const indianMobileRegex = /^[6-9]\d{9}$/;
  return indianMobileRegex.test(normalized);
}

module.exports = {
  isValid,
  sanitize,
};
