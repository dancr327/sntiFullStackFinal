// utils/parseBool.js
function parseBool(val) {
  if (typeof val === 'boolean') return val;
  if (typeof val === 'string') return val.trim().toLowerCase() === 'true';
  return undefined;
}
module.exports = parseBool;
