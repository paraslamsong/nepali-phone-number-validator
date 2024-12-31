/**
 * Validates a Nepali phone number.
 * The function checks if the phone number matches the pattern for valid
 * Nepali mobile numbers, landline numbers, or special emergency numbers.
 *
 * @param {string} phoneNumber - The phone number to validate. It can include
 *                                optional country code (+977 or 00977),
 *                                followed by a valid mobile number, landline, or special number.
 *
 * @returns {boolean} - Returns `true` if the phone number is valid, otherwise `false`.
 *
 * @example
 * // Valid mobile number
 * validatePhoneNumber('+9779812345678'); // true
 *
 * @example
 * // Valid landline number
 * validatePhoneNumber('01-234567'); // true
 *
 * @example
 * // Invalid number
 * validatePhoneNumber('9876543210'); // false
 */

function validatePhoneNumber(phoneNumber) {
  const regex =
    /^(?:(\+|00)?977\s?)?((98\d{8}|97\d{8}|91\d{8})|(0?[1-9]\d{0,1}-?\d{5,7})|(100|101|102|1498|900))$/;
  return regex.test(phoneNumber);
}

module.exports = validatePhoneNumber;

/*
  Regular Expression Breakdown:
  
  1. Country Code:
     - Optional `+977` or `00977` with optional space after country code.
     - Syntax: `(\+|00)?977\s?`
  
  2. Mobile Numbers:
     - Matches mobile numbers starting with 98, 97, or 91, followed by exactly 8 digits.
     - Syntax: `(98\d{8}|97\d{8}|91\d{8})`
  
  3. Landline Numbers:
     - Matches landline numbers that:
       - Start with area codes like `01`, `1`, `01-`, `1-`, or any other valid area code (starting with `0`).
       - Number length between 5 to 7 digits, optional dash (`-`).
     - Syntax: `(0?[1-9]\d{0,1}-?\d{5,7})`
  
  4. Special Numbers:
     - Matches valid emergency or government hotline numbers.
     - Numbers like: `100` (Police), `101` (Fire), `102` (Ambulance), `1498` (Government hotline), `900` (Telecom service).
     - Syntax: `(100|101|102|1498|900)`
*/
