const Eva = require("../Eva");

const tests = [
  require("./block-test"),
  require("./math-test"),
  require("./self-eval-test"),
  require("./variables-test"),
  require("./if-test"),
  require("./while-test"),
  require("./built-in-function-test"),
  require("./user-defined-function-test"),
];

const eva = new Eva();

tests.forEach((test) => test(eva));

console.log("All passed");
