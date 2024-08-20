const assert = require("assert");

module.exports = function (eva) {
  // Math expressions
  assert.strictEqual(eva.eval(["+", 1, 2]), 3);
  assert.strictEqual(eva.eval(["+", ["+", 1, 2], 3]), 6);
};
