const numindia = require("./src/index");

const phoneNumbers = [
    "9876543210",
    "+91-9876543210",
    "91 98765 43210",
    "5876543210", // Invalid prefix
    "987654321",  // Too short
    "ABC1234567"  // Alphanumeric
];

console.log("--- NumIndia Working Demonstration ---");
phoneNumbers.forEach(num => {
    const isValid = numindia.isValid(num);
    const formatted = numindia.format(num);
    console.log(`Input: ${num}`);
    console.log(`  Valid:     ${isValid}`);
    console.log(`  Formatted: ${formatted || "N/A"}`);
    console.log("-----------------------------------------");
});
