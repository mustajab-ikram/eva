const assert = require("assert");
/**
 * (if <condition>
 *     <consequent>
 *    <alternative>)
 *
 */
module.exports = function (eva) {
  assert.strictEqual(
    eva.eval([
      "begin",
      ["var", "x", 20],
      ["var", "y", 20],

      ["if", [">", "x", 10], ["set", "y", 30], ["set", "y", 40]],
      "y",
    ]),
    30
  );
};
