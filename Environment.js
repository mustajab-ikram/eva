/**
 * Environment: name storage
 */
class Environment {
  /**
   * Creates an environment with the given record.
   */
  constructor(record = {}, parent = null) {
    this.record = record;
    this.parent = parent;
  }
  /**
   * Creates a variable with the given name and value.
   */
  define(name, value) {
    this.record[name] = value;
    return value;
  }
  /**
   * Updates an existing variable
   */
  assign(name, value) {
    this._resolve(name).record[name] = value;
    return value;
  }
  /**
   * Returns the value of the variable with the given name.
   */
  lookup(name) {
    // if (!this.record.hasOwnProperty(name)) {
    //   throw new ReferenceError(`Variable ${name} is not defined`);
    // }
    return this._resolve(name).record[name];
  }

  /**
   * Returns a specific environment in which a variable is defined, or
   * throws if a variable is not defined.
   */
  _resolve(name) {
    if (this.record.hasOwnProperty(name)) {
      return this;
    }

    if (this.parent === null) {
      throw new ReferenceError(`Variable ${name} is not defined`);
    }

    return this.parent._resolve(name);
  }
}

module.exports = Environment;
