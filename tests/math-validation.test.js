const assert = require("assert");
const mathValidation = require("../math-validation.js");

function expectCorrect(expected, student, options) {
  const result = mathValidation.validateEquivalent(expected, student, options);
  assert.strictEqual(result.valid, true, `Expected valid input for "${student}"`);
  assert.strictEqual(result.correct, true, `Expected "${student}" to match "${expected}"`);
}

function expectIncorrect(expected, student, options) {
  const result = mathValidation.validateEquivalent(expected, student, options);
  assert.strictEqual(result.valid, true, `Expected valid input for "${student}"`);
  assert.strictEqual(result.correct, false, `Expected "${student}" to not match "${expected}"`);
}

function expectInvalid(expected, student, options) {
  const result = mathValidation.validateEquivalent(expected, student, options);
  assert.strictEqual(result.valid, false, `Expected invalid input for "${student}"`);
  assert.strictEqual(result.reason, "invalid_format");
}

expectCorrect("(x - 1)/2", "0.5x - 0.5", { allowVariable: true });
expectCorrect("(x - 1)/2", "(1/2)(x - 1)", { allowVariable: true });
expectIncorrect("(x - 1)/2", "x - 1/2", { allowVariable: true });

expectCorrect("1/2", "0.5", { allowVariable: false });
expectCorrect("4*pi", "4pi", { allowVariable: true });
expectCorrect("1/sqrt(1-x^2)", "(1-x^2)^(-1/2)", { allowVariable: true });
expectCorrect("2^x*log(2)", "log(2)*2^x", { allowVariable: true });

expectInvalid("(x - 1)/2", "sin x", { allowVariable: true });
expectInvalid("6", "2**3", { allowVariable: false });

const preview = mathValidation.buildPreview("x-1/2", { allowVariable: true });
assert.strictEqual(preview.valid, true);
assert.ok(preview.warning.includes("parentheses"));

console.log("math-validation tests passed");
