const assert = require("node:assert");
const Environment = require("./Environment");
/**
 * Eva Interpreter.
 */
class Eva {
  /**
   * Creates an Eva instance with the global environment.
   */
  constructor(global = GlobalEnvironment) {
    this.global = global;
  }

  eval(exp, env = this.global) {
    // ------------------------------
    // Self-evaluating expressions
    if (this._isNumber(exp)) {
      return exp;
    }

    if (this._isString(exp)) {
      return exp.slice(1, -1);
    }

    // // ------------------------------
    // // Math expressions
    // if (exp[0] === "+") {
    //   return this.eval(exp[1], env) + this.eval(exp[2], env);
    // }
    // if (exp[0] === "-") {
    //   return this.eval(exp[1], env) - this.eval(exp[2], env);
    // }
    // if (exp[0] === "*") {
    //   return this.eval(exp[1], env) * this.eval(exp[2], env);
    // }
    // if (exp[0] === "/") {
    //   return this.eval(exp[1], env) / this.eval(exp[2], env);
    // }

    // // ------------------------------
    // // Comparison expressions
    // if (exp[0] === "<") {
    //   return this.eval(exp[1], env) < this.eval(exp[2], env);
    // }
    // if (exp[0] === ">") {
    //   return this.eval(exp[1], env) > this.eval(exp[2], env);
    // }
    // if (exp[0] === "<=") {
    //   return this.eval(exp[1], env) <= this.eval(exp[2], env);
    // }
    // if (exp[0] === ">=") {
    //   return this.eval(exp[1], env) >= this.eval(exp[2], env);
    // }

    // ------------------------------
    // Variables
    // declare a variable
    if (exp[0] === "var") {
      const [_, name, val] = exp;
      return env.define(name, this.eval(val, env));
    }
    // access a variable
    if (this._isVariableName(exp)) {
      return env.lookup(exp);
    }

    // ------------------------------
    // If expression
    if (exp[0] === "if") {
      const [_, condition, consequent, alternate] = exp;

      if (this.eval(condition, env)) {
        return this.eval(consequent, env);
      }
      return this.eval(alternate, env);
    }

    // ------------------------------
    // Blocks: sequence of expressions
    if (exp[0] === "begin") {
      const blockEnv = new Environment({}, env);
      return this._evalBlock(exp, blockEnv);
    }

    // ------------------------------
    // Assignments
    if (exp[0] === "set") {
      const [_, name, val] = exp;
      return env.assign(name, this.eval(val, env));
    }

    // ------------------------------
    // While loop
    if (exp[0] === "while") {
      let res;
      const [_, condition, body] = exp;
      while (this.eval(condition, env)) {
        res = this.eval(body, env);
      }
      return res;
    }

    // ------------------------------
    // Function calls:
    // (print "Hello, World!")
    // (+ 1 2)
    // (> 10 5)
    if (Array.isArray(exp)) {
      const fn = this.eval(exp[0], env);
      // console.log({ fn });

      const args = exp.slice(1).map((arg) => this.eval(arg, env));

      // 1. Native functions
      if (typeof fn === "function") {
        console.log({ args, fn });

        return fn(...args);
      }

      // 2. User-defined functions
      // TODO
    }

    throw `Not implemented: ${JSON.stringify(exp)}`;
  }

  _evalBlock(block, env) {
    const [, ...expressions] = block;

    let result;
    for (let exp of expressions) {
      result = this.eval(exp, env);
    }

    return result;
  }

  _isVariableName(exp) {
    return (
      typeof exp === "string" && /^[*+\-/<>=a-zA-Z][a-zA-Z0-9_]*$/.test(exp)
    );
  }

  _isNumber(exp) {
    return typeof exp === "number";
  }

  _isString(exp) {
    return (
      typeof exp === "string" && exp[0] === '"' && exp[exp.length - 1] === '"'
    );
  }
}

/**
 * Default global environment
 */
const GlobalEnvironment = new Environment({
  null: null,
  true: true,
  false: false,
  VERSION: "0.1.0",

  // Math functions
  "+"(op1, op2) {
    return op1 + op2;
  },
  "-"(op1, op2 = null) {
    if (op2 === null) {
      return -op1;
    }
    return op1 - op2;
  },
  "*"(op1, op2) {
    return op1 * op2;
  },
  "/"(op1, op2) {
    return op1 / op2;
  },

  // Comparison functions
  ">"(op1, op2) {
    return op1 > op2;
  },
  "<"(op1, op2) {
    return op1 < op2;
  },
  ">="(op1, op2) {
    return op1 >= op2;
  },
  "<="(op1, op2) {
    return op1 <= op2;
  },
  "="(op1, op2) {
    return op1 === op2;
  },

  print(...args) {
    console.log(...args);
  },
});

module.exports = Eva;
