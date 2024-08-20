const assert = require("assert");

module.exports = function (eva) {
  // Self-evaluating expressions
  assert.strictEqual(eva.eval(1), 1);
  assert.strictEqual(eva.eval('"string"'), "string");
};
