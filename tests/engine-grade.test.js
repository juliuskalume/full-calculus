const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const context = {
  window: {
    FCMathValidation: require("../math-validation.js"),
  },
  localStorage: {
    _data: {},
    getItem(key) {
      return this._data[key] || null;
    },
    setItem(key, value) {
      this._data[key] = String(value);
    },
    removeItem(key) {
      delete this._data[key];
    },
  },
  console,
};

context.window.localStorage = context.localStorage;
vm.createContext(context);
vm.runInContext(fs.readFileSync(require.resolve("../engine.js"), "utf8"), context);

const engine = context.window.FCEngine;

const mcqItem = {
  type: "mcq",
  choices: ["x < 0", "x \\ge 0", "all real numbers"],
  answer: {
    value: "x \\ge 0",
    equivalences: ["x >= 0"],
  },
};

assert.strictEqual(engine.gradeItem(mcqItem, "B").correct, true);
assert.strictEqual(engine.gradeItem(mcqItem, "2").correct, true);
assert.strictEqual(engine.gradeItem(mcqItem, "x >= 0").correct, true);
assert.strictEqual(engine.gradeItem(mcqItem, "A").correct, false);

console.log("engine grading tests passed");
