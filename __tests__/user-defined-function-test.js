const assert = require("assert");
const { test } = require("./test-util");

module.exports = function (eva) {
  test(
    eva,
    `
    (begin
        (def square (x) (* x x))
        (square 3)
    )
        `,
    9
  );
};
