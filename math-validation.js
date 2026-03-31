(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  root.FCMathValidation = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const SAMPLE_VALUES = [-3, -2, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1, 2, 5];
  const DEFAULT_TOLERANCE = 1e-6;
  const KNOWN_FUNCTIONS = new Set([
    "abs",
    "acos",
    "acosh",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "arccos",
    "arcsin",
    "arctan",
    "cos",
    "cosh",
    "cot",
    "csc",
    "exp",
    "ln",
    "log",
    "sec",
    "sin",
    "sinh",
    "sqrt",
    "tan",
    "tanh",
  ]);
  const CONSTANTS = new Set(["e", "pi"]);

  function sanitizeInput(value) {
    return String(value || "")
      .replace(/[\u2212\u2013\u2014]/g, "-")
      .replace(/[\u00d7\u00b7\u22c5]/g, "*")
      .replace(/[\u00f7]/g, "/")
      .replace(/,/g, ".")
      .trim();
  }

  function tokenize(value) {
    const input = sanitizeInput(value);
    const tokens = [];
    let index = 0;

    while (index < input.length) {
      const ch = input[index];

      if (/\s/.test(ch)) {
        index += 1;
        continue;
      }

      if (/[0-9.]/.test(ch)) {
        let raw = ch;
        let dotCount = ch === "." ? 1 : 0;
        index += 1;
        while (index < input.length && /[0-9.]/.test(input[index])) {
          if (input[index] === ".") dotCount += 1;
          raw += input[index];
          index += 1;
        }
        if (dotCount > 1 || raw === ".") {
          return { ok: false, error: "Invalid number format." };
        }
        tokens.push({ type: "number", value: raw });
        continue;
      }

      if (/[a-zA-Z]/.test(ch)) {
        let raw = ch;
        index += 1;
        while (index < input.length && /[a-zA-Z]/.test(input[index])) {
          raw += input[index];
          index += 1;
        }
        tokens.push({ type: "identifier", value: raw });
        continue;
      }

      if ("+-*/^()".includes(ch)) {
        tokens.push({
          type: ch === "(" ? "lparen" : ch === ")" ? "rparen" : "operator",
          value: ch,
        });
        index += 1;
        continue;
      }

      return { ok: false, error: 'Unsupported character "' + ch + '".' };
    }

    return { ok: true, tokens };
  }

  function isKnownFunction(name) {
    return KNOWN_FUNCTIONS.has(String(name || "").toLowerCase());
  }

  function shouldInsertMultiply(prev, next) {
    if (!prev || !next) return false;

    const prevCanMultiply =
      prev.type === "number" || prev.type === "identifier" || prev.type === "rparen";
    const nextCanMultiply =
      next.type === "number" || next.type === "identifier" || next.type === "lparen";

    if (!prevCanMultiply || !nextCanMultiply) return false;
    if (prev.type === "identifier" && next.type === "lparen" && isKnownFunction(prev.value)) {
      return false;
    }
    return true;
  }

  function addImplicitMultiplication(tokens) {
    const out = [];
    for (let index = 0; index < tokens.length; index += 1) {
      const current = tokens[index];
      const next = tokens[index + 1];
      out.push(current);
      if (shouldInsertMultiply(current, next)) {
        out.push({ type: "operator", value: "*" });
      }
    }
    return out;
  }

  function parseExpression(value, options) {
    const settings = options || {};
    const tokenized = tokenize(value);
    if (!tokenized.ok) return tokenized;

    const tokens = addImplicitMultiplication(tokenized.tokens);
    let index = 0;
    const variables = new Set();

    function peek() {
      return tokens[index] || null;
    }

    function consume(expectedValue) {
      const token = tokens[index];
      if (!token) return null;
      if (expectedValue && token.value !== expectedValue) return null;
      index += 1;
      return token;
    }

    function parsePrimary() {
      const token = peek();
      if (!token) throw new Error("Expression ended too early.");

      if (token.type === "number") {
        consume();
        return { type: "number", value: Number(token.value) };
      }

      if (token.type === "identifier") {
        const rawName = token.value;
        const name = rawName.toLowerCase();
        consume();

        if (peek() && peek().type === "lparen") {
          if (!isKnownFunction(name)) {
            throw new Error('Unsupported function "' + rawName + '".');
          }
          consume("(");
          const argument = parseAddSub();
          if (!consume(")")) throw new Error("Missing closing parenthesis.");
          return { type: "function", name, argument };
        }

        if (isKnownFunction(name)) {
          throw new Error('Use parentheses after "' + rawName + '".');
        }

        if (CONSTANTS.has(name)) {
          return { type: "constant", name };
        }

        if (rawName.length !== 1) {
          throw new Error('Unsupported symbol "' + rawName + '".');
        }

        variables.add(name);
        return { type: "variable", name };
      }

      if (token.type === "lparen") {
        consume("(");
        const inner = parseAddSub();
        if (!consume(")")) throw new Error("Missing closing parenthesis.");
        return inner;
      }

      throw new Error("Unexpected token.");
    }

    function parsePower() {
      let left = parsePrimary();
      if (peek() && peek().type === "operator" && peek().value === "^") {
        consume("^");
        left = { type: "binary", operator: "^", left, right: parseUnary() };
      }
      return left;
    }

    function parseUnary() {
      const token = peek();
      if (token && token.type === "operator" && (token.value === "+" || token.value === "-")) {
        consume();
        return { type: "unary", operator: token.value, value: parseUnary() };
      }
      return parsePower();
    }

    function parseMulDiv() {
      let left = parseUnary();
      while (peek() && peek().type === "operator" && (peek().value === "*" || peek().value === "/")) {
        const operator = consume().value;
        left = { type: "binary", operator, left, right: parseUnary() };
      }
      return left;
    }

    function parseAddSub() {
      let left = parseMulDiv();
      while (peek() && peek().type === "operator" && (peek().value === "+" || peek().value === "-")) {
        const operator = consume().value;
        left = { type: "binary", operator, left, right: parseMulDiv() };
      }
      return left;
    }

    try {
      const ast = parseAddSub();
      if (index < tokens.length) {
        return { ok: false, error: "Invalid format." };
      }
      if (settings.allowVariable === false && variables.size) {
        return { ok: false, error: "Use numbers only here." };
      }
      return {
        ok: true,
        ast,
        normalized: tokens.map(function (token) {
          return token.value;
        }).join(""),
        variables: Array.from(variables),
      };
    } catch (error) {
      return { ok: false, error: error && error.message ? error.message : "Invalid format." };
    }
  }

  function evaluateFunction(name, value) {
    if (name === "sin") return Math.sin(value);
    if (name === "cos") return Math.cos(value);
    if (name === "tan") return Math.tan(value);
    if (name === "sec") return 1 / Math.cos(value);
    if (name === "csc") return 1 / Math.sin(value);
    if (name === "cot") return 1 / Math.tan(value);
    if (name === "sinh") return Math.sinh(value);
    if (name === "cosh") return Math.cosh(value);
    if (name === "tanh") return Math.tanh(value);
    if (name === "asinh") return Math.asinh(value);
    if (name === "acosh") return Math.acosh(value);
    if (name === "atanh") return Math.atanh(value);
    if (name === "asin" || name === "arcsin") return Math.asin(value);
    if (name === "acos" || name === "arccos") return Math.acos(value);
    if (name === "atan" || name === "arctan") return Math.atan(value);
    if (name === "sqrt") return Math.sqrt(value);
    if (name === "abs") return Math.abs(value);
    if (name === "log" || name === "ln") return Math.log(value);
    if (name === "exp") return Math.exp(value);
    return NaN;
  }

  function evaluateAst(node, scope) {
    const values = scope || {};
    if (!node) return { ok: false, error: "Invalid expression." };

    if (node.type === "number") return { ok: true, value: node.value };
    if (node.type === "constant") return { ok: true, value: node.name === "pi" ? Math.PI : Math.E };

    if (node.type === "variable") {
      const value = values[node.name];
      if (!Number.isFinite(value)) {
        return { ok: false, error: 'Variable "' + node.name + '" is required.' };
      }
      return { ok: true, value };
    }

    if (node.type === "unary") {
      const inner = evaluateAst(node.value, values);
      if (!inner.ok) return inner;
      return { ok: true, value: node.operator === "-" ? -inner.value : inner.value };
    }

    if (node.type === "function") {
      const argument = evaluateAst(node.argument, values);
      if (!argument.ok) return argument;
      const output = evaluateFunction(node.name, argument.value);
      if (!Number.isFinite(output)) {
        return { ok: false, error: 'Invalid input for "' + node.name + '".' };
      }
      return { ok: true, value: output };
    }

    if (node.type === "binary") {
      const left = evaluateAst(node.left, values);
      if (!left.ok) return left;
      const right = evaluateAst(node.right, values);
      if (!right.ok) return right;

      if (node.operator === "+") return { ok: true, value: left.value + right.value };
      if (node.operator === "-") return { ok: true, value: left.value - right.value };
      if (node.operator === "*") return { ok: true, value: left.value * right.value };
      if (node.operator === "/") {
        if (Math.abs(right.value) <= DEFAULT_TOLERANCE) {
          return { ok: false, error: "Division by zero." };
        }
        return { ok: true, value: left.value / right.value };
      }
      if (node.operator === "^") {
        const powered = Math.pow(left.value, right.value);
        if (!Number.isFinite(powered)) {
          return { ok: false, error: "Invalid exponent." };
        }
        return { ok: true, value: powered };
      }
    }

    return { ok: false, error: "Invalid expression." };
  }

  function precedence(node) {
    if (!node) return 0;
    if (node.type === "number" || node.type === "variable" || node.type === "constant") return 5;
    if (node.type === "function") return 5;
    if (node.type === "unary") return 4;
    if (node.type === "binary") {
      if (node.operator === "^") return 3;
      if (node.operator === "*" || node.operator === "/") return 2;
      if (node.operator === "+" || node.operator === "-") return 1;
    }
    return 0;
  }

  function wrapTex(value, needsWrap) {
    return needsWrap ? "\\left(" + value + "\\right)" : value;
  }

  function astToTex(node, parentPriority) {
    const parent = parentPriority || 0;
    if (!node) return "";

    if (node.type === "number") {
      return String(node.value).replace(/^-0$/, "0");
    }
    if (node.type === "constant") {
      return node.name === "pi" ? "\\pi" : "e";
    }
    if (node.type === "variable") {
      return node.name;
    }
    if (node.type === "function") {
      if (node.name === "sqrt") {
        return "\\sqrt{" + astToTex(node.argument) + "}";
      }
      if (node.name === "abs") {
        return "\\left|" + astToTex(node.argument) + "\\right|";
      }
      if (node.name === "exp") {
        return "e^{" + astToTex(node.argument) + "}";
      }
      const displayName =
        node.name === "ln"
          ? "\\ln"
          : node.name === "log"
          ? "\\log"
          : node.name.indexOf("arc") === 0
          ? "\\" + node.name
          : "\\" + node.name;
      return displayName + "\\left(" + astToTex(node.argument) + "\\right)";
    }
    if (node.type === "unary") {
      const value = node.operator + astToTex(node.value, precedence(node));
      return wrapTex(value, precedence(node) < parent);
    }
    if (node.type === "binary") {
      if (node.operator === "/") {
        return "\\frac{" + astToTex(node.left) + "}{" + astToTex(node.right) + "}";
      }
      if (node.operator === "^") {
        const base = astToTex(node.left, precedence(node));
        const exponent = astToTex(node.right);
        return wrapTex(base + "^{" + exponent + "}", precedence(node) < parent);
      }
      const left = astToTex(node.left, precedence(node));
      const right = astToTex(node.right, precedence(node) + (node.operator === "-" ? 1 : 0));
      const operator = node.operator === "*" ? " \\cdot " : " " + node.operator + " ";
      return wrapTex(left + operator + right, precedence(node) < parent);
    }
    return "";
  }

  function buildPreview(value, options) {
    const raw = String(value || "").trim();
    const settings = options || {};
    if (!raw) {
      return { empty: true, valid: true, latex: "", normalized: "", warning: "" };
    }

    const parsed = parseExpression(raw, settings);
    if (!parsed.ok) {
      return {
        empty: false,
        valid: false,
        latex: "",
        normalized: "",
        warning: parsed.error || "Invalid format.",
      };
    }

    const warning =
      raw.includes("/") && /[+-]/.test(raw) && !/[()]/.test(raw)
        ? "Use parentheses when the whole numerator or denominator should stay together."
        : "";

    return {
      empty: false,
      valid: true,
      latex: astToTex(parsed.ast),
      normalized: parsed.normalized,
      warning,
    };
  }

  function approximatelyEqual(left, right, tolerance) {
    const scale = Math.max(1, Math.abs(left), Math.abs(right));
    return Math.abs(left - right) <= tolerance * scale;
  }

  function buildScope(variableNames, sampleValue) {
    const scope = {};
    variableNames.forEach(function (name) {
      scope[name] = sampleValue;
    });
    return scope;
  }

  function normalizeExpression(value, options) {
    const parsed = parseExpression(value, options);
    return parsed.ok ? parsed.normalized : sanitizeInput(value).replace(/\s+/g, "");
  }

  function validateEquivalent(expectedValue, studentValue, options) {
    const settings = options || {};
    const expectedList = Array.isArray(expectedValue) ? expectedValue : [expectedValue];
    const tolerance = Number.isFinite(settings.tolerance)
      ? Math.max(settings.tolerance, DEFAULT_TOLERANCE)
      : DEFAULT_TOLERANCE;
    const allowVariable = settings.allowVariable !== false;
    const minValidSamples = Math.max(3, Math.min(5, Number(settings.minValidSamples) || 4));

    const student = parseExpression(studentValue, { allowVariable: allowVariable });
    if (!student.ok) {
      return {
        valid: false,
        correct: false,
        reason: "invalid_format",
        message: student.error || "Invalid format.",
      };
    }

    for (let index = 0; index < expectedList.length; index += 1) {
      const expected = parseExpression(expectedList[index], { allowVariable: allowVariable });
      if (!expected.ok) continue;

      const variableNames = Array.from(new Set([].concat(student.variables, expected.variables)));
      if (!allowVariable || !variableNames.length) {
        const left = evaluateAst(student.ast, {});
        const right = evaluateAst(expected.ast, {});
        if (!left.ok || !right.ok) continue;
        if (approximatelyEqual(left.value, right.value, tolerance)) {
          return { valid: true, correct: true, reason: "equivalent", message: "" };
        }
        continue;
      }

      let validSamples = 0;
      let mismatch = false;
      for (let sampleIndex = 0; sampleIndex < SAMPLE_VALUES.length; sampleIndex += 1) {
        const sample = SAMPLE_VALUES[sampleIndex];
        const scope = buildScope(variableNames, sample);
        const left = evaluateAst(student.ast, scope);
        const right = evaluateAst(expected.ast, scope);
        if (!left.ok || !right.ok) continue;
        validSamples += 1;
        if (!approximatelyEqual(left.value, right.value, tolerance)) {
          mismatch = true;
          break;
        }
      }

      if (!mismatch && validSamples >= minValidSamples) {
        return { valid: true, correct: true, reason: "equivalent", message: "" };
      }
    }

    return { valid: true, correct: false, reason: "not_equivalent", message: "" };
  }

  return {
    DEFAULT_TOLERANCE: DEFAULT_TOLERANCE,
    buildPreview: buildPreview,
    evaluateAst: evaluateAst,
    normalizeExpression: normalizeExpression,
    parseExpression: parseExpression,
    validateEquivalent: validateEquivalent,
  };
});
