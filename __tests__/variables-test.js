const assert = require("assert");

module.exports = function (eva) {
  // Variables
  assert.strictEqual(eva.eval(["var", "x", 1]), 1);
  assert.strictEqual(eva.eval("x"), 1);
  // assert.strictEqual(eva.eval("y"), 1);
  assert.strictEqual(eva.eval(["var", "isUser", "true"]), true);
};
