// File: utils/sanitizeBigInt.js
function sanitizeBigInt(obj) {
  if (Array.isArray(obj)) return obj.map(sanitizeBigInt);
  else if (obj && typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'bigint') result[key] = value.toString();
      else if (value instanceof Date) result[key] = value.toISOString(); // "2025-06-21T00:00:00.000Z"
      else result[key] = sanitizeBigInt(value);
    }
    return result;
  }
  return obj;
}
module.exports = sanitizeBigInt;

/*
// utils/sanitizeBigInt.js
function sanitizeBigInt(obj) {
  if (Array.isArray(obj)) return obj.map(sanitizeBigInt);
  else if (obj && typeof obj === 'object') {
    const result = {};
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'bigint') {
        result[key] = value.toString();
      } else if (value instanceof Date) {
        result[key] = value.toISOString(); // <-- IMPORTANTE para Angular
      } else {
        result[key] = sanitizeBigInt(value);
      }
    }
    return result;
  }
  return obj;
}

module.exports = sanitizeBigInt;

*/