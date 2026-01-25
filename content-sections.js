window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.1";
  window.FCContentData.VERSION = VERSION;

  const sections = [
  {
    "id": "c1-limits-intro",
    "chapterId": "c1-limits-basics",
    "title": "Definition of a Limit",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "easy",
    "learningObjectives": [
      "Describe what a limit means",
      "Estimate limits from tables and graphs"
    ],
    "tags": [
      "limits.intro"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-intro-def",
        "type": "definition",
        "title": "Informal Definition",
        "body": "A limit describes the value a function approaches as the input approaches a given number.<br>\\[\\lim_{x \\to a} f(x) = L\\]<br>This means that as \\(x\\) gets closer to \\(a\\), the values of \\(f(x)\\) get closer to \\(L\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-intro-notes",
        "type": "note",
        "title": "Important Notes",
        "body": "The limit depends on values of \\(f(x)\\) near \\(a\\), not necessarily at \\(a\\).<br>A limit may exist even if \\(f(a)\\) is undefined.<br>A limit may exist even if \\(f(a) \\ne L\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-limits-intro-1"
    ],
    "items": [
      "it-c1-limits-intro-mcq-1",
      "it-c1-limits-intro-num-1",
      "it-c1-limits-intro-fr-1",
      "it-c1-limits-intro-mcq-2",
      "it-c1-limits-intro-num-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-limits-one-sided",
    "chapterId": "c1-limits-basics",
    "title": "One-Sided Limits",
    "order": 2,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Compute left and right limits",
      "Explain when limits do not exist"
    ],
    "tags": [
      "limits.one_sided"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-intro"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-one-sided-left",
        "type": "definition",
        "title": "Left-Hand Limit",
        "body": "\\[\\lim_{x \\to a^-} f(x)\\]<br>Describes the behavior of \\(f(x)\\) as \\(x\\) approaches \\(a\\) from the left.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-one-sided-right",
        "type": "definition",
        "title": "Right-Hand Limit",
        "body": "\\[\\lim_{x \\to a^+} f(x)\\]<br>Describes the behavior of \\(f(x)\\) as \\(x\\) approaches \\(a\\) from the right.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-one-sided-exists",
        "type": "note",
        "title": "Existence of a Limit",
        "body": "A two-sided limit exists if and only if both one-sided limits exist and are equal:<br>\\[\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x)\\]<br>If the one-sided limits are not equal, the limit does not exist.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-limits-one-sided-1"
    ],
    "items": [
      "it-c1-limits-one-sided-mcq-1",
      "it-c1-limits-one-sided-num-1",
      "it-c1-limits-one-sided-mcq-2",
      "it-c1-limits-one-sided-num-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-limits-laws",
    "chapterId": "c1-limits-basics",
    "title": "Limit Laws",
    "order": 8,
    "estimatedTimeMin": 22,
    "difficulty": "medium",
    "learningObjectives": [
      "Apply limit laws to simplify expressions",
      "Use algebra to resolve indeterminate forms"
    ],
    "tags": [
      "limits.laws",
      "limits.algebraic"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-one-sided"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-laws",
        "type": "summary",
        "title": "Limit Laws",
        "body": "If \\(\\lim_{x \\to a} f(x)=L\\) and \\(\\lim_{x \\to a} g(x)=M\\), then:<br>Sum: \\(\\lim_{x \\to a} [f(x)+g(x)] = L+M\\)<br>Difference: \\(\\lim_{x \\to a} [f(x)-g(x)] = L-M\\)<br>Constant multiple: \\(\\lim_{x \\to a} [c f(x)] = cL\\)<br>Product: \\(\\lim_{x \\to a} [f(x)g(x)] = LM\\)<br>Quotient: \\(\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}\\), \\(M \\ne 0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-techniques",
        "type": "summary",
        "title": "Evaluating Limits - Common Techniques",
        "body": "Direct substitution; factoring and simplification; rationalization; trigonometric identities; one-sided limits; squeeze theorem. If direct substitution gives \\(0/0\\), simplify the expression first.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-limits-laws-1"
    ],
    "items": [
      "it-c1-limits-laws-mcq-1",
      "it-c1-limits-laws-num-1",
      "it-c1-limits-laws-exp-1",
      "it-c1-limits-laws-mcq-2",
      "it-c1-limits-laws-num-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-power-rule",
    "chapterId": "c1-deriv-rules",
    "title": "Power Rule",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "easy",
    "learningObjectives": [
      "Differentiate power functions"
    ],
    "tags": [
      "derivatives.power_rule"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-laws"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-power-rule",
        "type": "theorem",
        "title": "Power Rule",
        "body": "If \\(f(x)=x^n\\), then \\(f'(x)=n x^{n-1}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-power-rule-1"
    ],
    "items": [
      "it-c1-power-rule-mcq-1",
      "it-c1-power-rule-exp-1",
      "it-c1-power-rule-mcq-2",
      "it-c1-power-rule-exp-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-chain-rule",
    "chapterId": "c1-deriv-rules",
    "title": "Chain Rule",
    "order": 6,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Differentiate composite functions",
      "Identify inner and outer functions"
    ],
    "tags": [
      "derivatives.chain_rule",
      "functions.composition"
    ],
    "prerequisiteSectionIds": [
      "c1-power-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-chain-rule",
        "type": "theorem",
        "title": "Chain Rule",
        "body": "If \\(y=f(g(x))\\), then:<br>\\[\\frac{dy}{dx}=f'(g(x))g'(x)\\]",
        "latex": true,
        "refs": [
          "stewart-7e-3.4"
        ]
      }
    ],
    "examples": [
      "ex-c1-chain-rule-1"
    ],
    "items": [
      "it-c1-chain-rule-mcq-1",
      "it-c1-chain-rule-exp-1",
      "it-c1-chain-rule-exp-2",
      "it-c1-chain-rule-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-related-rates",
    "chapterId": "c1-deriv-apps",
    "title": "Related Rates",
    "order": 1,
    "estimatedTimeMin": 25,
    "difficulty": "hard",
    "learningObjectives": [
      "Translate word problems into derivatives"
    ],
    "tags": [
      "derivatives.related_rates"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-log-diff"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-related-rates-concept",
        "type": "definition",
        "title": "Concept",
        "body": "Related rates problems involve finding the rate of change of one quantity by relating it to the rate of change of another quantity. All variables are functions of time \\(t\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-related-rates-strategy",
        "type": "summary",
        "title": "General Strategy",
        "body": "1) Draw a diagram and label variables.<br>2) Write an equation relating the variables.<br>3) Differentiate both sides with respect to time \\(t\\).<br>4) Substitute known values.<br>5) Solve for the desired rate.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-related-rates-note",
        "type": "note",
        "title": "Important Note",
        "body": "Use the chain rule when differentiating variables that depend on time. Example:<br>\\[\\frac{d}{dt}(x^2)=2x\\frac{dx}{dt}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-related-rates-1"
    ],
    "items": [
      "it-c1-related-rates-mcq-1",
      "it-c1-related-rates-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-integral-intro",
    "chapterId": "c1-int-integrals",
    "title": "What is an Integral?",
    "order": 1,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Interpret the integral as area"
    ],
    "tags": [
      "integrals.intro"
    ],
    "prerequisiteSectionIds": [
      "c1-chain-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-integral-intro",
        "type": "definition",
        "title": "Area under a curve",
        "body": "The definite integral measures signed area between a curve and the x-axis.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-integral-intro-mcq-1",
      "it-c1-integral-intro-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-u-substitution",
    "chapterId": "c2-integrals-basics",
    "title": "u-Substitution",
    "order": 1,
    "estimatedTimeMin": 20,
    "difficulty": "medium",
    "learningObjectives": [
      "Use substitution to simplify integrals"
    ],
    "tags": [
      "integrals.substitution"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-u-sub-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Substitution simplifies integrals involving composite functions by reversing the Chain Rule.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-u-sub-basic-idea",
        "type": "definition",
        "title": "Basic Idea",
        "body": "\\[\\int f(g(x))g'(x)\\,dx\\]<br>Let \\(u=g(x)\\) so \\(du=g'(x)\\,dx\\). Then:<br>\\[\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-u-sub-procedure",
        "type": "summary",
        "title": "Procedure",
        "body": "1) Choose a substitution \\(u=g(x)\\).<br>2) Compute \\(du\\).<br>3) Rewrite the integral entirely in terms of \\(u\\).<br>4) Integrate with respect to \\(u\\).<br>5) Substitute back in terms of \\(x\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-u-sub-definite",
        "type": "note",
        "title": "Definite Integrals",
        "body": "If \\(u=g(x)\\), change limits: \\(x=a \\Rightarrow u=g(a)\\), \\(x=b \\Rightarrow u=g(b)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-u-sub-mcq-1",
      "it-c2-u-sub-exp-1",
      "it-c2-u-sub-exp-2",
      "it-c2-u-substitution-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-intro",
    "chapterId": "c2-series-basics",
    "title": "Definition of Series",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Recognize common series and notation"
    ],
    "tags": [
      "series.intro"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-series-intro-definition",
        "type": "definition",
        "title": "Infinite Series",
        "body": "The sum of a sequence is written as:<br>\\[\\sum_{n=1}^{\\infty} a_n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-intro-partial",
        "type": "summary",
        "title": "Partial Sums",
        "body": "Define the partial sum \\(S_N = \\sum_{n=1}^N a_n\\). The series converges if \\(\\lim_{N\\to\\infty} S_N\\) exists.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
      "items": [
        "it-c2-series-intro-mcq-1",
        "it-c2-series-intro-num-1",
        "it-c2-series-intro-num-2",
        "it-c2-series-intro-hard-1"
      ],
    "version": VERSION
  },
  {
    "id": "c3-vectors-intro",
    "chapterId": "c3-vectors-basics",
    "title": "Vectors in 2D and 3D",
    "order": 1,
    "estimatedTimeMin": 16,
    "difficulty": "easy",
    "learningObjectives": [
      "Describe vectors and their components"
    ],
    "tags": [
      "vectors.basics"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-vectors-definition",
        "type": "definition",
        "title": "Definition of a Vector",
        "body": "A vector is a quantity with both magnitude and direction.<br>In 2D: \\(\\vec{v}=\\langle v_1, v_2\\rangle\\).<br>In 3D: \\(\\vec{v}=\\langle v_1, v_2, v_3\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vectors-representation",
        "type": "summary",
        "title": "Vector Representation",
        "body": "If \\(A(x_1,y_1,z_1)\\) and \\(B(x_2,y_2,z_2)\\), then \\(\\overrightarrow{AB}=\\langle x_2-x_1, y_2-y_1, z_2-z_1\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vectors-magnitude",
        "type": "definition",
        "title": "Magnitude (Length)",
        "body": "\\(\\|\\vec{v}\\| = \\sqrt{v_1^2+v_2^2+v_3^2}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vectors-unit",
        "type": "definition",
        "title": "Unit Vector",
        "body": "A unit vector has magnitude 1: \\(\\hat{v}=\\vec{v}/\\|\\vec{v}\\|\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vectors-standard",
        "type": "summary",
        "title": "Standard Unit Vectors",
        "body": "\\(\\mathbf{i}=\\langle 1,0,0\\rangle\\), \\(\\mathbf{j}=\\langle 0,1,0\\rangle\\), \\(\\mathbf{k}=\\langle 0,0,1\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vectors-operations",
        "type": "summary",
        "title": "Vector Operations",
        "body": "Addition: \\(\\langle a,b,c\\rangle+\\langle d,e,f\\rangle=\\langle a+d, b+e, c+f\\rangle\\).<br>Scalar multiplication: \\(k\\langle a,b,c\\rangle=\\langle ka, kb, kc\\rangle\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-vectors-intro-mcq-1",
      "it-c3-vectors-intro-num-1",
      "it-c3-vectors-intro-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-partials-intro",
    "chapterId": "c3-partials-basics",
    "title": "Partial Derivatives",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Differentiate with respect to one variable"
    ],
    "tags": [
      "partials.basics",
      "multivariable.partials"
    ],
    "prerequisiteSectionIds": [
      "c3-multivariable-limits"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-partials-definition",
        "type": "definition",
        "title": "Definition",
        "body": "Partial derivatives treat all other variables as constants.<br>\\(f_x=\\frac{\\partial f}{\\partial x}\\), \\(f_y=\\frac{\\partial f}{\\partial y}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-partials-intro-mcq-1",
      "it-c3-partials-intro-num-1",
      "it-c3-partials-intro-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-prelim-functions-review",
    "chapterId": "c1-preliminaries-basics",
    "title": "Review of Functions",
    "order": 1,
    "estimatedTimeMin": 14,
    "difficulty": "easy",
    "learningObjectives": [
      "Define a function, domain, and range",
      "Use function notation and identify even or odd behavior"
    ],
    "tags": [
      "prelim.functions"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c1-prelim-functions-review-definition",
        "type": "definition",
        "title": "Definition of a Function",
        "body": "A function assigns exactly one output to each input. Formally, it maps a domain to a range: \\(f: x \\mapsto f(x)\\). Example: \\(f(x)=2x+3\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-functions-review-domain-range",
        "type": "definition",
        "title": "Domain and Range",
        "body": "Domain: all permissible inputs.<br>Range: all resulting outputs.<br>Example: \\(f(x)=\\sqrt{x}\\) has domain \\(x \\ge 0\\) and range \\(y \\ge 0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-functions-review-notation",
        "type": "note",
        "title": "Function Notation",
        "body": "The value at x is \\(f(x)\\). Example: \\(f(x)=x^2\\) so \\(f(3)=9\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-functions-review-types",
        "type": "summary",
        "title": "Common Types",
        "body": "Linear: \\(mx+b\\). Quadratic: \\(ax^2+bx+c\\). Polynomial. Rational. Trigonometric. Exponential. Logarithmic.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-functions-review-even-odd",
        "type": "definition",
        "title": "Even and Odd Functions",
        "body": "Even: \\(f(-x)=f(x)\\) (y-axis symmetry).<br>Odd: \\(f(-x)=-f(x)\\) (origin symmetry).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-prelim-functions-review-mcq-1",
      "it-c1-prelim-functions-review-num-1",
      "it-c1-prelim-functions-review-mcq-2",
      "it-c1-prelim-functions-review-mcq-3"
    ],
    "version": VERSION
  },
  {
    "id": "c1-prelim-graphs",
    "chapterId": "c1-preliminaries-basics",
    "title": "Graphs of Functions",
    "order": 2,
    "estimatedTimeMin": 14,
    "difficulty": "easy",
    "learningObjectives": [
      "Interpret intercepts and key features of graphs",
      "Describe transformations and piecewise graphs"
    ],
    "tags": [
      "prelim.graphs"
    ],
    "prerequisiteSectionIds": [
      "c1-prelim-functions-review"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-prelim-graphs-coordinates",
        "type": "definition",
        "title": "Coordinate System",
        "body": "A graph consists of points \\((x, f(x))\\) in the coordinate plane. The x-axis is horizontal and the y-axis is vertical.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-graphs-intercepts",
        "type": "definition",
        "title": "Intercepts",
        "body": "x-intercepts occur where \\(f(x)=0\\). The y-intercept occurs where \\(x=0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-graphs-transformations",
        "type": "summary",
        "title": "Transformations",
        "body": "Vertical shift: \\(f(x)+c\\).<br>Horizontal shift: \\(f(x-c)\\).<br>Vertical stretch: \\(a f(x)\\).<br>Reflections: \\(-f(x)\\) (over x-axis), \\(f(-x)\\) (over y-axis).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-graphs-piecewise",
        "type": "definition",
        "title": "Piecewise Functions",
        "body": "A piecewise function uses different formulas on different intervals. Example:<br>\\(f(x)=\\begin{cases}x^2 & x \\lt 0 \\\\ x & x \\ge 0\\end{cases}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-prelim-graphs-mcq-1",
      "it-c1-prelim-graphs-mcq-2",
      "it-c1-prelim-graphs-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-prelim-polynomials-rational",
    "chapterId": "c1-preliminaries-basics",
    "title": "Polynomials and Rational Functions",
    "order": 3,
    "estimatedTimeMin": 14,
    "difficulty": "easy",
    "learningObjectives": [
      "Identify degree, leading coefficient, and end behavior",
      "Find domain restrictions and asymptotes of rational functions"
    ],
    "tags": [
      "prelim.polynomials"
    ],
    "prerequisiteSectionIds": [
      "c1-prelim-graphs"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-prelim-polynomials-rational-polynomials",
        "type": "definition",
        "title": "Polynomial Functions",
        "body": "General form: \\(f(x)=a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_0\\).<br>Degree: highest power of \\(x\\).<br>Leading coefficient: coefficient of the highest-degree term.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-polynomials-rational-end-behavior",
        "type": "summary",
        "title": "End Behavior",
        "body": "End behavior depends on whether the degree is even or odd and the sign of the leading coefficient.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-polynomials-rational-zeros",
        "type": "definition",
        "title": "Zeros of Polynomials",
        "body": "Zeros are values of x where \\(f(x)=0\\). They correspond to x-intercepts on the graph.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-polynomials-rational-rational",
        "type": "definition",
        "title": "Rational Functions",
        "body": "A rational function has the form \\(f(x)=\\frac{p(x)}{q(x)}\\). The domain excludes values where \\(q(x)=0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-polynomials-rational-asymptotes",
        "type": "summary",
        "title": "Asymptotes",
        "body": "Vertical asymptotes occur where the denominator is zero (and does not \\(cancel).<br>Horizontal\\) asymptotes: same degree \\(=>\\) ratio of leading coefficients; numerator degree lower \\(=> y=0\\); numerator degree higher \\(=>\\) none.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-prelim-polynomials-rational-mcq-1",
      "it-c1-prelim-polynomials-rational-mcq-2",
      "it-c1-prelim-polynomials-rational-mcq-3",
      "it-c1-prelim-polynomials-rational-mcq-4"
    ],
    "version": VERSION
  },
  {
    "id": "c1-prelim-trig",
    "chapterId": "c1-preliminaries-basics",
    "title": "Trigonometric Functions",
    "order": 4,
    "estimatedTimeMin": 14,
    "difficulty": "easy",
    "learningObjectives": [
      "Use unit-circle definitions of sine and cosine",
      "Apply identities and periods of trig functions"
    ],
    "tags": [
      "prelim.trig"
    ],
    "prerequisiteSectionIds": [
      "c1-prelim-polynomials-rational"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-prelim-trig-radians",
        "type": "definition",
        "title": "Radians and Unit Circle",
        "body": "\\(\\pi\\) radians \\(= 180\\) degrees. On the unit circle, \\(\\sin x\\) is the y-coordinate and \\(\\cos x\\) is the x-coordinate.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-trig-defs",
        "type": "definition",
        "title": "Trigonometric Functions",
        "body": "\\(\\sin x, \\cos x, \\tan x = \\frac{\\sin x}{\\cos x}, \\csc x = \\frac{1}{\\sin x}, \\sec x = \\frac{1}{\\cos x}, \\cot x = \\frac{1}{\\tan x}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-trig-domains",
        "type": "summary",
        "title": "Domains and Ranges",
        "body": "\\(\\sin x\\) and \\(\\cos x\\) have range \\([-1,1]\\).<br>\\(\\tan x\\) is undefined where \\(\\cos x = 0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-trig-identities",
        "type": "summary",
        "title": "Fundamental Identities",
        "body": "\\(\\sin^2 x + \\cos^2 x = 1\\).<br>\\(1 + \\tan^2 x = \\sec^2 x\\).<br>\\(1 + \\cot^2 x = \\csc^2 x\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-trig-periodicity",
        "type": "summary",
        "title": "Periodicity",
        "body": "\\(\\sin x\\) and \\(\\cos x\\) have period \\(2\\pi\\).<br>\\(\\tan x\\) has period \\(\\pi\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-prelim-trig-mcq-1",
      "it-c1-prelim-trig-mcq-2",
      "it-c1-prelim-trig-mcq-3"
    ],
    "version": VERSION
  },
  {
    "id": "c1-prelim-exp-log",
    "chapterId": "c1-preliminaries-basics",
    "title": "Exponential and Logarithmic Functions",
    "order": 5,
    "estimatedTimeMin": 14,
    "difficulty": "easy",
    "learningObjectives": [
      "Describe exponential and logarithmic functions and their domains",
      "Use log properties and change of base"
    ],
    "tags": [
      "prelim.exp_log"
    ],
    "prerequisiteSectionIds": [
      "c1-prelim-trig"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-prelim-exp-log-exponential",
        "type": "definition",
        "title": "Exponential Functions",
        "body": "\\(f(x)=a^x\\) where \\(a>0\\) and \\(a \\ne 1\\). Domain: \\((-\\infty,\\infty)\\). Range: \\((0,\\infty)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-exp-log-natural",
        "type": "definition",
        "title": "Natural Exponential",
        "body": "The natural exponential is \\(f(x)=e^x\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-exp-log-logarithmic",
        "type": "definition",
        "title": "Logarithmic Functions",
        "body": "Logarithms are inverses of exponentials: \\(\\log_a x = y\\) if and only if \\(a^y = x\\). The natural \\(log\\) is \\(\\ln x = \\log_e x\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-exp-log-properties",
        "type": "summary",
        "title": "Logarithm Properties",
        "body": "\\(\\ln(ab)=\\ln a + \\ln b.<br>\\ln\\left(\\frac{a}{b}\\right)=\\ln a - \\ln b.<br>\\ln(a^k)=k\\ln a\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-exp-log-change-base",
        "type": "summary",
        "title": "Change of Base",
        "body": "\\(\\log_a x = \\frac{\\ln x}{\\ln a}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-prelim-exp-log-mcq-1",
      "it-c1-prelim-exp-log-mcq-2",
      "it-c1-prelim-exp-log-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-prelim-inverse",
    "chapterId": "c1-preliminaries-basics",
    "title": "Inverse Functions",
    "order": 6,
    "estimatedTimeMin": 14,
    "difficulty": "easy",
    "learningObjectives": [
      "Find inverses of simple functions",
      "Use the horizontal line test and inverse trig notation"
    ],
    "tags": [
      "prelim.inverse"
    ],
    "prerequisiteSectionIds": [
      "c1-prelim-exp-log"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-prelim-inverse-definition",
        "type": "definition",
        "title": "Definition",
        "body": "If \\(f(a)=b\\), then \\(f^{-1}(b)=a\\). The inverse function swaps inputs and outputs.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-inverse-steps",
        "type": "summary",
        "title": "Finding an Inverse",
        "body": "1) Replace \\(f(x)\\) with \\(y\\).<br>2) Swap \\(x\\) and \\(y\\).<br>3) Solve for \\(y\\).<br>4) Rename as \\(f^{-1}(x)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-inverse-example",
        "type": "definition",
        "title": "Example",
        "body": "For \\(f(x)=2x+1\\): swap to get \\(x=2y+1\\), so \\(y=\\frac{x-1}{2}\\). Thus \\(f^{-1}(x)=\\frac{x-1}{2}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-inverse-one-to-one",
        "type": "summary",
        "title": "One-to-One Functions",
        "body": "A function is one-to-one if it passes the horizontal line test.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-prelim-inverse-inv-trig",
        "type": "summary",
        "title": "Inverse Trigonometric Functions",
        "body": "\\(\\sin^{-1} x = \\arcsin x, \\cos^{-1} x = \\arccos x, \\tan^{-1} x = \\arctan x\\). Domains are restricted to make each inverse one-to-one.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-prelim-inverse-mcq-1",
      "it-c1-prelim-inverse-exp-1",
      "it-c1-prelim-inverse-mcq-2",
      "it-c1-prelim-inverse-mcq-3"
    ],
    "version": VERSION
  },
  {
    "id": "c1-limits-infinity",
    "chapterId": "c1-limits-basics",
    "title": "Limits at Infinity",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain limits at infinity.",
      "Apply limits at infinity to basic problems."
    ],
    "tags": [
      "limits.at_infinity"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-one-sided"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-infinity-def",
        "type": "definition",
        "title": "Limits at Infinity",
        "body": "Limits at infinity describe the behavior of a function as \\(x\\) becomes very large or very negative.<br>\\[\\lim_{x \\to \\infty} f(x), \\quad \\lim_{x \\to -\\infty} f(x)\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-infinity-rational",
        "type": "summary",
        "title": "Rational Functions at Infinity",
        "body": "Let \\(f(x)=\\frac{p(x)}{q(x)}\\).<br>If \\(\\deg p < \\deg q\\), then \\(\\lim_{x \\to \\pm\\infty} f(x)=0\\).<br>If degrees are equal, the limit is the ratio of leading coefficients.<br>If \\(\\deg p > \\deg q\\), the limit is \\(\\pm\\infty\\) or does not exist.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-limits-infinity-mcq-1",
      "it-c1-limits-infinity-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-limits-infinite",
    "chapterId": "c1-limits-basics",
    "title": "Infinite Limits",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain infinite limits.",
      "Apply infinite limits to basic problems."
    ],
    "tags": [
      "limits.infinite"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-infinity"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-infinite-def",
        "type": "definition",
        "title": "Infinite Limits",
        "body": "An infinite limit occurs when the values of a function grow without bound as \\(x\\) approaches a number.<br>\\[\\lim_{x \\to a} f(x) = \\infty \\quad \\text{or} \\quad -\\infty\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-infinite-asymptote",
        "type": "summary",
        "title": "Vertical Asymptotes",
        "body": "If \\(\\lim_{x \\to a^-} f(x)=\\pm\\infty\\) or \\(\\lim_{x \\to a^+} f(x)=\\pm\\infty\\), then the line \\(x=a\\) is a vertical asymptote.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-limits-infinite-mcq-1",
      "it-c1-limits-infinite-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-continuity",
    "chapterId": "c1-limits-basics",
    "title": "Continuity",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain continuity.",
      "Apply continuity to basic problems."
    ],
    "tags": [
      "limits.continuity"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-infinite"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-continuity-point",
        "type": "definition",
        "title": "Continuity at a Point",
        "body": "A function \\(f(x)\\) is continuous at \\(x=a\\) if:<br>1) \\(f(a)\\) is defined<br>2) \\(\\lim_{x \\to a} f(x)\\) exists<br>3) \\(\\lim_{x \\to a} f(x) = f(a)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-continuity-interval",
        "type": "summary",
        "title": "Continuity on an Interval",
        "body": "Continuous on \\((a,b)\\): continuous at every point in the interval.<br>Continuous on \\([a,b]\\): continuous on \\((a,b)\\) and one-sided limits exist at the endpoints.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-continuity-common",
        "type": "summary",
        "title": "Common Continuous Functions",
        "body": "Polynomials; rational functions (where denominator \\(\\ne 0\\)); trigonometric functions; exponential and logarithmic functions (on their domains).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-continuity-relationship",
        "type": "note",
        "title": "Limits vs Continuity",
        "body": "Continuity requires a limit to exist, but a limit does not require continuity. A discontinuity occurs when any continuity condition fails.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-continuity-mcq-1",
      "it-c1-continuity-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-discontinuities",
    "chapterId": "c1-limits-basics",
    "title": "Discontinuities",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain discontinuities.",
      "Apply discontinuities to basic problems."
    ],
    "tags": [
      "limits.discontinuities"
    ],
    "prerequisiteSectionIds": [
      "c1-continuity"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-discontinuities-types",
        "type": "summary",
        "title": "Types of Discontinuities",
        "body": "Removable: the limit exists but the function value is missing or incorrect (a hole).<br>Jump: one-sided limits exist but are not equal (a jump).<br>Infinite: function values increase or decrease without bound; occurs at vertical asymptotes.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-discontinuities-mcq-1",
      "it-c1-discontinuities-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-ivt",
    "chapterId": "c1-limits-basics",
    "title": "Intermediate Value Theorem",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain intermediate value theorem.",
      "Apply intermediate value theorem to basic problems."
    ],
    "tags": [
      "limits.ivt"
    ],
    "prerequisiteSectionIds": [
      "c1-discontinuities"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-ivt-statement",
        "type": "theorem",
        "title": "Intermediate Value Theorem",
        "body": "If \\(f\\) is continuous on \\([a,b]\\) and \\(N\\) is any number between \\(f(a)\\) and \\(f(b)\\), then there exists \\(c \\in (a,b)\\) such that:<br>\\[f(c)=N\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-ivt-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "A continuous function takes on every value between \\(f(a)\\) and \\(f(b)\\). This is often used to show the existence of solutions to equations.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-ivt-mcq-1",
      "it-c1-ivt-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-limits-trig",
    "chapterId": "c1-limits-basics",
    "title": "Trigonometric Limits",
    "order": 9,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain trigonometric limits.",
      "Apply trigonometric limits to basic problems."
    ],
    "tags": [
      "limits.trig"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-laws"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-trig-fundamental",
        "type": "theorem",
        "title": "Fundamental Trigonometric Limit",
        "body": "\\[\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-trig-related",
        "type": "summary",
        "title": "Related Limits",
        "body": "\\[\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1\\]<br>\\[\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-trig-notes",
        "type": "note",
        "title": "Important Notes",
        "body": "Angles must be measured in radians. These limits are essential for derivatives.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-limits-trig-mcq-1",
      "it-c1-limits-trig-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-limits-squeeze",
    "chapterId": "c1-limits-basics",
    "title": "Squeeze Theorem",
    "order": 10,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain squeeze theorem.",
      "Apply squeeze theorem to basic problems."
    ],
    "tags": [
      "limits.squeeze"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-trig"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-limits-squeeze-statement",
        "type": "theorem",
        "title": "Squeeze Theorem",
        "body": "If \\(g(x) \\le f(x) \\le h(x)\\) and \\(\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L\\), then \\(\\lim_{x \\to a} f(x) = L\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-limits-squeeze-applications",
        "type": "summary",
        "title": "Typical Applications",
        "body": "Used when a function is bounded between two simpler functions.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-limits-squeeze-mcq-1",
      "it-c1-limits-squeeze-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-definition",
    "chapterId": "c1-deriv-basics",
    "title": "Definition of the Derivative",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain definition of the derivative.",
      "Apply definition of the derivative to basic problems."
    ],
    "tags": [
      "derivatives.definition"
    ],
    "prerequisiteSectionIds": [
      "c1-limits-laws"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-definition-concept",
        "type": "definition",
        "title": "Conceptual Definition",
        "body": "The derivative of a function measures how the function changes as the input changes. It represents the instantaneous rate of change with respect to the variable.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-definition-limit",
        "type": "definition",
        "title": "Limit Definition",
        "body": "The derivative of \\(f(x)\\) at \\(x=a\\) is defined as:<br>\\[f'(a)=\\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}\\]<br>This limit must exist for the derivative to exist.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-definition-function",
        "type": "definition",
        "title": "Derivative Function",
        "body": "The derivative can be defined as a new function:<br>\\[f'(x)=\\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-definition-notation",
        "type": "summary",
        "title": "Common Notation",
        "body": "Common notations: \\(f'(x)\\), \\(y'\\), \\(\\frac{dy}{dx}\\), \\(\\frac{d}{dx}[f(x)]\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-definition-mcq-1",
      "it-c1-deriv-definition-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-rate",
    "chapterId": "c1-deriv-basics",
    "title": "Derivative as a Rate of Change",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain derivative as a rate of change.",
      "Apply derivative as a rate of change to basic problems."
    ],
    "tags": [
      "derivatives.rate"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-definition"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-rate-average",
        "type": "definition",
        "title": "Average Rate of Change",
        "body": "The average rate of change of \\(f(x)\\) over \\([a,b]\\) is:<br>\\[\\frac{f(b)-f(a)}{b-a}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-rate-instant",
        "type": "summary",
        "title": "Instantaneous Rate of Change",
        "body": "The instantaneous rate of change at \\(x=a\\) is \\(f'(a)\\). Examples: velocity is the derivative of position, acceleration is the derivative of velocity, and marginal cost is the derivative of cost.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-rate-mcq-1",
      "it-c1-deriv-rate-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-slope",
    "chapterId": "c1-deriv-basics",
    "title": "Derivative as Slope of Tangent Line",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain derivative as slope of tangent line.",
      "Apply derivative as slope of tangent line to basic problems."
    ],
    "tags": [
      "derivatives.slope"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-rate"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-slope-secant",
        "type": "definition",
        "title": "Secant Line",
        "body": "A secant line passes through two points on a curve. Its slope is:<br>\\[m=\\frac{f(x+h)-f(x)}{h}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-slope-tangent",
        "type": "definition",
        "title": "Tangent Line",
        "body": "A tangent line touches the curve at one point and has slope equal to the derivative. At \\(x=a\\):<br>\\[m=f'(a)\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-slope-equation",
        "type": "summary",
        "title": "Equation of the Tangent Line",
        "body": "At \\(x=a\\), the tangent line is:<br>\\[y-f(a)=f'(a)(x-a)\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-slope-mcq-1",
      "it-c1-deriv-slope-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-diff-vs-continuity",
    "chapterId": "c1-deriv-basics",
    "title": "Differentiability vs Continuity",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain differentiability vs continuity.",
      "Apply differentiability vs continuity to basic problems."
    ],
    "tags": [
      "derivatives.differentiability"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-slope"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-diff-vs-continuity-definition",
        "type": "definition",
        "title": "Differentiability",
        "body": "A function is differentiable at \\(x=a\\) if \\(f'(a)\\) exists.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-diff-vs-continuity-relationship",
        "type": "summary",
        "title": "Relationship to Continuity",
        "body": "If a function is differentiable at \\(x=a\\), then it is continuous at \\(x=a\\). A function can be continuous but not differentiable.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-diff-vs-continuity-causes",
        "type": "summary",
        "title": "Common Causes of Non-Differentiability",
        "body": "Corners, cusps, vertical tangents, and discontinuities.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-diff-vs-continuity-mcq-1",
      "it-c1-diff-vs-continuity-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-higher-derivatives",
    "chapterId": "c1-deriv-basics",
    "title": "Higher-Order Derivatives",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain higher-order derivatives.",
      "Apply higher-order derivatives to basic problems."
    ],
    "tags": [
      "derivatives.higher_order"
    ],
    "prerequisiteSectionIds": [
      "c1-diff-vs-continuity"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-higher-derivatives-definition",
        "type": "definition",
        "title": "Definition",
        "body": "The derivative of a derivative is called a higher-order derivative.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-higher-derivatives-notation",
        "type": "summary",
        "title": "Notation",
        "body": "First derivative: \\(f'(x)\\).<br>Second derivative: \\(f''(x)\\).<br>Third derivative: \\(f'''(x)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-higher-derivatives-meaning",
        "type": "summary",
        "title": "Common Interpretations",
        "body": "\\(f'(x)\\) measures rate of change, \\(f''(x)\\) describes concavity or acceleration, and higher derivatives measure the rate of change of previous derivatives.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-higher-derivatives-mcq-1",
      "it-c1-higher-derivatives-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-constant-multiple-rule",
    "chapterId": "c1-deriv-rules",
    "title": "Constant Multiple Rule",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain constant multiple rule.",
      "Apply constant multiple rule to basic problems."
    ],
    "tags": [
      "derivatives.constant_multiple"
    ],
    "prerequisiteSectionIds": [
      "c1-power-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-constant-rule",
        "type": "theorem",
        "title": "Constant Rule",
        "body": "If \\(f(x)=c\\), then \\(f'(x)=0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-constant-multiple-rule",
        "type": "theorem",
        "title": "Constant Multiple Rule",
        "body": "If \\(f(x)=c g(x)\\), then \\(\\frac{d}{dx}[c g(x)] = c g'(x)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-constant-multiple-rule-mcq-1",
      "it-c1-constant-multiple-rule-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-sum-diff-rule",
    "chapterId": "c1-deriv-rules",
    "title": "Sum and Difference Rules",
    "order": 3,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain sum and difference rules.",
      "Apply sum and difference rules to basic problems."
    ],
    "tags": [
      "derivatives.sum_diff"
    ],
    "prerequisiteSectionIds": [
      "c1-constant-multiple-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-sum-diff-rule",
        "type": "theorem",
        "title": "Sum and Difference Rules",
        "body": "\\[\\frac{d}{dx}[f(x) \\pm g(x)] = f'(x) \\pm g'(x)\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-sum-diff-rule-mcq-1",
      "it-c1-sum-diff-rule-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-product-rule",
    "chapterId": "c1-deriv-rules",
    "title": "Product Rule",
    "order": 4,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain product rule.",
      "Apply product rule to basic problems."
    ],
    "tags": [
      "derivatives.product_rule"
    ],
    "prerequisiteSectionIds": [
      "c1-sum-diff-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-product-rule",
        "type": "theorem",
        "title": "Product Rule",
        "body": "If \\(y=f(x)g(x)\\), then:<br>\\[y'=f'(x)g(x)+f(x)g'(x)\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-product-rule-mcq-1",
      "it-c1-product-rule-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-quotient-rule",
    "chapterId": "c1-deriv-rules",
    "title": "Quotient Rule",
    "order": 5,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain quotient rule.",
      "Apply quotient rule to basic problems."
    ],
    "tags": [
      "derivatives.quotient_rule"
    ],
    "prerequisiteSectionIds": [
      "c1-product-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-quotient-rule",
        "type": "theorem",
        "title": "Quotient Rule",
        "body": "If \\(y=\\frac{f(x)}{g(x)}\\), then:<br>\\[y'=\\frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-quotient-rule-mcq-1",
      "it-c1-quotient-rule-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-poly",
    "chapterId": "c1-deriv-common",
    "title": "Polynomial Functions",
    "order": 1,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain polynomial functions.",
      "Apply polynomial functions to basic problems."
    ],
    "tags": [
      "derivatives.polynomial"
    ],
    "prerequisiteSectionIds": [
      "c1-chain-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-poly",
        "type": "summary",
        "title": "Polynomial Rule",
        "body": "If \\(f(x)=a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_0\\), then:<br>\\[f'(x)=n a_n x^{n-1} + (n-1)a_{n-1}x^{n-2} + \\cdots\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-poly-mcq-1",
      "it-c1-deriv-poly-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-trig",
    "chapterId": "c1-deriv-common",
    "title": "Trigonometric Functions",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain trigonometric functions.",
      "Apply trigonometric functions to basic problems."
    ],
    "tags": [
      "derivatives.trig"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-poly"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-trig",
        "type": "summary",
        "title": "Trigonometric Derivatives",
        "body": "\\[\\frac{d}{dx}(\\sin x)=\\cos x\\]<br>\\[\\frac{d}{dx}(\\cos x)=-\\sin x\\]<br>\\[\\frac{d}{dx}(\\tan x)=\\sec^2 x\\]<br>\\[\\frac{d}{dx}(\\csc x)=-\\csc x\\cot x\\]<br>\\[\\frac{d}{dx}(\\sec x)=\\sec x\\tan x\\]<br>\\[\\frac{d}{dx}(\\cot x)=-\\csc^2 x\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-trig-mcq-1",
      "it-c1-deriv-trig-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-inv-trig",
    "chapterId": "c1-deriv-common",
    "title": "Inverse Trigonometric Functions",
    "order": 3,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain inverse trigonometric functions.",
      "Apply inverse trigonometric functions to basic problems."
    ],
    "tags": [
      "derivatives.inverse_trig"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-trig"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-inv-trig",
        "type": "summary",
        "title": "Inverse Trigonometric Derivatives",
        "body": "\\[\\frac{d}{dx}(\\arcsin x)=\\frac{1}{\\sqrt{1-x^2}}\\]<br>\\[\\frac{d}{dx}(\\arccos x)=-\\frac{1}{\\sqrt{1-x^2}}\\]<br>\\[\\frac{d}{dx}(\\arctan x)=\\frac{1}{1+x^2}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-inv-trig-mcq-1",
      "it-c1-deriv-inv-trig-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-exp",
    "chapterId": "c1-deriv-common",
    "title": "Exponential Functions",
    "order": 4,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain exponential functions.",
      "Apply exponential functions to basic problems."
    ],
    "tags": [
      "derivatives.exponential"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-inv-trig"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-exp",
        "type": "summary",
        "title": "Exponential Derivatives",
        "body": "\\[\\frac{d}{dx}(e^x)=e^x\\]<br>\\[\\frac{d}{dx}(a^x)=a^x \\ln a\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-exp-mcq-1",
      "it-c1-deriv-exp-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-log",
    "chapterId": "c1-deriv-common",
    "title": "Logarithmic Functions",
    "order": 5,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain logarithmic functions.",
      "Apply logarithmic functions to basic problems."
    ],
    "tags": [
      "derivatives.logarithmic"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-exp"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-log",
        "type": "summary",
        "title": "Logarithmic Derivatives",
        "body": "\\[\\frac{d}{dx}(\\ln x)=\\frac{1}{x}\\]<br>\\[\\frac{d}{dx}(\\log_a x)=\\frac{1}{x \\ln a}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-log-mcq-1",
      "it-c1-deriv-log-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-implicit",
    "chapterId": "c1-deriv-common",
    "title": "Implicit Differentiation",
    "order": 6,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain implicit differentiation.",
      "Apply implicit differentiation to basic problems."
    ],
    "tags": [
      "derivatives.implicit"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-log"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-implicit",
        "type": "definition",
        "title": "Implicit Differentiation",
        "body": "Used when a function is not explicitly solved for \\(y\\). Differentiate both sides with respect to \\(x\\), treating \\(y\\) as a function of \\(x\\).<br>Example form:<br>\\[\\frac{d}{dx}(y^n)=n y^{n-1} \\frac{dy}{dx}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-implicit-mcq-1",
      "it-c1-deriv-implicit-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-deriv-log-diff",
    "chapterId": "c1-deriv-common",
    "title": "Logarithmic Differentiation",
    "order": 7,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain logarithmic differentiation.",
      "Apply logarithmic differentiation to basic problems."
    ],
    "tags": [
      "derivatives.log_diff"
    ],
    "prerequisiteSectionIds": [
      "c1-deriv-implicit"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-deriv-log-diff-when",
        "type": "summary",
        "title": "When to Use",
        "body": "Use logarithmic differentiation for variables in exponents, products or quotients of many factors, and powers involving functions.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-log-diff-procedure",
        "type": "summary",
        "title": "Procedure",
        "body": "1) Take natural logarithm of both sides.<br>2) Use logarithm properties to simplify.<br>3) Differentiate implicitly.<br>4) Solve for \\(\\frac{dy}{dx}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-deriv-strategy-summary",
        "type": "summary",
        "title": "Differentiation Strategy",
        "body": "Simplify before differentiating. Identify the outermost function for the chain rule. Use logarithmic differentiation for complex expressions. Check domain restrictions after differentiation.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-deriv-log-diff-mcq-1",
      "it-c1-deriv-log-diff-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-linear-approx",
    "chapterId": "c1-deriv-apps",
    "title": "Linear Approximation",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain linear approximation.",
      "Apply linear approximation to basic problems."
    ],
    "tags": [
      "derivatives.linear_approx"
    ],
    "prerequisiteSectionIds": [
      "c1-related-rates"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-linear-approx-definition",
        "type": "definition",
        "title": "Definition",
        "body": "The linear approximation of a function near \\(x=a\\) is given by the tangent line at \\(x=a\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-linear-approx-formula",
        "type": "theorem",
        "title": "Formula",
        "body": "\\[L(x)=f(a)+f'(a)(x-a)\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-linear-approx-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Used to approximate values of functions near a point where the function is easy to evaluate.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-linear-approx-error",
        "type": "note",
        "title": "Error Behavior",
        "body": "The approximation improves as \\(x\\) gets closer to \\(a\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-linear-approx-1"
    ],
    "items": [
      "it-c1-linear-approx-mcq-1",
      "it-c1-linear-approx-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-differentials",
    "chapterId": "c1-deriv-apps",
    "title": "Differentials",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain differentials.",
      "Apply differentials to basic problems."
    ],
    "tags": [
      "derivatives.differentials"
    ],
    "prerequisiteSectionIds": [
      "c1-linear-approx"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-differentials-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A differential approximates the change in a function using its derivative.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-differentials-notation",
        "type": "summary",
        "title": "Notation",
        "body": "\\[dy=f'(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-differentials-approx",
        "type": "summary",
        "title": "Approximation",
        "body": "\\[\\Delta y \\approx dy\\]<br>Used to estimate small changes in function values.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-differentials-1"
    ],
    "items": [
      "it-c1-differentials-mcq-1",
      "it-c1-differentials-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-critical-points",
    "chapterId": "c1-deriv-apps",
    "title": "Critical Points",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain critical points.",
      "Apply critical points to basic problems."
    ],
    "tags": [
      "derivatives.critical_points"
    ],
    "prerequisiteSectionIds": [
      "c1-differentials"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-critical-points-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A critical point occurs at \\(x=c\\) where either \\(f'(c)=0\\) or \\(f'(c)\\) does not exist.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-critical-points-importance",
        "type": "summary",
        "title": "Importance",
        "body": "Critical points are candidates for local maxima or local minima.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-critical-points-1"
    ],
    "items": [
      "it-c1-critical-points-mcq-1",
      "it-c1-critical-points-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-increasing-decreasing",
    "chapterId": "c1-deriv-apps",
    "title": "Increasing and Decreasing Functions",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain increasing and decreasing functions.",
      "Apply increasing and decreasing functions to basic problems."
    ],
    "tags": [
      "derivatives.monotonicity"
    ],
    "prerequisiteSectionIds": [
      "c1-critical-points"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-increasing-decreasing-definitions",
        "type": "definition",
        "title": "Definitions",
        "body": "\\(f(x)\\) is increasing on an interval if \\(f'(x)>0\\).<br>\\(f(x)\\) is decreasing on an interval if \\(f'(x)<0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-increasing-decreasing-test",
        "type": "summary",
        "title": "First Derivative Test (Monotonicity)",
        "body": "Analyze the sign of \\(f'(x)\\) on an interval to determine behavior.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-increasing-decreasing-1"
    ],
    "items": [
      "it-c1-increasing-decreasing-mcq-1",
      "it-c1-increasing-decreasing-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-concavity",
    "chapterId": "c1-deriv-apps",
    "title": "Concavity",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain concavity.",
      "Apply concavity to basic problems."
    ],
    "tags": [
      "derivatives.concavity"
    ],
    "prerequisiteSectionIds": [
      "c1-increasing-decreasing"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-concavity-definition",
        "type": "definition",
        "title": "Definition",
        "body": "Concavity describes the shape of the graph.<br>Concave up: the graph opens upward.<br>Concave down: the graph opens downward.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-concavity-test",
        "type": "summary",
        "title": "Second Derivative Test for Concavity",
        "body": "\\(f''(x)>0\\) implies concave up.<br>\\(f''(x)<0\\) implies concave down.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-concavity-1"
    ],
    "items": [
      "it-c1-concavity-mcq-1",
      "it-c1-concavity-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-inflection",
    "chapterId": "c1-deriv-apps",
    "title": "Inflection Points",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain inflection points.",
      "Apply inflection points to basic problems."
    ],
    "tags": [
      "derivatives.inflection"
    ],
    "prerequisiteSectionIds": [
      "c1-concavity"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-inflection-definition",
        "type": "definition",
        "title": "Definition",
        "body": "An inflection point is a point where the concavity of a function changes.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-inflection-conditions",
        "type": "summary",
        "title": "Conditions",
        "body": "Occurs when \\(f''(c)=0\\) or \\(f''(c)\\) is undefined and the concavity changes at \\(x=c\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-inflection-1"
    ],
    "items": [
      "it-c1-inflection-mcq-1",
      "it-c1-inflection-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-first-derivative-test",
    "chapterId": "c1-deriv-apps",
    "title": "First Derivative Test",
    "order": 8,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain first derivative test.",
      "Apply first derivative test to basic problems."
    ],
    "tags": [
      "derivatives.first_derivative_test"
    ],
    "prerequisiteSectionIds": [
      "c1-inflection"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-first-derivative-test-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Used to classify critical points as local maxima or minima.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-first-derivative-test-procedure",
        "type": "summary",
        "title": "Procedure",
        "body": "1) Find critical points.<br>2) Test the sign of \\(f'(x)\\) on intervals around each critical point.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-first-derivative-test-conclusions",
        "type": "summary",
        "title": "Conclusions",
        "body": "If \\(f'(x)\\) changes from positive to negative, there is a local maximum.<br>If \\(f'(x)\\) changes from negative to positive, there is a local minimum.<br>No sign change means neither.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-first-derivative-test-1"
    ],
    "items": [
      "it-c1-first-derivative-test-mcq-1",
      "it-c1-first-derivative-test-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-second-derivative-test",
    "chapterId": "c1-deriv-apps",
    "title": "Second Derivative Test",
    "order": 9,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain second derivative test.",
      "Apply second derivative test to basic problems."
    ],
    "tags": [
      "derivatives.second_derivative_test"
    ],
    "prerequisiteSectionIds": [
      "c1-first-derivative-test"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-second-derivative-test-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Used to classify critical points using the second derivative.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-second-derivative-test-conditions",
        "type": "summary",
        "title": "Conditions",
        "body": "If \\(f'(c)=0\\):<br>\\(f''(c)>0\\) implies local minimum.<br>\\(f''(c)<0\\) implies local maximum.<br>\\(f''(c)=0\\) is inconclusive.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-second-derivative-test-1"
    ],
    "items": [
      "it-c1-second-derivative-test-mcq-1",
      "it-c1-second-derivative-test-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-curve-sketching",
    "chapterId": "c1-deriv-apps",
    "title": "Curve Sketching",
    "order": 10,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain curve sketching.",
      "Apply curve sketching to basic problems."
    ],
    "tags": [
      "derivatives.curve_sketching"
    ],
    "prerequisiteSectionIds": [
      "c1-second-derivative-test"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-curve-sketching-steps",
        "type": "summary",
        "title": "Steps for Curve Sketching",
        "body": "1) Determine domain.<br>2) Find intercepts.<br>3) Locate critical points.<br>4) Determine intervals of increase/decrease.<br>5) Find concavity and inflection points.<br>6) Analyze end behavior.<br>7) Sketch the graph.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-curve-sketching-1"
    ],
    "items": [
      "it-c1-curve-sketching-mcq-1",
      "it-c1-curve-sketching-mcq-2"
    ],
    "version": VERSION
  },
  {
    "id": "c1-optimization",
    "chapterId": "c1-deriv-apps",
    "title": "Optimization Problems",
    "order": 11,
    "estimatedTimeMin": 20,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain optimization problems.",
      "Apply optimization problems to basic problems."
    ],
    "tags": [
      "derivatives.optimization"
    ],
    "prerequisiteSectionIds": [
      "c1-curve-sketching"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-optimization-definition",
        "type": "definition",
        "title": "Definition",
        "body": "Optimization problems involve finding maximum or minimum values under given constraints.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-optimization-strategy",
        "type": "summary",
        "title": "General Strategy",
        "body": "1) Identify the quantity to optimize.<br>2) Write it as a function of one variable.<br>3) Find the derivative.<br>4) Find critical points.<br>5) Test endpoints and critical points.<br>6) Choose the optimal value.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-optimization-applications",
        "type": "summary",
        "title": "Common Applications",
        "body": "Maximizing area or volume.<br>Minimizing cost or distance.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-optimization-1"
    ],
    "items": [
      "it-c1-optimization-mcq-1",
      "it-c1-optimization-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-mvt",
    "chapterId": "c1-deriv-apps",
    "title": "Mean Value Theorem",
    "order": 12,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain mean value theorem.",
      "Apply mean value theorem to basic problems."
    ],
    "tags": [
      "derivatives.mvt"
    ],
    "prerequisiteSectionIds": [
      "c1-optimization"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-mvt-statement",
        "type": "theorem",
        "title": "Statement",
        "body": "If \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), then there exists \\(c \\in (a,b)\\) such that:<br>\\[f'(c)=\\frac{f(b)-f(a)}{b-a}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-mvt-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "At some point, the instantaneous rate of change equals the average rate of change.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-mvt-1"
    ],
    "items": [
      "it-c1-mvt-mcq-1",
      "it-c1-mvt-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-rolle",
    "chapterId": "c1-deriv-apps",
    "title": "Rolle's Theorem",
    "order": 13,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain rolle's theorem.",
      "Apply rolle's theorem to basic problems."
    ],
    "tags": [
      "derivatives.rolle"
    ],
    "prerequisiteSectionIds": [
      "c1-mvt"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-rolle-statement",
        "type": "theorem",
        "title": "Statement",
        "body": "If \\(f\\) is continuous on \\([a,b]\\), differentiable on \\((a,b)\\), and \\(f(a)=f(b)\\), then there exists \\(c \\in (a,b)\\) such that:<br>\\[f'(c)=0\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-rolle-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "There is at least one horizontal tangent line between \\(a\\) and \\(b\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-rolle-1"
    ],
    "items": [
      "it-c1-rolle-mcq-1",
      "it-c1-rolle-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-lhopital",
    "chapterId": "c1-deriv-apps",
    "title": "L'Hopital's Rule",
    "order": 14,
    "estimatedTimeMin": 20,
    "difficulty": "hard",
    "learningObjectives": [
      "Explain l'hopital's rule.",
      "Apply l'hopital's rule to basic problems."
    ],
    "tags": [
      "derivatives.lhopital"
    ],
    "prerequisiteSectionIds": [
      "c1-rolle"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-lhopital-forms",
        "type": "summary",
        "title": "Indeterminate Forms",
        "body": "Applies to limits of the form \\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-lhopital-statement",
        "type": "theorem",
        "title": "Statement",
        "body": "If \\(\\lim_{x \\to a} \\frac{f(x)}{g(x)}\\) gives \\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\), then:<br>\\[\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}\\]<br>Provided the limit on the right exists.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-lhopital-notes",
        "type": "note",
        "title": "Important Notes",
        "body": "Verify the indeterminate form first.<br>May apply repeatedly if needed.<br>Only applies to limits.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-lhopital-summary",
        "type": "summary",
        "title": "Summary of Applications of Derivatives",
        "body": "Derivatives model real-world change.<br>Critical points locate extrema.<br>First and second derivatives describe behavior.<br>Optimization solves maximum/minimum problems.<br>Theorems connect local and global behavior.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [
      "ex-c1-lhopital-1"
    ],
    "items": [
      "it-c1-lhopital-mcq-1",
      "it-c1-lhopital-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-antiderivatives",
    "chapterId": "c1-int-integrals",
    "title": "Antiderivatives",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain antiderivatives.",
      "Apply antiderivatives to basic problems."
    ],
    "tags": [
      "integrals.antiderivatives"
    ],
    "prerequisiteSectionIds": [
      "c1-chain-rule"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-antiderivatives-definition",
        "type": "definition",
        "title": "Definition",
        "body": "An antiderivative of \\(f(x)\\) is a function \\(F(x)\\) such that:<br>\\[F'(x)=f(x)\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-antiderivatives-example",
        "type": "workedExample",
        "title": "Example",
        "body": "If \\(f(x)=2x\\), then an antiderivative is \\(F(x)=x^2\\) because \\(F'(x)=2x\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-antiderivatives-non-unique",
        "type": "note",
        "title": "Non-Uniqueness",
        "body": "If \\(F(x)\\) is an antiderivative, then \\(F(x)+C\\) is also an antiderivative for any constant \\(C\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-antiderivatives-mcq-1",
      "it-c1-antiderivatives-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-indefinite-integrals",
    "chapterId": "c1-int-integrals",
    "title": "Indefinite Integrals",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain indefinite integrals.",
      "Apply indefinite integrals to basic problems."
    ],
    "tags": [
      "integrals.indefinite"
    ],
    "prerequisiteSectionIds": [
      "c1-antiderivatives"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-indefinite-integrals-definition",
        "type": "definition",
        "title": "Definition",
        "body": "An indefinite integral represents the family of all antiderivatives of a function:<br>\\[\\int f(x)\\,dx = F(x) + C\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-indefinite-integrals-notation",
        "type": "summary",
        "title": "Notation",
        "body": "\\(\\int\\) is the integral sign.<br>\\(f(x)\\) is the integrand.<br>\\(dx\\) is the differential and indicates the variable of integration.<br>\\(C\\) is the constant of integration.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-indefinite-integrals-example",
        "type": "workedExample",
        "title": "Example",
        "body": "\\[\\int 3x^2\\,dx = x^3 + C\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-indefinite-integrals-mcq-1",
      "it-c1-indefinite-integrals-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-basic-integration-rules",
    "chapterId": "c1-int-integrals",
    "title": "Basic Integration Rules",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain basic integration rules.",
      "Apply basic integration rules to basic problems."
    ],
    "tags": [
      "integrals.basic_rules"
    ],
    "prerequisiteSectionIds": [
      "c1-indefinite-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-basic-integration-rules-power",
        "type": "theorem",
        "title": "Power Rule",
        "body": "For \\(n \\ne -1\\):<br>\\[\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-basic-integration-rules-constant",
        "type": "theorem",
        "title": "Constant Rule",
        "body": "\\[\\int c\\,dx = cx + C\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-basic-integration-rules-constant-multiple",
        "type": "theorem",
        "title": "Constant Multiple Rule",
        "body": "\\[\\int c f(x)\\,dx = c\\int f(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-basic-integration-rules-sum-diff",
        "type": "theorem",
        "title": "Sum and Difference Rules",
        "body": "\\[\\int [f(x) \\pm g(x)]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-basic-integration-rules-special",
        "type": "note",
        "title": "Special Case",
        "body": "\\[\\int \\frac{1}{x}\\,dx = \\ln|x| + C\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-basic-integration-rules-mcq-1",
      "it-c1-basic-integration-rules-exp-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-riemann-sums",
    "chapterId": "c1-int-integrals",
    "title": "Riemann Sums",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain riemann sums.",
      "Apply riemann sums to basic problems."
    ],
    "tags": [
      "integrals.riemann"
    ],
    "prerequisiteSectionIds": [
      "c1-integral-intro"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-riemann-sums-concept",
        "type": "definition",
        "title": "Concept",
        "body": "A Riemann sum approximates the area under a curve by dividing the interval into rectangles.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-riemann-sums-partition",
        "type": "summary",
        "title": "Partition of an Interval",
        "body": "Divide \\([a,b]\\) into \\(n\\) subintervals of equal width:<br>\\[\\Delta x = \\frac{b-a}{n}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-riemann-sums-formula",
        "type": "theorem",
        "title": "Riemann Sum Formula",
        "body": "\\[\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-riemann-sums-types",
        "type": "summary",
        "title": "Types of Riemann Sums",
        "body": "Left Riemann sum.<br>Right Riemann sum.<br>Midpoint Riemann sum.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-riemann-sums-limit",
        "type": "theorem",
        "title": "Limit Definition",
        "body": "The definite integral is the limit of Riemann sums:<br>\\[\\int_a^b f(x)\\,dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-riemann-sums-mcq-1",
      "it-c1-riemann-sums-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-definite-integrals",
    "chapterId": "c1-int-integrals",
    "title": "Definite Integrals",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain definite integrals.",
      "Apply definite integrals to basic problems."
    ],
    "tags": [
      "integrals.definite"
    ],
    "prerequisiteSectionIds": [
      "c1-riemann-sums"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-definite-integrals-definition",
        "type": "definition",
        "title": "Definition",
        "body": "The definite integral represents the exact area under a curve from \\(x=a\\) to \\(x=b\\):<br>\\[\\int_a^b f(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-definite-integrals-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "Area above the x-axis is positive.<br>Area below the x-axis is negative.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-definite-integrals-properties",
        "type": "note",
        "title": "Properties",
        "body": "If \\(a=b\\), then \\(\\int_a^a f(x)\\,dx=0\\).<br>Reversing limits: \\(\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-definite-integrals-mcq-1",
      "it-c1-definite-integrals-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-ftc-part1",
    "chapterId": "c1-int-integrals",
    "title": "Fundamental Theorem of Calculus I",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain fundamental theorem of calculus i.",
      "Apply fundamental theorem of calculus i to basic problems."
    ],
    "tags": [
      "integrals.ftc"
    ],
    "prerequisiteSectionIds": [
      "c1-definite-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-ftc-part1-statement",
        "type": "theorem",
        "title": "Statement",
        "body": "If \\(f\\) is continuous on \\([a,b]\\), define:<br>\\[F(x)=\\int_a^x f(t)\\,dt\\]<br>Then \\(F\\) is differentiable and \\(F'(x)=f(x)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-ftc-part1-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "Differentiation and integration are inverse processes.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-ftc-part1-mcq-1",
      "it-c1-ftc-part1-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-ftc-part2",
    "chapterId": "c1-int-integrals",
    "title": "Fundamental Theorem of Calculus II",
    "order": 8,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain fundamental theorem of calculus ii.",
      "Apply fundamental theorem of calculus ii to basic problems."
    ],
    "tags": [
      "integrals.ftc"
    ],
    "prerequisiteSectionIds": [
      "c1-ftc-part1"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-ftc-part2-statement",
        "type": "theorem",
        "title": "Statement",
        "body": "If \\(F(x)\\) is any antiderivative of \\(f(x)\\), then:<br>\\[\\int_a^b f(x)\\,dx = F(b) - F(a)\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-ftc-part2-importance",
        "type": "summary",
        "title": "Importance",
        "body": "Allows computation of definite integrals using antiderivatives.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-ftc-part2-procedure",
        "type": "summary",
        "title": "Procedure",
        "body": "1) Find an antiderivative \\(F(x)\\).<br>2) Evaluate \\(F(b) - F(a)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-ftc-part2-mcq-1",
      "it-c1-ftc-part2-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c1-net-change",
    "chapterId": "c1-int-integrals",
    "title": "Net Change Interpretation",
    "order": 9,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain net change interpretation.",
      "Apply net change interpretation to basic problems."
    ],
    "tags": [
      "integrals.net_change"
    ],
    "prerequisiteSectionIds": [
      "c1-ftc-part2"
    ],
    "contentBlocks": [
      {
        "id": "blk-c1-net-change-statement",
        "type": "theorem",
        "title": "Statement",
        "body": "If \\(F'(x)=f(x)\\), then:<br>\\[\\int_a^b f(x)\\,dx = F(b) - F(a)\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c1-net-change-meaning",
        "type": "summary",
        "title": "Meaning",
        "body": "The definite integral represents the net change of a quantity over an interval.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-net-change-applications",
        "type": "summary",
        "title": "Applications",
        "body": "Position from velocity.<br>Total growth from rate of growth.<br>Accumulated change in real-world quantities.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c1-net-change-summary",
        "type": "summary",
        "title": "Summary of Integral Concepts",
        "body": "Antiderivatives reverse differentiation.<br>Indefinite integrals represent families of functions.<br>Riemann sums approximate accumulated quantities.<br>Definite integrals compute exact accumulation.<br>The Fundamental Theorem of Calculus links derivatives and integrals.<br>Integrals model total and net change.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c1-net-change-mcq-1",
      "it-c1-net-change-num-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-integration-by-parts",
    "chapterId": "c2-integrals-basics",
    "title": "Integration by Parts",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain integration by parts.",
      "Apply integration by parts to basic problems."
    ],
    "tags": [
      "integrals.by_parts"
    ],
    "prerequisiteSectionIds": [
      "c2-u-substitution"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-integration-by-parts-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Use integration by parts to integrate products of functions.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-integration-by-parts-formula",
        "type": "theorem",
        "title": "Formula",
        "body": "Derived from the product rule:<br>\\[\\int u\\,dv = uv - \\int v\\,du\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-integration-by-parts-liate",
        "type": "summary",
        "title": "Choosing u and dv",
        "body": "Choose \\(u\\) first using LIATE:<br>L: Logarithmic<br>I: Inverse trigonometric<br>A: Algebraic<br>T: Trigonometric<br>E: Exponential.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-integration-by-parts-repeated",
        "type": "note",
        "title": "Repeated Integration by Parts",
        "body": "If one application does not simplify the integral, apply integration by parts again.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-integration-by-parts-special-case",
        "type": "note",
        "title": "Special Case",
        "body": "The integral \\(\\int e^x \\sin x\\,dx\\) typically requires applying integration by parts twice.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-integration-by-parts-exp-1",
      "it-c2-integration-by-parts-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-trig-integrals",
    "chapterId": "c2-integrals-basics",
    "title": "Trigonometric Integrals",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain trigonometric integrals.",
      "Apply trigonometric integrals to basic problems."
    ],
    "tags": [
      "integrals.trig"
    ],
    "prerequisiteSectionIds": [
      "c2-integration-by-parts"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-trig-integrals-sin-cos",
        "type": "summary",
        "title": "Powers of Sine and Cosine",
        "body": "Case 1: Odd power of sine. Save one \\(\\sin x\\) factor and convert the rest using \\(\\sin^2 x = 1 - \\cos^2 x\\).<br>Case 2: Odd power of cosine. Save one \\(\\cos x\\) factor and convert the rest using \\(\\cos^2 x = 1 - \\sin^2 x\\).<br>Case 3: Both powers even. Use power-reduction formulas:<br>\\(\\sin^2 x = \\frac{1 - \\cos 2x}{2}\\), \\(\\cos^2 x = \\frac{1 + \\cos 2x}{2}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-trig-integrals-tan-secant",
        "type": "summary",
        "title": "Powers of Tangent and Secant",
        "body": "If the power of secant is even, save a \\(\\sec^2 x\\) factor.<br>If the power of tangent is odd, save a \\(\\sec x\\tan x\\) factor.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-trig-integrals-identities",
        "type": "note",
        "title": "Key Identities",
        "body": "\\(1 + \\tan^2 x = \\sec^2 x\\)<br>\\(1 + \\cot^2 x = \\csc^2 x\\)",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-trig-integrals-exp-1",
      "it-c2-trig-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-trig-substitution",
    "chapterId": "c2-integrals-basics",
    "title": "Trigonometric Substitution",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain trigonometric substitution.",
      "Apply trigonometric substitution to basic problems."
    ],
    "tags": [
      "integrals.trig_sub"
    ],
    "prerequisiteSectionIds": [
      "c2-trig-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-trig-substitution-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Trigonometric substitution simplifies integrals involving radicals of quadratic expressions.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-trig-substitution-forms",
        "type": "summary",
        "title": "Common Forms and Substitutions",
        "body": "\\(\\sqrt{a^2 - x^2}\\): \\(x = a\\sin\\theta\\)<br>\\(\\sqrt{a^2 + x^2}\\): \\(x = a\\tan\\theta\\)<br>\\(\\sqrt{x^2 - a^2}\\): \\(x = a\\sec\\theta\\)",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-trig-substitution-procedure",
        "type": "summary",
        "title": "Procedure",
        "body": "1) Choose an appropriate trigonometric substitution.<br>2) Replace \\(x\\) and \\(dx\\).<br>3) Simplify using trigonometric identities.<br>4) Integrate.<br>5) Convert back to \\(x\\) using a triangle.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-trig-substitution-triangle",
        "type": "note",
        "title": "Right Triangle Interpretation",
        "body": "Use a right triangle to convert from trigonometric variables back to algebraic form.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
      "items": [
        "it-c2-trig-substitution-mcq-2",
        "it-c2-trig-substitution-hard-1"
      ],
    "version": VERSION
  },
  {
    "id": "c2-partial-fractions",
    "chapterId": "c2-integrals-basics",
    "title": "Partial Fractions",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain partial fractions.",
      "Apply partial fractions to basic problems."
    ],
    "tags": [
      "integrals.partial_fractions"
    ],
    "prerequisiteSectionIds": [
      "c2-trig-substitution"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-partial-fractions-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Partial fractions integrate rational functions when the degree of the numerator is less than the degree of the denominator. A proper rational function satisfies \\(\\deg(p(x)) < \\deg(q(x))\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-partial-fractions-factor",
        "type": "summary",
        "title": "Step 1: Factor the Denominator",
        "body": "Factor completely into linear factors and irreducible quadratic factors.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-partial-fractions-setup",
        "type": "summary",
        "title": "Step 2: Set Up Partial Fractions",
        "body": "Distinct linear factors: \\(\\frac{A}{x-a} + \\frac{B}{x-b}\\).<br>Repeated linear factors: \\(\\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\cdots\\).<br>Irreducible quadratic factors: \\(\\frac{Ax+B}{x^2+px+q}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-partial-fractions-solve",
        "type": "summary",
        "title": "Step 3: Solve for Constants",
        "body": "Clear denominators, then compare coefficients or substitute convenient values.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-partial-fractions-integrate",
        "type": "note",
        "title": "Step 4: Integrate Each Term",
        "body": "Integrate each term after the decomposition.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-partial-fractions-mcq-2",
      "it-c2-partial-fractions-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-improper-integrals",
    "chapterId": "c2-integrals-basics",
    "title": "Improper Integrals",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain improper integrals.",
      "Apply improper integrals to basic problems."
    ],
    "tags": [
      "integrals.improper"
    ],
    "prerequisiteSectionIds": [
      "c2-partial-fractions"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-improper-integrals-definition",
        "type": "definition",
        "title": "Definition",
        "body": "An improper integral occurs when the interval of integration is infinite or the integrand is unbounded on the interval.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-improper-integrals-infinite",
        "type": "summary",
        "title": "Case 1: Infinite Limits of Integration",
        "body": "\\(\\int_a^{\\infty} f(x)\\,dx = \\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx\\).<br>\\(\\int_{-\\infty}^b f(x)\\,dx = \\lim_{a \\to -\\infty} \\int_a^b f(x)\\,dx\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-improper-integrals-vertical",
        "type": "summary",
        "title": "Case 2: Vertical Asymptotes",
        "body": "If \\(f(x)\\) is unbounded at \\(x=c\\):<br>\\[\\int_a^b f(x)\\,dx = \\lim_{x \\to c^-} \\int_a^x f(t)\\,dt + \\lim_{x \\to c^+} \\int_x^b f(t)\\,dt\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-improper-integrals-convergence",
        "type": "note",
        "title": "Convergence and Divergence",
        "body": "Convergent: the improper integral has a finite value.<br>Divergent: the improper integral does not exist or is infinite.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-improper-integrals-important",
        "type": "note",
        "title": "Important Note",
        "body": "Each limit must converge independently for the integral to converge.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-improper-integrals-summary",
        "type": "summary",
        "title": "Summary of Integration Techniques",
        "body": "Substitution reverses the Chain Rule.<br>Integration by parts handles products.<br>Trigonometric integrals rely on identities.<br>Trigonometric substitution simplifies radicals.<br>Partial fractions decompose rational functions.<br>Improper integrals require limits and convergence tests.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-improper-integrals-num-1",
      "it-c2-improper-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-area-between-curves",
    "chapterId": "c2-integral-apps",
    "title": "Area Between Curves",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain area between curves.",
      "Apply area between curves to basic problems."
    ],
    "tags": [
      "integrals.area_between_curves"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-area-between-curves-under",
        "type": "definition",
        "title": "Area Under a Curve",
        "body": "If \\(f(x) \\ge 0\\) on \\([a,b]\\), then the area between the curve and the x-axis is:<br>\\[A = \\int_a^b f(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-area-between-curves-between",
        "type": "definition",
        "title": "Area Between Two Curves (Top - Bottom)",
        "body": "If \\(f(x) \\ge g(x)\\) on \\([a,b]\\), then:<br>\\[A = \\int_a^b (f(x) - g(x))\\,dx\\]<br>\\(f(x)\\) is the top function and \\(g(x)\\) is the bottom function.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-area-between-curves-steps",
        "type": "summary",
        "title": "Steps for Area Between Curves",
        "body": "1) Sketch both curves.<br>2) Find intersection points by solving \\(f(x)=g(x)\\).<br>3) Identify which curve is top/bottom on each interval.<br>4) Integrate top minus bottom on the correct interval(s).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-area-between-curves-y",
        "type": "definition",
        "title": "Area with Respect to y (Right - Left)",
        "body": "If curves are expressed as \\(x=f(y)\\) and \\(x=g(y)\\):<br>\\[A = \\int_c^d (\\text{right} - \\text{left})\\,dy\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-area-between-curves-notes",
        "type": "note",
        "title": "Notes and Pitfalls",
        "body": "If top and bottom switch, split the integral.<br>Area is always nonnegative; use an absolute difference if needed.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-area-between-curves-num-1",
      "it-c2-area-between-curves-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-volumes",
    "chapterId": "c2-integral-apps",
    "title": "Volumes (Disk, Washer, Shell Methods)",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain volumes (disk, washer, shell methods).",
      "Apply volumes (disk, washer, shell methods) to basic problems."
    ],
    "tags": [
      "integrals.volumes"
    ],
    "prerequisiteSectionIds": [
      "c2-area-between-curves"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-volumes-general",
        "type": "summary",
        "title": "General Idea",
        "body": "Rotate a region around an axis to create a 3D solid; volume is found by integrating cross-sectional areas.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-volumes-disk",
        "type": "summary",
        "title": "Disk Method",
        "body": "Use when rotation creates solid disks.<br>About the x-axis with \\(y=R(x)\\):<br>\\[V = \\pi \\int_a^b [R(x)]^2\\,dx\\]<br>About the y-axis with \\(x=R(y)\\):<br>\\[V = \\pi \\int_c^d [R(y)]^2\\,dy\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-volumes-washer",
        "type": "summary",
        "title": "Washer Method",
        "body": "Use when there is a hole: outer radius \\(R\\), inner radius \\(r\\).<br>\\[V = \\pi \\int_a^b ([R(x)]^2 - [r(x)]^2)\\,dx\\]<br>\\(R(x)\\) is the outer radius and \\(r(x)\\) is the inner radius.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-volumes-shell",
        "type": "summary",
        "title": "Shell Method",
        "body": "Use when slicing parallel to the axis of rotation or when washers get messy.<br>About the y-axis (vertical shells):<br>\\[V = 2\\pi \\int_a^b (\\text{radius})(\\text{height})\\,dx\\]<br>About the x-axis (horizontal shells):<br>\\[V = 2\\pi \\int_c^d (\\text{radius})(\\text{height})\\,dy\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-volumes-setup",
        "type": "note",
        "title": "Typical Setup",
        "body": "About the y-axis: radius = \\(x\\), height = top - bottom.<br>Radii are always distances to the axis of rotation.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-volumes-exp-1",
      "it-c2-volumes-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-arc-length",
    "chapterId": "c2-integral-apps",
    "title": "Arc Length",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain arc length.",
      "Apply arc length to basic problems."
    ],
    "tags": [
      "integrals.arc_length"
    ],
    "prerequisiteSectionIds": [
      "c2-volumes"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-arc-length-x",
        "type": "definition",
        "title": "Arc Length of y = f(x)",
        "body": "If \\(y=f(x)\\) is differentiable on \\([a,b]\\):<br>\\[L = \\int_a^b \\sqrt{1 + (f'(x))^2}\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-arc-length-y",
        "type": "definition",
        "title": "Arc Length with Respect to y",
        "body": "If \\(x=g(y)\\) is differentiable on \\([c,d]\\):<br>\\[L = \\int_c^d \\sqrt{1 + (g'(y))^2}\\,dy\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-arc-length-notes",
        "type": "note",
        "title": "Notes",
        "body": "Arc length integrals are often difficult and may require substitution.<br>Some arc length integrals have no elementary antiderivative.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-arc-length-exp-1",
      "it-c2-arc-length-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-surface-area",
    "chapterId": "c2-integral-apps",
    "title": "Surface Area",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain surface area.",
      "Apply surface area to basic problems."
    ],
    "tags": [
      "integrals.surface_area"
    ],
    "prerequisiteSectionIds": [
      "c2-arc-length"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-surface-area-concept",
        "type": "summary",
        "title": "Concept",
        "body": "Rotate a curve about an axis; surface area comes from wrapping small frustums.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-surface-area-x",
        "type": "definition",
        "title": "About the x-axis",
        "body": "If \\(y=f(x) \\ge 0\\):<br>\\[S = 2\\pi \\int_a^b f(x)\\sqrt{1 + (f'(x))^2}\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-surface-area-y",
        "type": "definition",
        "title": "About the y-axis",
        "body": "If \\(x=g(y) \\ge 0\\):<br>\\[S = 2\\pi \\int_c^d g(y)\\sqrt{1 + (g'(y))^2}\\,dy\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-surface-area-notes",
        "type": "note",
        "title": "Notes",
        "body": "The factor \\(2\\pi(\\text{radius})\\) comes from circumference.<br>The square-root term is the arc length element.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-surface-area-exp-1",
      "it-c2-surface-area-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-work",
    "chapterId": "c2-integral-apps",
    "title": "Work",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain work.",
      "Apply work to basic problems."
    ],
    "tags": [
      "integrals.work"
    ],
    "prerequisiteSectionIds": [
      "c2-surface-area"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-work-constant",
        "type": "definition",
        "title": "Work Done by a Constant Force",
        "body": "If force \\(F\\) is constant and displacement is \\(d\\):<br>\\[W = Fd\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-work-variable",
        "type": "definition",
        "title": "Work Done by a Variable Force",
        "body": "If force depends on position \\(x\\):<br>\\[W = \\int_a^b F(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-work-units",
        "type": "note",
        "title": "Units",
        "body": "Force in newtons (N), distance in meters (m), work in joules (J).",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-work-applications",
        "type": "summary",
        "title": "Common Applications",
        "body": "Stretching or compressing a spring; pumping fluids; lifting objects with changing mass (like a rope).",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-work-hooke",
        "type": "definition",
        "title": "Hooke's Law (Springs)",
        "body": "Hooke's Law: \\(F(x)=kx\\).<br>Work to stretch a spring from \\(x=a\\) to \\(x=b\\):<br>\\[W = \\int_a^b kx\\,dx\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-work-num-1",
      "it-c2-work-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-average-value",
    "chapterId": "c2-integral-apps",
    "title": "Average Value of a Function",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain average value of a function.",
      "Apply average value of a function to basic problems."
    ],
    "tags": [
      "integrals.average_value"
    ],
    "prerequisiteSectionIds": [
      "c2-work"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-average-value-definition",
        "type": "definition",
        "title": "Definition",
        "body": "The average value of \\(f(x)\\) on \\([a,b]\\) is:<br>\\[f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-average-value-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "This is the continuous analog of the average of finitely many values.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-average-value-mvt",
        "type": "theorem",
        "title": "Mean Value Theorem for Integrals",
        "body": "If \\(f\\) is continuous on \\([a,b]\\), then there exists \\(c \\in [a,b]\\) such that:<br>\\[f(c) = f_{\\text{avg}}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-average-value-num-1",
      "it-c2-average-value-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-parametric-curves",
    "chapterId": "c2-parametric-basics",
    "title": "Parametric Curves",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain parametric curves.",
      "Apply parametric curves to basic problems."
    ],
    "tags": [
      "parametric.curves"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-parametric-curves-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A curve can be described by \\(x=x(t)\\) and \\(y=y(t)\\), where \\(t\\) is the parameter (often time).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-parametric-curves-plotting",
        "type": "summary",
        "title": "Plotting",
        "body": "Compute points \\((x(t), y(t))\\) for increasing \\(t\\), then determine the direction of motion as \\(t\\) increases.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-parametric-curves-eliminate",
        "type": "note",
        "title": "Eliminating the Parameter",
        "body": "Sometimes solve for \\(t\\) and substitute to obtain a Cartesian form \\(y=f(x)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-parametric-curves-mcq-2",
      "it-c2-parametric-curves-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-parametric-derivatives",
    "chapterId": "c2-parametric-basics",
    "title": "Derivatives of Parametric Equations",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain derivatives of parametric equations.",
      "Apply derivatives of parametric equations to basic problems."
    ],
    "tags": [
      "parametric.derivatives"
    ],
    "prerequisiteSectionIds": [
      "c2-parametric-curves"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-parametric-derivatives-first",
        "type": "definition",
        "title": "First Derivative",
        "body": "If \\(x=x(t)\\) and \\(y=y(t)\\), then:<br>\\[\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-parametric-derivatives-second",
        "type": "definition",
        "title": "Second Derivative",
        "body": "Differentiate \\(dy/dx\\) with respect to \\(t\\) and divide by \\(dx/dt\\):<br>\\[\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}(dy/dx)}{\\frac{dx}{dt}}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-parametric-derivatives-tangent",
        "type": "summary",
        "title": "Tangent Lines",
        "body": "At \\(t=t_0\\), slope \\(m = \\left.\\frac{dy/dt}{dx/dt}\\right|_{t=t_0}\\) and the point is \\((x(t_0), y(t_0))\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-parametric-derivatives-note",
        "type": "note",
        "title": "Important Note",
        "body": "The formula for \\(dy/dx\\) requires \\(dx/dt \\ne 0\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-parametric-derivatives-exp-1",
      "it-c2-parametric-derivatives-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-parametric-arc-length",
    "chapterId": "c2-parametric-basics",
    "title": "Arc Length of Parametric Curves",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain arc length of parametric curves.",
      "Apply arc length of parametric curves to basic problems."
    ],
    "tags": [
      "parametric.arc_length"
    ],
    "prerequisiteSectionIds": [
      "c2-parametric-derivatives"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-parametric-arc-length-formula",
        "type": "definition",
        "title": "Formula",
        "body": "For \\(t \\in [\\alpha, \\beta]\\):<br>\\[L = \\int_{\\alpha}^{\\beta} \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}\\,dt\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-parametric-arc-length-num-1",
      "it-c2-parametric-arc-length-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-polar-graphs",
    "chapterId": "c2-polar-basics",
    "title": "Polar Graphs",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain polar graphs.",
      "Apply polar graphs to basic problems."
    ],
    "tags": [
      "polar.graphs"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-polar-graphs-coordinates",
        "type": "definition",
        "title": "Polar Coordinates",
        "body": "A point is represented as \\((r,\\theta)\\), where \\(r\\) is distance from the origin and \\(\\theta\\) is the angle from the positive x-axis.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-polar-graphs-conversions",
        "type": "summary",
        "title": "Converting Between Systems",
        "body": "\\(x = r\\cos\\theta\\), \\(y = r\\sin\\theta\\)<br>\\(r = \\sqrt{x^2+y^2}\\), \\(\\tan\\theta = \\frac{y}{x}\\)",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-polar-graphs-curves",
        "type": "definition",
        "title": "Polar Curves",
        "body": "Polar curves are given by \\(r=f(\\theta)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-polar-graphs-symmetry",
        "type": "summary",
        "title": "Symmetry Tests",
        "body": "Polar axis (x-axis): replace \\(\\theta\\) with \\(-\\theta\\).<br>y-axis: replace \\(\\theta\\) with \\(\\pi-\\theta\\).<br>Origin: replace \\(r\\) with \\(-r\\) or \\(\\theta\\) with \\(\\theta+\\pi\\).<br>If the equation is unchanged, the symmetry exists.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-polar-graphs-num-1",
      "it-c2-polar-graphs-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-polar-area",
    "chapterId": "c2-polar-basics",
    "title": "Area in Polar Coordinates",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain area in polar coordinates.",
      "Apply area in polar coordinates to basic problems."
    ],
    "tags": [
      "polar.area"
    ],
    "prerequisiteSectionIds": [
      "c2-polar-graphs"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-polar-area-region",
        "type": "definition",
        "title": "Area of a Polar Region",
        "body": "If \\(r=f(\\theta)\\) and \\(\\theta \\in [a,b]\\):<br>\\[A = \\frac{1}{2}\\int_a^b [f(\\theta)]^2\\,d\\theta\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-polar-area-between",
        "type": "definition",
        "title": "Area Between Two Polar Curves",
        "body": "If outer curve is \\(r=R(\\theta)\\) and inner curve is \\(r=r(\\theta)\\):<br>\\[A = \\frac{1}{2}\\int_a^b (R(\\theta)^2 - r(\\theta)^2)\\,d\\theta\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-polar-area-exp-1",
      "it-c2-polar-area-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-polar-arc-length",
    "chapterId": "c2-polar-basics",
    "title": "Arc Length in Polar Coordinates",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain arc length in polar coordinates.",
      "Apply arc length in polar coordinates to basic problems."
    ],
    "tags": [
      "polar.arc_length"
    ],
    "prerequisiteSectionIds": [
      "c2-polar-area"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-polar-arc-length-formula",
        "type": "definition",
        "title": "Formula",
        "body": "For \\(r=f(\\theta)\\) on \\([a,b]\\):<br>\\[L = \\int_a^b \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-polar-arc-length-exp-1",
      "it-c2-polar-arc-length-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-seq-definition",
    "chapterId": "c2-sequences-basics",
    "title": "Definition of Sequences",
    "order": 1,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain definition of sequences.",
      "Apply definition of sequences to basic problems."
    ],
    "tags": [
      "sequences.definition"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c2-seq-definition-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A sequence is a function whose domain is the positive integers:<br>\\[\\{a_n\\} = a_1, a_2, a_3, \\dots\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-seq-definition-explicit",
        "type": "summary",
        "title": "Explicit Formula",
        "body": "Example: \\(a_n = \\frac{n}{n+1}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-seq-definition-recursive",
        "type": "summary",
        "title": "Recursive Definition",
        "body": "Example: \\(a_1 = 1\\), \\(a_{n+1} = \\frac{1}{2}a_n\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-seq-definition-num-1",
      "it-c2-seq-definition-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-seq-limits",
    "chapterId": "c2-sequences-basics",
    "title": "Limits of Sequences",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain limits of sequences.",
      "Apply limits of sequences to basic problems."
    ],
    "tags": [
      "sequences.limits"
    ],
    "prerequisiteSectionIds": [
      "c2-seq-definition"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-seq-limits-convergence",
        "type": "definition",
        "title": "Convergence",
        "body": "A sequence converges to \\(L\\) if:<br>\\[\\lim_{n \\to \\infty} a_n = L\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-seq-limits-divergence",
        "type": "definition",
        "title": "Divergence",
        "body": "If the limit does not exist or is infinite, the sequence diverges.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-seq-limits-patterns",
        "type": "summary",
        "title": "Common Limit Patterns",
        "body": "Rational functions in \\(n\\): divide by the highest power of \\(n\\).<br>Exponentials dominate polynomials: \\(a^n/n^k \\to \\infty\\) for \\(a>1\\).<br>If \\(|r|<1\\), then \\(r^n \\to 0\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-seq-limits-num-1",
      "it-c2-seq-limits-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-seq-monotonic",
    "chapterId": "c2-sequences-basics",
    "title": "Monotonic Sequences",
    "order": 3,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain monotonic sequences.",
      "Apply monotonic sequences to basic problems."
    ],
    "tags": [
      "sequences.monotonic"
    ],
    "prerequisiteSectionIds": [
      "c2-seq-limits"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-seq-monotonic-increasing",
        "type": "definition",
        "title": "Increasing",
        "body": "\\[a_{n+1} \\ge a_n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-seq-monotonic-decreasing",
        "type": "definition",
        "title": "Decreasing",
        "body": "\\[a_{n+1} \\le a_n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-seq-monotonic-note",
        "type": "note",
        "title": "Monotonic Sequences",
        "body": "Monotonic sequences are either increasing or decreasing.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-seq-monotonic-mcq-2",
      "it-c2-seq-monotonic-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-seq-bounded",
    "chapterId": "c2-sequences-basics",
    "title": "Bounded Sequences",
    "order": 4,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain bounded sequences.",
      "Apply bounded sequences to basic problems."
    ],
    "tags": [
      "sequences.bounded"
    ],
    "prerequisiteSectionIds": [
      "c2-seq-monotonic"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-seq-bounded-definition",
        "type": "definition",
        "title": "Definition",
        "body": "Bounded above: \\(a_n \\le M\\) for some \\(M\\).<br>Bounded below: \\(a_n \\ge m\\) for some \\(m\\).<br>If both, the sequence is bounded.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-seq-bounded-theorem",
        "type": "theorem",
        "title": "Monotone Convergence Theorem",
        "body": "If a sequence is monotonic and bounded, then it converges.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-seq-bounded-mcq-2",
      "it-c2-seq-bounded-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-convergence",
    "chapterId": "c2-series-basics",
    "title": "Convergence and Divergence",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain convergence and divergence.",
      "Apply convergence and divergence to basic problems."
    ],
    "tags": [
      "series.convergence"
    ],
    "prerequisiteSectionIds": [
      "c2-series-intro"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-series-convergence-convergent",
        "type": "definition",
        "title": "Convergent Series",
        "body": "If \\(\\sum_{n=1}^{\\infty} a_n = S\\) for some finite \\(S\\), the series converges.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-convergence-divergent",
        "type": "definition",
        "title": "Divergent Series",
        "body": "If the partial sums do not approach a finite limit, the series diverges.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c2-series-convergence-test",
        "type": "note",
        "title": "Test for Divergence",
        "body": "If \\(\\lim_{n\\to\\infty} a_n \\ne 0\\), then the series diverges.<br>If \\(\\lim a_n = 0\\), the test is inconclusive.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-series-convergence-mcq-2",
      "it-c2-series-convergence-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-geometric",
    "chapterId": "c2-series-basics",
    "title": "Geometric Series",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain geometric series.",
      "Apply geometric series to basic problems."
    ],
    "tags": [
      "series.geometric"
    ],
    "prerequisiteSectionIds": [
      "c2-series-convergence"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-series-geometric-form",
        "type": "definition",
        "title": "Form",
        "body": "\\[\\sum_{n=0}^{\\infty} ar^n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-geometric-convergence",
        "type": "summary",
        "title": "Convergence",
        "body": "Converges if \\(|r|<1\\). Diverges if \\(|r| \\ge 1\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-geometric-sum",
        "type": "definition",
        "title": "Sum (if \\(|r|<1\\))",
        "body": "\\[\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-series-geometric-num-1",
      "it-c2-series-geometric-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-p-series",
    "chapterId": "c2-series-basics",
    "title": "p-Series",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain p-series.",
      "Apply p-series to basic problems."
    ],
    "tags": [
      "series.p_series"
    ],
    "prerequisiteSectionIds": [
      "c2-series-geometric"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-series-p-series-form",
        "type": "definition",
        "title": "Form",
        "body": "\\[\\sum_{n=1}^{\\infty} \\frac{1}{n^p}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-p-series-rule",
        "type": "summary",
        "title": "Convergence Rule",
        "body": "Converges if \\(p>1\\). Diverges if \\(p \\le 1\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-series-p-series-mcq-2",
      "it-c2-series-p-series-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-harmonic",
    "chapterId": "c2-series-basics",
    "title": "Harmonic Series",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain harmonic series.",
      "Apply harmonic series to basic problems."
    ],
    "tags": [
      "series.harmonic"
    ],
    "prerequisiteSectionIds": [
      "c2-series-p-series"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-series-harmonic-form",
        "type": "definition",
        "title": "Form",
        "body": "\\[\\sum_{n=1}^{\\infty} \\frac{1}{n}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-harmonic-note",
        "type": "note",
        "title": "Key Fact",
        "body": "This is a p-series with \\(p=1\\), so it diverges.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-series-harmonic-mcq-2",
      "it-c2-series-harmonic-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-test-comparison",
    "chapterId": "c2-convergence-tests",
    "title": "Comparison Test",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain comparison test.",
      "Apply comparison test to basic problems."
    ],
    "tags": [
      "series.comparison"
    ],
    "prerequisiteSectionIds": [
      "c2-series-harmonic"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-test-comparison-positive",
        "type": "summary",
        "title": "Comparison Test (Positive Terms)",
        "body": "If \\(0 \\le a_n \\le b_n\\):<br>If \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges.<br>If \\(\\sum a_n\\) diverges, then \\(\\sum b_n\\) diverges.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-test-comparison-mcq-2",
      "it-c2-test-comparison-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-test-limit-comparison",
    "chapterId": "c2-convergence-tests",
    "title": "Limit Comparison Test",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain limit comparison test.",
      "Apply limit comparison test to basic problems."
    ],
    "tags": [
      "series.limit_comparison"
    ],
    "prerequisiteSectionIds": [
      "c2-test-comparison"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-test-limit-comparison-definition",
        "type": "definition",
        "title": "Limit Comparison Test",
        "body": "For \\(a_n>0\\), \\(b_n>0\\):<br>\\[\\lim_{n\\to\\infty} \\frac{a_n}{b_n} = c\\]<br>If \\(0 < c < \\infty\\), then \\(\\sum a_n\\) and \\(\\sum b_n\\) either both converge or both diverge.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-test-limit-comparison-mcq-2",
      "it-c2-test-limit-comparison-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-test-integral",
    "chapterId": "c2-convergence-tests",
    "title": "Integral Test",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain integral test.",
      "Apply integral test to basic problems."
    ],
    "tags": [
      "series.integral_test"
    ],
    "prerequisiteSectionIds": [
      "c2-test-limit-comparison"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-test-integral-definition",
        "type": "definition",
        "title": "Integral Test",
        "body": "If \\(f(x)\\) is continuous, positive, decreasing, and \\(a_n = f(n)\\), then:<br>\\[\\sum_{n=1}^{\\infty} a_n\\] and \\(\\int_1^{\\infty} f(x)\\,dx\\) either both converge or both diverge.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-test-integral-mcq-2",
      "it-c2-test-integral-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-test-alternating",
    "chapterId": "c2-convergence-tests",
    "title": "Alternating Series Test",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain alternating series test.",
      "Apply alternating series test to basic problems."
    ],
    "tags": [
      "series.alternating"
    ],
    "prerequisiteSectionIds": [
      "c2-test-integral"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-test-alternating-definition",
        "type": "definition",
        "title": "Alternating Series Test (Leibniz)",
        "body": "For \\(\\sum_{n=1}^{\\infty} (-1)^{n-1} a_n\\) with \\(a_n \\ge 0\\), the series converges if:<br>1) \\(a_n\\) is decreasing.<br>2) \\(\\lim_{n\\to\\infty} a_n = 0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-test-alternating-error",
        "type": "note",
        "title": "Alternating Series Error Bound",
        "body": "If \\(S\\) is the sum and \\(S_N\\) is the \\(N\\)-th partial sum, then:<br>\\[|S - S_N| \\le a_{N+1}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-test-alternating-mcq-2",
      "it-c2-test-alternating-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-test-ratio",
    "chapterId": "c2-convergence-tests",
    "title": "Ratio Test",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain ratio test.",
      "Apply ratio test to basic problems."
    ],
    "tags": [
      "series.ratio_test"
    ],
    "prerequisiteSectionIds": [
      "c2-test-alternating"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-test-ratio-definition",
        "type": "definition",
        "title": "Ratio Test",
        "body": "Compute \\(L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|\\).<br>If \\(L<1\\): converges absolutely.<br>If \\(L>1\\) or \\(L=\\infty\\): diverges.<br>If \\(L=1\\): inconclusive.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-test-ratio-mcq-2",
      "it-c2-test-ratio-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-test-root",
    "chapterId": "c2-convergence-tests",
    "title": "Root Test",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain root test.",
      "Apply root test to basic problems."
    ],
    "tags": [
      "series.root_test"
    ],
    "prerequisiteSectionIds": [
      "c2-test-ratio"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-test-root-definition",
        "type": "definition",
        "title": "Root Test",
        "body": "Compute \\(L = \\lim_{n\\to\\infty} \\sqrt[n]{|a_n|}\\).<br>If \\(L<1\\): converges absolutely.<br>If \\(L>1\\): diverges.<br>If \\(L=1\\): inconclusive.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-test-root-mcq-2",
      "it-c2-test-root-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-power-series-rep",
    "chapterId": "c2-power-series",
    "title": "Power Series Representation",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain power series representation.",
      "Apply power series representation to basic problems."
    ],
    "tags": [
      "series.power"
    ],
    "prerequisiteSectionIds": [
      "c2-test-root"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-power-series-rep-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A power series centered at \\(a\\) is:<br>\\[\\sum_{n=0}^{\\infty} c_n (x-a)^n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-power-series-rep-convergence",
        "type": "summary",
        "title": "Convergence Behavior",
        "body": "Converges for \\(|x-a|<R\\) and diverges for \\(|x-a|>R\\). Endpoints require separate testing.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-power-series-rep-mcq-2",
      "it-c2-power-series-rep-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-power-series-radius",
    "chapterId": "c2-power-series",
    "title": "Radius and Interval of Convergence",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain radius and interval of convergence.",
      "Apply radius and interval of convergence to basic problems."
    ],
    "tags": [
      "series.radius"
    ],
    "prerequisiteSectionIds": [
      "c2-power-series-rep"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-power-series-radius-radius",
        "type": "summary",
        "title": "Radius of Convergence",
        "body": "The radius \\(R\\) can often be found using the ratio test or root test.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-power-series-radius-interval",
        "type": "definition",
        "title": "Interval of Convergence",
        "body": "The interval is \\((a-R, a+R)\\) plus any endpoints that converge.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-power-series-radius-endpoints",
        "type": "note",
        "title": "Endpoint Testing",
        "body": "Always test endpoints separately.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-power-series-radius-num-1",
      "it-c2-power-series-radius-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-taylor-series",
    "chapterId": "c2-power-series",
    "title": "Taylor Series",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain taylor series.",
      "Apply taylor series to basic problems."
    ],
    "tags": [
      "series.taylor"
    ],
    "prerequisiteSectionIds": [
      "c2-power-series-radius"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-taylor-series-definition",
        "type": "definition",
        "title": "Definition",
        "body": "The Taylor series of \\(f(x)\\) about \\(x=a\\) is:<br>\\[f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-taylor-series-coefficients",
        "type": "summary",
        "title": "Coefficients",
        "body": "\\[c_n = \\frac{f^{(n)}(a)}{n!}\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-taylor-series-mcq-2",
      "it-c2-taylor-series-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-maclaurin-series",
    "chapterId": "c2-power-series",
    "title": "Maclaurin Series",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain maclaurin series.",
      "Apply maclaurin series to basic problems."
    ],
    "tags": [
      "series.maclaurin"
    ],
    "prerequisiteSectionIds": [
      "c2-taylor-series"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-maclaurin-series-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A Maclaurin series is a Taylor series centered at \\(a=0\\):<br>\\[f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!}x^n\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-maclaurin-series-core",
        "type": "summary",
        "title": "Core Maclaurin Series",
        "body": "\\(\\frac{1}{1-x} = \\sum_{n=0}^{\\infty} x^n\\), \\(|x|<1\\)<br>\\(e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}\\)<br>\\(\\sin x = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}\\)<br>\\(\\cos x = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}\\)<br>\\(\\ln(1+x) = \\sum_{n=1}^{\\infty} (-1)^{n-1}\\frac{x^n}{n}\\), \\(|x|<1, x>-1\\)<br>\\(\\arctan x = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{2n+1}\\), \\(|x| \\le 1\\) (with endpoint rules)",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-maclaurin-series-mcq-2",
      "it-c2-maclaurin-series-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-taylor-polynomials",
    "chapterId": "c2-power-series",
    "title": "Taylor Polynomials",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain taylor polynomials.",
      "Apply taylor polynomials to basic problems."
    ],
    "tags": [
      "series.taylor_poly"
    ],
    "prerequisiteSectionIds": [
      "c2-maclaurin-series"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-taylor-polynomials-definition",
        "type": "definition",
        "title": "Definition",
        "body": "The \\(n\\)-th Taylor polynomial about \\(x=a\\) is:<br>\\[P_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-taylor-polynomials-purpose",
        "type": "summary",
        "title": "Purpose",
        "body": "Approximate \\(f(x)\\) near \\(x=a\\) using a polynomial.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-taylor-polynomials-mcq-2",
      "it-c2-taylor-polynomials-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-error",
    "chapterId": "c2-power-series",
    "title": "Error Estimation",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain error estimation.",
      "Apply error estimation to basic problems."
    ],
    "tags": [
      "series.error"
    ],
    "prerequisiteSectionIds": [
      "c2-taylor-polynomials"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-series-error-lagrange",
        "type": "definition",
        "title": "Lagrange Error Bound",
        "body": "If \\(|f^{(n+1)}(x)| \\le M\\) near \\(a\\), then:<br>\\[|R_n(x)| \\le \\frac{M|x-a|^{n+1}}{(n+1)!}\\]<br>where \\(R_n(x) = f(x) - P_n(x)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-error-alternating",
        "type": "note",
        "title": "Alternating Series Error",
        "body": "If a Taylor series is alternating with decreasing terms, then:<br>\\[|R_n(x)| \\le |\\text{next term}|\\]",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-series-error-mcq-2",
      "it-c2-series-error-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c2-series-manipulation",
    "chapterId": "c2-power-series",
    "title": "Manipulating Power Series",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain manipulating power series.",
      "Apply manipulating power series to basic problems."
    ],
    "tags": [
      "series.manipulation"
    ],
    "prerequisiteSectionIds": [
      "c2-series-error"
    ],
    "contentBlocks": [
      {
        "id": "blk-c2-series-manipulation-substitution",
        "type": "summary",
        "title": "Substitution",
        "body": "If \\(\\sum c_n x^n\\) is known, replacing \\(x\\) with \\((x-a)\\) or \\(kx\\) shifts or scales the series.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-manipulation-multiply",
        "type": "definition",
        "title": "Multiplying by Powers of x",
        "body": "\\[x^m \\sum_{n=0}^{\\infty} c_n x^n = \\sum_{n=0}^{\\infty} c_n x^{n+m}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-manipulation-diff",
        "type": "definition",
        "title": "Differentiation",
        "body": "Within the radius of convergence:<br>\\[\\frac{d}{dx}\\left(\\sum_{n=0}^{\\infty} c_n (x-a)^n\\right) = \\sum_{n=1}^{\\infty} n c_n (x-a)^{n-1}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-manipulation-int",
        "type": "definition",
        "title": "Integration",
        "body": "Within the radius of convergence:<br>\\[\\int \\left(\\sum_{n=0}^{\\infty} c_n (x-a)^n\\right) dx = C + \\sum_{n=0}^{\\infty} \\frac{c_n}{n+1}(x-a)^{n+1}\\]",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c2-series-manipulation-notes",
        "type": "note",
        "title": "Notes on Convergence",
        "body": "Differentiation and integration do not change the radius of convergence.<br>Always test endpoints separately for interval of convergence.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
    "items": [
      "it-c2-series-manipulation-mcq-2",
      "it-c2-series-manipulation-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-dot-product",
    "chapterId": "c3-vectors-basics",
    "title": "Dot Product",
    "order": 2,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain dot product.",
      "Apply dot product to basic problems."
    ],
    "tags": [
      "vectors.dot"
    ],
    "prerequisiteSectionIds": [
      "c3-vectors-intro"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-dot-definition",
        "type": "definition",
        "title": "Definition",
        "body": "For \\(\\vec{u}=\\langle u_1,u_2,u_3\\rangle\\) and \\(\\vec{v}=\\langle v_1,v_2,v_3\\rangle\\):<br>\\(\\vec{u}\\cdot\\vec{v}=u_1v_1+u_2v_2+u_3v_3\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-dot-geometry",
        "type": "summary",
        "title": "Geometric Interpretation",
        "body": "\\(\\vec{u}\\cdot\\vec{v}=\\|\\vec{u}\\|\\|\\vec{v}\\|\\cos\\theta\\), where \\(\\theta\\) is the angle between vectors.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-dot-orthogonal",
        "type": "note",
        "title": "Orthogonality",
        "body": "\\(\\vec{u}\\cdot\\vec{v}=0\\iff \\vec{u}\\perp\\vec{v}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-dot-projection",
        "type": "summary",
        "title": "Projection",
        "body": "Scalar projection: \\(\\mathrm{comp}_{\\vec{v}}\\vec{u}=(\\vec{u}\\cdot\\vec{v})/\\|\\vec{v}\\|\\).<br>Vector projection: \\(\\mathrm{proj}_{\\vec{v}}\\vec{u}=(\\vec{u}\\cdot\\vec{v}/\\|\\vec{v}\\|^2)\\vec{v}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-dot-product-mcq-1",
      "it-c3-dot-product-num-1",
      "it-c3-dot-product-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-cross-product",
    "chapterId": "c3-vectors-basics",
    "title": "Cross Product",
    "order": 3,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain cross product.",
      "Apply cross product to basic problems."
    ],
    "tags": [
      "vectors.cross"
    ],
    "prerequisiteSectionIds": [
      "c3-dot-product"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-cross-definition",
        "type": "definition",
        "title": "Definition",
        "body": "\\(\\vec{u}\\times\\vec{v}=\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ u_1 & u_2 & u_3 \\\\ v_1 & v_2 & v_3 \\end{vmatrix}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-cross-geometry",
        "type": "summary",
        "title": "Magnitude and Geometry",
        "body": "\\(\\|\\vec{u}\\times\\vec{v}\\|=\\|\\vec{u}\\|\\|\\vec{v}\\|\\sin\\theta\\).<br>Direction is given by the right-hand rule.<br>Magnitude equals the area of the parallelogram formed by the vectors.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-cross-parallel",
        "type": "note",
        "title": "Parallel Vectors",
        "body": "\\(\\vec{u}\\times\\vec{v}=\\vec{0}\\iff \\vec{u}\\parallel\\vec{v}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-cross-product-mcq-1",
      "it-c3-cross-product-num-1",
      "it-c3-cross-product-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-lines-planes",
    "chapterId": "c3-vectors-basics",
    "title": "Lines and Planes",
    "order": 4,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain lines and planes.",
      "Apply lines and planes to basic problems."
    ],
    "tags": [
      "vectors.lines_planes"
    ],
    "prerequisiteSectionIds": [
      "c3-cross-product"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-lines-vector",
        "type": "definition",
        "title": "Vector Form of a Line",
        "body": "A line through \\(\\vec{r}_0\\) with direction \\(\\vec{v}\\):<br>\\(\\vec{r}(t)=\\vec{r}_0+t\\vec{v}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-lines-parametric",
        "type": "summary",
        "title": "Parametric Form",
        "body": "If \\(\\vec{r}_0=\\langle x_0,y_0,z_0\\rangle\\) and \\(\\vec{v}=\\langle a,b,c\\rangle\\):<br>\\(x=x_0+at\\), \\(y=y_0+bt\\), \\(z=z_0+ct\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-lines-symmetric",
        "type": "summary",
        "title": "Symmetric Form",
        "body": "If \\(a,b,c\\neq 0\\):<br>\\(\\frac{x-x_0}{a}=\\frac{y-y_0}{b}=\\frac{z-z_0}{c}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-planes-point-normal",
        "type": "definition",
        "title": "Plane from Point and Normal Vector",
        "body": "Through \\((x_0,y_0,z_0)\\) with normal \\(\\vec{n}=\\langle A,B,C\\rangle\\):<br>\\(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-planes-standard",
        "type": "summary",
        "title": "Standard Form",
        "body": "\\(Ax+By+Cz=D\\). Normal vector is \\(\\langle A,B,C\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-planes-angle",
        "type": "note",
        "title": "Angle Between Planes",
        "body": "The angle between two planes equals the angle between their normal vectors.",
        "latex": false,
        "refs": []
      },
      {
        "id": "blk-c3-planes-distance",
        "type": "definition",
        "title": "Distance from a Point to a Plane",
        "body": "For plane \\(Ax+By+Cz=D\\) and point \\((x_0,y_0,z_0)\\):<br>\\(d=\\frac{|Ax_0+By_0+Cz_0-D|}{\\sqrt{A^2+B^2+C^2}}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-lines-planes-mcq-1",
      "it-c3-lines-planes-num-1",
      "it-c3-lines-planes-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-quadric-surfaces",
    "chapterId": "c3-vectors-basics",
    "title": "Cylinders and Quadric Surfaces",
    "order": 5,
    "estimatedTimeMin": 16,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain cylinders and quadric surfaces.",
      "Apply cylinders and quadric surfaces to basic problems."
    ],
    "tags": [
      "vectors.quadric"
    ],
    "prerequisiteSectionIds": [
      "c3-lines-planes"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-cylinders",
        "type": "definition",
        "title": "Cylinders",
        "body": "A cylinder is a surface where one variable is free.<br>Examples: \\(x^2+y^2=1\\) (circular cylinder along the z-axis), \\(y=x^2\\) (parabolic cylinder along z).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-quadric-types",
        "type": "summary",
        "title": "Quadric Surfaces (Common Types)",
        "body": "Ellipsoid: \\(\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1\\).<br>Hyperboloid of one sheet: \\(\\frac{x^2}{a^2}+\\frac{y^2}{b^2}-\\frac{z^2}{c^2}=1\\).<br>Hyperboloid of two sheets: \\(-\\frac{x^2}{a^2}-\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1\\).<br>Elliptic paraboloid: \\(z=\\frac{x^2}{a^2}+\\frac{y^2}{b^2}\\).<br>Hyperbolic paraboloid: \\(z=\\frac{x^2}{a^2}-\\frac{y^2}{b^2}\\).<br>Elliptic cone: \\(\\frac{x^2}{a^2}+\\frac{y^2}{b^2}-\\frac{z^2}{c^2}=0\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-quadric-surfaces-mcq-1",
      "it-c3-quadric-surfaces-num-1",
      "it-c3-quadric-surfaces-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-vector-valued",
    "chapterId": "c3-vector-functions-basics",
    "title": "Vector-Valued Functions",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain vector-valued functions.",
      "Apply vector-valued functions to basic problems."
    ],
    "tags": [
      "vector_functions.definition"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-vector-valued-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A vector-valued function maps a parameter \\(t\\) to a vector: \\(\\vec{r}(t)=\\langle x(t), y(t), z(t)\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vector-valued-domain",
        "type": "summary",
        "title": "Domain and Range",
        "body": "Domain: allowable \\(t\\)-values. Range: points on the space curve.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-vector-valued-mcq-1",
      "it-c3-vector-valued-num-1",
      "it-c3-vector-valued-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-vector-limits",
    "chapterId": "c3-vector-functions-basics",
    "title": "Limits and Continuity",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain limits and continuity.",
      "Apply limits and continuity to basic problems."
    ],
    "tags": [
      "vector_functions.limits"
    ],
    "prerequisiteSectionIds": [
      "c3-vector-valued"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-vector-limits-definition",
        "type": "definition",
        "title": "Limit of a Vector Function",
        "body": "\\(\\lim_{t\\to a}\\vec{r}(t)=\\langle \\lim_{t\\to a}x(t), \\lim_{t\\to a}y(t), \\lim_{t\\to a}z(t)\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vector-limits-continuity",
        "type": "definition",
        "title": "Continuity",
        "body": "\\(\\vec{r}(t)\\) is continuous at \\(t=a\\) iff \\(x(t),y(t),z(t)\\) are continuous at \\(a\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-vector-limits-mcq-1",
      "it-c3-vector-limits-num-1",
      "it-c3-vector-limits-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-vector-derivatives",
    "chapterId": "c3-vector-functions-basics",
    "title": "Derivatives of Vector Functions",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain derivatives of vector functions.",
      "Apply derivatives of vector functions to basic problems."
    ],
    "tags": [
      "vector_functions.derivatives"
    ],
    "prerequisiteSectionIds": [
      "c3-vector-limits"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-vector-derivatives-definition",
        "type": "definition",
        "title": "Definition",
        "body": "\\(\\vec{r}\,'(t)=\\langle x'(t), y'(t), z'(t)\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vector-derivatives-interpretation",
        "type": "summary",
        "title": "Interpretation",
        "body": "\\(\\vec{r}\,'(t)\\) is a tangent vector; in motion problems it is the velocity vector.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-vector-derivatives-rules",
        "type": "summary",
        "title": "Differentiation Rules",
        "body": "Scalar multiple: \\(\\frac{d}{dt}[c\\vec{r}(t)] = c\\vec{r}\,'(t)\\).<br>Sum: \\(\\frac{d}{dt}[\\vec{r}(t)+\\vec{s}(t)] = \\vec{r}\,'(t)+\\vec{s}\,'(t)\\).<br>Dot product: \\(\\frac{d}{dt}[\\vec{r}\\cdot\\vec{s}] = \\vec{r}\,'\\cdot\\vec{s}+\\vec{r}\\cdot\\vec{s}\,'\\).<br>Cross product: \\(\\frac{d}{dt}[\\vec{r}\\times\\vec{s}] = \\vec{r}\,'\\times\\vec{s}+\\vec{r}\\times\\vec{s}\,'\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-vector-derivatives-mcq-1",
      "it-c3-vector-derivatives-num-1",
      "it-c3-vector-derivatives-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-vector-integrals",
    "chapterId": "c3-vector-functions-basics",
    "title": "Integrals of Vector Functions",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain integrals of vector functions.",
      "Apply integrals of vector functions to basic problems."
    ],
    "tags": [
      "vector_functions.integrals"
    ],
    "prerequisiteSectionIds": [
      "c3-vector-derivatives"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-vector-integrals-definition",
        "type": "definition",
        "title": "Definition",
        "body": "\\(\\int \\vec{r}(t)\\,dt = \\langle \\int x(t)\\,dt, \\int y(t)\\,dt, \\int z(t)\\,dt\\rangle + \\vec{C}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-vector-integrals-mcq-1",
      "it-c3-vector-integrals-num-1",
      "it-c3-vector-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-velocity-accel",
    "chapterId": "c3-vector-functions-basics",
    "title": "Velocity and Acceleration",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain velocity and acceleration.",
      "Apply velocity and acceleration to basic problems."
    ],
    "tags": [
      "vector_functions.velocity"
    ],
    "prerequisiteSectionIds": [
      "c3-vector-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-velocity-accel-defs",
        "type": "definition",
        "title": "Position, Velocity, Speed, Acceleration",
        "body": "Position: \\(\\vec{r}(t)\\).<br>Velocity: \\(\\vec{v}(t)=\\vec{r}\,'(t)\\).<br>Speed: \\(\\|\\vec{v}(t)\\|\\).<br>Acceleration: \\(\\vec{a}(t)=\\vec{v}\,'(t)=\\vec{r}\,''(t)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-velocity-accel-components",
        "type": "summary",
        "title": "Tangential and Normal Components",
        "body": "\\(\\vec{a}=a_T\\mathbf{T}+a_N\\mathbf{N}\\), where \\(a_T=\\frac{d}{dt}\\|\\vec{v}\\|\\) and \\(a_N=\\frac{\\|\\vec{v}\\times\\vec{a}\\|}{\\|\\vec{v}\\|}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-velocity-accel-mcq-1",
      "it-c3-velocity-accel-num-1",
      "it-c3-velocity-accel-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-arc-length-curvature",
    "chapterId": "c3-vector-functions-basics",
    "title": "Arc Length and Curvature",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain arc length and curvature.",
      "Apply arc length and curvature to basic problems."
    ],
    "tags": [
      "vector_functions.arc_length"
    ],
    "prerequisiteSectionIds": [
      "c3-velocity-accel"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-arc-length",
        "type": "definition",
        "title": "Arc Length",
        "body": "For \\(t\\in[a,b]\\): \\(L=\\int_a^b \\|\\vec{r}\,'(t)\\|\\,dt\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-unit-tangent",
        "type": "definition",
        "title": "Unit Tangent Vector",
        "body": "\\(\\mathbf{T}(t)=\\vec{r}\,'(t)/\\|\\vec{r}\,'(t)\\|\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-curvature",
        "type": "definition",
        "title": "Curvature",
        "body": "\\(\\kappa(t)=\\|\\mathbf{T}'(t)\\|/\\|\\vec{r}\,'(t)\\|\\).<br>Also: \\(\\kappa(t)=\\|\\vec{r}\,'(t)\\times\\vec{r}\,''(t)\\|/\\|\\vec{r}\,'(t)\\|^3\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-arc-length-curvature-mcq-1",
      "it-c3-arc-length-curvature-num-1",
      "it-c3-arc-length-curvature-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-functions-multivariable",
    "chapterId": "c3-partials-basics",
    "title": "Functions of Two and Three Variables",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain functions of two and three variables.",
      "Apply functions of two and three variables to basic problems."
    ],
    "tags": [
      "multivariable.functions"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-functions-definition",
        "type": "definition",
        "title": "Definition",
        "body": "Function of two variables: \\(z=f(x,y)\\). Function of three variables: \\(w=f(x,y,z)\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-functions-graphs",
        "type": "summary",
        "title": "Graphs and Level Surfaces",
        "body": "\\(z=f(x,y)\\) forms a surface in 3D.<br>\\(f(x,y,z)=c\\) forms a level surface in 3D.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-functions-level-curves",
        "type": "definition",
        "title": "Level Curves",
        "body": "Level curves satisfy \\(f(x,y)=c\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-functions-multivariable-mcq-1",
      "it-c3-functions-multivariable-num-1",
      "it-c3-functions-multivariable-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-multivariable-limits",
    "chapterId": "c3-partials-basics",
    "title": "Limits and Continuity",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain limits and continuity.",
      "Apply limits and continuity to basic problems."
    ],
    "tags": [
      "multivariable.limits"
    ],
    "prerequisiteSectionIds": [
      "c3-functions-multivariable"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-multivariable-limits-definition",
        "type": "definition",
        "title": "Limit (Two Variables)",
        "body": "\\(\\lim_{(x,y)\\to(a,b)} f(x,y)=L\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-multivariable-limits-dne",
        "type": "summary",
        "title": "Common Methods to Show a Limit Does Not Exist",
        "body": "Compare different paths (e.g., \\(y=0\\) vs \\(y=x\\)).<br>Convert to polar form when appropriate.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-multivariable-limits-continuity",
        "type": "definition",
        "title": "Continuity",
        "body": "\\(f(x,y)\\) is continuous at \\((a,b)\\) if \\(\\lim_{(x,y)\\to(a,b)} f(x,y)=f(a,b)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-multivariable-limits-mcq-1",
      "it-c3-multivariable-limits-num-1",
      "it-c3-multivariable-limits-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-higher-partials",
    "chapterId": "c3-partials-basics",
    "title": "Higher-Order Partial Derivatives",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain higher-order partial derivatives.",
      "Apply higher-order partial derivatives to basic problems."
    ],
    "tags": [
      "multivariable.higher_partials"
    ],
    "prerequisiteSectionIds": [
      "c3-partials-intro"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-higher-partials-definition",
        "type": "summary",
        "title": "Higher-Order Partial Derivatives",
        "body": "\\(f_{xx}, f_{yy}, f_{xy}, f_{yx}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-higher-partials-mcq-1",
      "it-c3-higher-partials-num-1",
      "it-c3-higher-partials-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-clairaut",
    "chapterId": "c3-partials-basics",
    "title": "Clairaut's Theorem",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain clairaut's theorem.",
      "Apply clairaut's theorem to basic problems."
    ],
    "tags": [
      "multivariable.clairaut"
    ],
    "prerequisiteSectionIds": [
      "c3-higher-partials"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-clairaut-theorem",
        "type": "theorem",
        "title": "Clairaut's Theorem",
        "body": "If \\(f_{xy}\\) and \\(f_{yx}\\) are continuous near \\((a,b)\\), then \\(f_{xy}(a,b)=f_{yx}(a,b)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-clairaut-mcq-1",
      "it-c3-clairaut-num-1",
      "it-c3-clairaut-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-tangent-planes",
    "chapterId": "c3-partials-basics",
    "title": "Tangent Planes",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain tangent planes.",
      "Apply tangent planes to basic problems."
    ],
    "tags": [
      "multivariable.tangent_planes"
    ],
    "prerequisiteSectionIds": [
      "c3-clairaut"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-tangent-plane",
        "type": "definition",
        "title": "Tangent Plane to \(z=f(x,y)\)",
        "body": "At \\((a,b)\\): \\(z-f(a,b)=f_x(a,b)(x-a)+f_y(a,b)(y-b)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-tangent-planes-mcq-1",
      "it-c3-tangent-planes-num-1",
      "it-c3-tangent-planes-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-linear-approx",
    "chapterId": "c3-partials-basics",
    "title": "Linear Approximation",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain linear approximation.",
      "Apply linear approximation to basic problems."
    ],
    "tags": [
      "multivariable.linear_approx"
    ],
    "prerequisiteSectionIds": [
      "c3-tangent-planes"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-linear-approximation",
        "type": "definition",
        "title": "Linearization",
        "body": "Near \\((a,b)\\): \\(f(x,y)\\approx f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-linear-approx-mcq-1",
      "it-c3-linear-approx-num-1",
      "it-c3-linear-approx-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-double-integrals",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Double Integrals",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain double integrals.",
      "Apply double integrals to basic problems."
    ],
    "tags": [
      "integrals.double"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-double-integrals-definition",
        "type": "definition",
        "title": "Definition",
        "body": "\\(\\iint_R f(x,y)\\,dA\\) represents volume under \\(z=f(x,y)\\) over region \\(R\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-double-integrals-mcq-1",
      "it-c3-double-integrals-num-1",
      "it-c3-double-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-iterated-integrals",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Iterated Integrals",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain iterated integrals.",
      "Apply iterated integrals to basic problems."
    ],
    "tags": [
      "integrals.iterated"
    ],
    "prerequisiteSectionIds": [
      "c3-double-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-iterated-integrals-rect",
        "type": "summary",
        "title": "Iterated Integrals (Rectangular Region)",
        "body": "If \\(R=[a,b]\\times[c,d]\\):<br>\\(\\iint_R f(x,y)\\,dA=\\int_a^b\\int_c^d f(x,y)\\,dy\\,dx\\).<br>Also: \\(\\iint_R f(x,y)\\,dA=\\int_c^d\\int_a^b f(x,y)\\,dx\\,dy\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-iterated-integrals-mcq-1",
      "it-c3-iterated-integrals-num-1",
      "it-c3-iterated-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-double-general-regions",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Double Integrals over General Regions",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain double integrals over general regions.",
      "Apply double integrals over general regions to basic problems."
    ],
    "tags": [
      "integrals.double_regions"
    ],
    "prerequisiteSectionIds": [
      "c3-iterated-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-double-general-type1",
        "type": "summary",
        "title": "Type I Region (Vertical Slices)",
        "body": "\\(R=\\{(x,y): a\\le x\\le b,\\ g_1(x)\\le y\\le g_2(x)\\}\\).<br>\\(\\iint_R f(x,y)\\,dA=\\int_a^b\\int_{g_1(x)}^{g_2(x)} f(x,y)\\,dy\\,dx\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-double-general-type2",
        "type": "summary",
        "title": "Type II Region (Horizontal Slices)",
        "body": "\\(R=\\{(x,y): c\\le y\\le d,\\ h_1(y)\\le x\\le h_2(y)\\}\\).<br>\\(\\iint_R f(x,y)\\,dA=\\int_c^d\\int_{h_1(y)}^{h_2(y)} f(x,y)\\,dx\\,dy\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-double-general-regions-mcq-1",
      "it-c3-double-general-regions-num-1",
      "it-c3-double-general-regions-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-double-polar",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Polar Coordinates in Double Integrals",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain polar coordinates in double integrals.",
      "Apply polar coordinates in double integrals to basic problems."
    ],
    "tags": [
      "integrals.double_polar"
    ],
    "prerequisiteSectionIds": [
      "c3-double-general-regions"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-double-polar-conversion",
        "type": "summary",
        "title": "Conversion",
        "body": "\\(x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ dA=r\\,dr\\,d\\theta\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-double-polar-integral",
        "type": "definition",
        "title": "Polar Double Integral",
        "body": "\\(\\iint_R f(x,y)\\,dA=\\int_{\\alpha}^{\\beta}\\int_{a(\\theta)}^{b(\\theta)} f(r\\cos\\theta,r\\sin\\theta)\\,r\\,dr\\,d\\theta\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-double-polar-mcq-1",
      "it-c3-double-polar-num-1",
      "it-c3-double-polar-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-triple-integrals",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Triple Integrals",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain triple integrals.",
      "Apply triple integrals to basic problems."
    ],
    "tags": [
      "integrals.triple"
    ],
    "prerequisiteSectionIds": [
      "c3-double-polar"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-triple-integrals-definition",
        "type": "definition",
        "title": "Definition",
        "body": "\\(\\iiint_E f(x,y,z)\\,dV\\) represents an accumulated quantity over a 3D region \\(E\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-triple-integrals-rect",
        "type": "summary",
        "title": "Iterated Form (Rectangular Box)",
        "body": "If \\(E=[a,b]\\times[c,d]\\times[p,q]\\):<br>\\(\\iiint_E f\\,dV=\\int_a^b\\int_c^d\\int_p^q f(x,y,z)\\,dz\\,dy\\,dx\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-triple-integrals-mcq-1",
      "it-c3-triple-integrals-num-1",
      "it-c3-triple-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-cylindrical",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Cylindrical Coordinates",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain cylindrical coordinates.",
      "Apply cylindrical coordinates to basic problems."
    ],
    "tags": [
      "integrals.cylindrical"
    ],
    "prerequisiteSectionIds": [
      "c3-triple-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-cylindrical-conversion",
        "type": "summary",
        "title": "Conversion",
        "body": "\\(x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-cylindrical-volume",
        "type": "definition",
        "title": "Volume Element",
        "body": "\\(dV=r\\,dr\\,d\\theta\\,dz\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-cylindrical-mcq-1",
      "it-c3-cylindrical-num-1",
      "it-c3-cylindrical-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-spherical",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Spherical Coordinates",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain spherical coordinates.",
      "Apply spherical coordinates to basic problems."
    ],
    "tags": [
      "integrals.spherical"
    ],
    "prerequisiteSectionIds": [
      "c3-cylindrical"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-spherical-conversion",
        "type": "summary",
        "title": "Conversion",
        "body": "\\(x=\\rho\\sin\\phi\\cos\\theta,\\ y=\\rho\\sin\\phi\\sin\\theta,\\ z=\\rho\\cos\\phi\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-spherical-meaning",
        "type": "note",
        "title": "Variable Meanings",
        "body": "\\(\\rho\\) is distance from origin, \\(\\phi\\) is the angle from the positive z-axis, and \\(\\theta\\) is the angle in the xy-plane.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-spherical-volume",
        "type": "definition",
        "title": "Volume Element",
        "body": "\\(dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-spherical-mcq-1",
      "it-c3-spherical-num-1",
      "it-c3-spherical-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-change-of-variables",
    "chapterId": "c3-multiple-integrals-basics",
    "title": "Change of Variables and Jacobians",
    "order": 8,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain change of variables and jacobians.",
      "Apply change of variables and jacobians to basic problems."
    ],
    "tags": [
      "integrals.jacobian"
    ],
    "prerequisiteSectionIds": [
      "c3-spherical"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-change-variables-transform",
        "type": "summary",
        "title": "General Transformation",
        "body": "Let \\(x=x(u,v)\\), \\(y=y(u,v)\\). Then \\(dA=\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|\\,du\\,dv\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-change-variables-jacobian",
        "type": "definition",
        "title": "Jacobian",
        "body": "\\(\\frac{\\partial(x,y)}{\\partial(u,v)}=\\begin{vmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{vmatrix}\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-change-of-variables-mcq-1",
      "it-c3-change-of-variables-num-1",
      "it-c3-change-of-variables-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-vector-fields",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Vector Fields",
    "order": 1,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain vector fields.",
      "Apply vector fields to basic problems."
    ],
    "tags": [
      "vector_calc.fields"
    ],
    "prerequisiteSectionIds": [],
    "contentBlocks": [
      {
        "id": "blk-c3-vector-fields-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A vector field assigns a vector to each point: \\(\\vec{F}(x,y,z)=\\langle P(x,y,z),Q(x,y,z),R(x,y,z)\\rangle\\).<br>In 2D: \\(\\vec{F}(x,y)=\\langle P(x,y),Q(x,y)\\rangle\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-vector-fields-mcq-1",
      "it-c3-vector-fields-num-1",
      "it-c3-vector-fields-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-gradient",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Gradient",
    "order": 2,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain gradient.",
      "Apply gradient to basic problems."
    ],
    "tags": [
      "vector_calc.gradient"
    ],
    "prerequisiteSectionIds": [
      "c3-vector-fields"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-gradient-definition",
        "type": "definition",
        "title": "Definition",
        "body": "For scalar field \\(f(x,y,z)\\): \\(\\nabla f=\\langle f_x,f_y,f_z\\rangle\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-gradient-meaning",
        "type": "note",
        "title": "Meaning",
        "body": "Points in the direction of greatest increase and is perpendicular to level surfaces.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-gradient-mcq-1",
      "it-c3-gradient-num-1",
      "it-c3-gradient-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-divergence",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Divergence",
    "order": 3,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain divergence.",
      "Apply divergence to basic problems."
    ],
    "tags": [
      "vector_calc.divergence"
    ],
    "prerequisiteSectionIds": [
      "c3-gradient"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-divergence-definition",
        "type": "definition",
        "title": "Definition",
        "body": "For \\(\\vec{F}=\\langle P,Q,R\\rangle\\): \\(\\nabla\\cdot\\vec{F}=P_x+Q_y+R_z\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-divergence-meaning",
        "type": "note",
        "title": "Interpretation",
        "body": "Measures net outflow from a point.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-divergence-mcq-1",
      "it-c3-divergence-num-1",
      "it-c3-divergence-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-curl",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Curl",
    "order": 4,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain curl.",
      "Apply curl to basic problems."
    ],
    "tags": [
      "vector_calc.curl"
    ],
    "prerequisiteSectionIds": [
      "c3-divergence"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-curl-definition",
        "type": "definition",
        "title": "Definition",
        "body": "\\(\\nabla\\times\\vec{F}=\\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-curl-meaning",
        "type": "note",
        "title": "Interpretation",
        "body": "Measures rotation or swirling of a vector field.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-curl-mcq-1",
      "it-c3-curl-num-1",
      "it-c3-curl-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-line-integrals",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Line Integrals",
    "order": 5,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain line integrals.",
      "Apply line integrals to basic problems."
    ],
    "tags": [
      "vector_calc.line_integrals"
    ],
    "prerequisiteSectionIds": [
      "c3-curl"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-line-integrals-scalar",
        "type": "definition",
        "title": "Scalar Line Integral",
        "body": "\\(\\int_C f\\,ds\\), where \\(ds=\\|\\vec{r}\,'(t)\\|\\,dt\\).<br>Thus \\(\\int_C f\\,ds=\\int_a^b f(\\vec{r}(t))\\|\\vec{r}\,'(t)\\|\\,dt\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-line-integrals-vector",
        "type": "definition",
        "title": "Vector Line Integral (Work)",
        "body": "\\(\\int_C \\vec{F}\\cdot d\\vec{r}\\), with \\(d\\vec{r}=\\vec{r}\,'(t)\\,dt\\).<br>So \\(\\int_C \\vec{F}\\cdot d\\vec{r}=\\int_a^b \\vec{F}(\\vec{r}(t))\\cdot\\vec{r}\,'(t)\\,dt\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-line-integrals-mcq-1",
      "it-c3-line-integrals-num-1",
      "it-c3-line-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-conservative-fields",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Conservative Vector Fields",
    "order": 6,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain conservative vector fields.",
      "Apply conservative vector fields to basic problems."
    ],
    "tags": [
      "vector_calc.conservative"
    ],
    "prerequisiteSectionIds": [
      "c3-line-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-conservative-definition",
        "type": "definition",
        "title": "Definition",
        "body": "A field is conservative if there exists a potential function \\(f\\) such that \\(\\vec{F}=\\nabla f\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-conservative-ftli",
        "type": "theorem",
        "title": "Fundamental Theorem for Line Integrals",
        "body": "If \\(\\vec{F}=\\nabla f\\), then \\(\\int_C \\vec{F}\\cdot d\\vec{r}=f(B)-f(A)\\). The integral is path independent.",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-conservative-test",
        "type": "note",
        "title": "Test for Conservativeness (2D, Simply Connected)",
        "body": "If \\(\\vec{F}=\\langle P,Q\\rangle\\) and \\(P_y=Q_x\\), then \\(\\vec{F}\\) is conservative.",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-conservative-fields-mcq-1",
      "it-c3-conservative-fields-num-1",
      "it-c3-conservative-fields-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-greens-theorem",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Green's Theorem",
    "order": 7,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain green's theorem.",
      "Apply green's theorem to basic problems."
    ],
    "tags": [
      "vector_calc.greens"
    ],
    "prerequisiteSectionIds": [
      "c3-conservative-fields"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-greens-theorem-statement",
        "type": "theorem",
        "title": "Green's Theorem (Circulation Form)",
        "body": "For positively oriented simple closed curve \\(C\\) enclosing region \\(R\\):<br>\\(\\oint_C P\\,dx+Q\\,dy=\\iint_R (\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y})\\,dA\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-greens-theorem-meaning",
        "type": "note",
        "title": "Interpretation",
        "body": "Converts a line integral around a curve into a double integral over the region.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-greens-theorem-mcq-1",
      "it-c3-greens-theorem-num-1",
      "it-c3-greens-theorem-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-surface-integrals",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Surface Integrals",
    "order": 8,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain surface integrals.",
      "Apply surface integrals to basic problems."
    ],
    "tags": [
      "vector_calc.surface_integrals"
    ],
    "prerequisiteSectionIds": [
      "c3-greens-theorem"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-surface-integrals-scalar",
        "type": "definition",
        "title": "Scalar Surface Integral",
        "body": "\\(\\iint_S f\\,dS\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-surface-integrals-element",
        "type": "summary",
        "title": "Surface Area Element",
        "body": "If \\(\\vec{r}(u,v)\\) parameterizes \\(S\\), then \\(dS=\\|\\vec{r}_u\\times\\vec{r}_v\\|\\,du\\,dv\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-surface-integrals-flux",
        "type": "definition",
        "title": "Flux Surface Integral",
        "body": "For vector field \\(\\vec{F}\\) and unit normal \\(\\vec{n}\\): \\(\\iint_S \\vec{F}\\cdot\\vec{n}\\,dS\\).",
        "latex": true,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-surface-integrals-mcq-1",
      "it-c3-surface-integrals-num-1",
      "it-c3-surface-integrals-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-stokes-theorem",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Stokes' Theorem",
    "order": 9,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain stokes' theorem.",
      "Apply stokes' theorem to basic problems."
    ],
    "tags": [
      "vector_calc.stokes"
    ],
    "prerequisiteSectionIds": [
      "c3-surface-integrals"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-stokes-theorem-statement",
        "type": "theorem",
        "title": "Stokes' Theorem",
        "body": "For surface \\(S\\) with boundary curve \\(C\\):<br>\\(\\oint_C \\vec{F}\\cdot d\\vec{r}=\\iint_S (\\nabla\\times\\vec{F})\\cdot\\vec{n}\\,dS\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-stokes-theorem-meaning",
        "type": "note",
        "title": "Interpretation",
        "body": "Converts circulation around the boundary into curl over the surface.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-stokes-theorem-mcq-1",
      "it-c3-stokes-theorem-num-1",
      "it-c3-stokes-theorem-hard-1"
    ],
    "version": VERSION
  },
  {
    "id": "c3-divergence-theorem",
    "chapterId": "c3-vector-calculus-basics",
    "title": "Divergence Theorem",
    "order": 10,
    "estimatedTimeMin": 18,
    "difficulty": "medium",
    "learningObjectives": [
      "Explain divergence theorem.",
      "Apply divergence theorem to basic problems."
    ],
    "tags": [
      "vector_calc.divergence_theorem"
    ],
    "prerequisiteSectionIds": [
      "c3-stokes-theorem"
    ],
    "contentBlocks": [
      {
        "id": "blk-c3-divergence-theorem-statement",
        "type": "theorem",
        "title": "Divergence Theorem",
        "body": "For closed surface \\(S\\) enclosing volume \\(E\\):<br>\\(\\iint_S \\vec{F}\\cdot\\vec{n}\\,dS=\\iiint_E (\\nabla\\cdot\\vec{F})\\,dV\\).",
        "latex": true,
        "refs": []
      },
      {
        "id": "blk-c3-divergence-theorem-meaning",
        "type": "note",
        "title": "Interpretation",
        "body": "Flux through a closed surface equals the triple integral of divergence over the volume.",
        "latex": false,
        "refs": []
      }
    ],
    "examples": [],
        "items": [
      "it-c3-divergence-theorem-mcq-1",
      "it-c3-divergence-theorem-num-1",
      "it-c3-divergence-theorem-hard-1"
    ],
    "version": VERSION
  }
];

  window.FCContentData.sections = sections;
})();
