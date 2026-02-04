window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.1";
  window.FCContentData.VERSION = VERSION;

  const items = [
{
    "id": "it-c1-limits-intro-mcq-1",
    "sectionId": "c1-limits-intro",
    "type": "mcq",
    "prompt": "If \\(f(x)\\) gets close to 5 as x approaches 2, what is \\(lim_{x \\to 2} f(x)\\)?",
    "choices": [
      "\\(2\\)",
      "\\(5\\)",
      "Does not exist"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(5\\)"
    },
    "hints": [
      "Limits describe the value \\(f(x)\\) approaches."
    ],
    "solutionSteps": [
      "The limit is the value \\(f(x)\\) approaches, which is 5."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.intro"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-intro-num-1",
    "sectionId": "c1-limits-intro",
    "type": "numeric",
    "prompt": "Compute \\(lim_{x \\to 3} (x^2 - 9)/(x - 3)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Factor the numerator."
    ],
    "solutionSteps": [
      "Factor to \\((x-3)(x+3)\\), cancel, then substitute \\(x=3\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.intro",
      "limits.algebraic"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-intro-fr-1",
    "sectionId": "c1-limits-intro",
    "type": "free-response",
    "prompt": "Explain the idea of a limit in one sentence.",
    "choices": null,
    "answer": {
      "kind": "manual",
      "value": ""
    },
    "hints": [
      "Talk about values getting close."
    ],
    "solutionSteps": [],
    "difficulty": "easy",
    "tags": [
      "limits.intro"
    ],
    "grading": {
      "mode": "manual",
      "tolerance": null
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-one-sided-mcq-1",
    "sectionId": "c1-limits-one-sided",
    "type": "mcq",
    "prompt": "A two-sided limit exists when:",
    "choices": [
      "The function is defined at a",
      "Left and right limits are equal",
      "The graph is a straight line"
    ],
    "answer": {
      "kind": "choice",
      "value": "Left and right limits are equal"
    },
    "hints": [
      "Compare left and right behavior."
    ],
    "solutionSteps": [
      "The two-sided limit exists if both sides agree."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.one_sided"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-one-sided-num-1",
    "sectionId": "c1-limits-one-sided",
    "type": "numeric",
    "prompt": "Evaluate \\(lim_{x \\to 0^-} |x|/x\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": -1,
      "tolerance": 0.001
    },
    "hints": [
      "For \\(x<0, |x|=-x\\)."
    ],
    "solutionSteps": [
      "For \\(x<0, |x|/x = -1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.one_sided"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-laws-mcq-1",
    "sectionId": "c1-limits-laws",
    "type": "mcq",
    "prompt": "If \\(lim f(x)=2\\) and \\(lim g(x)=3\\), what is \\(lim (f(x)+g(x))\\)?",
    "choices": [
      "\\(5\\)",
      "\\(6\\)",
      "Cannot be determined"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(5\\)"
    },
    "hints": [
      "Use the sum law."
    ],
    "solutionSteps": [
      "Limit of a sum is the sum of limits: \\(2+3=5\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.laws"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-laws-num-1",
    "sectionId": "c1-limits-laws",
    "type": "numeric",
    "prompt": "Compute \\(lim_{x \\to 1} (x^2 + 3x - 4)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0,
      "tolerance": 0.01
    },
    "hints": [
      "Polynomials are continuous."
    ],
    "solutionSteps": [
      "Substitute \\(x=1\\) to get 0."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.laws"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-laws-exp-1",
    "sectionId": "c1-limits-laws",
    "type": "expression",
    "prompt": "Simplify \\(lim_{x \\to 0} (sin(x))/x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "1",
      "equivalences": [
        "1.0"
      ]
    },
    "hints": [
      "This is a standard limit."
    ],
    "solutionSteps": [
      "The limit of \\(sin(x)/x\\) as \\(x->0\\) equals 1."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.laws"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-power-rule-mcq-1",
    "sectionId": "c1-power-rule",
    "type": "mcq",
    "prompt": "What is \\(d/dx (x^3)\\)?",
    "choices": [
      "\\(3x^2\\)",
      "\\(x^2\\)",
      "\\(3x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(3x^2\\)"
    },
    "hints": [
      "Bring the exponent down."
    ],
    "solutionSteps": [
      "\\(n*x^(n-1)\\) with \\(n=3\\) gives \\(3x^2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "derivatives.power_rule"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-power-rule-exp-1",
    "sectionId": "c1-power-rule",
    "type": "expression",
    "prompt": "Differentiate \\(f(x)=x^4\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "4*x^3",
      "equivalences": [
        "4x^3"
      ]
    },
    "hints": [
      "Use the power rule."
    ],
    "solutionSteps": [
      "\\(f'(x)=4*x^3\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "derivatives.power_rule"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-chain-rule-mcq-1",
    "sectionId": "c1-chain-rule",
    "type": "mcq",
    "prompt": "To differentiate \\((g(x))^5\\), you should:",
    "choices": [
      "Multiply by \\(g'(x)\\)",
      "Add 5 to the exponent",
      "Differentiate \\(g(x)\\) only"
    ],
    "answer": {
      "kind": "choice",
      "value": "Multiply by \\(g'(x)\\)"
    },
    "hints": [
      "Think outer derivative times inner derivative."
    ],
    "solutionSteps": [
      "Chain rule: \\(d/dx (g(x))^5 = 5(g(x))^4 * g'(x)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.chain_rule"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-chain-rule-exp-1",
    "sectionId": "c1-chain-rule",
    "type": "expression",
    "prompt": "Differentiate \\(y=sin(x^2)\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2*x*cos(x^2)",
      "equivalences": [
        "cos(x^2)*2*x"
      ]
    },
    "hints": [
      "Let \\(u=x^2\\) first."
    ],
    "solutionSteps": [
      "Let \\(u=x^2\\), then \\(y=sin(u)\\).",
      "\\(dy/du=cos(u), du/dx=2x\\).",
      "Multiply: \\(dy/dx=2x*cos(x^2)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.chain_rule",
      "trig.derivatives"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-intro-mcq-2",
    "sectionId": "c1-limits-intro",
    "type": "mcq",
    "prompt": "If \\(lim_{x \\to 1} f(x)=4\\), which statement must be true?",
    "choices": [
      "\\(f(1)=4\\)",
      "\\(f(x)\\) is close to 4 when x is near 1",
      "\\(f(x)=4\\) for all x"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f(x)\\) is close to 4 when x is near 1"
    },
    "hints": [
      "A limit is about values near the point."
    ],
    "solutionSteps": [
      "The limit tells how \\(f(x)\\) behaves near \\(x=1\\), not necessarily at \\(x=1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.intro"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-intro-num-2",
    "sectionId": "c1-limits-intro",
    "type": "numeric",
    "prompt": "Compute \\(lim_{x \\to 2} (x + 3)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 5,
      "tolerance": 0.01
    },
    "hints": [
      "Direct substitution works for linear functions."
    ],
    "solutionSteps": [
      "Substitute \\(x=2\\) to get 5."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.intro"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-one-sided-mcq-2",
    "sectionId": "c1-limits-one-sided",
    "type": "mcq",
    "prompt": "Evaluate \\(lim_{x \\to 0^+} |x|/x\\).",
    "choices": [
      "\\(1\\)",
      "\\(-1\\)",
      "Does not exist"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(1\\)"
    },
    "hints": [
      "For \\(x>0, |x|=x\\)."
    ],
    "solutionSteps": [
      "For \\(x>0, |x|/x = 1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.one_sided"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-one-sided-num-2",
    "sectionId": "c1-limits-one-sided",
    "type": "numeric",
    "prompt": "Evaluate \\(lim_{x \\to 2^-} (x-2)/|x-2|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": -1,
      "tolerance": 0.001
    },
    "hints": [
      "For \\(x<2, x-2\\) is negative."
    ],
    "solutionSteps": [
      "For \\(x<2, |x-2|=-(x-2)\\), so the ratio is \\(-1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.one_sided"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-laws-mcq-2",
    "sectionId": "c1-limits-laws",
    "type": "mcq",
    "prompt": "If \\(lim f(x)=1\\) and \\(lim g(x)=2\\), what is \\(lim f(x)g(x)\\)?",
    "choices": [
      "\\(2\\)",
      "\\(3\\)",
      "Cannot be determined"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(2\\)"
    },
    "hints": [
      "Use the product law."
    ],
    "solutionSteps": [
      "The limit of a product is the product of the limits: \\(1*2=2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.laws"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-laws-num-2",
    "sectionId": "c1-limits-laws",
    "type": "numeric",
    "prompt": "Compute \\(lim_{x \\to -1} (x^2 + x)/(x + 1)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": -1,
      "tolerance": 0.01
    },
    "hints": [
      "Factor the numerator."
    ],
    "solutionSteps": [
      "\\(x^2 + x = x(x+1)\\), cancel, then substitute \\(x=-1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.laws",
      "limits.algebraic"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-power-rule-mcq-2",
    "sectionId": "c1-power-rule",
    "type": "mcq",
    "prompt": "What is \\(d/dx (5x^4)\\)?",
    "choices": [
      "\\(20x^3\\)",
      "\\(5x^3\\)",
      "\\(4x^5\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(20x^3\\)"
    },
    "hints": [
      "Multiply by the exponent."
    ],
    "solutionSteps": [
      "Derivative is \\(5*4*x^(4-1)=20x^3\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "derivatives.power_rule"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-power-rule-exp-2",
    "sectionId": "c1-power-rule",
    "type": "expression",
    "prompt": "Differentiate \\(f(x)=3x^2 + 2x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "6*x + 2",
      "equivalences": [
        "6x+2",
        "2+6*x"
      ]
    },
    "hints": [
      "Differentiate term by term."
    ],
    "solutionSteps": [
      "Derivative is \\(6x + 2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "derivatives.power_rule"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-chain-rule-exp-2",
    "sectionId": "c1-chain-rule",
    "type": "expression",
    "prompt": "Differentiate \\(y=cos(5x)\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "-5*sin(5x)",
      "equivalences": [
        "-5*sin(5*x)",
        "-(5*sin(5x))"
      ]
    },
    "hints": [
      "Derivative of \\(cos\\) is \\(-sin\\), then multiply by inner derivative."
    ],
    "solutionSteps": [
      "y' \\(= -sin(5x) * 5 = -5*sin(5x)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.chain_rule"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-chain-rule-mcq-2",
    "sectionId": "c1-chain-rule",
    "type": "mcq",
    "prompt": "Differentiate \\((2x+1)^3\\).",
    "choices": [
      "\\(3(2x+1)^2\\)",
      "\\(6(2x+1)^2\\)",
      "\\(3(2x+1)^2 * 2x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(6(2x+1)^2\\)"
    },
    "hints": [
      "Derivative of outer function times inner derivative."
    ],
    "solutionSteps": [
      "Derivative is \\(3(2x+1)^2 * 2 = 6(2x+1)^2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.chain_rule"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-related-rates-mcq-1",
    "sectionId": "c1-related-rates",
    "type": "mcq",
    "prompt": "If \\(A=\\pi r^2\\) and \\(r\\) depends on \\(t\\), which equation is correct?",
    "choices": [
      "\\(\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}\\)",
      "\\(\\frac{dA}{dt}=\\pi\\frac{dr}{dt}\\)",
      "\\(\\frac{dA}{dt}=2\\pi\\frac{dr}{dt}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{dA}{dt}=2\\pi r\\frac{dr}{dt}\\)"
    },
    "hints": [
      "Differentiate with respect to time and use the chain rule."
    ],
    "solutionSteps": [
      "Differentiate \\(A=\\pi r^2\\): \\(dA/dt=2\\pi r dr/dt\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.related_rates"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-related-rates-num-1",
    "sectionId": "c1-related-rates",
    "type": "numeric",
    "prompt": "If \\(A=3r^2\\) and \\(r=2\\) and \\(dr/dt=5\\), find \\(dA/dt\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 60,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate A with respect to t."
    ],
    "solutionSteps": [
      "\\(dA/dt = 6r dr/dt = 6*2*5 = 60\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.related_rates"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-integral-intro-mcq-1",
    "sectionId": "c1-integral-intro",
    "type": "mcq",
    "prompt": "A definite integral represents:",
    "choices": [
      "Signed area under the curve",
      "Slope of the tangent line",
      "Average value of x"
    ],
    "answer": {
      "kind": "choice",
      "value": "Signed area under the curve"
    },
    "hints": [
      "Think area between curve and x-axis."
    ],
    "solutionSteps": [
      "A definite integral gives signed area."
    ],
    "difficulty": "easy",
    "tags": [
      "integrals.intro"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-integral-intro-num-1",
    "sectionId": "c1-integral-intro",
    "type": "numeric",
    "prompt": "Compute \\(\\int_0^3 1 \\, dx\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Integral of \\(1\\) is \\(x\\)."
    ],
    "solutionSteps": [
      "Evaluate \\(x\\) from \\(0\\) to \\(3\\) to get \\(3\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "integrals.intro"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-u-sub-mcq-1",
    "sectionId": "c2-u-substitution",
    "type": "mcq",
    "prompt": "A good substitution for integral of \\(2x cos(x^2) dx\\) is:",
    "choices": [
      "\\(u=x^2\\)",
      "\\(u=cos(x)\\)",
      "\\(u=2x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(u=x^2\\)"
    },
    "hints": [
      "Look for an inner function with its derivative present."
    ],
    "solutionSteps": [
      "Let \\(u=x^2\\) so \\(du=2x dx\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.substitution"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-u-sub-exp-1",
    "sectionId": "c2-u-substitution",
    "type": "expression",
    "prompt": "Evaluate integral of \\(2x cos(x^2) dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "sin(x^2)",
      "equivalences": [
        "sin(x^2)"
      ]
    },
    "hints": [
      "Let \\(u=x^2\\)."
    ],
    "solutionSteps": [
      "Integral is \\(sin(x^2)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.substitution"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-intro-mcq-1",
    "sectionId": "c2-series-intro",
    "type": "mcq",
    "prompt": "A geometric series with \\(|r|<1\\) sums to:",
    "choices": [
      "\\(a/(1-r)\\)",
      "\\(a*r\\)",
      "Does not converge"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a/(1-r)\\)"
    },
    "hints": [
      "Recall the geometric series formula."
    ],
    "solutionSteps": [
      "Sum is \\(a/(1-r)\\) when \\(|r|<1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.intro"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-intro-num-1",
    "sectionId": "c2-series-intro",
    "type": "numeric",
    "prompt": "Sum from \\(n=0\\) to infinity of \\((1/2)^n\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(a/(1-r)\\) with \\(a=1\\) and \\(r=1/2\\)."
    ],
    "solutionSteps": [
      "Sum is \\(1/(1-1/2)=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.intro"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vectors-intro-mcq-1",
    "sectionId": "c3-vectors-intro",
    "type": "mcq",
    "prompt": "If \\(A(1,-2,3)\\) and \\(B(4,0,-1)\\), what is \\(\\overrightarrow{AB}\\)?",
    "choices": [
      "\\(\\langle 3,2,-4\\rangle\\)",
      "\\(\\langle -3,-2,4\\rangle\\)",
      "\\(\\langle 5,-2,2\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 3,2,-4\\rangle\\)"
    },
    "hints": [
      "Subtract coordinates: B - A."
    ],
    "solutionSteps": [
      "\\(B-A=\\langle 4-1,0-(-2),-1-3\\rangle=\\langle 3,2,-4\\rangle\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vectors-intro-num-1",
    "sectionId": "c3-vectors-intro",
    "type": "numeric",
    "prompt": "Compute \\(\\|\\vec{v}\\|\\) for \\(\\vec{v}=\\langle 2,-1,2\\rangle\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(\\|\\vec{v}\\|=\\sqrt{v_1^2+v_2^2+v_3^2}\\)."
    ],
    "solutionSteps": [
      "\\(\\sqrt{4+1+4}=3\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vectors-intro-hard-1",
    "sectionId": "c3-vectors-intro",
    "type": "mcq",
    "prompt": "A unit vector in the direction of \\(\\langle 1,2,2\\rangle\\) is:",
    "choices": [
      "\\(\\langle 1/3,2/3,2/3\\rangle\\)",
      "\\(\\langle 1/5,2/5,2/5\\rangle\\)",
      "\\(\\langle 1/3,1/3,1/3\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 1/3,2/3,2/3\\rangle\\)"
    },
    "hints": [
      "Divide by the magnitude."
    ],
    "solutionSteps": [
      "Magnitude is 3, so divide each component by 3."
    ],
    "difficulty": "hard",
    "tags": [
      "vectors.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-partials-intro-mcq-1",
    "sectionId": "c3-partials-intro",
    "type": "mcq",
    "prompt": "For \\(f(x,y)=x^2 y + y^3\\), \\(f_x\\) is:",
    "choices": [
      "\\(2xy\\)",
      "\\(x^2+3y^2\\)",
      "\\(2x+y\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(2xy\\)"
    },
    "hints": [
      "Treat \\(y\\) as a constant."
    ],
    "solutionSteps": [
      "Differentiate \\(x^2 y\\) to get \\(2xy\\); \\(y^3\\) is constant in \\(x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "partials.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-partials-intro-num-1",
    "sectionId": "c3-partials-intro",
    "type": "numeric",
    "prompt": "For \\(f(x,y)=x^2 y + y^3\\), compute \\(f_y(2,-1)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 7,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate with respect to \\(y\\)."
    ],
    "solutionSteps": [
      "\\(f_y=x^2+3y^2\\); at \\((2,-1)\\) this is 7."
    ],
    "difficulty": "medium",
    "tags": [
      "partials.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-partials-intro-hard-1",
    "sectionId": "c3-partials-intro",
    "type": "numeric",
    "prompt": "For \\(f(x,y)=\\sqrt{x^2+y^2}\\), compute \\(f_x(3,4)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.6,
      "tolerance": 0.01
    },
    "hints": [
      "Use the chain rule."
    ],
    "solutionSteps": [
      "\\(f_x=x/\\sqrt{x^2+y^2}=3/5=0.6\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "partials.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-functions-review-mcq-1",
    "sectionId": "c1-prelim-functions-review",
    "type": "mcq",
    "prompt": "Which rule defines a function?",
    "choices": [
      "Each input maps to exactly one output.",
      "Each output maps to exactly one input.",
      "An input can map to multiple outputs."
    ],
    "answer": {
      "kind": "choice",
      "value": "Each input maps to exactly one output."
    },
    "hints": [
      "A function assigns one output to each input."
    ],
    "solutionSteps": [
      "A function must give exactly one output for every input."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.functions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-functions-review-num-1",
    "sectionId": "c1-prelim-functions-review",
    "type": "numeric",
    "prompt": "If \\(f(x)=2x+3\\), find \\(f(5)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 13,
      "tolerance": 0.01
    },
    "hints": [
      "Substitute \\(x=5\\)."
    ],
    "solutionSteps": [
      "\\(f(5)=2*5+3=13\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.functions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-functions-review-mcq-2",
    "sectionId": "c1-prelim-functions-review",
    "type": "mcq",
    "prompt": "What is the domain of \\(f(x)=sqrt(x)\\)?",
    "choices": [
      "\\(x >= 0\\)",
      "\\(x <= 0\\)",
      "all real numbers"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x >= 0\\)"
    },
    "hints": [
      "The radicand must be nonnegative."
    ],
    "solutionSteps": [
      "Square roots require \\(x >= 0\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.functions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-functions-review-mcq-3",
    "sectionId": "c1-prelim-functions-review",
    "type": "mcq",
    "prompt": "Is \\(f(x)=x^3\\) even, odd, or neither?",
    "choices": [
      "even",
      "odd",
      "neither"
    ],
    "answer": {
      "kind": "choice",
      "value": "odd"
    },
    "hints": [
      "Check \\(f(-x)\\)."
    ],
    "solutionSteps": [
      "\\(f(-x)=(-x)^3=-x^3=-f(x)\\), so the function is odd."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.functions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-graphs-mcq-1",
    "sectionId": "c1-prelim-graphs",
    "type": "mcq",
    "prompt": "An x-intercept occurs where:",
    "choices": [
      "\\(f(x)=0\\)",
      "\\(x=0\\)",
      "\\(f(x)=1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f(x)=0\\)"
    },
    "hints": [
      "x-intercepts lie on the x-axis."
    ],
    "solutionSteps": [
      "On the x-axis, \\(y=0\\) so \\(f(x)=0\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.graphs"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-graphs-mcq-2",
    "sectionId": "c1-prelim-graphs",
    "type": "mcq",
    "prompt": "If \\(g(x)=f(x-4)\\), the graph of g is the graph of f shifted:",
    "choices": [
      "right 4 units",
      "left 4 units",
      "up 4 units"
    ],
    "answer": {
      "kind": "choice",
      "value": "right 4 units"
    },
    "hints": [
      "Inside shift: \\(x-c\\) moves right."
    ],
    "solutionSteps": [
      "Replacing x with \\(x-4\\) shifts the graph right 4 units."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.graphs"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-graphs-num-1",
    "sectionId": "c1-prelim-graphs",
    "type": "numeric",
    "prompt": "For \\(f(x) = \\begin{cases} x^2 & x \\lt 0 \\\\ x & x \\ge 0 \\end{cases}\\), compute \\(f(-2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4,
      "tolerance": 0.01
    },
    "hints": [
      "Use the \\(x<0\\) branch."
    ],
    "solutionSteps": [
      "\\(f(-2)=(-2)^2=4\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.graphs"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-polynomials-rational-mcq-1",
    "sectionId": "c1-prelim-polynomials-rational",
    "type": "mcq",
    "prompt": "The degree of \\(f(x)=3x^4 - x + 1\\) is:",
    "choices": [
      "\\(4\\)",
      "\\(3\\)",
      "\\(1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(4\\)"
    },
    "hints": [
      "Degree is the highest power of x."
    ],
    "solutionSteps": [
      "The highest power is 4."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.polynomials"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-polynomials-rational-mcq-2",
    "sectionId": "c1-prelim-polynomials-rational",
    "type": "mcq",
    "prompt": "The leading coefficient of \\(f(x) = -2x^5 + x^2\\) is:",
    "choices": [
      "\\(-2\\)",
      "\\(5\\)",
      "\\(2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(-2\\)"
    },
    "hints": [
      "Look at the highest-degree term."
    ],
    "solutionSteps": [
      "The highest-degree term is \\(-2x^5\\), so the coefficient is \\(-2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.polynomials"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-polynomials-rational-mcq-3",
    "sectionId": "c1-prelim-polynomials-rational",
    "type": "mcq",
    "prompt": "The domain of \\(f(x)=(x+1)/(x-2)\\) is all real numbers except:",
    "choices": [
      "\\(x=2\\)",
      "\\(x=-2\\)",
      "\\(x=1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x=2\\)"
    },
    "hints": [
      "The denominator cannot be zero."
    ],
    "solutionSteps": [
      "\\(x-2=0\\) at \\(x=2\\), so exclude \\(x=2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.polynomials"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-polynomials-rational-mcq-4",
    "sectionId": "c1-prelim-polynomials-rational",
    "type": "mcq",
    "prompt": "Vertical asymptotes of \\(f(x)=(2x^2+1)/(x^2-4)\\) occur at:",
    "choices": [
      "\\(x=2\\) and \\(x=-2\\)",
      "\\(x=0\\)",
      "none"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x=2\\) and \\(x=-2\\)"
    },
    "hints": [
      "Set the denominator equal to zero."
    ],
    "solutionSteps": [
      "\\(x^2-4=0\\) gives \\(x=2\\) and \\(x=-2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.polynomials"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-trig-mcq-1",
    "sectionId": "c1-prelim-trig",
    "type": "mcq",
    "prompt": "The identity \\(sin^2 x + cos^2 x\\) equals:",
    "choices": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(tan x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(1\\)"
    },
    "hints": [
      "This is the Pythagorean identity."
    ],
    "solutionSteps": [
      "\\(sin^2 x + cos^2 x = 1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-trig-mcq-2",
    "sectionId": "c1-prelim-trig",
    "type": "mcq",
    "prompt": "What is \\(cos(0)\\)?",
    "choices": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(-1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(1\\)"
    },
    "hints": [
      "Use the unit circle."
    ],
    "solutionSteps": [
      "\\(cos(0)=1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-trig-mcq-3",
    "sectionId": "c1-prelim-trig",
    "type": "mcq",
    "prompt": "\\(tan x\\) is undefined when:",
    "choices": [
      "\\(cos x = 0\\)",
      "\\(sin x = 0\\)",
      "\\(x=0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(cos x = 0\\)"
    },
    "hints": [
      "\\(tan x = sin x / cos x\\)."
    ],
    "solutionSteps": [
      "\\(tan x\\) is undefined when the denominator \\(cos x\\) is 0."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-exp-log-mcq-1",
    "sectionId": "c1-prelim-exp-log",
    "type": "mcq",
    "prompt": "If \\(ln(x)=0\\), then \\(x =\\)",
    "choices": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(e\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(1\\)"
    },
    "hints": [
      "\\(ln(1)=0\\)."
    ],
    "solutionSteps": [
      "\\(x=1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.exp_log"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-exp-log-mcq-2",
    "sectionId": "c1-prelim-exp-log",
    "type": "mcq",
    "prompt": "\\(log_a(x)=y\\) is equivalent to:",
    "choices": [
      "\\(a^y = x\\)",
      "\\(a^x = y\\)",
      "\\(x^a = y\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a^y = x\\)"
    },
    "hints": [
      "Use the definition of logarithm."
    ],
    "solutionSteps": [
      "By definition, \\(log_a(x)=y\\) means \\(a^y=x\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.exp_log"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-exp-log-num-1",
    "sectionId": "c1-prelim-exp-log",
    "type": "numeric",
    "prompt": "Evaluate \\(log_2(8)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "\\(2^3=8\\)."
    ],
    "solutionSteps": [
      "\\(log_2(8)=3\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.exp_log"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-inverse-mcq-1",
    "sectionId": "c1-prelim-inverse",
    "type": "mcq",
    "prompt": "If \\(f(a)=b\\), then \\(f^{-1}(b)=\\)",
    "choices": [
      "\\(a\\)",
      "\\(b\\)",
      "\\(1/a\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a\\)"
    },
    "hints": [
      "Inverse swaps inputs and outputs."
    ],
    "solutionSteps": [
      "Since \\(f(a)=b\\), the inverse gives \\(f^{-1}(b)=a\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.inverse"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-inverse-exp-1",
    "sectionId": "c1-prelim-inverse",
    "type": "expression",
    "prompt": "Find the inverse of \\(f(x)=2x+1\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "(x-1)/2",
      "equivalences": [
        "0.5*(x-1)",
        "0.5*x-0.5"
      ]
    },
    "hints": [
      "Swap x and y, then solve for y."
    ],
    "solutionSteps": [
      "\\(x=2y+1\\) so \\(y=(x-1)/2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.inverse"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-inverse-mcq-2",
    "sectionId": "c1-prelim-inverse",
    "type": "mcq",
    "prompt": "Which function is one-to-one on all real numbers?",
    "choices": [
      "\\(f(x)=x^3\\)",
      "\\(f(x)=x^2\\)",
      "\\(f(x)=|x|\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f(x)=x^3\\)"
    },
    "hints": [
      "Use the horizontal line test."
    ],
    "solutionSteps": [
      "\\(x^3\\) is strictly increasing, so it is one-to-one."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.inverse"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-prelim-inverse-mcq-3",
    "sectionId": "c1-prelim-inverse",
    "type": "mcq",
    "prompt": "\\(arcsin(x)\\) is another notation for:",
    "choices": [
      "\\(sin^{-1}(x)\\)",
      "\\(1/sin(x)\\)",
      "\\(sin(x)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(sin^{-1}(x)\\)"
    },
    "hints": [
      "Inverse trig uses the \\(-1\\) notation."
    ],
    "solutionSteps": [
      "\\(arcsin(x)\\) means \\(sin^{-1}(x)\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "prelim.inverse"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-infinity-mcq-1",
    "sectionId": "c1-limits-infinity",
    "type": "mcq",
    "prompt": "For \\(f(x)=\\frac{2x^2+1}{x^2-4}\\), evaluate \\(\\lim_{x \\to \\infty} f(x)\\).",
    "choices": [
      "\\(0\\)",
      "\\(2\\)",
      "\\(\\infty\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(2\\)"
    },
    "hints": [
      "Compare leading terms in the numerator and denominator."
    ],
    "solutionSteps": [
      "Degrees are equal, so the limit is the ratio of leading coefficients: \\(2/1=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.at_infinity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-infinity-mcq-2",
    "sectionId": "c1-limits-infinity",
    "type": "mcq",
    "prompt": "Evaluate \\(\\lim_{x \\to \\infty} \\frac{3x^2-1}{x^2+4}\\).",
    "choices": [
      "\\(3\\)",
      "\\(0\\)",
      "\\(\\infty\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(3\\)"
    },
    "hints": [
      "Compare leading coefficients."
    ],
    "solutionSteps": [
      "Degrees are equal, so the limit is the ratio \\(3/1=3\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.at_infinity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-infinite-mcq-1",
    "sectionId": "c1-limits-infinite",
    "type": "mcq",
    "prompt": "If \\(\\lim_{x \\to 3^-} f(x) = -\\infty\\), what does this indicate about \\(x=3\\)?",
    "choices": [
      "Vertical asymptote at \\(x=3\\)",
      "Horizontal asymptote at \\(y=3\\)",
      "The limit equals \\(-3\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "Vertical asymptote at \\(x=3\\)"
    },
    "hints": [
      "Unbounded behavior near a vertical line indicates a vertical asymptote."
    ],
    "solutionSteps": [
      "An infinite limit at \\(x=3\\) means the line \\(x=3\\) is a vertical asymptote."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.infinite"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-infinite-mcq-2",
    "sectionId": "c1-limits-infinite",
    "type": "mcq",
    "prompt": "Evaluate \\(\\lim_{x \\to 1} \\frac{1}{(x-1)^2}\\).",
    "choices": [
      "\\(\\infty\\)",
      "\\(-\\infty\\)",
      "\\(0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\infty\\)"
    },
    "hints": [
      "The denominator approaches 0 while staying positive."
    ],
    "solutionSteps": [
      "As \\(x\\to1\\), \\((x-1)^2\\to0^+\\), so the limit is \\(+\\infty\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.infinite"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-continuity-mcq-1",
    "sectionId": "c1-continuity",
    "type": "mcq",
    "prompt": "Which condition is NOT required for continuity at \\(x=a\\)?",
    "choices": [
      "\\(f(a)\\) is defined",
      "\\(\\lim_{x \\to a} f(x)\\) exists",
      "\\(\\lim_{x \\to a} f(x)=f(a)\\)",
      "\\(f'(a)\\) exists"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f'(a)\\) exists"
    },
    "hints": [
      "Continuity does not require differentiability."
    ],
    "solutionSteps": [
      "The derivative does not need to exist for a function to be continuous."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.continuity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-continuity-mcq-2",
    "sectionId": "c1-continuity",
    "type": "mcq",
    "prompt": "Which function is continuous at \\(x=0\\)?",
    "choices": [
      "\\(f(x)=\\frac{1}{x}\\)",
      "\\(f(x)=x^2\\)",
      "\\(f(x)=\\frac{|x|}{x}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f(x)=x^2\\)"
    },
    "hints": [
      "Continuity requires no break at the point."
    ],
    "solutionSteps": [
      "\\(x^2\\) is defined and smooth at 0, while the other two are not."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.continuity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-discontinuities-mcq-1",
    "sectionId": "c1-discontinuities",
    "type": "mcq",
    "prompt": "A jump discontinuity occurs when:",
    "choices": [
      "one-sided limits exist but are not equal",
      "the limit exists but \\(f(a)\\) is missing",
      "function values grow without bound near \\(a\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "one-sided limits exist but are not equal"
    },
    "hints": [
      "Think of a left limit and right limit that do not match."
    ],
    "solutionSteps": [
      "A jump discontinuity happens when the left and right limits are finite but unequal."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.discontinuities"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-discontinuities-mcq-2",
    "sectionId": "c1-discontinuities",
    "type": "mcq",
    "prompt": "A removable discontinuity occurs when:",
    "choices": [
      "the limit exists but \\(f(a)\\) is missing or not equal",
      "one-sided limits are unequal",
      "function values grow without bound near \\(a\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "the limit exists but \\(f(a)\\) is missing or not equal"
    },
    "hints": [
      "Think of a hole in the graph."
    ],
    "solutionSteps": [
      "A removable discontinuity has a finite limit but a missing or mismatched function value."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.discontinuities"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-ivt-mcq-1",
    "sectionId": "c1-ivt",
    "type": "mcq",
    "prompt": "If \\(f\\) is continuous on \\([1,3]\\) and \\(f(1)=-2\\), \\(f(3)=5\\), what does the IVT guarantee?",
    "choices": [
      "There exists \\(c \\in (1,3)\\) with \\(f(c)=0\\)",
      "The function is differentiable on \\((1,3)\\)",
      "\\(f(2)=0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "There exists \\(c \\in (1,3)\\) with \\(f(c)=0\\)"
    },
    "hints": [
      "IVT guarantees a value between \\(f(1)\\) and \\(f(3)\\)."
    ],
    "solutionSteps": [
      "Because 0 is between -2 and 5, there is some \\(c\\) in \\( (1,3)\\) with \\(f(c)=0\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.ivt"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-ivt-mcq-2",
    "sectionId": "c1-ivt",
    "type": "mcq",
    "prompt": "If \\(f\\) is continuous on \\([0,2]\\) with \\(f(0)=1\\) and \\(f(2)=4\\), does IVT guarantee some \\(c\\) with \\(f(c)=3\\)?",
    "choices": [
      "Yes",
      "No",
      "Only if \\(f\\) is differentiable"
    ],
    "answer": {
      "kind": "choice",
      "value": "Yes"
    },
    "hints": [
      "3 lies between 1 and 4."
    ],
    "solutionSteps": [
      "By IVT, every value between \\(f(0)\\) and \\(f(2)\\) is attained."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.ivt"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-trig-mcq-1",
    "sectionId": "c1-limits-trig",
    "type": "mcq",
    "prompt": "Evaluate \\(\\lim_{x \\to 0} \\frac{\\sin x}{x}\\).",
    "choices": [
      "\\(0\\)",
      "\\(1\\)",
      "Does not exist"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(1\\)"
    },
    "hints": [
      "This is the fundamental trigonometric limit."
    ],
    "solutionSteps": [
      "The limit equals \\(1\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-trig-mcq-2",
    "sectionId": "c1-limits-trig",
    "type": "mcq",
    "prompt": "Evaluate \\(\\lim_{x \\to 0} \\frac{1-\\cos x}{x^2}\\).",
    "choices": [
      "\\(\\frac{1}{2}\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{1}{2}\\)"
    },
    "hints": [
      "Use a standard trig limit."
    ],
    "solutionSteps": [
      "The limit equals \\(1/2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-squeeze-mcq-1",
    "sectionId": "c1-limits-squeeze",
    "type": "mcq",
    "prompt": "If \\(g(x) \\le f(x) \\le h(x)\\) and \\(\\lim_{x \\to a} g(x)=\\lim_{x \\to a} h(x)=2\\), then \\(\\lim_{x \\to a} f(x)=\\)?",
    "choices": [
      "\\(0\\)",
      "\\(2\\)",
      "Does not exist"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(2\\)"
    },
    "hints": [
      "Use the squeeze theorem."
    ],
    "solutionSteps": [
      "Since both bounding limits are 2, the middle limit is also \\(2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "limits.squeeze"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-limits-squeeze-mcq-2",
    "sectionId": "c1-limits-squeeze",
    "type": "mcq",
    "prompt": "Evaluate \\(\\lim_{x \\to 0} x^2\\sin(1/x)\\).",
    "choices": [
      "\\(0\\)",
      "\\(1\\)",
      "Does not exist"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(0\\)"
    },
    "hints": [
      "Use \\(-1 \\le \\sin(1/x) \\le 1\\)."
    ],
    "solutionSteps": [
      "\\(-x^2 \\le x^2\\sin(1/x) \\le x^2\\).",
      "Both bounds go to 0, so the limit is 0."
    ],
    "difficulty": "medium",
    "tags": [
      "limits.squeeze"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-definition-mcq-1",
    "sectionId": "c1-deriv-definition",
    "type": "mcq",
    "prompt": "Which is the limit definition of the derivative at \\(x=a\\)?",
    "choices": [
      "\\(\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}\\)",
      "\\(\\lim_{h \\to 0} \\frac{f(a)-f(a+h)}{h}\\)",
      "\\(\\lim_{h \\to 0} \\frac{f(h)-f(a)}{h}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}\\)"
    },
    "hints": [
      "Use the difference quotient with a small increment \\(h\\)."
    ],
    "solutionSteps": [
      "The derivative at \\(a\\) is the limit of \\([f(a+h)-f(a)]/h\\) as \\(h\\to0\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.definition"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-definition-num-1",
    "sectionId": "c1-deriv-definition",
    "type": "numeric",
    "prompt": "Using the definition, find \\(f'(2)\\) for \\(f(x)=x^2\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4,
      "tolerance": 0.001
    },
    "hints": [
      "Compute \\(\\lim_{h\\to0} \\frac{(2+h)^2-4}{h}\\)."
    ],
    "solutionSteps": [
      "Expand: \\((2+h)^2-4 = 4h+h^2\\).",
      "Divide by \\(h\\): \\(4+h\\).",
      "Take the limit \\(h\\to0\\) to get \\(4\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.definition"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-rate-mcq-1",
    "sectionId": "c1-deriv-rate",
    "type": "mcq",
    "prompt": "If \\(s(t)\\) is position, then \\(s'(t)\\) represents:",
    "choices": [
      "velocity",
      "acceleration",
      "average position"
    ],
    "answer": {
      "kind": "choice",
      "value": "velocity"
    },
    "hints": [
      "The derivative is instantaneous rate of change."
    ],
    "solutionSteps": [
      "The derivative of position with respect to time is velocity."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.rate"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-rate-num-1",
    "sectionId": "c1-deriv-rate",
    "type": "numeric",
    "prompt": "Find the average rate of change of \\(f(x)=x^2\\) on \\([1,3]\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4,
      "tolerance": 0.001
    },
    "hints": [
      "Use \\(\\frac{f(b)-f(a)}{b-a}\\)."
    ],
    "solutionSteps": [
      "\\(f(3)=9\\), \\(f(1)=1\\).",
      "Average rate of change is \\((9-1)/(3-1)=4\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.rate"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-slope-mcq-1",
    "sectionId": "c1-deriv-slope",
    "type": "mcq",
    "prompt": "The slope of the tangent line to \\(y=f(x)\\) at \\(x=a\\) equals:",
    "choices": [
      "\\(f(a)\\)",
      "\\(f'(a)\\)",
      "\\(f''(a)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f'(a)\\)"
    },
    "hints": [
      "Slope equals the derivative at that point."
    ],
    "solutionSteps": [
      "The derivative gives the slope of the tangent line."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.slope"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-slope-num-1",
    "sectionId": "c1-deriv-slope",
    "type": "numeric",
    "prompt": "Find the slope of the tangent line to \\(f(x)=x^2\\) at \\(x=2\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4,
      "tolerance": 0.001
    },
    "hints": [
      "Compute \\(f'(x)=2x\\)."
    ],
    "solutionSteps": [
      "\\(f'(x)=2x\\), so \\(f'(2)=4\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "derivatives.slope"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-diff-vs-continuity-mcq-1",
    "sectionId": "c1-diff-vs-continuity",
    "type": "mcq",
    "prompt": "If \\(f\\) is differentiable at \\(x=a\\), then \\(f\\) is:",
    "choices": [
      "continuous at \\(a\\)",
      "discontinuous at \\(a\\)",
      "only right-continuous at \\(a\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "continuous at \\(a\\)"
    },
    "hints": [
      "Differentiability implies continuity."
    ],
    "solutionSteps": [
      "If a function is differentiable, it must be continuous at that point."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.differentiability"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-diff-vs-continuity-mcq-2",
    "sectionId": "c1-diff-vs-continuity",
    "type": "mcq",
    "prompt": "Is \\(f(x)=|x|\\) differentiable at \\(x=0\\)?",
    "choices": [
      "Yes, because it is continuous",
      "No, there is a corner",
      "Yes, because \\(f'(0)=0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "No, there is a corner"
    },
    "hints": [
      "Check the left and right derivatives."
    ],
    "solutionSteps": [
      "The left derivative is \\(-1\\) and the right derivative is \\(1\\), so \\(f'(0)\\) does not exist."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.differentiability"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-higher-derivatives-mcq-1",
    "sectionId": "c1-higher-derivatives",
    "type": "mcq",
    "prompt": "The second derivative \\(f''(x)\\) is commonly used to describe:",
    "choices": [
      "concavity or acceleration",
      "average value",
      "domain"
    ],
    "answer": {
      "kind": "choice",
      "value": "concavity or acceleration"
    },
    "hints": [
      "Think curvature or acceleration."
    ],
    "solutionSteps": [
      "The second derivative indicates concavity or acceleration."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.higher_order"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-higher-derivatives-num-1",
    "sectionId": "c1-higher-derivatives",
    "type": "numeric",
    "prompt": "If \\(f(x)=x^3\\), find \\(f''(1)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.001
    },
    "hints": [
      "Compute \\(f'(x)\\) then \\(f''(x)\\)."
    ],
    "solutionSteps": [
      "\\(f'(x)=3x^2\\) and \\(f''(x)=6x\\).",
      "So \\(f''(1)=6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.higher_order"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-constant-multiple-rule-mcq-1",
    "sectionId": "c1-constant-multiple-rule",
    "type": "mcq",
    "prompt": "If \\(f(x)=5x^3\\), then \\(f'(x)\\) is:",
    "choices": [
      "\\(15x^2\\)",
      "\\(5x^2\\)",
      "\\(5x^3\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(15x^2\\)"
    },
    "hints": [
      "Use the constant multiple and power rules."
    ],
    "solutionSteps": [
      "Derivative is \\(5 * 3x^2 = 15x^2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.constant_multiple"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-constant-multiple-rule-exp-1",
    "sectionId": "c1-constant-multiple-rule",
    "type": "expression",
    "prompt": "Differentiate \\(y=-7x^4\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "-28*x^3",
      "equivalences": [
        "-7*4*x^3"
      ]
    },
    "hints": [
      "Differentiate \\(x^4\\) and multiply by \\(-7\\)."
    ],
    "solutionSteps": [
      "Derivative of \\(x^4\\) is \\(4x^3\\).",
      "Multiply by \\(-7\\) to get \\(-28x^3\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.constant_multiple"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-sum-diff-rule-mcq-1",
    "sectionId": "c1-sum-diff-rule",
    "type": "mcq",
    "prompt": "If \\(h(x)=f(x)+g(x)\\), then \\(h'(x)\\) equals:",
    "choices": [
      "\\(f'(x)+g'(x)\\)",
      "\\(f'(x)g'(x)\\)",
      "\\(f(x)+g(x)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f'(x)+g'(x)\\)"
    },
    "hints": [
      "Differentiate term-by-term."
    ],
    "solutionSteps": [
      "The derivative of a sum is the sum of derivatives."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.sum_diff"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-sum-diff-rule-exp-1",
    "sectionId": "c1-sum-diff-rule",
    "type": "expression",
    "prompt": "Differentiate \\(y=x^3-5x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "3*x^2-5",
      "equivalences": [
        "3*x^2+(-5)"
      ]
    },
    "hints": [
      "Differentiate each term."
    ],
    "solutionSteps": [
      "Derivative of \\(x^3\\) is \\(3x^2\\).",
      "Derivative of \\(-5x\\) is \\(-5\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.sum_diff"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-product-rule-mcq-1",
    "sectionId": "c1-product-rule",
    "type": "mcq",
    "prompt": "The product rule states that \\((fg)'\\) equals:",
    "choices": [
      "\\(f'g+fg'\\)",
      "\\(f'g'\\)",
      "\\(f+g\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f'g+fg'\\)"
    },
    "hints": [
      "Differentiate one factor at a time."
    ],
    "solutionSteps": [
      "Product rule: \\((fg)'=f'g+fg'\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.product_rule"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-product-rule-exp-1",
    "sectionId": "c1-product-rule",
    "type": "expression",
    "prompt": "Differentiate \\(y=x^2\\sin x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2*x*sin(x)+x^2*cos(x)",
      "equivalences": [
        "x^2*cos(x)+2*x*sin(x)"
      ]
    },
    "hints": [
      "Use \\((uv)'=u'v+uv'\\)."
    ],
    "solutionSteps": [
      "Let \\(u=x^2\\), \\(v=\\sin x\\).",
      "\\(u'=2x\\), \\(v'=\\cos x\\).",
      "Combine: \\(2x\\sin x + x^2\\cos x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.product_rule"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-quotient-rule-mcq-1",
    "sectionId": "c1-quotient-rule",
    "type": "mcq",
    "prompt": "For \\(y=\\frac{f(x)}{g(x)}\\), \\(y'\\) equals:",
    "choices": [
      "\\(\\frac{f'g-fg'}{g^2}\\)",
      "\\(\\frac{f'g+fg'}{g^2}\\)",
      "\\(\\frac{f'}{g'}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{f'g-fg'}{g^2}\\)"
    },
    "hints": [
      "Use \\((f/g)'=(f'g-fg')/g^2\\)."
    ],
    "solutionSteps": [
      "Quotient rule gives \\(\\frac{f'g-fg'}{g^2}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.quotient_rule"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-quotient-rule-exp-1",
    "sectionId": "c1-quotient-rule",
    "type": "expression",
    "prompt": "Differentiate \\(y=\\frac{x^2+1}{x}\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "(x^2-1)/x^2",
      "equivalences": [
        "1-1/x^2"
      ]
    },
    "hints": [
      "Use the quotient rule."
    ],
    "solutionSteps": [
      "Let \\(f=x^2+1\\), \\(g=x\\).",
      "Then \\(f'=2x\\), \\(g'=1\\).",
      "So \\(y'=(2x*x-(x^2+1))/x^2=(x^2-1)/x^2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.quotient_rule"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-poly-mcq-1",
    "sectionId": "c1-deriv-poly",
    "type": "mcq",
    "prompt": "Differentiate \\(f(x)=3x^4-2x+1\\).",
    "choices": [
      "\\(12x^3-2\\)",
      "\\(12x^4-2\\)",
      "\\(3x^3-2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(12x^3-2\\)"
    },
    "hints": [
      "Differentiate term-by-term."
    ],
    "solutionSteps": [
      "Apply the power rule to each term."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.polynomial"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-poly-exp-1",
    "sectionId": "c1-deriv-poly",
    "type": "expression",
    "prompt": "Differentiate \\(f(x)=x^5+2x^2\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "5*x^4+4*x",
      "equivalences": [
        "5*x^4+4*x"
      ]
    },
    "hints": [
      "Use the power rule on each term."
    ],
    "solutionSteps": [
      "Derivative of \\(x^5\\) is \\(5x^4\\).",
      "Derivative of \\(2x^2\\) is \\(4x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.polynomial"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-trig-mcq-1",
    "sectionId": "c1-deriv-trig",
    "type": "mcq",
    "prompt": "The derivative of \\(\\cos x\\) is:",
    "choices": [
      "\\(-\\sin x\\)",
      "\\(\\sin x\\)",
      "\\(\\cos x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(-\\sin x\\)"
    },
    "hints": [
      "Recall basic trig derivatives."
    ],
    "solutionSteps": [
      "\\(\\frac{d}{dx}(\\cos x)=-\\sin x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-trig-exp-1",
    "sectionId": "c1-deriv-trig",
    "type": "expression",
    "prompt": "Differentiate \\(y=\\sin x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "cos(x)",
      "equivalences": [
        "cos(x)"
      ]
    },
    "hints": [
      "Derivative of \\(\\sin x\\) is \\(\\cos x\\)."
    ],
    "solutionSteps": [
      "Apply the basic trig derivative."
    ],
    "difficulty": "easy",
    "tags": [
      "derivatives.trig"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-inv-trig-mcq-1",
    "sectionId": "c1-deriv-inv-trig",
    "type": "mcq",
    "prompt": "The derivative of \\(\\arctan x\\) is:",
    "choices": [
      "\\(\\frac{1}{1+x^2}\\)",
      "\\(\\frac{1}{\\sqrt{1-x^2}}\\)",
      "\\(-\\frac{1}{1+x^2}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{1}{1+x^2}\\)"
    },
    "hints": [
      "Recall the standard inverse trig derivatives."
    ],
    "solutionSteps": [
      "\\(\\frac{d}{dx}(\\arctan x)=\\frac{1}{1+x^2}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.inverse_trig"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-inv-trig-exp-1",
    "sectionId": "c1-deriv-inv-trig",
    "type": "expression",
    "prompt": "Differentiate \\(y=\\arcsin x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "1/sqrt(1-x^2)",
      "equivalences": [
        "(1-x^2)^(-1/2)"
      ]
    },
    "hints": [
      "Use the inverse trig derivative formula."
    ],
    "solutionSteps": [
      "Derivative of \\(\\arcsin x\\) is \\(1/\\sqrt{1-x^2}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.inverse_trig"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-exp-mcq-1",
    "sectionId": "c1-deriv-exp",
    "type": "mcq",
    "prompt": "The derivative of \\(e^x\\) is:",
    "choices": [
      "\\(e^x\\)",
      "\\(xe^{x-1}\\)",
      "\\(\\ln x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(e^x\\)"
    },
    "hints": [
      "The exponential function is its own derivative."
    ],
    "solutionSteps": [
      "\\(\\frac{d}{dx}(e^x)=e^x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.exponential"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-exp-exp-1",
    "sectionId": "c1-deriv-exp",
    "type": "expression",
    "prompt": "Differentiate \\(y=2^x\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2^x*log(2)",
      "equivalences": [
        "log(2)*2^x"
      ]
    },
    "hints": [
      "Use \\(\\frac{d}{dx}(a^x)=a^x\\ln a\\)."
    ],
    "solutionSteps": [
      "Derivative is \\(2^x\\ln 2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.exponential"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-log-mcq-1",
    "sectionId": "c1-deriv-log",
    "type": "mcq",
    "prompt": "The derivative of \\(\\ln x\\) is:",
    "choices": [
      "\\(\\frac{1}{x}\\)",
      "\\(x\\)",
      "\\(\\ln x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{1}{x}\\)"
    },
    "hints": [
      "Recall the basic derivative of \\(\\ln x\\)."
    ],
    "solutionSteps": [
      "\\(\\frac{d}{dx}(\\ln x)=1/x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.logarithmic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-log-exp-1",
    "sectionId": "c1-deriv-log",
    "type": "expression",
    "prompt": "Differentiate \\(y=\\ln(x^3)\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "3/x",
      "equivalences": [
        "3*x^(-1)"
      ]
    },
    "hints": [
      "Use \\(\\frac{d}{dx}\\ln(u)=u'/u\\)."
    ],
    "solutionSteps": [
      "\\(y=\\ln(x^3)\\) gives \\(y'=(3x^2)/(x^3)=3/x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.logarithmic"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-implicit-mcq-1",
    "sectionId": "c1-deriv-implicit",
    "type": "mcq",
    "prompt": "Implicit differentiation is used when:",
    "choices": [
      "the equation is not solved for \\(y\\)",
      "the function is constant",
      "the function is a simple polynomial"
    ],
    "answer": {
      "kind": "choice",
      "value": "the equation is not solved for \\(y\\)"
    },
    "hints": [
      "Think of equations like \\(x^2+y^2=1\\)."
    ],
    "solutionSteps": [
      "Implicit differentiation is used when \\(y\\) is not isolated."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.implicit"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-implicit-num-1",
    "sectionId": "c1-deriv-implicit",
    "type": "numeric",
    "prompt": "For \\(x^2+y^2=25\\), find \\(\\frac{dy}{dx}\\) at \\((3,4)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": -0.75,
      "tolerance": 0.001
    },
    "hints": [
      "Differentiate implicitly: \\(2x+2y\\frac{dy}{dx}=0\\)."
    ],
    "solutionSteps": [
      "\\(2x+2y\\frac{dy}{dx}=0\\) so \\(\\frac{dy}{dx}=-x/y\\).",
      "At \\((3,4)\\), \\(dy/dx=-3/4=-0.75\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.implicit"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-log-diff-mcq-1",
    "sectionId": "c1-deriv-log-diff",
    "type": "mcq",
    "prompt": "Logarithmic differentiation is most useful for:",
    "choices": [
      "functions with variables in exponents",
      "simple polynomials",
      "constant functions"
    ],
    "answer": {
      "kind": "choice",
      "value": "functions with variables in exponents"
    },
    "hints": [
      "Think about \\(x^x\\) or products of many factors."
    ],
    "solutionSteps": [
      "Logarithmic differentiation simplifies problems with variables in exponents."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.log_diff"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-deriv-log-diff-num-1",
    "sectionId": "c1-deriv-log-diff",
    "type": "numeric",
    "prompt": "If \\(y=x^x\\), find \\(y'\\) at \\(x=1\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.001
    },
    "hints": [
      "Use \\(y=x^x\\Rightarrow \\ln y = x\\ln x\\)."
    ],
    "solutionSteps": [
      "From \\(\\ln y = x\\ln x\\), \\(y' = x^x(\\ln x + 1)\\).",
      "At \\(x=1\\), \\(y'=1*(0+1)=1\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "derivatives.log_diff"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-linear-approx-mcq-1",
    "sectionId": "c1-linear-approx",
    "type": "mcq",
    "prompt": "For \\(f(x)=x^2\\) and \\(a=2\\), the linearization \\(L(x)\\) is:",
    "choices": [
      "\\(L(x)=4+4(x-2)\\)",
      "\\(L(x)=4+2(x-2)\\)",
      "\\(L(x)=2+4(x-2)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(L(x)=4+4(x-2)\\)"
    },
    "hints": [
      "Use \\(L(x)=f(a)+f'(a)(x-a)\\)."
    ],
    "solutionSteps": [
      "\\(f(2)=4\\), \\(f'(x)=2x\\), so \\(f'(2)=4\\). Then \\(L(x)=4+4(x-2)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.linear_approx"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-linear-approx-num-1",
    "sectionId": "c1-linear-approx",
    "type": "numeric",
    "prompt": "Use linear approximation of \\(f(x)=\\sqrt{x}\\) at \\(a=4\\) to estimate \\(\\sqrt{4.1}\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2.025,
      "tolerance": 0.01
    },
    "hints": [
      "Compute \\(L(x)=f(a)+f'(a)(x-a)\\)."
    ],
    "solutionSteps": [
      "\\(f(4)=2\\), \\(f'(4)=1/4\\), so \\(L(4.1)=2+0.025=2.025\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.linear_approx"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-differentials-mcq-1",
    "sectionId": "c1-differentials",
    "type": "mcq",
    "prompt": "Which formula defines the differential of \\(y=f(x)\\)?",
    "choices": [
      "\\(dy=f'(x)\\,dx\\)",
      "\\(dy=f(x)\\,dx\\)",
      "\\(dy=\\frac{f(x)}{dx}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(dy=f'(x)\\,dx\\)"
    },
    "hints": [
      "A differential uses the derivative times \\(dx\\)."
    ],
    "solutionSteps": [
      "By definition, \\(dy=f'(x)\\,dx\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.differentials"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-differentials-num-1",
    "sectionId": "c1-differentials",
    "type": "numeric",
    "prompt": "If \\(f(x)=x^3\\) and \\(x=2\\) with \\(dx=0.05\\), estimate \\(dy\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.6,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(dy=f'(x)\\,dx\\)."
    ],
    "solutionSteps": [
      "\\(f'(x)=3x^2\\), so \\(f'(2)=12\\). Then \\(dy\\approx 12*0.05=0.6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.differentials"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-critical-points-mcq-1",
    "sectionId": "c1-critical-points",
    "type": "mcq",
    "prompt": "A critical point occurs where:",
    "choices": [
      "\\(f'(c)=0\\) or \\(f'(c)\\) does not exist",
      "\\(f(c)=0\\)",
      "\\(f''(c)=0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f'(c)=0\\) or \\(f'(c)\\) does not exist"
    },
    "hints": [
      "Use the definition involving the first derivative."
    ],
    "solutionSteps": [
      "Critical points occur where the derivative is zero or undefined."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.critical_points"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-critical-points-num-1",
    "sectionId": "c1-critical-points",
    "type": "numeric",
    "prompt": "Find the critical point of \\(f(x)=x^2+4x\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": -2,
      "tolerance": 0.001
    },
    "hints": [
      "Set \\(f'(x)=0\\)."
    ],
    "solutionSteps": [
      "\\(f'(x)=2x+4\\). Solve \\(2x+4=0\\) to get \\(x=-2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.critical_points"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-increasing-decreasing-mcq-1",
    "sectionId": "c1-increasing-decreasing",
    "type": "mcq",
    "prompt": "If \\(f'(x)>0\\) on an interval, then \\(f\\) is:",
    "choices": [
      "increasing",
      "decreasing",
      "constant"
    ],
    "answer": {
      "kind": "choice",
      "value": "increasing"
    },
    "hints": [
      "Positive derivative means the function rises as x increases."
    ],
    "solutionSteps": [
      "When \\(f'(x)>0\\), the function increases on that interval."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.monotonicity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-increasing-decreasing-mcq-2",
    "sectionId": "c1-increasing-decreasing",
    "type": "mcq",
    "prompt": "If \\(f'(x)=2x-4\\), on which interval is \\(f\\) increasing?",
    "choices": [
      "\\(x>2\\)",
      "\\(x<2\\)",
      "\\(x\\le 2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x>2\\)"
    },
    "hints": [
      "Increasing where the derivative is positive."
    ],
    "solutionSteps": [
      "Solve \\(2x-4>0\\) to get \\(x>2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.monotonicity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-concavity-mcq-1",
    "sectionId": "c1-concavity",
    "type": "mcq",
    "prompt": "A function is concave up where:",
    "choices": [
      "\\(f''(x)>0\\)",
      "\\(f'(x)>0\\)",
      "\\(f''(x)<0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f''(x)>0\\)"
    },
    "hints": [
      "Concavity depends on the second derivative."
    ],
    "solutionSteps": [
      "Concave up means the second derivative is positive."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.concavity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-concavity-mcq-2",
    "sectionId": "c1-concavity",
    "type": "mcq",
    "prompt": "If \\(f''(x)=6x\\), where is \\(f\\) concave up?",
    "choices": [
      "\\(x>0\\)",
      "\\(x<0\\)",
      "all real x"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x>0\\)"
    },
    "hints": [
      "Concave up where \\(f''(x)>0\\)."
    ],
    "solutionSteps": [
      "Since \\(6x>0\\) when \\(x>0\\), the function is concave up there."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.concavity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-inflection-mcq-1",
    "sectionId": "c1-inflection",
    "type": "mcq",
    "prompt": "An inflection point occurs where:",
    "choices": [
      "the concavity changes",
      "\\(f'(x)=0\\)",
      "\\(f(x)=0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "the concavity changes"
    },
    "hints": [
      "Look for a change in concavity."
    ],
    "solutionSteps": [
      "Inflection points are where concavity switches."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.inflection"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-inflection-num-1",
    "sectionId": "c1-inflection",
    "type": "numeric",
    "prompt": "Find the x-coordinate of the inflection point for \\(f(x)=x^3-3x\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0,
      "tolerance": 0.001
    },
    "hints": [
      "Set \\(f''(x)=0\\) and check for concavity change."
    ],
    "solutionSteps": [
      "\\(f''(x)=6x\\). Set \\(6x=0\\) to get \\(x=0\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.inflection"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-first-derivative-test-mcq-1",
    "sectionId": "c1-first-derivative-test",
    "type": "mcq",
    "prompt": "If \\(f'(x)\\) changes from positive to negative at \\(x=c\\), then \\(f\\) has:",
    "choices": [
      "a local maximum at \\(c\\)",
      "a local minimum at \\(c\\)",
      "an inflection point at \\(c\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "a local maximum at \\(c\\)"
    },
    "hints": [
      "Think about the sign change of \\(f'(x)\\)."
    ],
    "solutionSteps": [
      "Positive to negative means the function switches from increasing to decreasing."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.first_derivative_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-first-derivative-test-mcq-2",
    "sectionId": "c1-first-derivative-test",
    "type": "mcq",
    "prompt": "If \\(f'(x)=(x-2)(x+1)\\), what does the first derivative test say at \\(x=2\\)?",
    "choices": [
      "local minimum",
      "local maximum",
      "neither"
    ],
    "answer": {
      "kind": "choice",
      "value": "local minimum"
    },
    "hints": [
      "Check the sign of \\(f'(x)\\) on each side of \\(x=2\\)."
    ],
    "solutionSteps": [
      "The sign changes from negative to positive at \\(x=2\\), so there is a local minimum."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.first_derivative_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-second-derivative-test-mcq-1",
    "sectionId": "c1-second-derivative-test",
    "type": "mcq",
    "prompt": "If \\(f'(c)=0\\) and \\(f''(c)>0\\), then \\(f\\) has:",
    "choices": [
      "a local minimum at \\(c\\)",
      "a local maximum at \\(c\\)",
      "an inflection point at \\(c\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "a local minimum at \\(c\\)"
    },
    "hints": [
      "Use the sign of \\(f''(c)\\)."
    ],
    "solutionSteps": [
      "A positive second derivative indicates a local minimum."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.second_derivative_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-second-derivative-test-mcq-2",
    "sectionId": "c1-second-derivative-test",
    "type": "mcq",
    "prompt": "If \\(f'(c)=0\\) and \\(f''(c)=0\\), the second derivative test is:",
    "choices": [
      "inconclusive",
      "a local minimum",
      "a local maximum"
    ],
    "answer": {
      "kind": "choice",
      "value": "inconclusive"
    },
    "hints": [
      "Zero second derivative does not decide concavity."
    ],
    "solutionSteps": [
      "When \\(f''(c)=0\\), the test does not determine max or min."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.second_derivative_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-curve-sketching-mcq-1",
    "sectionId": "c1-curve-sketching",
    "type": "mcq",
    "prompt": "During curve sketching, the first derivative is used to find:",
    "choices": [
      "intervals of increase/decrease",
      "inflection points",
      "y-intercepts only"
    ],
    "answer": {
      "kind": "choice",
      "value": "intervals of increase/decrease"
    },
    "hints": [
      "The sign of \\(f'(x)\\) indicates monotonicity."
    ],
    "solutionSteps": [
      "Use \\(f'(x)\\) to determine where the function increases or decreases."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.curve_sketching"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-curve-sketching-mcq-2",
    "sectionId": "c1-curve-sketching",
    "type": "mcq",
    "prompt": "Inflection points are found by analyzing:",
    "choices": [
      "\\(f''(x)\\)",
      "\\(f'(x)\\)",
      "\\(f(x)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f''(x)\\)"
    },
    "hints": [
      "Inflection points involve concavity."
    ],
    "solutionSteps": [
      "Concavity is determined by the second derivative."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.curve_sketching"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-optimization-mcq-1",
    "sectionId": "c1-optimization",
    "type": "mcq",
    "prompt": "In optimization, the first step is to:",
    "choices": [
      "write the quantity to optimize as a function of one variable",
      "solve \\(f'(x)=0\\) immediately",
      "plug in numbers first"
    ],
    "answer": {
      "kind": "choice",
      "value": "write the quantity to optimize as a function of one variable"
    },
    "hints": [
      "Set up the objective function before differentiating."
    ],
    "solutionSteps": [
      "You must express the objective in one variable to optimize it."
    ],
    "difficulty": "hard",
    "tags": [
      "derivatives.optimization"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-optimization-num-1",
    "sectionId": "c1-optimization",
    "type": "numeric",
    "prompt": "A rectangle has perimeter 30. What is the maximum possible area?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 56.25,
      "tolerance": 0.01
    },
    "hints": [
      "Let sides be \\(x\\) and \\(15-x\\)."
    ],
    "solutionSteps": [
      "Area \\(A=x(15-x)\\). Max when \\(A'(x)=15-2x=0\\), so \\(x=7.5\\) and \\(A=56.25\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "derivatives.optimization"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c1-mvt-mcq-1",
    "sectionId": "c1-mvt",
    "type": "mcq",
    "prompt": "The Mean Value Theorem requires that \\(f\\) is:",
    "choices": [
      "continuous on \\([a,b]\\) and differentiable on \\((a,b)\\)",
      "differentiable on \\([a,b]\\) only",
      "continuous on \\((a,b)\\) only"
    ],
    "answer": {
      "kind": "choice",
      "value": "continuous on \\([a,b]\\) and differentiable on \\((a,b)\\)"
    },
    "hints": [
      "Both continuity and differentiability are required."
    ],
    "solutionSteps": [
      "MVT needs continuity on the closed interval and differentiability on the open interval."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.mvt"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-mvt-num-1",
    "sectionId": "c1-mvt",
    "type": "numeric",
    "prompt": "For \\(f(x)=x^2\\) on \\([0,2]\\), find \\(c\\) guaranteed by the Mean Value Theorem.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.001
    },
    "hints": [
      "Set \\(f'(c)\\) equal to the average slope."
    ],
    "solutionSteps": [
      "Average slope is \\((4-0)/2=2\\). Solve \\(2c=2\\) to get \\(c=1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.mvt"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-rolle-mcq-1",
    "sectionId": "c1-rolle",
    "type": "mcq",
    "prompt": "Rolle's Theorem applies when:",
    "choices": [
      "the function is continuous on \\([a,b]\\), differentiable on \\((a,b)\\), and \\(f(a)=f(b)\\)",
      "\\(f'(a)=f'(b)\\)",
      "\\(f''(x)>0\\) on \\((a,b)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "the function is continuous on \\([a,b]\\), differentiable on \\((a,b)\\), and \\(f(a)=f(b)\\)"
    },
    "hints": [
      "You need continuity, differentiability, and equal endpoint values."
    ],
    "solutionSteps": [
      "Those are the three hypotheses of Rolle's Theorem."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.rolle"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-rolle-num-1",
    "sectionId": "c1-rolle",
    "type": "numeric",
    "prompt": "For \\(f(x)=x^2-4x+3\\) on \\([1,3]\\), find \\(c\\) guaranteed by Rolle's Theorem.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.001
    },
    "hints": [
      "Solve \\(f'(x)=0\\)."
    ],
    "solutionSteps": [
      "\\(f'(x)=2x-4\\). Set \\(2x-4=0\\) to get \\(x=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "derivatives.rolle"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-lhopital-mcq-1",
    "sectionId": "c1-lhopital",
    "type": "mcq",
    "prompt": "L'Hopital's Rule applies directly to limits of the form:",
    "choices": [
      "\\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\)",
      "\\(0\\cdot\\infty\\)",
      "\\(1^\\infty\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\)"
    },
    "hints": [
      "Check for the indeterminate fraction forms."
    ],
    "solutionSteps": [
      "L'Hopital applies to \\(0/0\\) and \\(\\infty/\\infty\\) forms."
    ],
    "difficulty": "hard",
    "tags": [
      "derivatives.lhopital"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-lhopital-num-1",
    "sectionId": "c1-lhopital",
    "type": "numeric",
    "prompt": "Compute \\(\\lim_{x\\to 0} \\frac{1-\\cos x}{x^2}\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.5,
      "tolerance": 0.001
    },
    "hints": [
      "Apply L'Hopital's Rule twice."
    ],
    "solutionSteps": [
      "First derivative gives \\(\\lim_{x\\to 0} \\frac{\\sin x}{2x}\\). Apply again to get \\(\\lim_{x\\to 0} \\frac{\\cos x}{2}=\\frac{1}{2}\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "derivatives.lhopital"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-antiderivatives-mcq-1",
    "sectionId": "c1-antiderivatives",
    "type": "mcq",
    "prompt": "Which function is an antiderivative of \\(f(x)=2x\\)?",
    "choices": [
      "\\(x^2\\)",
      "\\(2x\\)",
      "\\(x^3\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x^2\\)"
    },
    "hints": [
      "Differentiate the candidate."
    ],
    "solutionSteps": [
      "Since \\(\\frac{d}{dx}(x^2)=2x\\), \\(x^2\\) is an antiderivative."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.antiderivatives"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-antiderivatives-num-1",
    "sectionId": "c1-antiderivatives",
    "type": "numeric",
    "prompt": "If \\(F'(x)=2x\\) and \\(F(0)=5\\), find \\(F(3)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 14,
      "tolerance": 0.001
    },
    "hints": [
      "First find \\(F(x)\\), then plug in \\(x=3\\)."
    ],
    "solutionSteps": [
      "An antiderivative is \\(F(x)=x^2+C\\).",
      "Since \\(F(0)=5\\), \\(C=5\\).",
      "Thus \\(F(3)=9+5=14\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.antiderivatives"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-indefinite-integrals-mcq-1",
    "sectionId": "c1-indefinite-integrals",
    "type": "mcq",
    "prompt": "An indefinite integral represents:",
    "choices": [
      "a family of antiderivatives",
      "the area between curves",
      "the slope of a tangent line"
    ],
    "answer": {
      "kind": "choice",
      "value": "a family of antiderivatives"
    },
    "hints": [
      "Think of \\(F(x)+C\\)."
    ],
    "solutionSteps": [
      "An indefinite integral gives all antiderivatives."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.indefinite"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-indefinite-integrals-exp-1",
    "sectionId": "c1-indefinite-integrals",
    "type": "expression",
    "prompt": "Compute \\(\\int 3x^2\\,dx\\) (ignore +C).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "x^3",
      "equivalences": [
        "x^3"
      ]
    },
    "hints": [
      "Use the power rule for integration."
    ],
    "solutionSteps": [
      "\\(\\int 3x^2\\,dx = x^3 + C\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.indefinite"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-basic-integration-rules-mcq-1",
    "sectionId": "c1-basic-integration-rules",
    "type": "mcq",
    "prompt": "For \\(n\\ne -1\\), \\(\\int x^n\\,dx\\) equals:",
    "choices": [
      "\\(\\frac{x^{n+1}}{n+1}+C\\)",
      "\\(nx^{n-1}+C\\)",
      "\\(\\ln|x|+C\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{x^{n+1}}{n+1}+C\\)"
    },
    "hints": [
      "Use the power rule for integration."
    ],
    "solutionSteps": [
      "The power rule gives \\(x^{n+1}/(n+1)+C\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.basic_rules"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-basic-integration-rules-exp-1",
    "sectionId": "c1-basic-integration-rules",
    "type": "expression",
    "prompt": "Compute \\(\\int (2x+3)\\,dx\\) (ignore +C).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "x^2+3*x",
      "equivalences": [
        "x^2+3*x"
      ]
    },
    "hints": [
      "Integrate term-by-term."
    ],
    "solutionSteps": [
      "\\(\\int 2x\\,dx = x^2\\), \\(\\int 3\\,dx = 3x\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.basic_rules"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-riemann-sums-mcq-1",
    "sectionId": "c1-riemann-sums",
    "type": "mcq",
    "prompt": "For \\([a,b]\\) divided into \\(n\\) equal parts, \\(\\Delta x\\) equals:",
    "choices": [
      "\\(\\frac{b-a}{n}\\)",
      "\\(\\frac{a-b}{n}\\)",
      "\\(\\frac{a+b}{n}\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\frac{b-a}{n}\\)"
    },
    "hints": [
      "Width equals total length divided by \\(n\\)."
    ],
    "solutionSteps": [
      "The interval length is \\(b-a\\), so \\(\\Delta x=(b-a)/n\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.riemann"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-riemann-sums-num-1",
    "sectionId": "c1-riemann-sums",
    "type": "numeric",
    "prompt": "Approximate \\(\\int_0^1 x\\,dx\\) using a right Riemann sum with \\(n=2\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.75,
      "tolerance": 0.001
    },
    "hints": [
      "Use right endpoints \\(x=0.5\\) and \\(x=1\\)."
    ],
    "solutionSteps": [
      "\\(\\Delta x=0.5\\).",
      "Right sum: \\((0.5+1)*0.5=0.75\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.riemann"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-definite-integrals-mcq-1",
    "sectionId": "c1-definite-integrals",
    "type": "mcq",
    "prompt": "Reversing the limits of integration gives:",
    "choices": [
      "the negative of the original value",
      "the same value",
      "zero"
    ],
    "answer": {
      "kind": "choice",
      "value": "the negative of the original value"
    },
    "hints": [
      "Swap \\(a\\) and \\(b\\) in \\(\\int_a^b\\)."
    ],
    "solutionSteps": [
      "\\(\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.definite"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-definite-integrals-num-1",
    "sectionId": "c1-definite-integrals",
    "type": "numeric",
    "prompt": "Compute \\(\\int_0^2 x\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.001
    },
    "hints": [
      "Find an antiderivative of \\(x\\)."
    ],
    "solutionSteps": [
      "\\(\\int x\\,dx = x^2/2\\).",
      "Evaluate: \\(2^2/2 - 0 = 2\\)."
    ],
    "difficulty": "easy",
    "tags": [
      "integrals.definite"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-ftc-part1-mcq-1",
    "sectionId": "c1-ftc-part1",
    "type": "mcq",
    "prompt": "If \\(F(x)=\\int_a^x f(t)\\,dt\\), then \\(F'(x)=\\):",
    "choices": [
      "\\(f(x)\\)",
      "\\(f(a)\\)",
      "0"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f(x)\\)"
    },
    "hints": [
      "FTC I differentiates an accumulation function."
    ],
    "solutionSteps": [
      "FTC I gives \\(\\frac{d}{dx}\\int_a^x f(t)dt=f(x)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.ftc"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-ftc-part1-num-1",
    "sectionId": "c1-ftc-part1",
    "type": "numeric",
    "prompt": "If \\(F(x)=\\int_0^x 3t^2\\,dt\\), find \\(F'(2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 12,
      "tolerance": 0.001
    },
    "hints": [
      "FTC I says \\(F'(x)=f(x)\\)."
    ],
    "solutionSteps": [
      "Here \\(f(x)=3x^2\\).",
      "So \\(F'(2)=3*(2^2)=12\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.ftc"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-ftc-part2-mcq-1",
    "sectionId": "c1-ftc-part2",
    "type": "mcq",
    "prompt": "If \\(F'(x)=f(x)\\), then \\(\\int_a^b f(x)\\,dx\\) equals:",
    "choices": [
      "\\(F(b)-F(a)\\)",
      "\\(F(a)-F(b)\\)",
      "\\(F(a)+F(b)\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(F(b)-F(a)\\)"
    },
    "hints": [
      "FTC II evaluates a definite integral."
    ],
    "solutionSteps": [
      "FTC II gives \\(\\int_a^b f(x)\\,dx=F(b)-F(a)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.ftc"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-ftc-part2-num-1",
    "sectionId": "c1-ftc-part2",
    "type": "numeric",
    "prompt": "Compute \\(\\int_1^3 2x\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.001
    },
    "hints": [
      "Find an antiderivative and evaluate."
    ],
    "solutionSteps": [
      "An antiderivative is \\(x^2\\).",
      "Evaluate: \\(3^2-1^2=9-1=8\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.ftc"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c1-net-change-mcq-1",
    "sectionId": "c1-net-change",
    "type": "mcq",
    "prompt": "If \\(v(t)\\) is velocity, then \\(\\int_a^b v(t)\\,dt\\) represents:",
    "choices": [
      "net change in position",
      "instantaneous velocity",
      "average acceleration"
    ],
    "answer": {
      "kind": "choice",
      "value": "net change in position"
    },
    "hints": [
      "Integral of a rate gives accumulated change."
    ],
    "solutionSteps": [
      "Integrating velocity over time gives displacement."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.net_change"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c1-net-change-num-1",
    "sectionId": "c1-net-change",
    "type": "numeric",
    "prompt": "If \\(r(t)=2t\\) on \\([0,3]\\), find the net change \\(\\int_0^3 r(t)\\,dt\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 9,
      "tolerance": 0.001
    },
    "hints": [
      "Find an antiderivative of \\(2t\\)."
    ],
    "solutionSteps": [
      "\\(\\int 2t\\,dt = t^2\\).",
      "Evaluate from 0 to 3: \\(3^2-0=9\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.net_change"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c3-dot-product-mcq-1",
    "sectionId": "c3-dot-product",
    "type": "mcq",
    "prompt": "If \\(\\vec{u}\\cdot\\vec{v}=0\\), then the vectors are:",
    "choices": [
      "Perpendicular.",
      "Parallel.",
      "Same magnitude."
    ],
    "answer": {
      "kind": "choice",
      "value": "Perpendicular."
    },
    "hints": [
      "Zero dot product means \\(\\cos\\theta=0\\)."
    ],
    "solutionSteps": [
      "Dot product 0 implies a 90-degree angle, so they are perpendicular."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.dot"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-dot-product-num-1",
    "sectionId": "c3-dot-product",
    "type": "numeric",
    "prompt": "Compute \\(\\langle 1,2,3\\rangle\\cdot\\langle 4,-1,2\\rangle\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Multiply components and add."
    ],
    "solutionSteps": [
      "\\(4-2+6=8\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.dot"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-dot-product-hard-1",
    "sectionId": "c3-dot-product",
    "type": "numeric",
    "prompt": "Given \\(\\vec{u}\\cdot\\vec{v}=4\\), \\(\\|\\vec{u}\\|=3\\), \\(\\|\\vec{v}\\|=3\\), compute \\(\\cos\\theta\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.4444,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(\\vec{u}\\cdot\\vec{v}=\\|u\\|\\|v\\|\\cos\\theta\\)."
    ],
    "solutionSteps": [
      "\\(\\cos\\theta=4/(3\\cdot3)=4/9\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vectors.dot"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-cross-product-mcq-1",
    "sectionId": "c3-cross-product",
    "type": "mcq",
    "prompt": "The magnitude of \\(\\vec{u}\\times\\vec{v}\\) equals:",
    "choices": [
      "Area of the parallelogram formed by \\(\\vec{u}\\) and \\(\\vec{v}\\).",
      "Dot product \\(\\vec{u}\\cdot\\vec{v}\\).",
      "Sum of magnitudes \\(\\|\\vec{u}\\|+\\|\\vec{v}\\|\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "Area of the parallelogram formed by \\(\\vec{u}\\) and \\(\\vec{v}\\)."
    },
    "hints": [
      "Cross product relates to area."
    ],
    "solutionSteps": [
      "\\(\\|\\vec{u}\\times\\vec{v}\\|=\\|u\\|\\|v\\|\\sin\\theta\\), the parallelogram area."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.cross"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-cross-product-num-1",
    "sectionId": "c3-cross-product",
    "type": "numeric",
    "prompt": "Find \\(\\|\\langle 1,2,0\\rangle\\times\\langle 2,1,0\\rangle\\|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Use the determinant formula."
    ],
    "solutionSteps": [
      "\\(\\langle 1,2,0\\rangle\\times\\langle 2,1,0\\rangle=\\langle 0,0,-3\\rangle\\), so magnitude is 3."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.cross"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-cross-product-hard-1",
    "sectionId": "c3-cross-product",
    "type": "mcq",
    "prompt": "Compute \\(\\langle 1,2,3\\rangle\\times\\langle 2,0,1\\rangle\\).",
    "choices": [
      "\\(\\langle 2,5,-4\\rangle\\)",
      "\\(\\langle -2,5,4\\rangle\\)",
      "\\(\\langle 2,-5,-4\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 2,5,-4\\rangle\\)"
    },
    "hints": [
      "Use the determinant formula."
    ],
    "solutionSteps": [
      "Compute components to get \\(\\langle 2,5,-4\\rangle\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vectors.cross"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-lines-planes-mcq-1",
    "sectionId": "c3-lines-planes",
    "type": "mcq",
    "prompt": "To write a line in symmetric form, which condition is required?",
    "choices": [
      "All direction components are nonzero.",
      "The line passes through the origin.",
      "The line is parallel to a coordinate axis."
    ],
    "answer": {
      "kind": "choice",
      "value": "All direction components are nonzero."
    },
    "hints": [
      "Division by direction components must be valid."
    ],
    "solutionSteps": [
      "Symmetric form divides by each component, so none can be zero."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.lines_planes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-lines-planes-num-1",
    "sectionId": "c3-lines-planes",
    "type": "numeric",
    "prompt": "Distance from point \\((1,1,1)\\) to plane \\(2x-y+2z=5\\) is:",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.6667,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(|Ax_0+By_0+Cz_0-D|/\\sqrt{A^2+B^2+C^2}\\)."
    ],
    "solutionSteps": [
      "Numerator \\(|2-1+2-5|=2\\), denominator 3, so distance \\(2/3\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.lines_planes"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-lines-planes-hard-1",
    "sectionId": "c3-lines-planes",
    "type": "numeric",
    "prompt": "Find the distance between planes \\(2x-y+2z=5\\) and \\(2x-y+2z=11\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(|D_2-D_1|/\\sqrt{A^2+B^2+C^2}\\)."
    ],
    "solutionSteps": [
      "\\(|11-5|/3=2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vectors.lines_planes"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-quadric-surfaces-mcq-1",
    "sectionId": "c3-quadric-surfaces",
    "type": "mcq",
    "prompt": "Which equation describes a cylinder along the z-axis?",
    "choices": [
      "\\(x^2+y^2=4\\)",
      "\\(x^2+y^2+z^2=4\\)",
      "\\(z=x^2+y^2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x^2+y^2=4\\)"
    },
    "hints": [
      "A cylinder does not constrain one variable."
    ],
    "solutionSteps": [
      "\\(x^2+y^2=4\\) leaves z free, so it is a cylinder."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.quadric"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-quadric-surfaces-num-1",
    "sectionId": "c3-quadric-surfaces",
    "type": "numeric",
    "prompt": "For \\(x^2/9+y^2/4+z^2=1\\), the semi-axis length along the x-axis is:",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Compare with \\(x^2/a^2\\)."
    ],
    "solutionSteps": [
      "\\(a^2=9\\), so \\(a=3\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vectors.quadric"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-quadric-surfaces-hard-1",
    "sectionId": "c3-quadric-surfaces",
    "type": "mcq",
    "prompt": "The surface \\(z=x^2-y^2\\) is a:",
    "choices": [
      "Hyperbolic paraboloid.",
      "Elliptic paraboloid.",
      "Ellipsoid."
    ],
    "answer": {
      "kind": "choice",
      "value": "Hyperbolic paraboloid."
    },
    "hints": [
      "Signs of the quadratic terms differ."
    ],
    "solutionSteps": [
      "Mixed signs produce a hyperbolic paraboloid."
    ],
    "difficulty": "hard",
    "tags": [
      "vectors.quadric"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-valued-mcq-1",
    "sectionId": "c3-vector-valued",
    "type": "mcq",
    "prompt": "The range of \\(\\vec{r}(t)\\) is:",
    "choices": [
      "A curve traced in space by the tip of \\(\\vec{r}(t)\\).",
      "A set of scalar values.",
      "A single point only."
    ],
    "answer": {
      "kind": "choice",
      "value": "A curve traced in space by the tip of \\(\\vec{r}(t)\\)."
    },
    "hints": [
      "Vector-valued functions describe parametric curves."
    ],
    "solutionSteps": [
      "As \\(t\\) varies, the tip traces a curve."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.definition"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-valued-num-1",
    "sectionId": "c3-vector-valued",
    "type": "numeric",
    "prompt": "If \\(\\vec{r}(t)=\\langle t,t^2,-1\\rangle\\), compute \\(\\|\\vec{r}(2)\\|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4.5826,
      "tolerance": 0.01
    },
    "hints": [
      "Evaluate \\(\\vec{r}(2)\\) then take the magnitude."
    ],
    "solutionSteps": [
      "\\(\\vec{r}(2)=\\langle 2,4,-1\\rangle\\), magnitude \\(\\sqrt{21}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.definition"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-valued-hard-1",
    "sectionId": "c3-vector-valued",
    "type": "mcq",
    "prompt": "The curve \\(\\vec{r}(t)=\\langle \\cos t, \\sin t, 0\\rangle\\) lies on:",
    "choices": [
      "The unit circle in the xy-plane.",
      "A line parallel to the z-axis.",
      "A sphere of radius 2."
    ],
    "answer": {
      "kind": "choice",
      "value": "The unit circle in the xy-plane."
    },
    "hints": [
      "\\(x^2+y^2=1\\) and \\(z=0\\)."
    ],
    "solutionSteps": [
      "\\(\\cos^2 t+\\sin^2 t=1\\), so it is the unit circle in the xy-plane."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_functions.definition"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-limits-mcq-1",
    "sectionId": "c3-vector-limits",
    "type": "mcq",
    "prompt": "A limit \\(\\lim_{t\\to a}\\vec{r}(t)\\) exists when:",
    "choices": [
      "Each component limit exists and the vector of limits is finite.",
      "Only one component has a limit.",
      "The magnitude goes to infinity."
    ],
    "answer": {
      "kind": "choice",
      "value": "Each component limit exists and the vector of limits is finite."
    },
    "hints": [
      "Limits are taken componentwise."
    ],
    "solutionSteps": [
      "All component limits must exist for the vector limit to exist."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.limits"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-limits-num-1",
    "sectionId": "c3-vector-limits",
    "type": "numeric",
    "prompt": "Compute \\(\\lim_{t\\to0} \\|\\langle 3t,-4t,12t\\rangle\\|/|t|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 13,
      "tolerance": 0.01
    },
    "hints": [
      "Factor \\(|t|\\) from the norm."
    ],
    "solutionSteps": [
      "\\(\\|\\langle 3t,-4t,12t\\rangle\\|=|t|\\sqrt{9+16+144}=13|t|\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.limits"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-limits-hard-1",
    "sectionId": "c3-vector-limits",
    "type": "mcq",
    "prompt": "Does \\(\\lim_{t\\to0}\\langle t/|t|, t\\rangle\\) exist?",
    "choices": [
      "Yes, it equals \\(\\langle 1,0\\rangle\\).",
      "Yes, it equals \\(\\langle 0,0\\rangle\\).",
      "No, the limit does not exist."
    ],
    "answer": {
      "kind": "choice",
      "value": "No, the limit does not exist."
    },
    "hints": [
      "The first component depends on the sign of \\(t\\)."
    ],
    "solutionSteps": [
      "Approaching from different sides gives different values, so the limit fails."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_functions.limits"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-derivatives-mcq-1",
    "sectionId": "c3-vector-derivatives",
    "type": "mcq",
    "prompt": "If \\(\\vec{r}(t)=\\langle x(t),y(t),z(t)\\rangle\\), then \\(\\vec{r}\\,'(t)=\\)",
    "choices": [
      "\\(\\langle x'(t),y'(t),z'(t)\\rangle\\)",
      "\\(x'(t)+y'(t)+z'(t)\\)",
      "\\(\\langle x(t),y(t),z(t)\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle x'(t),y'(t),z'(t)\\rangle\\)"
    },
    "hints": [
      "Differentiate each component."
    ],
    "solutionSteps": [
      "Vector derivatives are componentwise."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.derivatives"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-derivatives-num-1",
    "sectionId": "c3-vector-derivatives",
    "type": "numeric",
    "prompt": "For \\(\\vec{r}(t)=\\langle t^2, \\sin t, e^t\\rangle\\), find the y-component of \\(\\vec{r}\\,'(0)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate then evaluate at 0."
    ],
    "solutionSteps": [
      "\\(\\frac{d}{dt}\\sin t=\\cos t\\), so \\(\\cos(0)=1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.derivatives"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-derivatives-hard-1",
    "sectionId": "c3-vector-derivatives",
    "type": "mcq",
    "prompt": "The tangent vector to \\(\\vec{r}(t)=\\langle t,t^2,t^3\\rangle\\) at \\(t=1\\) is:",
    "choices": [
      "\\(\\langle 1,2,3\\rangle\\)",
      "\\(\\langle 1,1,1\\rangle\\)",
      "\\(\\langle 2,4,6\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 1,2,3\\rangle\\)"
    },
    "hints": [
      "Compute \\(\\vec{r}\\,'(t)\\) and plug in \\(t=1\\)."
    ],
    "solutionSteps": [
      "\\(\\vec{r}\\,'(t)=\\langle 1,2t,3t^2\\rangle\\), so \\(\\vec{r}\\,'(1)=\\langle 1,2,3\\rangle\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_functions.derivatives"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-integrals-mcq-1",
    "sectionId": "c3-vector-integrals",
    "type": "mcq",
    "prompt": "Which is correct?",
    "choices": [
      "\\(\\int \\langle f,g,h\\rangle\\,dt=\\langle \\int f dt, \\int g dt, \\int h dt\\rangle\\)",
      "\\(\\int \\langle f,g,h\\rangle\\,dt=\\int f+g+h\\,dt\\)",
      "\\(\\int \\langle f,g,h\\rangle\\,dt=\\langle f,g,h\\rangle + C\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\int \\langle f,g,h\\rangle\\,dt=\\langle \\int f dt, \\int g dt, \\int h dt\\rangle\\)"
    },
    "hints": [
      "Integrate componentwise."
    ],
    "solutionSteps": [
      "Each component integrates independently."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.integrals"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-integrals-num-1",
    "sectionId": "c3-vector-integrals",
    "type": "numeric",
    "prompt": "Compute the x-component of \\(\\int_0^1 \\langle 2t,3,-t^2\\rangle dt\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate \\(2t\\) from 0 to 1."
    ],
    "solutionSteps": [
      "\\([t^2]_0^1=1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.integrals"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-integrals-hard-1",
    "sectionId": "c3-vector-integrals",
    "type": "mcq",
    "prompt": "If \\(\\vec{r}\\,'(t)=\\langle 2t,3,-1\\rangle\\) and \\(\\vec{r}(0)=\\langle 0,1,2\\rangle\\), then \\(\\vec{r}(1)=\\)",
    "choices": [
      "\\(\\langle 1,4,1\\rangle\\)",
      "\\(\\langle 2,4,1\\rangle\\)",
      "\\(\\langle 1,3,2\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 1,4,1\\rangle\\)"
    },
    "hints": [
      "Integrate \\(\\vec{r}\\,'(t)\\) and apply \\(\\vec{r}(0)\\)."
    ],
    "solutionSteps": [
      "\\(\\vec{r}(t)=\\langle t^2,3t+1,-t+2\\rangle\\), so \\(\\vec{r}(1)=\\langle 1,4,1\\rangle\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_functions.integrals"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-velocity-accel-mcq-1",
    "sectionId": "c3-velocity-accel",
    "type": "mcq",
    "prompt": "If \\(\\vec{r}(t)\\) is position, then acceleration is:",
    "choices": [
      "\\(\\vec{r}\\,''(t)\\)",
      "\\(\\vec{r}(t)\\)",
      "\\(\\|\\vec{r}(t)\\|\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\vec{r}\\,''(t)\\)"
    },
    "hints": [
      "Acceleration is the derivative of velocity."
    ],
    "solutionSteps": [
      "\\(\\vec{v}=\\vec{r}\\,'\\), \\(\\vec{a}=\\vec{v}\\,'=\\vec{r}\\,''\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.velocity"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-velocity-accel-num-1",
    "sectionId": "c3-velocity-accel",
    "type": "numeric",
    "prompt": "For \\(\\vec{r}(t)=\\langle t^2,t,0\\rangle\\), compute \\(\\|\\vec{a}(1)\\|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate twice."
    ],
    "solutionSteps": [
      "\\(\\vec{a}(t)=\\langle 2,0,0\\rangle\\), so \\(\\|\\vec{a}(1)\\|=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.velocity"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-velocity-accel-hard-1",
    "sectionId": "c3-velocity-accel",
    "type": "numeric",
    "prompt": "For \\(\\vec{r}(t)=\\langle t^2,2t,t\\rangle\\), compute the speed at \\(t=1\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Speed is \\(\\|\\vec{v}(t)\\|\\)."
    ],
    "solutionSteps": [
      "\\(\\vec{v}(t)=\\langle 2t,2,1\\rangle\\), so \\(\\|\\vec{v}(1)\\|=3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_functions.velocity"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-arc-length-curvature-mcq-1",
    "sectionId": "c3-arc-length-curvature",
    "type": "mcq",
    "prompt": "Arc length for \\(\\vec{r}(t)\\) on \\([a,b]\\) is:",
    "choices": [
      "\\(\\int_a^b \\|\\vec{r}\\,'(t)\\| dt\\)",
      "\\(\\int_a^b \\vec{r}(t) dt\\)",
      "\\(\\|\\vec{r}(b)-\\vec{r}(a)\\|\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\int_a^b \\|\\vec{r}\\,'(t)\\| dt\\)"
    },
    "hints": [
      "Integrate the speed."
    ],
    "solutionSteps": [
      "Arc length is the integral of \\(\\|\\vec{r}\\,'(t)\\|\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.arc_length"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-arc-length-curvature-num-1",
    "sectionId": "c3-arc-length-curvature",
    "type": "numeric",
    "prompt": "Find the arc length of \\(\\vec{r}(t)=\\langle 3t,4t,0\\rangle\\) from \\(t=0\\) to \\(t=1\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 5,
      "tolerance": 0.01
    },
    "hints": [
      "The speed is constant."
    ],
    "solutionSteps": [
      "\\(\\|\\vec{r}\\,'(t)\\|=5\\), so \\(L=\\int_0^1 5 dt=5\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_functions.arc_length"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-arc-length-curvature-hard-1",
    "sectionId": "c3-arc-length-curvature",
    "type": "numeric",
    "prompt": "Compute the curvature of \\(\\vec{r}(t)=\\langle 2\\cos t,2\\sin t,0\\rangle\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.5,
      "tolerance": 0.01
    },
    "hints": [
      "A circle of radius \\(R\\) has curvature \\(1/R\\)."
    ],
    "solutionSteps": [
      "Radius is 2, so curvature is \\(1/2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_functions.arc_length"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-functions-multivariable-mcq-1",
    "sectionId": "c3-functions-multivariable",
    "type": "mcq",
    "prompt": "A level curve of \\(f(x,y)\\) is defined by:",
    "choices": [
      "\\(f(x,y)=c\\) for a constant \\(c\\).",
      "\\(y=f(x)\\)",
      "\\(x=0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f(x,y)=c\\) for a constant \\(c\\)."
    },
    "hints": [
      "Fix the function value."
    ],
    "solutionSteps": [
      "Level curves keep \\(f\\) constant."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.functions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-functions-multivariable-num-1",
    "sectionId": "c3-functions-multivariable",
    "type": "numeric",
    "prompt": "If \\(f(x,y)=x^2-y+2\\), compute \\(f(1,-2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 5,
      "tolerance": 0.01
    },
    "hints": [
      "Substitute \\(x=1\\), \\(y=-2\\)."
    ],
    "solutionSteps": [
      "\\(1-(-2)+2=5\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.functions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-functions-multivariable-hard-1",
    "sectionId": "c3-functions-multivariable",
    "type": "mcq",
    "prompt": "The level curve \\(x^2+y^2=4\\) represents:",
    "choices": [
      "A circle of radius 2.",
      "A parabola.",
      "A line."
    ],
    "answer": {
      "kind": "choice",
      "value": "A circle of radius 2."
    },
    "hints": [
      "Compare to \\(x^2+y^2=r^2\\)."
    ],
    "solutionSteps": [
      "\\(r^2=4\\) so \\(r=2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "multivariable.functions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-multivariable-limits-mcq-1",
    "sectionId": "c3-multivariable-limits",
    "type": "mcq",
    "prompt": "A two-variable limit exists if:",
    "choices": [
      "All paths to the point give the same value.",
      "At least one path gives a value.",
      "The function is defined at the point."
    ],
    "answer": {
      "kind": "choice",
      "value": "All paths to the point give the same value."
    },
    "hints": [
      "Path independence is required."
    ],
    "solutionSteps": [
      "Different path values mean the limit fails."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.limits"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-multivariable-limits-num-1",
    "sectionId": "c3-multivariable-limits",
    "type": "numeric",
    "prompt": "Compute \\(\\lim_{(x,y)\\to(0,0)} (x^2+y^2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0,
      "tolerance": 0.01
    },
    "hints": [
      "Both terms go to 0."
    ],
    "solutionSteps": [
      "\\(x^2+y^2\\to 0\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.limits"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-multivariable-limits-hard-1",
    "sectionId": "c3-multivariable-limits",
    "type": "mcq",
    "prompt": "Does \\(\\lim_{(x,y)\\to(0,0)} \\frac{x^2-y^2}{x^2+y^2}\\) exist?",
    "choices": [
      "Yes, it equals 0.",
      "Yes, it equals 1.",
      "No, the limit does not exist."
    ],
    "answer": {
      "kind": "choice",
      "value": "No, the limit does not exist."
    },
    "hints": [
      "Try \\(y=0\\) and \\(y=x\\)."
    ],
    "solutionSteps": [
      "Along \\(y=0\\) the value is 1; along \\(y=x\\) it is 0."
    ],
    "difficulty": "hard",
    "tags": [
      "multivariable.limits"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-higher-partials-mcq-1",
    "sectionId": "c3-higher-partials",
    "type": "mcq",
    "prompt": "The mixed partial \\(f_{xy}\\) means:",
    "choices": [
      "Differentiate with respect to x, then y.",
      "Differentiate with respect to y, then x, and always get the same result.",
      "Differentiate twice with respect to x."
    ],
    "answer": {
      "kind": "choice",
      "value": "Differentiate with respect to x, then y."
    },
    "hints": [
      "Order is specified by the subscripts."
    ],
    "solutionSteps": [
      "\\(f_{xy}\\) means x first, then y."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.higher_partials"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-higher-partials-num-1",
    "sectionId": "c3-higher-partials",
    "type": "numeric",
    "prompt": "For \\(f(x,y)=x^2 y^3\\), compute \\(f_{xy}(1,1)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate twice."
    ],
    "solutionSteps": [
      "\\(f_x=2xy^3\\), \\(f_{xy}=6xy^2\\), so value is 6."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.higher_partials"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-higher-partials-hard-1",
    "sectionId": "c3-higher-partials",
    "type": "numeric",
    "prompt": "For \\(f(x,y)=x^2 y + y^2\\), compute \\(f_{xx}(1,2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate twice with respect to \\(x\\)."
    ],
    "solutionSteps": [
      "\\(f_x=2xy\\), \\(f_{xx}=2y\\), so value is 4."
    ],
    "difficulty": "hard",
    "tags": [
      "multivariable.higher_partials"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-clairaut-mcq-1",
    "sectionId": "c3-clairaut",
    "type": "mcq",
    "prompt": "Clairaut's theorem says that if mixed partials are continuous, then:",
    "choices": [
      "\\(f_{xy}=f_{yx}\\).",
      "\\(f_{xy}=0\\).",
      "\\(f_{xx}=f_{yy}\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f_{xy}=f_{yx}\\)."
    },
    "hints": [
      "Equality of mixed partials."
    ],
    "solutionSteps": [
      "Continuity implies \\(f_{xy}=f_{yx}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.clairaut"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-clairaut-num-1",
    "sectionId": "c3-clairaut",
    "type": "numeric",
    "prompt": "For \\(f(x,y)=x^2 y + y^2\\), compute \\(f_{xy}(1,2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Compute \\(f_x\\) then differentiate in \\(y\\)."
    ],
    "solutionSteps": [
      "\\(f_x=2xy\\), so \\(f_{xy}=2x=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.clairaut"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-clairaut-hard-1",
    "sectionId": "c3-clairaut",
    "type": "mcq",
    "prompt": "If \\(f_{xy}\\) and \\(f_{yx}\\) are not continuous near a point, then:",
    "choices": [
      "They must still be equal at that point.",
      "They may differ at that point.",
      "Both must be zero."
    ],
    "answer": {
      "kind": "choice",
      "value": "They may differ at that point."
    },
    "hints": [
      "Continuity is required for equality."
    ],
    "solutionSteps": [
      "Without continuity, mixed partials can differ."
    ],
    "difficulty": "hard",
    "tags": [
      "multivariable.clairaut"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-tangent-planes-mcq-1",
    "sectionId": "c3-tangent-planes",
    "type": "mcq",
    "prompt": "The tangent plane to \\(z=f(x,y)\\) at \\((a,b)\\) is:",
    "choices": [
      "\\(z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b)\\).",
      "\\(z=f(a,b)\\).",
      "\\(z=f_x(a,b)+f_y(a,b)\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b)\\)."
    },
    "hints": [
      "Use the linearization form."
    ],
    "solutionSteps": [
      "The tangent plane uses first-order terms."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.tangent_planes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-tangent-planes-num-1",
    "sectionId": "c3-tangent-planes",
    "type": "numeric",
    "prompt": "For \\(f(x,y)=x^2+2y\\), compute \\(f_x(1,2)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate with respect to \\(x\\)."
    ],
    "solutionSteps": [
      "\\(f_x=2x\\), so \\(f_x(1,2)=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.tangent_planes"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-tangent-planes-hard-1",
    "sectionId": "c3-tangent-planes",
    "type": "mcq",
    "prompt": "The tangent plane to \\(z=x^2+2y\\) at \\((1,1)\\) is:",
    "choices": [
      "\\(z-3=2(x-1)+2(y-1)\\).",
      "\\(z-3=2(x-1)+4(y-1)\\).",
      "\\(z-2=(x-1)+(y-1)\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(z-3=2(x-1)+2(y-1)\\)."
    },
    "hints": [
      "Compute \\(f\\), \\(f_x\\), and \\(f_y\\) at \\((1,1)\\)."
    ],
    "solutionSteps": [
      "\\(f=3\\), \\(f_x=2\\), \\(f_y=2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "multivariable.tangent_planes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-linear-approx-mcq-1",
    "sectionId": "c3-linear-approx",
    "type": "mcq",
    "prompt": "Linearization of \\(f\\) at \\((a,b)\\) is:",
    "choices": [
      "\\(L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\).",
      "\\(L(x,y)=f(x,y)\\).",
      "\\(L(x,y)=f_x(x,y)+f_y(x,y)\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\)."
    },
    "hints": [
      "Use the tangent plane formula."
    ],
    "solutionSteps": [
      "Linearization uses first-order terms."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.linear_approx"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-linear-approx-num-1",
    "sectionId": "c3-linear-approx",
    "type": "numeric",
    "prompt": "Use linearization of \\(f(x,y)=x^2+y^2\\) at \\((1,1)\\) to approximate \\(f(1.02,1.01)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2.06,
      "tolerance": 0.01
    },
    "hints": [
      "\\(f(1,1)=2\\), \\(f_x=2\\), \\(f_y=2\\)."
    ],
    "solutionSteps": [
      "\\(2+2(0.02)+2(0.01)=2.06\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "multivariable.linear_approx"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-linear-approx-hard-1",
    "sectionId": "c3-linear-approx",
    "type": "numeric",
    "prompt": "Use linearization of \\(f(x,y)=x^2+2y^2\\) at \\((1,1)\\) to approximate \\(f(1.01,0.98)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2.94,
      "tolerance": 0.01
    },
    "hints": [
      "Compute partials at \\((1,1)\\) and apply \\(L\\)."
    ],
    "solutionSteps": [
      "\\(L=3+2(0.01)+4(-0.02)=2.94\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "multivariable.linear_approx"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-integrals-mcq-1",
    "sectionId": "c3-double-integrals",
    "type": "mcq",
    "prompt": "A double integral \\(\\iint_R f(x,y)\\,dA\\) represents:",
    "choices": [
      "Volume under (z=f(x,y)) over region R.",
      "Slope of a line.",
      "Arc length of a curve."
    ],
    "answer": {
      "kind": "choice",
      "value": "Volume under (z=f(x,y)) over region R."
    },
    "hints": [
      "Think of volume under a surface."
    ],
    "solutionSteps": [
      "It accumulates height over area."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.double"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-integrals-num-1",
    "sectionId": "c3-double-integrals",
    "type": "numeric",
    "prompt": "Compute \\(\\iint_{[0,2]\\times[0,1]} x\\,dA\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate in \\(y\\) first."
    ],
    "solutionSteps": [
      "\\(\\int_0^2 x\\,dx=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.double"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-integrals-hard-1",
    "sectionId": "c3-double-integrals",
    "type": "numeric",
    "prompt": "Compute \\(\\iint_{[0,1]\\times[0,2]} (x+2y)\\,dA\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 5,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate in \\(y\\), then \\(x\\)."
    ],
    "solutionSteps": [
      "\\(\\int_0^1 (2x+4) dx=5\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.double"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-iterated-integrals-mcq-1",
    "sectionId": "c3-iterated-integrals",
    "type": "mcq",
    "prompt": "For continuous \\(f\\), reversing the order of integration:",
    "choices": [
      "Gives the same value when the region is the same.",
      "Always changes the sign.",
      "Is never allowed."
    ],
    "answer": {
      "kind": "choice",
      "value": "Gives the same value when the region is the same."
    },
    "hints": [
      "Use Fubini's theorem."
    ],
    "solutionSteps": [
      "Order can be swapped for continuous functions."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.iterated"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-iterated-integrals-num-1",
    "sectionId": "c3-iterated-integrals",
    "type": "numeric",
    "prompt": "Evaluate \\(\\int_0^1 \\int_0^2 y\\,dy\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate in \\(y\\) first."
    ],
    "solutionSteps": [
      "\\(\\int_0^1 2 dx=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.iterated"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-iterated-integrals-hard-1",
    "sectionId": "c3-iterated-integrals",
    "type": "numeric",
    "prompt": "Evaluate \\(\\int_0^1 \\int_x^1 1\\,dy\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.5,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate \\(1\\) over the region."
    ],
    "solutionSteps": [
      "\\(\\int_0^1 (1-x) dx=1/2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.iterated"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-general-regions-mcq-1",
    "sectionId": "c3-double-general-regions",
    "type": "mcq",
    "prompt": "A Type I region has the form:",
    "choices": [
      "\\(a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\).",
      "\\(c\\le y\\le d,\\ h_1(y)\\le x\\le h_2(y)\\).",
      "\\(x^2+y^2\\le 1\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\)."
    },
    "hints": [
      "Type I uses vertical slices."
    ],
    "solutionSteps": [
      "x bounds are constants and y bounds depend on x."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.double_regions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-general-regions-num-1",
    "sectionId": "c3-double-general-regions",
    "type": "numeric",
    "prompt": "Find the area of the region \\(0\\le x\\le 1,\\ 0\\le y\\le 2x\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate the height \\(2x\\)."
    ],
    "solutionSteps": [
      "\\(\\int_0^1 2x\\,dx=1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.double_regions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-general-regions-hard-1",
    "sectionId": "c3-double-general-regions",
    "type": "numeric",
    "prompt": "Find the area between \\(y=x^2\\) and \\(y=2x\\) for \\(0\\le x\\le 2\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1.3333,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate top minus bottom."
    ],
    "solutionSteps": [
      "\\(\\int_0^2 (2x-x^2) dx=4/3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.double_regions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-polar-mcq-1",
    "sectionId": "c3-double-polar",
    "type": "mcq",
    "prompt": "In polar coordinates, the area element is:",
    "choices": [
      "\\(dA=r\\,dr\\,d\\theta\\).",
      "\\(dA=dr\\,d\\theta\\).",
      "\\(dA=r^2\\,dr\\,d\\theta\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(dA=r\\,dr\\,d\\theta\\)."
    },
    "hints": [
      "A Jacobian factor appears."
    ],
    "solutionSteps": [
      "Use \\(dA=r dr d\\theta\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.double_polar"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-polar-num-1",
    "sectionId": "c3-double-polar",
    "type": "numeric",
    "prompt": "Compute the area of the unit disk using polar coordinates.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3.1416,
      "tolerance": 0.02
    },
    "hints": [
      "Use \\(\\frac12\\int_0^{2\\pi} 1^2 d\\theta\\)."
    ],
    "solutionSteps": [
      "Area is \\(\\pi\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.double_polar"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.02
    },
    "version": VERSION
  },
{
    "id": "it-c3-double-polar-hard-1",
    "sectionId": "c3-double-polar",
    "type": "numeric",
    "prompt": "Compute the area of the annulus \\(1\\le r\\le 2\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 9.4248,
      "tolerance": 0.02
    },
    "hints": [
      "Use \\(\\frac12\\int_0^{2\\pi} (4-1) d\\theta\\)."
    ],
    "solutionSteps": [
      "Area is \\(3\\pi\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.double_polar"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.02
    },
    "version": VERSION
  },
{
    "id": "it-c3-triple-integrals-mcq-1",
    "sectionId": "c3-triple-integrals",
    "type": "mcq",
    "prompt": "A triple integral \\(\\iiint_E f\\,dV\\) represents:",
    "choices": [
      "Accumulated quantity over a 3D region.",
      "Area of a curve.",
      "Slope of a line."
    ],
    "answer": {
      "kind": "choice",
      "value": "Accumulated quantity over a 3D region."
    },
    "hints": [
      "Think of volume or mass."
    ],
    "solutionSteps": [
      "It sums \\(f\\) over volume."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.triple"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-triple-integrals-num-1",
    "sectionId": "c3-triple-integrals",
    "type": "numeric",
    "prompt": "Compute \\(\\iiint_{[0,1]\\times[0,2]\\times[0,3]} 1\\,dV\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Multiply side lengths."
    ],
    "solutionSteps": [
      "\\(1\\cdot2\\cdot3=6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.triple"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-triple-integrals-hard-1",
    "sectionId": "c3-triple-integrals",
    "type": "numeric",
    "prompt": "Compute \\(\\iiint_{[0,1]^2\\times[0,2]} z\\,dV\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate in \\(z\\) first."
    ],
    "solutionSteps": [
      "\\(\\int_0^2 z dz=2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.triple"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-cylindrical-mcq-1",
    "sectionId": "c3-cylindrical",
    "type": "mcq",
    "prompt": "In cylindrical coordinates:",
    "choices": [
      "\\(x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z\\).",
      "\\(x=\\rho\\sin\\phi,\\ y=\\rho\\cos\\phi\\).",
      "\\(r=\\sqrt{x^2+y^2+z^2}\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z\\)."
    },
    "hints": [
      "Cylindrical keeps \\(z\\) the same."
    ],
    "solutionSteps": [
      "Use \\(r,\\theta,z\\) with \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.cylindrical"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-cylindrical-num-1",
    "sectionId": "c3-cylindrical",
    "type": "numeric",
    "prompt": "For point \\((3,3,5)\\), compute \\(r\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4.2426,
      "tolerance": 0.01
    },
    "hints": [
      "\\(r=\\sqrt{x^2+y^2}\\)."
    ],
    "solutionSteps": [
      "\\(r=\\sqrt{9+9}=\\sqrt{18}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.cylindrical"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-cylindrical-hard-1",
    "sectionId": "c3-cylindrical",
    "type": "numeric",
    "prompt": "Rewrite \\(x^2+y^2=9\\) in cylindrical coordinates by giving \\(r\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(r^2=x^2+y^2\\)."
    ],
    "solutionSteps": [
      "\\(r^2=9\\), so \\(r=3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.cylindrical"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-spherical-mcq-1",
    "sectionId": "c3-spherical",
    "type": "mcq",
    "prompt": "In spherical coordinates, \\(\\rho\\) is:",
    "choices": [
      "Distance from the origin.",
      "Angle from the xy-plane.",
      "Angle from the z-axis."
    ],
    "answer": {
      "kind": "choice",
      "value": "Distance from the origin."
    },
    "hints": [
      "Think of radial distance."
    ],
    "solutionSteps": [
      "\\(\\rho\\) is the distance from the origin."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.spherical"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-spherical-num-1",
    "sectionId": "c3-spherical",
    "type": "numeric",
    "prompt": "For point \\((0,0,2)\\), compute \\(\\rho\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "\\(\\rho=\\sqrt{x^2+y^2+z^2}\\)."
    ],
    "solutionSteps": [
      "\\(\\rho=2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.spherical"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-spherical-hard-1",
    "sectionId": "c3-spherical",
    "type": "mcq",
    "prompt": "The spherical volume element is:",
    "choices": [
      "\\(\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\).",
      "\\(\\rho\\,d\\rho\\,d\\phi\\,d\\theta\\).",
      "\\(\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\)."
    },
    "hints": [
      "There is a \\(\\rho^2\\) factor."
    ],
    "solutionSteps": [
      "\\(dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.spherical"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-change-of-variables-mcq-1",
    "sectionId": "c3-change-of-variables",
    "type": "mcq",
    "prompt": "Under a change of variables \\((x,y)=(x(u,v),y(u,v))\\), the area element is:",
    "choices": [
      "\\(|J|\\,du\\,dv\\).",
      "\\(J\\,du\\,dv\\) without absolute value.",
      "\\(du\\,dv\\) only."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(|J|\\,du\\,dv\\)."
    },
    "hints": [
      "Use the absolute Jacobian."
    ],
    "solutionSteps": [
      "\\(dA=|\\partial(x,y)/\\partial(u,v)|\\,du\\,dv\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.jacobian"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-change-of-variables-num-1",
    "sectionId": "c3-change-of-variables",
    "type": "numeric",
    "prompt": "If \\(x=2u\\) and \\(y=3v\\), compute \\(|\\partial(x,y)/\\partial(u,v)|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Multiply scale factors."
    ],
    "solutionSteps": [
      "\\(J=2\\cdot3=6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.jacobian"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-change-of-variables-hard-1",
    "sectionId": "c3-change-of-variables",
    "type": "numeric",
    "prompt": "If \\(x=u+v\\) and \\(y=u-v\\), compute \\(|\\partial(x,y)/\\partial(u,v)|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Compute the Jacobian determinant."
    ],
    "solutionSteps": [
      "\\(J=(1)(-1)-(1)(1)=-2\\), so \\(|J|=2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.jacobian"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-fields-mcq-1",
    "sectionId": "c3-vector-fields",
    "type": "mcq",
    "prompt": "A vector field assigns:",
    "choices": [
      "A vector to each point in space.",
      "A scalar to each point.",
      "A number to each curve."
    ],
    "answer": {
      "kind": "choice",
      "value": "A vector to each point in space."
    },
    "hints": [
      "Think arrows attached to points."
    ],
    "solutionSteps": [
      "A field maps points to vectors."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.fields"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-fields-num-1",
    "sectionId": "c3-vector-fields",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}(x,y,z)=\\langle 2x, y, -z\\rangle\\), compute \\(\\|\\vec{F}(1,2,3)\\|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4.1231,
      "tolerance": 0.01
    },
    "hints": [
      "Evaluate then take the magnitude."
    ],
    "solutionSteps": [
      "\\(\\vec{F}(1,2,3)=\\langle 2,2,-3\\rangle\\), magnitude \\(\\sqrt{17}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.fields"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-vector-fields-hard-1",
    "sectionId": "c3-vector-fields",
    "type": "mcq",
    "prompt": "Which is a vector field in the plane?",
    "choices": [
      "\\(\\vec{F}(x,y)=\\langle x^2, y^2\\rangle\\).",
      "\\(f(x,y)=x^2+y^2\\).",
      "\\(z=x+y\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\vec{F}(x,y)=\\langle x^2, y^2\\rangle\\)."
    },
    "hints": [
      "A vector field has multiple components."
    ],
    "solutionSteps": [
      "Only the first option returns a vector at each point."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.fields"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-gradient-mcq-1",
    "sectionId": "c3-gradient",
    "type": "mcq",
    "prompt": "The gradient \\(\\nabla f\\) points in the direction of:",
    "choices": [
      "Greatest increase of f.",
      "Greatest decrease of f.",
      "Zero change."
    ],
    "answer": {
      "kind": "choice",
      "value": "Greatest increase of f."
    },
    "hints": [
      "Gradient is steepest ascent."
    ],
    "solutionSteps": [
      "Gradient gives direction of maximum increase."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.gradient"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-gradient-num-1",
    "sectionId": "c3-gradient",
    "type": "numeric",
    "prompt": "For \\(f(x,y,z)=x^2+y^2+z^2\\), compute \\(\\|\\nabla f(1,2,2)\\|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Compute partials then magnitude."
    ],
    "solutionSteps": [
      "\\(\\nabla f=\\langle 2x,2y,2z\\rangle\\), magnitude \\(6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.gradient"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-gradient-hard-1",
    "sectionId": "c3-gradient",
    "type": "mcq",
    "prompt": "For \\(f(x,y,z)=x^2 y + z^2\\), \\(\\nabla f(1,1,2)\\) is:",
    "choices": [
      "\\(\\langle 2,1,4\\rangle\\)",
      "\\(\\langle 1,2,4\\rangle\\)",
      "\\(\\langle 2,2,2\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 2,1,4\\rangle\\)"
    },
    "hints": [
      "Take partials with respect to x, y, and z."
    ],
    "solutionSteps": [
      "\\(f_x=2xy\\), \\(f_y=x^2\\), \\(f_z=2z\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.gradient"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-divergence-mcq-1",
    "sectionId": "c3-divergence",
    "type": "mcq",
    "prompt": "Divergence of \\(\\vec{F}=\\langle P,Q,R\\rangle\\) is:",
    "choices": [
      "\\(P_x+Q_y+R_z\\).",
      "\\(P+Q+R\\).",
      "\\(P_y-Q_x\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(P_x+Q_y+R_z\\)."
    },
    "hints": [
      "Sum of partial derivatives."
    ],
    "solutionSteps": [
      "Use componentwise derivatives."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.divergence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-divergence-num-1",
    "sectionId": "c3-divergence",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}=\\langle x^2,y^2,z^2\\rangle\\), compute \\(\\nabla\\cdot\\vec{F}\\) at \\((1,1,1)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Differentiate each component."
    ],
    "solutionSteps": [
      "\\(2+2+2=6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.divergence"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-divergence-hard-1",
    "sectionId": "c3-divergence",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}=\\langle x^2 y, y^2, z\\rangle\\), compute \\(\\nabla\\cdot\\vec{F}\\) at \\((2,1,3)\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 7,
      "tolerance": 0.01
    },
    "hints": [
      "Compute \\(P_x\\), \\(Q_y\\), and \\(R_z\\)."
    ],
    "solutionSteps": [
      "\\(P_x=2xy=4\\), \\(Q_y=2\\), \\(R_z=1\\), sum 7."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.divergence"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-curl-mcq-1",
    "sectionId": "c3-curl",
    "type": "mcq",
    "prompt": "Curl measures:",
    "choices": [
      "Rotation or swirling of a vector field.",
      "Net outflow.",
      "Average value."
    ],
    "answer": {
      "kind": "choice",
      "value": "Rotation or swirling of a vector field."
    },
    "hints": [
      "Think of circulation."
    ],
    "solutionSteps": [
      "Curl captures local rotation."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.curl"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-curl-num-1",
    "sectionId": "c3-curl",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}=\\langle y, z, x\\rangle\\), compute \\(\\|\\nabla\\times\\vec{F}\\|\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1.7321,
      "tolerance": 0.01
    },
    "hints": [
      "Compute the curl then its magnitude."
    ],
    "solutionSteps": [
      "Curl is \\(\\langle -1,-1,-1\\rangle\\), magnitude \\(\\sqrt{3}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.curl"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-curl-hard-1",
    "sectionId": "c3-curl",
    "type": "mcq",
    "prompt": "For \\(\\vec{F}=\\langle y,-x,0\\rangle\\), \\(\\nabla\\times\\vec{F}\\) is:",
    "choices": [
      "\\(\\langle 0,0,-2\\rangle\\)",
      "\\(\\langle 0,0,2\\rangle\\)",
      "\\(\\langle 2,0,0\\rangle\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\langle 0,0,-2\\rangle\\)"
    },
    "hints": [
      "Use the determinant formula."
    ],
    "solutionSteps": [
      "Curl components give \\(\\langle 0,0,-2\\rangle\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.curl"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-line-integrals-mcq-1",
    "sectionId": "c3-line-integrals",
    "type": "mcq",
    "prompt": "A scalar line integral is computed as:",
    "choices": [
      "\\(\\int_a^b f(\\vec{r}(t))\\|\\vec{r}\\,'(t)\\| dt\\).",
      "\\(\\int_a^b f(\\vec{r}(t)) dt\\).",
      "\\(\\int_a^b \\vec{r}(t) dt\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\int_a^b f(\\vec{r}(t))\\|\\vec{r}\\,'(t)\\| dt\\)."
    },
    "hints": [
      "Include the arc length element."
    ],
    "solutionSteps": [
      "Use \\(ds=\\|\\vec{r}\\,'(t)\\| dt\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.line_integrals"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-line-integrals-num-1",
    "sectionId": "c3-line-integrals",
    "type": "numeric",
    "prompt": "If \\(f=2\\) on a curve of length 5, compute \\(\\int_C f\\,ds\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 10,
      "tolerance": 0.01
    },
    "hints": [
      "Integral of a constant over length."
    ],
    "solutionSteps": [
      "\\(2\\cdot5=10\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.line_integrals"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-line-integrals-hard-1",
    "sectionId": "c3-line-integrals",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}=\\langle 1,2,0\\rangle\\) and the line segment from \\((0,0,0)\\) to \\((1,1,0)\\), compute \\(\\int_C \\vec{F}\\cdot d\\vec{r}\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "For a constant field, use \\(\\vec{F}\\cdot (B-A)\\)."
    ],
    "solutionSteps": [
      "\\(\\langle 1,2,0\\rangle\\cdot\\langle 1,1,0\\rangle=3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.line_integrals"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-conservative-fields-mcq-1",
    "sectionId": "c3-conservative-fields",
    "type": "mcq",
    "prompt": "A vector field is conservative if:",
    "choices": [
      "There exists \\(f\\) with \\(\\vec{F}=\\nabla f\\).",
      "Its curl is always nonzero.",
      "It has no domain."
    ],
    "answer": {
      "kind": "choice",
      "value": "There exists \\(f\\) with \\(\\vec{F}=\\nabla f\\)."
    },
    "hints": [
      "Look for a potential function."
    ],
    "solutionSteps": [
      "Conservative means a gradient field."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.conservative"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-conservative-fields-num-1",
    "sectionId": "c3-conservative-fields",
    "type": "numeric",
    "prompt": "If \\(\\vec{F}=\\nabla f\\) and \\(f(A)=1\\), \\(f(B)=6\\), then \\(\\int_C \\vec{F}\\cdot d\\vec{r}\\) equals:",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 5,
      "tolerance": 0.01
    },
    "hints": [
      "Use the fundamental theorem for line integrals."
    ],
    "solutionSteps": [
      "\\(f(B)-f(A)=5\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.conservative"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-conservative-fields-hard-1",
    "sectionId": "c3-conservative-fields",
    "type": "mcq",
    "prompt": "In a simply connected region, \\(\\vec{F}=\\langle P,Q\\rangle\\) is conservative if:",
    "choices": [
      "\\(P_y=Q_x\\).",
      "\\(P_x=Q_y\\).",
      "\\(P=Q\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(P_y=Q_x\\)."
    },
    "hints": [
      "Match the 2D curl condition."
    ],
    "solutionSteps": [
      "Equality of mixed partials indicates conservative."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.conservative"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-greens-theorem-mcq-1",
    "sectionId": "c3-greens-theorem",
    "type": "mcq",
    "prompt": "Green's theorem relates:",
    "choices": [
      "A line integral around a closed curve to a double integral over the region.",
      "A surface integral to a volume integral.",
      "A gradient to a curl."
    ],
    "answer": {
      "kind": "choice",
      "value": "A line integral around a closed curve to a double integral over the region."
    },
    "hints": [
      "It is a 2D theorem."
    ],
    "solutionSteps": [
      "It converts circulation into a double integral."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.greens"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-greens-theorem-num-1",
    "sectionId": "c3-greens-theorem",
    "type": "numeric",
    "prompt": "If \\(\\iint_R (Q_x-P_y)\\,dA=3\\), then \\(\\oint_C P\\,dx+Q\\,dy\\)=?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Use Green's theorem."
    ],
    "solutionSteps": [
      "They are equal for positive orientation."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.greens"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-greens-theorem-hard-1",
    "sectionId": "c3-greens-theorem",
    "type": "mcq",
    "prompt": "For Green's theorem, positive orientation means the curve is:",
    "choices": [
      "Counterclockwise.",
      "Clockwise.",
      "Any direction."
    ],
    "answer": {
      "kind": "choice",
      "value": "Counterclockwise."
    },
    "hints": [
      "Positive orientation keeps the region on the left."
    ],
    "solutionSteps": [
      "CCW is the positive orientation."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.greens"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-surface-integrals-mcq-1",
    "sectionId": "c3-surface-integrals",
    "type": "mcq",
    "prompt": "For surface parameterization \\(\\vec{r}(u,v)\\), the surface element is:",
    "choices": [
      "\\(\\|\\vec{r}_u\\times\\vec{r}_v\\|\\,du\\,dv\\).",
      "\\(du\\,dv\\).",
      "\\(\\vec{r}_u+\\vec{r}_v\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(\\|\\vec{r}_u\\times\\vec{r}_v\\|\\,du\\,dv\\)."
    },
    "hints": [
      "Use the cross product of tangent vectors."
    ],
    "solutionSteps": [
      "Area element is magnitude of \\(\\vec{r}_u\\times\\vec{r}_v\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.surface_integrals"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-surface-integrals-num-1",
    "sectionId": "c3-surface-integrals",
    "type": "numeric",
    "prompt": "Compute \\(\\iint_S 1\\,dS\\) for the unit square in the plane \\(z=0\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Surface area of the unit square."
    ],
    "solutionSteps": [
      "Area is 1."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.surface_integrals"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-surface-integrals-hard-1",
    "sectionId": "c3-surface-integrals",
    "type": "mcq",
    "prompt": "For the surface \\(z=2x\\), the surface element satisfies:",
    "choices": [
      "\\(dS=\\sqrt{5}\\,dA\\).",
      "\\(dS=\\sqrt{2}\\,dA\\).",
      "\\(dS=dA\\)."
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(dS=\\sqrt{5}\\,dA\\)."
    },
    "hints": [
      "Use \\(\\sqrt{1+f_x^2+f_y^2}\\)."
    ],
    "solutionSteps": [
      "\\(f_x=2\\), \\(f_y=0\\), so factor is \\(\\sqrt{5}\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.surface_integrals"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-stokes-theorem-mcq-1",
    "sectionId": "c3-stokes-theorem",
    "type": "mcq",
    "prompt": "Stokes' theorem states that:",
    "choices": [
      "The line integral around (partial S) equals the surface integral of curl over (S).",
      "Flux equals divergence integral.",
      "All line integrals are zero."
    ],
    "answer": {
      "kind": "choice",
      "value": "The line integral around (partial S) equals the surface integral of curl over (S)."
    },
    "hints": [
      "It relates circulation to curl."
    ],
    "solutionSteps": [
      "Line integral equals surface integral of curl."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.stokes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-stokes-theorem-num-1",
    "sectionId": "c3-stokes-theorem",
    "type": "numeric",
    "prompt": "If \\(\\nabla\\times\\vec{F}=0\\) on \\(S\\), then \\(\\oint_{\\partial S} \\vec{F}\\cdot d\\vec{r}\\)=?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0,
      "tolerance": 0.01
    },
    "hints": [
      "Curl zero implies zero circulation."
    ],
    "solutionSteps": [
      "Surface integral of zero is zero."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.stokes"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-stokes-theorem-hard-1",
    "sectionId": "c3-stokes-theorem",
    "type": "mcq",
    "prompt": "The orientation of \\(\\partial S\\) in Stokes' theorem is given by:",
    "choices": [
      "Right-hand rule with the surface normal.",
      "Always clockwise.",
      "Always counterclockwise."
    ],
    "answer": {
      "kind": "choice",
      "value": "Right-hand rule with the surface normal."
    },
    "hints": [
      "Curl and orientation must match."
    ],
    "solutionSteps": [
      "Use the right-hand rule."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.stokes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-divergence-theorem-mcq-1",
    "sectionId": "c3-divergence-theorem",
    "type": "mcq",
    "prompt": "The divergence theorem relates:",
    "choices": [
      "Flux through a closed surface to a triple integral of divergence.",
      "Line integrals to double integrals.",
      "Curl to gradient."
    ],
    "answer": {
      "kind": "choice",
      "value": "Flux through a closed surface to a triple integral of divergence."
    },
    "hints": [
      "It is also called Gauss' theorem."
    ],
    "solutionSteps": [
      "Flux equals triple integral of divergence."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.divergence_theorem"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c3-divergence-theorem-num-1",
    "sectionId": "c3-divergence-theorem",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}=\\langle x,y,z\\rangle\\) over the unit cube \\([0,1]^3\\), compute the outward flux.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Use the divergence theorem."
    ],
    "solutionSteps": [
      "\\(\\nabla\\cdot\\vec{F}=3\\), volume is 1, so flux is 3."
    ],
    "difficulty": "medium",
    "tags": [
      "vector_calc.divergence_theorem"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c3-divergence-theorem-hard-1",
    "sectionId": "c3-divergence-theorem",
    "type": "numeric",
    "prompt": "For \\(\\vec{F}=\\langle x,y,z\\rangle\\) over the sphere of radius 1, compute the outward flux.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 12.566,
      "tolerance": 0.05
    },
    "hints": [
      "Divergence is 3; multiply by sphere volume."
    ],
    "solutionSteps": [
      "Flux \\(=3\\cdot \\frac{4}{3}\\pi=4\\pi\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "vector_calc.divergence_theorem"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.05
    },
    "version": VERSION
  },
{
    "id": "it-c2-u-sub-exp-2",
    "sectionId": "c2-u-substitution",
    "type": "expression",
    "prompt": "Evaluate \\(\\int_0^1 2x e^{x^2}\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "e-1",
      "equivalences": [
        "e-1",
        "-1+e"
      ]
    },
    "hints": [
      "Let \\(u=x^2\\) and change the limits."
    ],
    "solutionSteps": [
      "Let \\(u=x^2\\), \\(du=2x dx\\). Limits: 0 to 1.",
      "Integral becomes \\(\\int_0^1 e^u du = e-1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.substitution"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-integration-by-parts-exp-1",
    "sectionId": "c2-integration-by-parts",
    "type": "expression",
    "prompt": "Compute \\(\\int x e^x\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "e^x*(x-1)",
      "equivalences": [
        "x*e^x - e^x",
        "e^x*x - e^x"
      ]
    },
    "hints": [
      "Let \\(u=x\\), \\(dv=e^x dx\\)."
    ],
    "solutionSteps": [
      "Take \\(u=x\\), \\(dv=e^x dx\\). Then \\(du=dx\\), \\(v=e^x\\).",
      "\\(\\int x e^x dx = x e^x - \\int e^x dx = e^x(x-1)\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.by_parts"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-trig-integrals-exp-1",
    "sectionId": "c2-trig-integrals",
    "type": "expression",
    "prompt": "Compute \\(\\int_0^{\\pi} \\sin^2 x\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "pi/2",
      "equivalences": [
        "pi/2",
        "1/2*pi",
        "0.5*pi"
      ]
    },
    "hints": [
      "Use \\(\\sin^2 x = (1-\\cos 2x)/2\\)."
    ],
    "solutionSteps": [
      "Rewrite as \\(\\int_0^{\\pi} (1-\\cos 2x)/2\\,dx\\).",
      "Evaluate to get \\(\\pi/2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.trig"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-trig-substitution-mcq-2",
    "sectionId": "c2-trig-substitution",
    "type": "mcq",
    "prompt": "A standard substitution for \\(\\sqrt{9-x^2}\\) is:",
    "choices": [
      "\\(x=3\\sin\\theta\\)",
      "\\(x=3\\tan\\theta\\)",
      "\\(x=3\\sec\\theta\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x=3\\sin\\theta\\)"
    },
    "hints": [
      "Match the form \\(\\sqrt{a^2-x^2}\\)."
    ],
    "solutionSteps": [
      "For \\(\\sqrt{a^2-x^2}\\), use \\(x=a\\sin\\theta\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.trig_sub"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-partial-fractions-mcq-2",
    "sectionId": "c2-partial-fractions",
    "type": "mcq",
    "prompt": "For an irreducible quadratic denominator \\(x^2+px+q\\), the numerator should be:",
    "choices": [
      "\\(A\\)",
      "\\(Ax+B\\)",
      "\\(Ax^2+B\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(Ax+B\\)"
    },
    "hints": [
      "Use a linear numerator."
    ],
    "solutionSteps": [
      "Irreducible quadratics use \\(Ax+B\\) in the numerator."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.partial_fractions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-improper-integrals-num-1",
    "sectionId": "c2-improper-integrals",
    "type": "numeric",
    "prompt": "Evaluate \\(\\int_1^{\\infty} \\frac{1}{x^2}\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Use a limit of a power integral."
    ],
    "solutionSteps": [
      "Compute \\(\\lim_{b\\to\\infty} [-1/x]_1^b = 1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.improper"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-area-between-curves-num-1",
    "sectionId": "c2-area-between-curves",
    "type": "numeric",
    "prompt": "Find the area between \\(y=x\\) and \\(y=x^2\\) on \\([0,1]\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.1667,
      "tolerance": 0.01
    },
    "hints": [
      "Integrate top minus bottom: \\(x - x^2\\)."
    ],
    "solutionSteps": [
      "Area = \\(\\int_0^1 (x-x^2) dx = [x^2/2 - x^3/3]_0^1 = 1/6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.area_between_curves"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-volumes-exp-1",
    "sectionId": "c2-volumes",
    "type": "expression",
    "prompt": "Find the volume when \\(y=2\\) on \\([0,1]\\) is rotated about the x-axis (disk method).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "4*pi",
      "equivalences": [
        "4*pi",
        "4pi"
      ]
    },
    "hints": [
      "Use \\(V=\\pi \\int_a^b R(x)^2 dx\\)."
    ],
    "solutionSteps": [
      "Radius is 2, so \\(V=\\pi \\int_0^1 4 dx = 4\\pi\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.volumes"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-arc-length-exp-1",
    "sectionId": "c2-arc-length",
    "type": "expression",
    "prompt": "Compute the arc length of \\(y=x\\) on \\([0,1]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "sqrt(2)",
      "equivalences": [
        "sqrt(2)",
        "2^(1/2)"
      ]
    },
    "hints": [
      "Use \\(L=\\int_a^b \\sqrt{1+(f')^2} dx\\)."
    ],
    "solutionSteps": [
      "f'(x)=1, so \\(L=\\int_0^1 \\sqrt{2} dx = \\sqrt{2}\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.arc_length"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-surface-area-exp-1",
    "sectionId": "c2-surface-area",
    "type": "expression",
    "prompt": "Find the surface area when \\(y=1\\) on \\([0,1]\\) is rotated about the x-axis.",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2*pi",
      "equivalences": [
        "2*pi",
        "2pi"
      ]
    },
    "hints": [
      "Use \\(S=2\\pi \\int_a^b f(x)\\sqrt{1+(f')^2} dx\\)."
    ],
    "solutionSteps": [
      "f'(x)=0, so \\(S=2\\pi \\int_0^1 1 dx = 2\\pi\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.surface_area"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-work-num-1",
    "sectionId": "c2-work",
    "type": "numeric",
    "prompt": "A spring has \\(k=4\\). Find the work to stretch it from \\(x=0\\) to \\(x=2\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(W=\\int_a^b kx dx\\)."
    ],
    "solutionSteps": [
      "Work is \\(\\int_0^2 4x dx = 8\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.work"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-average-value-num-1",
    "sectionId": "c2-average-value",
    "type": "numeric",
    "prompt": "Find the average value of \\(f(x)=x\\) on \\([0,2]\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(f_{avg}=\\frac{1}{b-a}\\int_a^b f(x) dx\\)."
    ],
    "solutionSteps": [
      "Average value is \\((1/2)\\int_0^2 x dx = 1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "integrals.average_value"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-parametric-curves-mcq-2",
    "sectionId": "c2-parametric-curves",
    "type": "mcq",
    "prompt": "If \\(x=t^2\\) and \\(y=t\\), eliminating \\(t\\) gives:",
    "choices": [
      "\\(y=x^2\\)",
      "\\(x=y^2\\)",
      "\\(x=y\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x=y^2\\)"
    },
    "hints": [
      "Solve for \\(t\\) using \\(y=t\\)."
    ],
    "solutionSteps": [
      "Since \\(t=y\\), we get \\(x=y^2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "parametric.curves"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-parametric-derivatives-exp-1",
    "sectionId": "c2-parametric-derivatives",
    "type": "expression",
    "prompt": "For \\(x=t^2\\), \\(y=t^3\\), compute \\(dy/dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "3/2*t",
      "equivalences": [
        "(3*t)/2",
        "1.5*t"
      ]
    },
    "hints": [
      "Use \\(dy/dx=(dy/dt)/(dx/dt)\\)."
    ],
    "solutionSteps": [
      "dy/dt=3t^2, dx/dt=2t, so dy/dx=3t/2."
    ],
    "difficulty": "medium",
    "tags": [
      "parametric.derivatives"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-parametric-arc-length-num-1",
    "sectionId": "c2-parametric-arc-length",
    "type": "numeric",
    "prompt": "Find the arc length of \\(x=t\\), \\(y=0\\) for \\(t\\in[0,2]\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(L=\\int \\sqrt{(dx/dt)^2+(dy/dt)^2} dt\\)."
    ],
    "solutionSteps": [
      "dx/dt=1, dy/dt=0, so \\(L=\\int_0^2 1 dt = 2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "parametric.arc_length"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-polar-graphs-num-1",
    "sectionId": "c2-polar-graphs",
    "type": "numeric",
    "prompt": "Convert \\(r=2, \\theta=\\pi/3\\) to an x-coordinate.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(x=r\\cos\\theta\\)."
    ],
    "solutionSteps": [
      "x=2\\cos(\\pi/3)=1."
    ],
    "difficulty": "medium",
    "tags": [
      "polar.graphs"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-polar-area-exp-1",
    "sectionId": "c2-polar-area",
    "type": "expression",
    "prompt": "Find the area enclosed by \\(r=2\\) for \\(\\theta\\in[0,2\\pi]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "4*pi",
      "equivalences": [
        "4*pi",
        "4pi"
      ]
    },
    "hints": [
      "Use \\(A=\\frac{1}{2}\\int_a^b r^2 d\\theta\\)."
    ],
    "solutionSteps": [
      "A=\\(\\frac{1}{2}\\int_0^{2\\pi} 4 d\\theta = 4\\pi\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "polar.area"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-polar-arc-length-exp-1",
    "sectionId": "c2-polar-arc-length",
    "type": "expression",
    "prompt": "Find the polar arc length of \\(r=1\\) on \\([0,2\\pi]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2*pi",
      "equivalences": [
        "2*pi",
        "2pi"
      ]
    },
    "hints": [
      "Use \\(L=\\int_a^b \\sqrt{r^2+(dr/d\\theta)^2} d\\theta\\)."
    ],
    "solutionSteps": [
      "dr/d\\theta=0, so \\(L=\\int_0^{2\\pi} 1 d\\theta = 2\\pi\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "polar.arc_length"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
{
    "id": "it-c2-seq-definition-num-1",
    "sectionId": "c2-seq-definition",
    "type": "numeric",
    "prompt": "For \\(a_n = \\frac{n}{n+1}\\), compute \\(a_3\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.75,
      "tolerance": 0.01
    },
    "hints": [
      "Substitute \\(n=3\\)."
    ],
    "solutionSteps": [
      "a_3 = 3/4."
    ],
    "difficulty": "medium",
    "tags": [
      "sequences.definition"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-seq-limits-num-1",
    "sectionId": "c2-seq-limits",
    "type": "numeric",
    "prompt": "Compute \\(\\lim_{n\\to\\infty} \\frac{n}{n+1}\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.01
    },
    "hints": [
      "Divide by the highest power of \\(n\\)."
    ],
    "solutionSteps": [
      "The limit is 1."
    ],
    "difficulty": "medium",
    "tags": [
      "sequences.limits"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-seq-monotonic-mcq-2",
    "sectionId": "c2-seq-monotonic",
    "type": "mcq",
    "prompt": "If \\(a_{n+1} \\ge a_n\\) for all n, the sequence is:",
    "choices": [
      "Increasing",
      "Decreasing",
      "Neither"
    ],
    "answer": {
      "kind": "choice",
      "value": "Increasing"
    },
    "hints": [
      "Compare successive terms."
    ],
    "solutionSteps": [
      "\\(a_{n+1} \\ge a_n\\) defines an increasing sequence."
    ],
    "difficulty": "medium",
    "tags": [
      "sequences.monotonic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-seq-bounded-mcq-2",
    "sectionId": "c2-seq-bounded",
    "type": "mcq",
    "prompt": "If \\(a_n \\le 10\\) for all n, then the sequence is:",
    "choices": [
      "Bounded above",
      "Bounded below",
      "Unbounded"
    ],
    "answer": {
      "kind": "choice",
      "value": "Bounded above"
    },
    "hints": [
      "Compare to a constant upper bound."
    ],
    "solutionSteps": [
      "\\(a_n \\le 10\\) means the sequence is bounded above."
    ],
    "difficulty": "medium",
    "tags": [
      "sequences.bounded"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-convergence-mcq-2",
    "sectionId": "c2-series-convergence",
    "type": "mcq",
    "prompt": "If \\(\\lim_{n\\to\\infty} a_n \\ne 0\\), then \\(\\sum a_n\\):",
    "choices": [
      "Converges",
      "Diverges",
      "May converge or diverge"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diverges"
    },
    "hints": [
      "Use the test for divergence."
    ],
    "solutionSteps": [
      "Nonzero term limit implies divergence."
    ],
    "difficulty": "medium",
    "tags": [
      "series.convergence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-geometric-num-1",
    "sectionId": "c2-series-geometric",
    "type": "numeric",
    "prompt": "Find \\(\\sum_{n=0}^{\\infty} 3(1/2)^n\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 6,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(a/(1-r)\\)."
    ],
    "solutionSteps": [
      "Sum is \\(3/(1-1/2)=6\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.geometric"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-p-series-mcq-2",
    "sectionId": "c2-series-p-series",
    "type": "mcq",
    "prompt": "The series \\(\\sum 1/n^p\\) converges when:",
    "choices": [
      "\\(p>1\\)",
      "\\(p=1\\)",
      "\\(p<1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(p>1\\)"
    },
    "hints": [
      "Recall the p-series rule."
    ],
    "solutionSteps": [
      "p-series converges only for \\(p>1\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.p_series"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-harmonic-mcq-2",
    "sectionId": "c2-series-harmonic",
    "type": "mcq",
    "prompt": "The harmonic series \\(\\sum_{n=1}^{\\infty} 1/n\\) is:",
    "choices": [
      "Convergent",
      "Divergent",
      "Alternating"
    ],
    "answer": {
      "kind": "choice",
      "value": "Divergent"
    },
    "hints": [
      "It is a p-series with \\(p=1\\)."
    ],
    "solutionSteps": [
      "p=1 implies divergence."
    ],
    "difficulty": "medium",
    "tags": [
      "series.harmonic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-test-comparison-mcq-2",
    "sectionId": "c2-test-comparison",
    "type": "mcq",
    "prompt": "If \\(0 \\le a_n \\le b_n\\) and \\(\\sum b_n\\) converges, then \\(\\sum a_n\\):",
    "choices": [
      "Converges",
      "Diverges",
      "Is inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Converges"
    },
    "hints": [
      "Use the comparison test."
    ],
    "solutionSteps": [
      "A smaller series than a convergent one also converges."
    ],
    "difficulty": "medium",
    "tags": [
      "series.comparison"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-test-limit-comparison-mcq-2",
    "sectionId": "c2-test-limit-comparison",
    "type": "mcq",
    "prompt": "If \\(\\lim_{n\\to\\infty} a_n/b_n = c\\) with \\(0<c<\\infty\\), then:",
    "choices": [
      "Both series behave the same",
      "Only \\(\\sum a_n\\) converges",
      "Only \\(\\sum b_n\\) converges"
    ],
    "answer": {
      "kind": "choice",
      "value": "Both series behave the same"
    },
    "hints": [
      "Limit comparison compares growth rates."
    ],
    "solutionSteps": [
      "A finite positive limit means both converge or both diverge."
    ],
    "difficulty": "medium",
    "tags": [
      "series.limit_comparison"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-test-integral-mcq-2",
    "sectionId": "c2-test-integral",
    "type": "mcq",
    "prompt": "If \\(f(x)\\) is positive, decreasing, and \\(\\int_1^{\\infty} f(x)\\,dx\\) diverges, then \\(\\sum f(n)\\):",
    "choices": [
      "Converges",
      "Diverges",
      "Is inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diverges"
    },
    "hints": [
      "Integral test matches convergence behavior."
    ],
    "solutionSteps": [
      "Integral test says both diverge."
    ],
    "difficulty": "medium",
    "tags": [
      "series.integral_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-test-alternating-mcq-2",
    "sectionId": "c2-test-alternating",
    "type": "mcq",
    "prompt": "An alternating series \\(\\sum (-1)^{n-1} a_n\\) converges if:",
    "choices": [
      "\\(a_n\\) decreases and \\(\\lim a_n = 0\\)",
      "\\(a_n\\) increases",
      "\\(\\lim a_n \\ne 0\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a_n\\) decreases and \\(\\lim a_n = 0\\)"
    },
    "hints": [
      "Use the alternating series test."
    ],
    "solutionSteps": [
      "Decreasing terms with limit 0 guarantee convergence."
    ],
    "difficulty": "medium",
    "tags": [
      "series.alternating"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-test-ratio-mcq-2",
    "sectionId": "c2-test-ratio",
    "type": "mcq",
    "prompt": "For the ratio test, if \\(L<1\\), the series:",
    "choices": [
      "Converges absolutely",
      "Diverges",
      "Is inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Converges absolutely"
    },
    "hints": [
      "Compare to a geometric series."
    ],
    "solutionSteps": [
      "L<1 implies absolute convergence."
    ],
    "difficulty": "medium",
    "tags": [
      "series.ratio_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-test-root-mcq-2",
    "sectionId": "c2-test-root",
    "type": "mcq",
    "prompt": "For the root test, if \\(L>1\\), the series:",
    "choices": [
      "Converges absolutely",
      "Diverges",
      "Is inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diverges"
    },
    "hints": [
      "Root test compares growth rate."
    ],
    "solutionSteps": [
      "L>1 implies divergence."
    ],
    "difficulty": "medium",
    "tags": [
      "series.root_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-power-series-rep-mcq-2",
    "sectionId": "c2-power-series-rep",
    "type": "mcq",
    "prompt": "The power series \\(\\sum c_n (x-2)^n\\) is centered at:",
    "choices": [
      "\\(a=0\\)",
      "\\(a=1\\)",
      "\\(a=2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a=2\\)"
    },
    "hints": [
      "Center is the value subtracted from x."
    ],
    "solutionSteps": [
      "The center is 2."
    ],
    "difficulty": "medium",
    "tags": [
      "series.power"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-power-series-radius-num-1",
    "sectionId": "c2-power-series-radius",
    "type": "numeric",
    "prompt": "A series converges for \\(|x-1|<3\\). What is the radius of convergence?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Radius is the distance from the center."
    ],
    "solutionSteps": [
      "The radius is 3."
    ],
    "difficulty": "medium",
    "tags": [
      "series.radius"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
{
    "id": "it-c2-taylor-series-mcq-2",
    "sectionId": "c2-taylor-series",
    "type": "mcq",
    "prompt": "In a Taylor series, the coefficient \\(c_n\\) equals:",
    "choices": [
      "\\(f^{(n)}(a)\\)",
      "\\(f^{(n)}(a)/n!\\)",
      "\\(f(a)/n\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(f^{(n)}(a)/n!\\)"
    },
    "hints": [
      "Use the Taylor series formula."
    ],
    "solutionSteps": [
      "\\(c_n = f^{(n)}(a)/n!\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.taylor"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-maclaurin-series-mcq-2",
    "sectionId": "c2-maclaurin-series",
    "type": "mcq",
    "prompt": "A Maclaurin series is a Taylor series centered at:",
    "choices": [
      "\\(a=0\\)",
      "\\(a=1\\)",
      "\\(a=-1\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(a=0\\)"
    },
    "hints": [
      "Maclaurin means center at 0."
    ],
    "solutionSteps": [
      "Maclaurin series is Taylor at 0."
    ],
    "difficulty": "medium",
    "tags": [
      "series.maclaurin"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-taylor-polynomials-mcq-2",
    "sectionId": "c2-taylor-polynomials",
    "type": "mcq",
    "prompt": "The second-degree Taylor polynomial for \\(e^x\\) about \\(0\\) is:",
    "choices": [
      "\\(1 + x + x^2/2\\)",
      "\\(1 + x + x^2\\)",
      "\\(1 + x^2/2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(1 + x + x^2/2\\)"
    },
    "hints": [
      "Use the Maclaurin series for \\(e^x\\)."
    ],
    "solutionSteps": [
      "Maclaurin: \\(1 + x + x^2/2 + \\dots\\), so \\(P_2=1+x+x^2/2\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.taylor_poly"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-error-mcq-2",
    "sectionId": "c2-series-error",
    "type": "mcq",
    "prompt": "If \\(|f^{(n+1)}(x)| \\le M\\) near \\(a\\), the Lagrange error bound is:",
    "choices": [
      "\\(M|x-a|^{n}/n!\\)",
      "\\(M|x-a|^{n+1}/(n+1)!\\)",
      "\\(|x-a|^{n+1}/M\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(M|x-a|^{n+1}/(n+1)!\\)"
    },
    "hints": [
      "Use the Lagrange form of the remainder."
    ],
    "solutionSteps": [
      "Error bound is \\(M|x-a|^{n+1}/(n+1)!\\)."
    ],
    "difficulty": "medium",
    "tags": [
      "series.error"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-manipulation-mcq-2",
    "sectionId": "c2-series-manipulation",
    "type": "mcq",
    "prompt": "Differentiating a power series within its radius of convergence:",
    "choices": [
      "Changes the radius",
      "Does not change the radius",
      "Always makes it converge for all x"
    ],
    "answer": {
      "kind": "choice",
      "value": "Does not change the radius"
    },
    "hints": [
      "Radius stays the same under differentiation."
    ],
    "solutionSteps": [
      "The radius of convergence is unchanged."
    ],
    "difficulty": "medium",
    "tags": [
      "series.manipulation"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
{
    "id": "it-c2-series-intro-num-2",
    "sectionId": "c2-series-intro",
    "type": "numeric",
    "prompt": "Compute the partial sum \\(S_3\\) for \\(\\sum_{n=1}^{\\infty} (1/2)^n\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.875,
      "tolerance": 0.01
    },
    "hints": [
      "Add the first three terms."
    ],
    "solutionSteps": [
      "S_3 = 1/2 + 1/4 + 1/8 = 7/8 = 0.875."
    ],
    "difficulty": "medium",
    "tags": [
      "series.intro"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-u-substitution-hard-1",
    "sectionId": "c2-u-substitution",
    "type": "expression",
    "prompt": "Evaluate \\(\\int_1^2 \\frac{3x^2}{1+x^3}\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "ln(9/2)",
      "equivalences": [
        "ln(9/2)",
        "ln(9)-ln(2)"
      ]
    },
    "hints": [
      "Let \\(u=1+x^3\\) and change the limits."
    ],
    "solutionSteps": [
      "Let \\(u=1+x^3\\), so \\(du=3x^2 dx\\).",
      "Change limits: \\(x=1\\Rightarrow u=2\\), \\(x=2\\Rightarrow u=9\\).",
      "\\(\\int_2^9 \\frac{1}{u} du = \\ln(9/2)\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.substitution"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-integration-by-parts-hard-1",
    "sectionId": "c2-integration-by-parts",
    "type": "expression",
    "prompt": "Compute \\(\\int e^x \\sin x\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "0.5*e^x*(sin(x)-cos(x))",
      "equivalences": [
        "e^x*(sin(x)-cos(x))/2",
        "0.5*e^x*(sin(x)-cos(x))"
      ]
    },
    "hints": [
      "Apply integration by parts twice."
    ],
    "solutionSteps": [
      "Let \\(I=\\int e^x\\sin x\\,dx\\).",
      "Integrate by parts twice to get \\(I=e^x\\sin x-\\int e^x\\cos x\\,dx\\).",
      "After the second step, \\(2I=e^x(\\sin x-\\cos x)\\), so \\(I=\\frac{1}{2}e^x(\\sin x-\\cos x)\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.by_parts"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-trig-integrals-hard-1",
    "sectionId": "c2-trig-integrals",
    "type": "expression",
    "prompt": "Compute \\(\\int \\sin^3 x \\cos^2 x\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "cos(x)^5/5 - cos(x)^3/3",
      "equivalences": [
        "cos(x)^5/5 - cos(x)^3/3"
      ]
    },
    "hints": [
      "Save one \\(\\sin x\\) and use \\(\\sin^2 x=1-\\cos^2 x\\)."
    ],
    "solutionSteps": [
      "Write \\(\\sin^3 x=\\sin x(1-\\cos^2 x)\\).",
      "Let \\(u=\\cos x\\), \\(du=-\\sin x dx\\).",
      "\\(-\\int (u^2-u^4) du = u^5/5 - u^3/3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.trig"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-trig-substitution-hard-1",
    "sectionId": "c2-trig-substitution",
    "type": "expression",
    "prompt": "Evaluate \\(\\int \\frac{dx}{\\sqrt{9-x^2}}\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "arcsin(x/3)",
      "equivalences": [
        "arcsin(x/3)",
        "asin(x/3)"
      ]
    },
    "hints": [
      "Use \\(x=3\\sin\\theta\\)."
    ],
    "solutionSteps": [
      "Let \\(x=3\\sin\\theta\\), so \\(dx=3\\cos\\theta d\\theta\\).",
      "Then \\(\\sqrt{9-x^2}=3\\cos\\theta\\), giving \\(\\int d\\theta\\).",
      "So the answer is \\(\\theta=\\arcsin(x/3)\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.trig_sub"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-partial-fractions-hard-1",
    "sectionId": "c2-partial-fractions",
    "type": "expression",
    "prompt": "Compute \\(\\int \\frac{3x+5}{x^2-1}\\,dx\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "4*ln|x-1| - ln|x+1|",
      "equivalences": [
        "4*ln|x-1| - ln|x+1|",
        "4*ln(abs(x-1)) - ln(abs(x+1))"
      ]
    },
    "hints": [
      "Decompose into \\(A/(x-1)+B/(x+1)\\)."
    ],
    "solutionSteps": [
      "Solve \\(3x+5=A(x+1)+B(x-1)\\) to get \\(A=4\\), \\(B=-1\\).",
      "Integrate \\(4/(x-1) - 1/(x+1)\\) term by term."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.partial_fractions"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-improper-integrals-hard-1",
    "sectionId": "c2-improper-integrals",
    "type": "mcq",
    "prompt": "Does \\(\\int_1^{\\infty} \\frac{1}{\\sqrt{x}}\\,dx\\) converge?",
    "choices": [
      "Converges",
      "Diverges",
      "Cannot determine"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diverges"
    },
    "hints": [
      "Use the p-test for improper integrals."
    ],
    "solutionSteps": [
      "Here \\(p=1/2\\le 1\\), so the integral diverges."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.improper"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-area-between-curves-hard-1",
    "sectionId": "c2-area-between-curves",
    "type": "expression",
    "prompt": "Find the area between \\(y=\\sin x\\) and \\(y=\\cos x\\) on \\([0,\\pi/2]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2*sqrt(2)-2",
      "equivalences": [
        "2*sqrt(2)-2",
        "2*(sqrt(2)-1)"
      ]
    },
    "hints": [
      "They intersect at \\(x=\\pi/4\\)."
    ],
    "solutionSteps": [
      "Split at \\(\\pi/4\\): integrate \\(\\cos x-\\sin x\\) then \\(\\sin x-\\cos x\\).",
      "Each piece gives \\(\\sqrt{2}-1\\), so total is \\(2\\sqrt{2}-2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.area_between_curves"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-volumes-hard-1",
    "sectionId": "c2-volumes",
    "type": "expression",
    "prompt": "Use shells to find the volume when the region between \\(y=x\\) and \\(y=x^2\\) on \\([0,1]\\) is rotated about the y-axis.",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "pi/6",
      "equivalences": [
        "pi/6",
        "1/6*pi"
      ]
    },
    "hints": [
      "Radius = x, height = x - x^2."
    ],
    "solutionSteps": [
      "\\(V=2\\pi\\int_0^1 x(x-x^2) dx = 2\\pi(1/3-1/4)=\\pi/6\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.volumes"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-arc-length-hard-1",
    "sectionId": "c2-arc-length",
    "type": "expression",
    "prompt": "Find the arc length of \\(y=\\frac{2}{3}x^{3/2}\\) on \\([0,1]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "2/3*(2*sqrt(2)-1)",
      "equivalences": [
        "2/3*(2*sqrt(2)-1)",
        "2*(2*sqrt(2)-1)/3"
      ]
    },
    "hints": [
      "Compute \\(f'(x)=\\sqrt{x}\\)."
    ],
    "solutionSteps": [
      "\\(L=\\int_0^1 \\sqrt{1+x}\\,dx = \\frac{2}{3}((1+x)^{3/2})\\big|_0^1\\).",
      "This gives \\(\\frac{2}{3}(2\\sqrt{2}-1)\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.arc_length"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-surface-area-hard-1",
    "sectionId": "c2-surface-area",
    "type": "expression",
    "prompt": "Find the surface area when \\(y=x\\) on \\([0,1]\\) is rotated about the x-axis.",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "pi*sqrt(2)",
      "equivalences": [
        "pi*sqrt(2)",
        "sqrt(2)*pi"
      ]
    },
    "hints": [
      "Use \\(S=2\\pi\\int_a^b f(x)\\sqrt{1+(f')^2} dx\\)."
    ],
    "solutionSteps": [
      "\\(f'(x)=1\\), so \\(S=2\\pi\\int_0^1 x\\sqrt{2} dx = \\pi\\sqrt{2}\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.surface_area"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-work-hard-1",
    "sectionId": "c2-work",
    "type": "numeric",
    "prompt": "A force \\(F(x)=x^2+1\\) moves an object from \\(x=0\\) to \\(x=2\\). Find the work.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 4.6667,
      "tolerance": 0.01
    },
    "hints": [
      "Work is \\(\\int_a^b F(x) dx\\)."
    ],
    "solutionSteps": [
      "\\(\\int_0^2 (x^2+1) dx = 8/3 + 2 = 14/3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.work"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-average-value-hard-1",
    "sectionId": "c2-average-value",
    "type": "numeric",
    "prompt": "Find the average value of \\(f(x)=x^2+1\\) on \\([0,2]\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2.3333,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(f_{avg}=\\frac{1}{b-a}\\int_a^b f(x) dx\\)."
    ],
    "solutionSteps": [
      "Average value is \\((1/2)\\int_0^2 (x^2+1) dx = 7/3\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "integrals.average_value"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-parametric-curves-hard-1",
    "sectionId": "c2-parametric-curves",
    "type": "mcq",
    "prompt": "Eliminate the parameter for \\(x=2\\cos t\\), \\(y=3\\sin t\\).",
    "choices": [
      "\\(x^2/4 + y^2/9 = 1\\)",
      "\\(x^2/9 + y^2/4 = 1\\)",
      "\\(y=x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x^2/4 + y^2/9 = 1\\)"
    },
    "hints": [
      "Use \\(\\cos^2 t + \\sin^2 t = 1\\)."
    ],
    "solutionSteps": [
      "\\((x/2)^2 + (y/3)^2 = 1\\), so \\(x^2/4 + y^2/9 = 1\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "parametric.curves"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-parametric-derivatives-hard-1",
    "sectionId": "c2-parametric-derivatives",
    "type": "numeric",
    "prompt": "For \\(x=t^2\\), \\(y=t^3\\), compute \\(d^2y/dx^2\\) at \\(t=1\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.75,
      "tolerance": 0.01
    },
    "hints": [
      "Compute \\(dy/dx\\) and differentiate with respect to \\(t\\)."
    ],
    "solutionSteps": [
      "\\(dy/dx=3t/2\\).",
      "\\(d/dt(dy/dx)=3/2\\), so \\(d^2y/dx^2=(3/2)/(2t)=3/(4t)\\).",
      "At \\(t=1\\), the value is \\(3/4\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "parametric.derivatives"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-parametric-arc-length-hard-1",
    "sectionId": "c2-parametric-arc-length",
    "type": "expression",
    "prompt": "Find the arc length of \\(x=2\\cos t\\), \\(y=2\\sin t\\) for \\(t\\in[0,\\pi/2]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "pi",
      "equivalences": [
        "pi"
      ]
    },
    "hints": [
      "Speed is constant for a circle."
    ],
    "solutionSteps": [
      "\\(\\sqrt{(dx/dt)^2+(dy/dt)^2}=2\\), so \\(L=\\int_0^{\\pi/2} 2 dt = \\pi\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "parametric.arc_length"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-polar-graphs-hard-1",
    "sectionId": "c2-polar-graphs",
    "type": "mcq",
    "prompt": "A point has Cartesian coordinates \\((0,-2)\\). Its polar angle \\(\\theta\\) in \\([0,2\\pi)\\) is:",
    "choices": [
      "\\(\\pi/2\\)",
      "\\(\\pi\\)",
      "\\(3\\pi/2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(3\\pi/2\\)"
    },
    "hints": [
      "The point lies on the negative y-axis."
    ],
    "solutionSteps": [
      "The angle is \\(3\\pi/2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "polar.graphs"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-polar-area-hard-1",
    "sectionId": "c2-polar-area",
    "type": "expression",
    "prompt": "Find the area enclosed by \\(r=1+\\cos\\theta\\) for \\(\\theta\\in[0,2\\pi]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "3*pi/2",
      "equivalences": [
        "3*pi/2",
        "1.5*pi"
      ]
    },
    "hints": [
      "Use \\(A=\\frac{1}{2}\\int_0^{2\\pi} r^2 d\\theta\\)."
    ],
    "solutionSteps": [
      "Compute \\(\\frac{1}{2}\\int_0^{2\\pi} (1+\\cos\\theta)^2 d\\theta = 3\\pi/2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "polar.area"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-polar-arc-length-hard-1",
    "sectionId": "c2-polar-arc-length",
    "type": "expression",
    "prompt": "Find the polar arc length of \\(r=2\\cos\\theta\\) on \\([0,\\pi/2]\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "pi",
      "equivalences": [
        "pi"
      ]
    },
    "hints": [
      "Compute \\(dr/d\\theta\\) and simplify."
    ],
    "solutionSteps": [
      "\\(r=2\\cos\\theta\\), \\(dr/d\\theta=-2\\sin\\theta\\).",
      "\\(\\sqrt{r^2+(dr/d\\theta)^2}=2\\), so \\(L=\\int_0^{\\pi/2} 2 d\\theta = \\pi\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "polar.arc_length"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-seq-definition-hard-1",
    "sectionId": "c2-seq-definition",
    "type": "expression",
    "prompt": "A sequence is defined by \\(a_1=2\\), \\(a_{n+1}=a_n+3\\). Find \\(a_n\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "3*n-1",
      "equivalences": [
        "3*n-1"
      ]
    },
    "hints": [
      "This is an arithmetic sequence with common difference 3."
    ],
    "solutionSteps": [
      "a_n = 2 + 3(n-1) = 3n - 1."
    ],
    "difficulty": "hard",
    "tags": [
      "sequences.definition"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-seq-limits-hard-1",
    "sectionId": "c2-seq-limits",
    "type": "expression",
    "prompt": "Compute \\(\\lim_{n\\to\\infty} (1+1/n)^n\\).",
    "choices": null,
    "answer": {
      "kind": "expression",
      "value": "e",
      "equivalences": [
        "e"
      ]
    },
    "hints": [
      "This is a classic limit definition of e."
    ],
    "solutionSteps": [
      "The limit equals e."
    ],
    "difficulty": "hard",
    "tags": [
      "sequences.limits"
    ],
    "grading": {
      "mode": "symbolic",
      "tolerance": 0.001
    },
    "version": VERSION
  },
  {
    "id": "it-c2-seq-monotonic-hard-1",
    "sectionId": "c2-seq-monotonic",
    "type": "mcq",
    "prompt": "The sequence \\(a_n=1-1/n\\) is:",
    "choices": [
      "Increasing",
      "Decreasing",
      "Neither"
    ],
    "answer": {
      "kind": "choice",
      "value": "Increasing"
    },
    "hints": [
      "Compare \\(a_{n+1}\\) to \\(a_n\\)."
    ],
    "solutionSteps": [
      "It increases toward 1."
    ],
    "difficulty": "hard",
    "tags": [
      "sequences.monotonic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-seq-bounded-hard-1",
    "sectionId": "c2-seq-bounded",
    "type": "mcq",
    "prompt": "The sequence \\(a_n = (-1)^n\\) is:",
    "choices": [
      "Unbounded",
      "Bounded above only",
      "Bounded above and below"
    ],
    "answer": {
      "kind": "choice",
      "value": "Bounded above and below"
    },
    "hints": [
      "The terms alternate between -1 and 1."
    ],
    "solutionSteps": [
      "All terms lie between -1 and 1."
    ],
    "difficulty": "hard",
    "tags": [
      "sequences.bounded"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-intro-hard-1",
    "sectionId": "c2-series-intro",
    "type": "numeric",
    "prompt": "Compute \\(S_4\\) for \\(\\sum_{n=1}^{\\infty} (1/3)^n\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.4938,
      "tolerance": 0.01
    },
    "hints": [
      "Use the geometric partial sum formula."
    ],
    "solutionSteps": [
      "S_4 = (1/3)(1-(1/3)^4)/(1-1/3) = 40/81."
    ],
    "difficulty": "hard",
    "tags": [
      "series.intro"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-convergence-hard-1",
    "sectionId": "c2-series-convergence",
    "type": "mcq",
    "prompt": "If \\(\\lim_{n\\to\\infty} a_n = 0\\), then \\(\\sum a_n\\):",
    "choices": [
      "Must converge",
      "Must diverge",
      "May converge or diverge"
    ],
    "answer": {
      "kind": "choice",
      "value": "May converge or diverge"
    },
    "hints": [
      "Limit 0 is necessary but not sufficient."
    ],
    "solutionSteps": [
      "The series can converge or diverge when \\(a_n\\to 0\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.convergence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-geometric-hard-1",
    "sectionId": "c2-series-geometric",
    "type": "numeric",
    "prompt": "Find \\(\\sum_{n=0}^{\\infty} 4(-1/2)^n\\).",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 2.6667,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(a/(1-r)\\) with r=-1/2."
    ],
    "solutionSteps": [
      "Sum is 4/(1+1/2)=8/3."
    ],
    "difficulty": "hard",
    "tags": [
      "series.geometric"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-p-series-hard-1",
    "sectionId": "c2-series-p-series",
    "type": "mcq",
    "prompt": "The series \\(\\sum_{n=1}^{\\infty} 1/n^{3/4}\\) is:",
    "choices": [
      "Convergent",
      "Divergent",
      "Alternating"
    ],
    "answer": {
      "kind": "choice",
      "value": "Divergent"
    },
    "hints": [
      "p-series converges only for p>1."
    ],
    "solutionSteps": [
      "Here p=3/4, so it diverges."
    ],
    "difficulty": "hard",
    "tags": [
      "series.p_series"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-harmonic-hard-1",
    "sectionId": "c2-series-harmonic",
    "type": "mcq",
    "prompt": "The series \\(\\sum_{n=1}^{\\infty} 1/(n+1)\\) is:",
    "choices": [
      "Convergent",
      "Divergent",
      "Alternating"
    ],
    "answer": {
      "kind": "choice",
      "value": "Divergent"
    },
    "hints": [
      "It behaves like the harmonic series."
    ],
    "solutionSteps": [
      "It diverges by comparison to \\(\\sum 1/n\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.harmonic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-test-comparison-hard-1",
    "sectionId": "c2-test-comparison",
    "type": "mcq",
    "prompt": "If \\(0 \\le a_n \\le 1/n^2\\), then \\(\\sum a_n\\) is:",
    "choices": [
      "Convergent",
      "Divergent",
      "Inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Convergent"
    },
    "hints": [
      "Compare to a convergent p-series."
    ],
    "solutionSteps": [
      "Since \\(\\sum 1/n^2\\) converges, so does \\(\\sum a_n\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.comparison"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-test-limit-comparison-hard-1",
    "sectionId": "c2-test-limit-comparison",
    "type": "mcq",
    "prompt": "Let \\(a_n=\\frac{2n+1}{n^2+1}\\) and \\(b_n=1/n\\). Since \\(\\lim a_n/b_n = 2\\), \\(\\sum a_n\\) is:",
    "choices": [
      "Convergent",
      "Divergent",
      "Inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Divergent"
    },
    "hints": [
      "Compare to the harmonic series."
    ],
    "solutionSteps": [
      "A positive finite limit means both series behave the same; \\(\\sum 1/n\\) diverges."
    ],
    "difficulty": "hard",
    "tags": [
      "series.limit_comparison"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-test-integral-hard-1",
    "sectionId": "c2-test-integral",
    "type": "mcq",
    "prompt": "Does \\(\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln n}\\) converge?",
    "choices": [
      "Converges",
      "Diverges",
      "Inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diverges"
    },
    "hints": [
      "Use the integral test."
    ],
    "solutionSteps": [
      "The corresponding improper integral diverges, so the series diverges."
    ],
    "difficulty": "hard",
    "tags": [
      "series.integral_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-test-alternating-hard-1",
    "sectionId": "c2-test-alternating",
    "type": "numeric",
    "prompt": "For \\(\\sum_{n=1}^{\\infty} (-1)^{n-1}/n\\), estimate \\(|S-S_4|\\) using the alternating series error bound.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.2,
      "tolerance": 0.01
    },
    "hints": [
      "Use \\(a_{N+1}\\)."
    ],
    "solutionSteps": [
      "The error is at most \\(a_5=1/5=0.2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.alternating"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-test-ratio-hard-1",
    "sectionId": "c2-test-ratio",
    "type": "mcq",
    "prompt": "Using the ratio test on \\(a_n=3^n/n!\\), the series:",
    "choices": [
      "Converges absolutely",
      "Diverges",
      "Is inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Converges absolutely"
    },
    "hints": [
      "Compute \\(a_{n+1}/a_n\\)."
    ],
    "solutionSteps": [
      "The ratio limit is 0, so the series converges absolutely."
    ],
    "difficulty": "hard",
    "tags": [
      "series.ratio_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-test-root-hard-1",
    "sectionId": "c2-test-root",
    "type": "mcq",
    "prompt": "Using the root test on \\(a_n=2^n\\), the series \\(\\sum 2^n\\):",
    "choices": [
      "Converges absolutely",
      "Diverges",
      "Is inconclusive"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diverges"
    },
    "hints": [
      "The root test computes \\(\\lim \\sqrt[n]{|a_n|}\\)."
    ],
    "solutionSteps": [
      "The limit is 2, so the series diverges."
    ],
    "difficulty": "hard",
    "tags": [
      "series.root_test"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-power-series-rep-hard-1",
    "sectionId": "c2-power-series-rep",
    "type": "mcq",
    "prompt": "The power series \\(\\sum c_n (x+1)^n\\) is centered at:",
    "choices": [
      "-1",
      "0",
      "1"
    ],
    "answer": {
      "kind": "choice",
      "value": "-1"
    },
    "hints": [
      "Look at the shift inside the parentheses."
    ],
    "solutionSteps": [
      "Center is -1."
    ],
    "difficulty": "hard",
    "tags": [
      "series.power"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-power-series-radius-hard-1",
    "sectionId": "c2-power-series-radius",
    "type": "numeric",
    "prompt": "A series converges on \\((-2,4)\\). What is its radius of convergence?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 3,
      "tolerance": 0.01
    },
    "hints": [
      "Radius is the distance from the center to an endpoint."
    ],
    "solutionSteps": [
      "The interval is centered at 1 with radius 3."
    ],
    "difficulty": "hard",
    "tags": [
      "series.radius"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": VERSION
  },
  {
    "id": "it-c2-taylor-series-hard-1",
    "sectionId": "c2-taylor-series",
    "type": "mcq",
    "prompt": "A Taylor series about \\(x=a\\) uses:",
    "choices": [
      "Only \\(f(a)\\)",
      "Derivatives evaluated at \\(a\\)",
      "Derivatives evaluated at \\(x\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "Derivatives evaluated at \\(a\\)"
    },
    "hints": [
      "Look at the formula for Taylor coefficients."
    ],
    "solutionSteps": [
      "Coefficients use derivatives at \\(x=a\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.taylor"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-maclaurin-series-hard-1",
    "sectionId": "c2-maclaurin-series",
    "type": "mcq",
    "prompt": "In the Maclaurin series for \\(\\cos x\\), the coefficient of \\(x^2\\) is:",
    "choices": [
      "-1/2",
      "1/2",
      "-1"
    ],
    "answer": {
      "kind": "choice",
      "value": "-1/2"
    },
    "hints": [
      "\\(\\cos x = 1 - x^2/2 + \\dots\\)"
    ],
    "solutionSteps": [
      "The coefficient is \\(-1/2\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.maclaurin"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-taylor-polynomials-hard-1",
    "sectionId": "c2-taylor-polynomials",
    "type": "mcq",
    "prompt": "The third-degree Taylor polynomial for \\(\\sin x\\) about 0 is:",
    "choices": [
      "\\(x - x^3/6\\)",
      "\\(x + x^3/6\\)",
      "\\(x - x^2/2\\)"
    ],
    "answer": {
      "kind": "choice",
      "value": "\\(x - x^3/6\\)"
    },
    "hints": [
      "Use the Maclaurin series for \\(\\sin x\\)."
    ],
    "solutionSteps": [
      "\\(\\sin x = x - x^3/6 + \\dots\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.taylor_poly"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-error-hard-1",
    "sectionId": "c2-series-error",
    "type": "numeric",
    "prompt": "Use the Lagrange error bound with \\(M=2\\), \\(a=0\\), \\(x=0.5\\), \\(n=2\\). Find the bound.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 0.0417,
      "tolerance": 0.005
    },
    "hints": [
      "Use \\(M|x-a|^{n+1}/(n+1)!\\)."
    ],
    "solutionSteps": [
      "Bound = \\(2*(0.5)^3/3! = 1/24\\approx 0.0417\\)."
    ],
    "difficulty": "hard",
    "tags": [
      "series.error"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.005
    },
    "version": VERSION
  },
  {
    "id": "it-c2-series-manipulation-hard-1",
    "sectionId": "c2-series-manipulation",
    "type": "mcq",
    "prompt": "If \\(\\sum c_n x^n\\) has radius \\(R\\), then \\(\\sum c_n x^{n+1}\\) has radius:",
    "choices": [
      "R",
      "R+1",
      "0"
    ],
    "answer": {
      "kind": "choice",
      "value": "R"
    },
    "hints": [
      "Multiplying by x does not change the radius."
    ],
    "solutionSteps": [
      "The radius of convergence stays the same."
    ],
    "difficulty": "hard",
    "tags": [
      "series.manipulation"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": VERSION
  }
];

  window.FCContentData.items = items;
})();
