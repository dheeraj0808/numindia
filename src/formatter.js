const { isValid, sanitize } = require("./validator");

/**
 * Formats a valid Indian phone number into standard +91-XXXXXXXXXX format.
 * If mapping fails or invalid, returns null.
 * @param {string} phone - Input phone number.
 * @returns {string|null} - Formatted phone number or null if invalid.
 */
function format(phone) {
    if (!isValid(phone)) {
        return null;
    }

    const digits = sanitize(phone);

    // Normalizing numbers: if starts with 91, extract the 10 digits
    const mobilePart = digits.length === 12 ? digits.substring(2) : digits;

    return `+91-${mobilePart}`;
}

module.exports = format;
