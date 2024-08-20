const assert = require("assert");
const testUtil = require("./test-util");

module.exports = function (eva) {
  // Blocks:
  assert.strictEqual(
    eva.eval([
      "begin",

      ["var", "x", 10],
      ["var", "y", 2],
      "x",
      "y",
      ["+", ["*", "x", "y"], 3],
    ]),
    23
  );
  // Nested blocks
  assert.strictEqual(
    eva.eval([
      "begin",
      ["var", "x", 10],
      ["begin", ["var", "x", 20], "x"],
      "x",
    ]),
    10
  );
  assert.strictEqual(
    eva.eval([
      "begin",
      ["var", "value", 10],
      ["var", "result", ["begin", ["var", "x", ["+", "value", 10]], "x"]],
      "result",
    ]),
    20
  );

  // Assignments
  assert.strictEqual(
    eva.eval([
      "begin",
      ["var", "data", 10],
      ["begin", ["set", "data", 20]],
      "data",
    ]),
    20
  );

  testUtil.test(
    eva,
    `
        (begin
            (var x 10)
            (var y 20)
            (+ (* x 10) y)
        )
    `,
    120
  );
};
