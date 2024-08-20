const Eva = require("../Eva");

const tests = [
  require("./block-test"),
  require("./math-test"),
  require("./self-eval-test"),
  require("./variables-test"),
  require("./if-test"),
  require("./while-test"),
  require("./built-in-function-test"),
];

const eva = new Eva();

tests.forEach((test) => test(eva));

eva.eval(["print", "hello", 19]);

console.log("All passed");
