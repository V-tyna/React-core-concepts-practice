function isValidText(value, minLength = 1) {
  return value && value.trim().length >= minLength;
}

function isEqualValues(valueA, valueB) {
  return valueA.trim() === valueB.trim();
}

function isValidDate(value) {
  const date = new Date(value);
  return value && date !== 'Invalid Date';
}

function isValidImageUrl(value) {
  return value && value.startsWith('http');
}

function isValidEmail(value) {
  return value && value.includes('@');
}

exports.isValidText = isValidText;
exports.isEqualValues = isEqualValues;
exports.isValidDate = isValidDate;
exports.isValidImageUrl = isValidImageUrl;
exports.isValidEmail = isValidEmail;
