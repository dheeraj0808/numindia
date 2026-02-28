const { isValid, sanitize, format } = require("../src/index");

describe("numindia.isValid (Validation Tests)", () => {
    test("Validate 10-digit mobile number starting with 6, 7, 8, 9", () => {
        expect(isValid("9876543210")).toBe(true);
        expect(isValid("8876543210")).toBe(true);
        expect(isValid("7876543210")).toBe(true);
        expect(isValid("6876543210")).toBe(true);
    });

    test("Fail 10-digit mobile number starting with 0, 1, 2, 3, 4, 5", () => {
        expect(isValid("0123456789")).toBe(false);
        expect(isValid("5876543210")).toBe(false);
    });

    test("Validate mobile number with +91 prefix", () => {
        expect(isValid("+91-9876543210")).toBe(true);
        expect(isValid("+91 9876543210")).toBe(true);
        expect(isValid("+919876543210")).toBe(true);
    });

    test("Validate mobile number with 91 prefix", () => {
        expect(isValid("91-9876543210")).toBe(true);
        expect(isValid("91 9876543210")).toBe(true);
        expect(isValid("919876543210")).toBe(true);
    });

    test("Validate mobile number with formatting (spaces/dashes)", () => {
        expect(isValid("9876-543-210")).toBe(true);
        expect(isValid("987 654 3210")).toBe(true);
    });

    test("Fail invalid inputs", () => {
        expect(isValid("987654321")).toBe(false); // 9 digits
        expect(isValid("98765432101")).toBe(false); // 11 digits without 91 prefix
        expect(isValid("ABCDE12345")).toBe(false); // Alphanumeric
        expect(isValid(null)).toBe(false); // Null
        expect(isValid({})).toBe(false); // Object
    });
});

describe("numindia.format (Formatting Tests)", () => {
    test("Format 10-digit mobile number", () => {
        expect(format("9876543210")).toBe("+91-9876543210");
    });

    test("Format +91 prefixed mobile number", () => {
        expect(format("+91 9876543210")).toBe("+91-9876543210");
    });

    test("Return null for invalid phone numbers", () => {
        expect(format("12345")).toBe(null);
        expect(format("ABCDE12345")).toBe(null);
    });
});

describe("numindia.sanitize (Sanitization Tests)", () => {
    test("Sanitize non-digit characters", () => {
        expect(sanitize("+91-987 654 3210")).toBe("919876543210");
        expect(sanitize("() - . ")).toBe("");
    });
});
