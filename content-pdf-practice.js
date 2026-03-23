window.FCContentData = window.FCContentData || {};
(() => {
  const data = window.FCContentData;
  const VERSION = data.VERSION || "2026.1";
  data.VERSION = VERSION;
  data.items = Array.isArray(data.items) ? data.items : [];

  const meta = {
    basic: { sectionId: "c1-basic-integration-rules", tags: ["pdf.practice", "pdf.practice.basic_rules", "integrals.basic_rules"] },
    uSub: { sectionId: "c2-u-substitution", tags: ["pdf.practice", "pdf.practice.substitution", "integrals.substitution"] },
    trig: { sectionId: "c2-trig-substitution", tags: ["pdf.practice", "pdf.practice.trig_sub", "integrals.trig_sub"] },
  };

  const ids = { basic: [], uSub: [], trig: [] };

  function unique(list) {
    return [...new Set((list || []).filter(Boolean))];
  }

  function rotate(correct, distractors, seed) {
    const pool = [correct, ...(distractors || [])].filter(Boolean).slice(0, 4);
    if (pool.length < 2) return pool;
    const shift = seed % pool.length;
    return pool.slice(shift).concat(pool.slice(0, shift));
  }

  function add(group, sourcePdf, entry) {
    const id = `it-pdf-${group.toLowerCase()}-${entry.s}`;
    const item = {
      id,
      sectionId: meta[group].sectionId,
      type: "mcq",
      prompt: entry.p,
      choices: rotate(entry.c, entry.d, data.items.length + 1),
      answer: { kind: "choice", value: entry.c },
      hints: [entry.h || "Match the worksheet item to the right technique or result."],
      solutionSteps: [entry.m || entry.h || "Use the worksheet's intended technique."],
      difficulty: entry.l || "medium",
      tags: unique([...(meta[group].tags || []), ...(entry.t || [])]),
      grading: { mode: "exact" },
      version: VERSION,
      sourcePdf,
    };
    data.items.push(item);
    ids[group].push(id);
    return id;
  }

  const basic = [
    { s: "w1", p: "[1.1 W1] Choose the antiderivative for \\(\\int x\\,dx\\).", c: "\\(x^2/2 + C\\)", d: ["\\(x^2 + C\\)", "\\(2x + C\\)", "\\(\\ln|x| + C\\)"], h: "Power rule.", l: "easy" },
    { s: "w2", p: "[1.1 W2] Choose the antiderivative for \\(\\int \\sin x\\,dx\\).", c: "\\(-\\cos x + C\\)", d: ["\\(\\cos x + C\\)", "\\(\\sin x + C\\)", "\\(-\\sin x + C\\)"], h: "Differentiate your choice mentally.", l: "easy" },
    { s: "w3", p: "[1.1 W3] Choose the antiderivative for \\(\\int \\cos x\\,dx\\).", c: "\\(\\sin x + C\\)", d: ["\\(-\\sin x + C\\)", "\\(\\cos x + C\\)", "\\(\\tan x + C\\)"], h: "Differentiate your choice mentally.", l: "easy" },
    { s: "w4", p: "[1.1 W4] Choose the antiderivative for \\(\\int \\tan x\\,dx\\).", c: "\\(\\ln|\\sec x| + C\\)", d: ["\\(\\sec x + C\\)", "\\(\\ln|\\cos x| + C\\)", "\\(-\\sec x + C\\)"], h: "Use a standard log form.", l: "easy" },
    { s: "w5", p: "[1.1 W5] Choose the antiderivative for \\(\\int \\csc x\\,dx\\).", c: "\\(\\ln|\\csc x - \\cot x| + C\\)", d: ["\\(-\\csc x + C\\)", "\\(\\ln|\\sec x + \\tan x| + C\\)", "\\(\\cot x + C\\)"], h: "Use a standard log form.", l: "easy" },
    { s: "w6", p: "[1.1 W6] Choose the antiderivative for \\(\\int \\sec x\\,dx\\).", c: "\\(\\ln|\\sec x + \\tan x| + C\\)", d: ["\\(\\sec x + C\\)", "\\(\\ln|\\csc x - \\cot x| + C\\)", "\\(-\\tan x + C\\)"], h: "Use a standard log form.", l: "easy" },
    { s: "w7", p: "[1.1 W7] Choose the antiderivative for \\(\\int \\cot x\\,dx\\).", c: "\\(\\ln|\\sin x| + C\\)", d: ["\\(\\ln|\\cos x| + C\\)", "\\(-\\csc x + C\\)", "\\(\\tan x + C\\)"], h: "Rewrite cot x as cos x / sin x.", l: "easy" },
    { s: "q2g", p: "[1.1 Q2(g)] Choose the antiderivative for \\(\\int \\sin^3 x\\,dx\\).", c: "\\(-\\cos x + \\cos^3 x/3 + C\\)", d: ["\\(\\cos x - \\cos^3 x/3 + C\\)", "\\(\\sin^4 x/4 + C\\)", "\\(-\\sin^3 x/3 + C\\)"], h: "Split sin^3 x into sin x(1-cos^2 x)." },
    { s: "q2k", p: "[1.1 Q2(k)] Choose the antiderivative for \\(\\int \\frac{x^6-1}{x-1}\\,dx\\).", c: "\\(x^6/6 + x^5/5 + x^4/4 + x^3/3 + x^2/2 + x + C\\)", d: ["\\(x^7/7 + C\\)", "\\(x^5/5 + x^4/4 + x^3/3 + x^2/2 + x + C\\)", "\\(x^6/6 + x^5/5 + x^4/4 + x^3/3 + C\\)"], h: "Expand the geometric sum first." },
    { s: "q2m", p: "[1.1 Q2(m)] Which identity is the right first move for \\(\\int \\sin 3x \\cos 2x\\,dx\\)?", c: "Use \\(\\sin A\\cos B = \\tfrac12[\\sin(A+B)+\\sin(A-B)]\\).", d: ["Use \\(\\cos A\\cos B = \\tfrac12[\\cos(A+B)+\\cos(A-B)]\\).", "Use \\(\\sin^2 x + \\cos^2 x = 1\\) immediately.", "Use \\(\\tan x = \\sin x/\\cos x\\) immediately."], h: "It is a product of sine and cosine with different angles." },
    { s: "q2n", p: "[1.1 Q2(n)] Which simplification is the best first move for \\(\\int \\sin^6 x \\cos^6 x\\,dx\\)?", c: "\\((\\sin x\\cos x)^6 = \\sin^6(2x)/64\\)", d: ["\\((\\sin x\\cos x)^6 = \\sin^6(2x)/32\\)", "\\(\\sin^6 x\\cos^6 x = \\cos^6(2x)/64\\)", "\\(\\sin^6 x\\cos^6 x = \\sin^{12}x + \\cos^{12}x\\)"], h: "Start from sin 2x = 2 sin x cos x." },
    { s: "q2o", p: "[1.1 Q2(o)] Choose the antiderivative for \\(\\int \\frac{x^3-3x^2+x-3}{x^2+1}\\,dx\\).", c: "\\(x^2/2 - 3x + C\\)", d: ["\\(x^2/2 - 3x + \\tan^{-1}x + C\\)", "\\(x^3/3 - 3x^2/2 + C\\)", "\\(\\ln(x^2+1) + C\\)"], h: "Factor the numerator as (x-3)(x^2+1)." },
    { s: "q2q", p: "[1.1 Q2(q)] Choose the antiderivative for \\(\\int (\\cot x - \\tan x)^2\\,dx\\).", c: "\\(\\tan x - \\cot x - 4x + C\\)", d: ["\\(\\tan x + \\cot x - 2x + C\\)", "\\(\\sec^2 x + \\csc^2 x + C\\)", "\\(-\\tan x + \\cot x + 4x + C\\)"], h: "Expand and use csc^2 x and sec^2 x." },
    { s: "q2t", p: "[1.1 Q2(t)] Choose the antiderivative for \\(\\int \\frac{x^6-1}{x^4+x^3-x-1}\\,dx\\).", c: "\\(x^3/3 - x^2/2 + x + C\\)", d: ["\\(x^4/4 - x^2/2 + C\\)", "\\(x^2 - x + 1 + C\\)", "\\(x^3/3 + x^2/2 + x + C\\)"], h: "Factor and cancel first." },
    { s: "q3d", p: "[1.1 Q3(d)] Evaluate \\(\\int_0^{\\pi/6} \\sec 3x(\\sec 3x + \\tan 3x)\\,dx\\).", c: "\\(2/3\\)", d: ["\\(1/3\\)", "\\(1\\)", "\\(2\\)"], h: "Recognize the derivative of sec(3x)+tan(3x).", l: "hard" },
    { s: "q4a", p: "[1.1 Q4(a)] Choose the antiderivative for \\(\\int \\sec x\\csc x\\cot x\\,dx\\).", c: "\\(-\\cot x + C\\)", d: ["\\(\\tan x + C\\)", "\\(-\\csc x + C\\)", "\\(\\ln|\\sin x| + C\\)"], h: "Simplify the integrand first." },
    { s: "q4b", p: "[1.1 Q4(b)] Choose the antiderivative for \\(\\int \\sin x\\cos x\\tan x\\,dx\\).", c: "\\(x/2 - \\sin 2x/4 + C\\)", d: ["\\(\\sin^2 x/2 + C\\)", "\\(x - \\sin 2x/2 + C\\)", "\\(-\\cos^2 x/2 + C\\)"], h: "The integrand collapses to sin^2 x." },
    { s: "q6a", p: "[1.1 Q6(a)] Choose the antiderivative for \\(\\int a^x e^x\\,dx\\).", c: "\\(a^x e^x/(1+\\ln a) + C\\)", d: ["\\(a^x e^x/\\ln a + C\\)", "\\(a^x e^x/(1-\\ln a) + C\\)", "\\(a^x e^x + C\\)"], h: "Write a^x as e^(x ln a).", l: "hard" },
    { s: "q7b", p: "[1.1 Q7(b)] Choose the antiderivative for \\(\\int (\\cos x - \\sin x)^2\\,dx\\).", c: "\\(x + \\cos 2x/2 + C\\)", d: ["\\(x - \\cos 2x/2 + C\\)", "\\(\\sin x - \\cos x + C\\)", "\\(x + \\sin 2x/2 + C\\)"], h: "Expand and use sin 2x = 2 sin x cos x." },
    { s: "q8b", p: "[1.1 Q8(b)] Choose the antiderivative for \\(\\int \\frac{1}{1+\\sin x}\\,dx\\).", c: "\\(\\tan x - \\sec x + C\\)", d: ["\\(\\tan x + \\sec x + C\\)", "\\(\\sec x + C\\)", "\\(\\ln|1+\\sin x| + C\\)"], h: "Multiply by 1-sin x over 1-sin x.", l: "hard" },
    { s: "q10d", p: "[1.1 Q10(d)] Which equivalent standard form matches the worksheet's final answer for \\(\\int \\sec x\\,dx\\)?", c: "\\(\\ln|\\sec x + \\tan x| + C\\)", d: ["\\(\\ln|\\sec x - \\tan x| + C\\)", "\\(\\sec x + \\tan x + C\\)", "\\(\\ln|\\sec^2 x + \\tan^2 x| + C\\)"], h: "This is the standard primitive for sec x." }
  ];

  const uSub = [
    { s: "w1", p: "[1.2 W1] Choose the antiderivative for \\(\\int \\cos(2x)\\,dx\\).", c: "\\(\\sin(2x)/2 + C\\)", d: ["\\(2\\sin(2x) + C\\)", "\\(\\sin(2x) + C\\)", "\\(-\\cos(2x)/2 + C\\)"], h: "Reverse the chain rule.", l: "easy" },
    { s: "w2", p: "[1.2 W2] Choose the antiderivative for \\(\\int \\sec^2 x\\tan x\\,dx\\).", c: "\\(\\tan^2 x/2 + C\\)", d: ["\\(\\sec^2 x/2 + C\\)", "\\(\\tan x + C\\)", "\\(\\sec x + C\\)"], h: "Let u = tan x.", l: "easy" },
    { s: "w3", p: "[1.2 W3] Choose the antiderivative for \\(\\int 2x(1+x^2)^3\\,dx\\).", c: "\\((1+x^2)^4/4 + C\\)", d: ["\\((1+x^2)^3 + C\\)", "\\((1+x^2)^4 + C\\)", "\\(x^2(1+x^2)^3 + C\\)"], h: "Let u = 1+x^2.", l: "easy" },
    { s: "w4", p: "[1.2 W4] Choose the antiderivative for \\(\\int \\cos x\\,e^{\\sin x}\\,dx\\).", c: "\\(e^{\\sin x} + C\\)", d: ["\\(\\sin x e^{\\sin x} + C\\)", "\\(e^{\\cos x} + C\\)", "\\(\\cos x + e^{\\sin x} + C\\)"], h: "Let u = sin x.", l: "easy" },
    { s: "w5", p: "[1.2 W5] Choose the antiderivative for \\(\\int \\cos^5 x\\sin x\\,dx\\).", c: "\\(-\\cos^6 x/6 + C\\)", d: ["\\(\\sin^6 x/6 + C\\)", "\\(\\cos^6 x/6 + C\\)", "\\(-\\sin^6 x/6 + C\\)"], h: "Let u = cos x.", l: "easy" },
    { s: "w6", p: "[1.2 W6] Choose the antiderivative for the worksheet item \\(\\int -\\sin(\\sqrt{x})/\\sqrt{x}\\,dx\\).", c: "\\(2\\cos(\\sqrt{x}) + C\\)", d: ["\\(-2\\cos(\\sqrt{x}) + C\\)", "\\(2\\sin(\\sqrt{x}) + C\\)", "\\(\\cos x + C\\)"], h: "Let u = sqrt(x).", l: "medium" },
    { s: "q2a", p: "[1.2 Q2(a)] Which substitution is best for \\(\\int \\sqrt{5x+7}\\,dx\\)?", c: "u = 5x + 7", d: ["u = \\sqrt{5x+7}", "u = x^2", "u = 5x"], h: "Choose the inner linear expression." },
    { s: "q2b", p: "[1.2 Q2(b)] Which substitution is best for \\(\\int x^2 e^{-x^3}\\,dx\\)?", c: "u = -x^3", d: ["u = x^2", "u = e^{-x^3}", "u = x^3 + 1"], h: "Differentiate the exponent." },
    { s: "q2c", p: "[1.2 Q2(c)] Which substitution is best for the worksheet item \\(\\int (\\ln x)/x\\,dx\\)?", c: "u = \\ln x", d: ["u = x", "u = x\\ln x", "u = 1/x"], h: "du = dx/x." },
    { s: "q2d", p: "[1.2 Q2(d)] Which substitution is best for \\(\\int \\frac{\\tan^{-1}x}{1+x^2}\\,dx\\)?", c: "u = \\tan^{-1}x", d: ["u = 1+x^2", "u = x", "u = \\tan x"], h: "Differentiate arctan x." },
    { s: "q2e", p: "[1.2 Q2(e)] Which substitution is best for \\(\\int \\frac{2x^3}{\\sqrt{1+x^4}}\\,dx\\)?", c: "u = 1 + x^4", d: ["u = x^2", "u = \\sqrt{1+x^4}", "u = x^4"], h: "Differentiate the radicand." },
    { s: "q2f", p: "[1.2 Q2(f)] Which substitution is best for the worksheet item \\(\\int dx/(x\\ln^2 x)\\)?", c: "u = \\ln x", d: ["u = x\\ln x", "u = 1/x", "u = \\ln^2 x"], h: "du = dx/x." },
    { s: "q2g", p: "[1.2 Q2(g)] Which substitution is best for the worksheet item \\(\\int e^{\\sqrt{x}}/\\sqrt{x}\\,dx\\)?", c: "u = \\sqrt{x}", d: ["u = x", "u = e^{\\sqrt{x}}", "u = x^{3/2}"], h: "The root is the natural inner function." },
    { s: "q2h", p: "[1.2 Q2(h)] Which substitution is best for the worksheet item \\(\\int x^4/(1-x^5)\\,dx\\)?", c: "u = 1 - x^5", d: ["u = x^5", "u = x^4", "u = 1-x"], h: "Differentiate the denominator." },
    { s: "q2i", p: "[1.2 Q2(i)] Which substitution is best for the worksheet item \\(\\int \\sin x/\\cos^4 x\\,dx\\)?", c: "u = \\cos x", d: ["u = \\sin x", "u = \\cos^4 x", "u = \\tan x"], h: "du is -sin x dx." },
    { s: "q2j", p: "[1.2 Q2(j)] Which substitution is best for \\(\\int \\sin x/(2-\\cos x)\\,dx\\)?", c: "u = 2 - \\cos x", d: ["u = \\sin x", "u = \\cos x", "u = 2 + \\cos x"], h: "Differentiate the denominator." },
    { s: "q2p", p: "[1.2 Q2(p)] Which substitution is best for \\(\\int e^{\\tan x}/\\cos^2 x\\,dx\\)?", c: "u = \\tan x", d: ["u = \\sec x", "u = \\cos x", "u = e^{\\tan x}"], h: "du = sec^2 x dx." },
    { s: "q2q", p: "[1.2 Q2(q)] Which substitution is best for the worksheet item \\(\\int x\\sin(x^2)e^{\\cos(x^2)}\\,dx\\)?", c: "u = \\cos(x^2)", d: ["u = x^2", "u = \\sin(x^2)", "u = e^{\\cos(x^2)}"], h: "Differentiate cos(x^2).", l: "hard" },
    { s: "q2s", p: "[1.2 Q2(s)] Which substitution is best for \\(\\int \\frac{\\sin x + \\cos x}{\\sin x - \\cos x}dx\\)?", c: "u = \\sin x - \\cos x", d: ["u = \\sin x + \\cos x", "u = \\tan x", "u = \\cos x"], h: "The numerator is the derivative of the denominator." },
    { s: "q2u", p: "[1.2 Q2(u)] Which substitution is best for \\(\\int (1+\\sin 2x)^3\\cos 2x\\,dx\\)?", c: "u = 1 + \\sin 2x", d: ["u = \\cos 2x", "u = \\sin x", "u = 2x"], h: "Differentiate the bracket." },
    { s: "q10a", p: "[1.2 Q10(a)] After the substitution \\(u=2x\\), what is \\(\\int_0^2 f(2x)\\,dx\\)?", c: "\\(\\frac12\\int_0^4 f(u)\\,du\\)", d: ["\\(2\\int_0^4 f(u)\\,du\\)", "\\(\\int_0^2 f(u)\\,du\\)", "\\(\\frac12\\int_0^2 f(u)\\,du\\)"], h: "dx becomes du/2 and the bounds double." },
    { s: "q13b", p: "[1.2 Q13(b)] For \\(a>0\\), what does the worksheet deduce for \\(\\tan^{-1}a + \\tan^{-1}(1/a)\\)?", c: "\\(\\pi/2\\)", d: ["\\(\\pi/4\\)", "\\(\\pi\\)", "\\(0\\)"], h: "The two arctangent terms are complementary for positive a." },
    { s: "q15d", p: "[1.2 Q15(d)] Which substitution is best for \\(\\int \\sec x\\tan x\\sqrt{1+\\sec x}\\,dx\\)?", c: "u = 1 + \\sec x", d: ["u = \\tan x", "u = \\sec x", "u = \\sqrt{1+\\sec x}"], h: "Differentiate 1+sec x." },
    { s: "q16", p: "[1.2 Q16] Which substitution shows \\(\\int_0^1 x^a(1-x)^b dx = \\int_0^1 x^b(1-x)^a dx\\)?", c: "x = 1 - u", d: ["x = u^2", "x = 1/u", "x = a + (b-a)u"], h: "Swap x and 1-x." }
  ];

  const trig = [
    { s: "q5a", p: "[3.1 Q5(a)] Which indicated substitution should you use for \\(\\int x^3/\\sqrt{x^2-16}\\,dx\\)?", c: "x = 4\\cosh t", d: ["x = 4\\tan \\theta", "x = 4\\sin \\theta", "x = 4\\sinh t"], h: "The worksheet explicitly labels this one." },
    { s: "q5b", p: "[3.1 Q5(b)] Which indicated substitution should you use for \\(\\int x^3\\sqrt{16x^2+9}\\,dx\\)?", c: "x = (3/4)\\sinh t", d: ["x = (3/4)\\tan \\theta", "x = 4\\sinh t", "x = 3\\cosh t"], h: "Match the a^2+b^2x^2 pattern.", l: "hard" },
    { s: "q5c", p: "[3.1 Q5(c)] Which indicated substitution should you use for the worksheet item \\(\\int dx/(x\\sqrt{4-x^2})\\)?", c: "x = 2\\tanh t", d: ["x = 2\\sin \\theta", "x = 2\\cosh t", "x = 2\\tan \\theta"], h: "This sheet explicitly labels the item with tanh." },
    { s: "q6a", p: "[3.1 Q6(a)] Which indicated substitution should you use for \\(\\int dx/[(1+x^2)\\sqrt{1+x^2}]\\)?", c: "x = \\tan \\theta", d: ["x = \\sin \\theta", "x = \\sinh t", "x = \\sec \\theta"], h: "Use the 1+x^2 pattern." },
    { s: "q6b", p: "[3.1 Q6(b)] Which indicated substitution should you use for \\(\\int dx/[(x+1)\\sqrt{x^2+1}]\\)?", c: "x = \\tan \\theta", d: ["x = \\sin \\theta", "x = \\sinh t", "x = 1/u"], h: "Again, use the 1+x^2 pattern." },
    { s: "q6c", p: "[3.1 Q6(c)] Which indicated substitution should you use for \\(\\int dx/[(2-x)\\sqrt{1-x^2}]\\)?", c: "x = \\sin \\theta", d: ["x = \\tan \\theta", "x = \\sinh t", "x = 1/u"], h: "Use the 1-x^2 pattern." },
    { s: "q6d", p: "[3.1 Q6(d)] Which indicated substitution should you use for \\(\\int x\\ln x/\\sqrt{1-x^2}\\,dx\\)?", c: "x = \\sin \\theta", d: ["x = \\tan \\theta", "x = \\sinh t", "x = \\cos \\theta"], h: "Use the 1-x^2 pattern." },
    { s: "q8a", p: "[3.1 Q8(a)] Which substitution is the first method requested for the worksheet integral \\(\\int (2+x^2)^{-2}dx\\)?", c: "x = \\sqrt{2}\\,\\sinh u", d: ["x = \\sqrt{2}\\,\\tan \\theta", "x = \\sqrt{2}\\,\\sin \\theta", "x = 2\\sinh u"], h: "Part (a) asks for the hyperbolic route." },
    { s: "q8b", p: "[3.1 Q8(b)] Which substitution is the second method requested for the same worksheet integral?", c: "x = \\sqrt{2}\\,\\tan \\theta", d: ["x = \\sqrt{2}\\,\\sinh u", "x = \\sqrt{2}\\,\\sin \\theta", "x = 2\\tan \\theta"], h: "Part (b) asks for the trigonometric route." },
    { s: "q8c", p: "[3.1 Q8(c)] Which substitution usually makes \\(\\int (2+x^2)^{-2}dx\\) a little cleaner?", c: "x = \\sqrt{2}\\,\\tan \\theta", d: ["x = \\sqrt{2}\\,\\sinh u", "x = \\sqrt{2}\\,\\sin \\theta", "x = 2\\cosh u"], h: "For a^2+x^2, tangent often collapses directly to sec powers." },
    { s: "q9b", p: "[3.1 Q9(b)] Evaluate \\(\\int_{-1}^{1} \\frac{dx}{(1+x^2)\\sqrt{1-x^2}}\\).", c: "\\(\\pi/\\sqrt{2}\\)", d: ["\\(\\pi/2\\)", "\\(\\sqrt{2}\\pi\\)", "\\(1\\)"], h: "Use x = sin theta and the standard integral of 1/(1+sin^2 theta).", l: "hard" },
    { s: "q10", p: "[3.1 Q10] Which substitution does the worksheet tell you to use for the final logarithmic integral?", c: "x = \\tan \\theta", d: ["x = \\sin \\theta", "x = \\sinh t", "x = 1/u"], h: "The prompt names the substitution directly." },
    { s: "q2a", p: "[3.1 Q2(a)] A standard trigonometric choice for \\(\\int \\sqrt{25+x^2}\\,dx\\) is:", c: "x = 5\\tan \\theta", d: ["x = 5\\sin \\theta", "x = 5\\cos \\theta", "x = 5\\tanh t"], h: "Use the sqrt(a^2+x^2) pattern." },
    { s: "q2c", p: "[3.1 Q2(c)] A standard trigonometric choice for \\(\\int dx/(1-x^2)^{3/2}\\) is:", c: "x = \\sin \\theta", d: ["x = \\tan \\theta", "x = \\sinh t", "x = \\cosh t"], h: "Use the sqrt(1-x^2) pattern." },
    { s: "q2j", p: "[3.1 Q2(j)] A standard trigonometric choice for \\(\\int x^2/(1+x^2)^2\\,dx\\) is:", c: "x = \\tan \\theta", d: ["x = \\sin \\theta", "x = \\sinh t", "x = 1/u"], h: "Use the 1+x^2 pattern." }
  ];

  basic.forEach((entry) => add("basic", "1_1_Temel_Integral_Kurallari_.pdf", entry));
  uSub.forEach((entry) => add("uSub", "1_2_Degisken_Degistirme_Metodu_.pdf", entry));
  const trigMap = {};
  trig.forEach((entry) => {
    trigMap[entry.s] = add("trig", "3_1_Trigonometrik_ve_Hiperbolik_Degisken_Degistirme.pdf", entry);
  });

  const trigOnlyAliasIds = [
    trigMap.q6a,
    trigMap.q6b,
    trigMap.q6c,
    trigMap.q6d,
    trigMap.q8b,
    trigMap.q8c,
    trigMap.q9b,
    trigMap.q10,
    trigMap.q2a,
    trigMap.q2c,
    trigMap.q2j,
  ].filter(Boolean);

  data.pdfPracticeSets = [
    { id: "pdf-basic-rules-1-1", sectionId: meta.basic.sectionId, title: "1.1 Temel Integral Kurallari", subtitle: "Imported worksheet practice for Chapter 5 standard forms", pdfLabel: "1_1_Temel_Integral_Kurallari_.pdf", icon: "functions", accentBg: "bg-sky-100 dark:bg-sky-900/30", accentText: "text-sky-600 dark:text-sky-300", buttonClass: "bg-sky-500 hover:bg-sky-600 shadow-[0_3px_0_0_#1d4ed8]", itemIds: [...ids.basic] },
    { id: "pdf-u-sub-1-2", sectionId: meta.uSub.sectionId, title: "1.2 Degisken Degistirme Metodu", subtitle: "Imported worksheet practice for substitution drills", pdfLabel: "1_2_Degisken_Degistirme_Metodu_.pdf", icon: "swap_horiz", accentBg: "bg-emerald-100 dark:bg-emerald-900/30", accentText: "text-emerald-600 dark:text-emerald-300", buttonClass: "bg-emerald-500 hover:bg-emerald-600 shadow-[0_3px_0_0_#047857]", itemIds: [...ids.uSub] },
    { id: "pdf-trig-hyperbolic-3-1", sectionId: meta.trig.sectionId, title: "3.1 Trigonometrik ve Hiperbolik Degisken Degistirme", subtitle: "Imported worksheet practice for trig and hyperbolic substitution", pdfLabel: "3_1_Trigonometrik_ve_Hiperbolik_Degisken_Degistirme.pdf", icon: "orbit", accentBg: "bg-fuchsia-100 dark:bg-fuchsia-900/30", accentText: "text-fuchsia-600 dark:text-fuchsia-300", buttonClass: "bg-fuchsia-500 hover:bg-fuchsia-600 shadow-[0_3px_0_0_#a21caf]", itemIds: [...ids.trig] },
    { id: "pdf-basic-rules-scan", sectionId: meta.basic.sectionId, title: "Temel Integral Kurallari", subtitle: "Matched to the readable standard-forms worksheet set", pdfLabel: "Temel_Integral_Kurallari.pdf", icon: "calculate", accentBg: "bg-cyan-100 dark:bg-cyan-900/30", accentText: "text-cyan-600 dark:text-cyan-300", buttonClass: "bg-cyan-500 hover:bg-cyan-600 shadow-[0_3px_0_0_#0f766e]", itemIds: [...ids.basic] },
    { id: "pdf-trig-scan", sectionId: meta.trig.sectionId, title: "Trigonometrik Degisken Degistirme", subtitle: "Focused trig-only drill set matched from the readable worksheet", pdfLabel: "Trigonometrik_Degisken_Degistirme_.pdf", icon: "waves", accentBg: "bg-violet-100 dark:bg-violet-900/30", accentText: "text-violet-600 dark:text-violet-300", buttonClass: "bg-violet-500 hover:bg-violet-600 shadow-[0_3px_0_0_#6d28d9]", itemIds: trigOnlyAliasIds },
    { id: "pdf-u-sub-scan", sectionId: meta.uSub.sectionId, title: "U-Degisken Donusumu Yardimiyla Integrasyon", subtitle: "Matched to the readable substitution worksheet set", pdfLabel: "U-Degisken_Donusumu_Yardimiyla_Integrasyon.pdf", icon: "route", accentBg: "bg-amber-100 dark:bg-amber-900/30", accentText: "text-amber-600 dark:text-amber-300", buttonClass: "bg-amber-500 hover:bg-amber-600 shadow-[0_3px_0_0_#b45309]", itemIds: [...ids.uSub] },
  ];
})();
