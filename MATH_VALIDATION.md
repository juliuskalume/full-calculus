# Math Answer Validation

`math-validation.js` provides the typed-answer grading layer for numeric and algebraic responses.

## What it does

- normalizes implicit multiplication such as `2x`, `1/2x`, and `(1/2)(x-1)`
- parses expressions safely instead of using raw `eval`
- checks equivalence numerically across multiple sample values
- returns `invalid_format` for malformed input instead of marking the answer wrong
- generates a TeX preview for live feedback in `active-lesson.html` and `unit-test.html`

## Supported syntax

- operators: `+`, `-`, `*`, `/`, `^`
- grouping: parentheses
- numbers: integers, decimals, fractions
- constants: `pi`, `e`
- functions: `sin`, `cos`, `tan`, `sec`, `csc`, `cot`, `sqrt`, `abs`, `log`, `ln`, `exp`
- single-letter variables such as `x` and `t`

## Grading behavior

- `numeric` items validate with `allowVariable: false`
- `expression` items validate with `allowVariable: true`
- `mcq` items accept typed full-answer text and the option letter/number
- 3-5 sample points are used and singularities are skipped safely
- if too few valid samples remain, the candidate is treated as not equivalent

## Files involved

- `math-validation.js`
- `engine.js`
- `active-lesson.html`
- `unit-test.html`

## Run tests

```bash
node tests/math-validation.test.js
node tests/engine-grade.test.js
```
