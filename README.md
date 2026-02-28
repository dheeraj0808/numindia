# numindia 🇮🇳

[![npm version](https://img.shields.io/npm/v/numindia.svg)](https://www.npmjs.com/package/numindia)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, zero-dependency Node.js library for validating and formatting Indian mobile phone numbers.

## Features

- ✅ **Validation**: Validates Indian mobile numbers starting with 6, 7, 8, or 9.
- ✅ **Sanitization**: Automatically cleans non-digit characters (spaces, dashes, parens).
- ✅ **Formatting**: Formats valid numbers into the standard `+91-XXXXXXXXXX` format.
- ✅ **Zero Dependencies**: Pure JavaScript, no external libraries.
- ✅ **Production Ready**: Follows CommonJS module standards.

## Installation

Install via npm:

```bash
npm install numindia
```

## Usage

### Validate Phone Numbers

Returns a boolean indicating if the phone number is a valid Indian mobile number.

```javascript
const numindia = require('numindia');

// Valid numbers
numindia.isValid('9876543210'); // true
numindia.isValid('+91 9876543210'); // true
numindia.isValid('91-9876543210'); // true
numindia.isValid('9876-543-210'); // true

// Invalid numbers
numindia.isValid('5876543210'); // false (starts with 5)
numindia.isValid('987654321'); // false (9 digits)
numindia.isValid('ABCDE12345'); // false (alphanumeric)
```

### Format Phone Numbers

Formats any valid Indian phone number into the standard `+91-XXXXXXXXXX` format. Returns `null` if the input is invalid.

```javascript
const numindia = require('numindia');

numindia.format('9876543210'); // "+91-9876543210"
numindia.format('+91 9876543210'); // "+91-9876543210"
numindia.format('12345'); // null
```

### Sanitize Input

Extracts only digits from the input string.

```javascript
const numindia = require('numindia');

numindia.sanitize('+91 987-654-3210'); // "919876543210"
```

## Why numindia?

Validating Indian mobile numbers is tricky with various prefixes and formats. `numindia` handles:
- 10-digit formats (9876543210)
- 12-digit formats starting with 91 (919876543210)
- Standard prefix with plus sign (+91 9876543210)
- Formatting with dashes and spaces (+91-987-654-3210)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.