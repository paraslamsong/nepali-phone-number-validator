# Nepali Phone Number Validator

A simple JavaScript function to validate Nepali phone numbers, including mobile numbers, landline numbers, and special emergency numbers. It supports optional country codes (`+977` or `00977`), as well as various formats for mobile and landline numbers.

## Features

- **Mobile Number Validation**: Supports numbers starting with `98`, `97`, or `91`, followed by exactly 8 digits.
- **Landline Number Validation**: Supports valid area codes and numbers with optional dashes.
- **Special Numbers**: Validates emergency or government hotline numbers like `100`, `101`, `102`, `1498`, and `900`.
- **Country Code Support**: Optionally validates phone numbers with country code `+977` or `00977`.

## Installation

You can either download the file or install it via npm if you’re working in a Node.js environment.

### Using npm

To install the package via npm, create a `package.json` file and run:

```bash
npm install nepali-phone-number-validator
```

### Code

```code
import validatePhoneNumber from 'nepali-phone-number-validator';
const isPhoneNumberValid = validatePhoneNumber("9800000000")
```
