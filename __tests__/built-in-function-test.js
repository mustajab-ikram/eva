const assert = require("assert");
const { test } = require("./test-util");

module.exports = function (eva) {
  // Math functions

  test(eva, `(+ 1 2)`, 3);
  test(eva, `(+ (+ 1 2) 3)`, 6);
  test(eva, `(> 1 2)`, false);
  test(eva, `(> 2 1)`, true);
  test(eva, `(<= 1 1)`, true);
  test(eva, `(>= 1 2)`, false);
  test(eva, `(= 1 1)`, true);
};
