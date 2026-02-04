window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.1";
  window.FCContentData.VERSION = VERSION;

  const examples = [
  {
    "id": "ex-c1-limits-intro-1",
    "sectionId": "c1-limits-intro",
    "prompt": "Compute \\(\lim_{x \\to 2} (x^2 - 4)/(x - 2)\\).",
    "steps": [
      {
        "kind": "setup",
        "text": "Factor: \\(x^2 - 4 = (x-2)(x+2)\\)."
      },
      {
        "kind": "simplify",
        "text": "Cancel \\((x-2)\\) for x not equal to 2."
      },
      {
        "kind": "evaluate",
        "text": "Now substitute \\(x=2\\)."
      }
    ],
    "finalAnswer": "\\(4\\)",
    "difficulty": "easy",
    "tags": [
      "limits.intro",
      "limits.algebraic"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-limits-one-sided-1",
    "sectionId": "c1-limits-one-sided",
    "prompt": "Evaluate \\(\lim_{x \\to 0^-} |x| / x\\).",
    "steps": [
      {
        "kind": "analyze",
        "text": "For \\(x<0, |x| = -x\\)."
      },
      {
        "kind": "simplify",
        "text": "\\(|x|/x = (-x)/x = -1\\)."
      }
    ],
    "finalAnswer": "\\(-1\\)",
    "difficulty": "medium",
    "tags": [
      "limits.one_sided"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-limits-laws-1",
    "sectionId": "c1-limits-laws",
    "prompt": "Compute \\(\lim_{x \\to 1} (x^2 + 3x - 4)\\).",
    "steps": [
      {
        "kind": "apply",
        "text": "Use direct substitution because the function is a polynomial."
      },
      {
        "kind": "evaluate",
        "text": "\\(1^2 + 3(1) - 4 = 0\\)."
      }
    ],
    "finalAnswer": "\\(0\\)",
    "difficulty": "easy",
    "tags": [
      "limits.laws"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-power-rule-1",
    "sectionId": "c1-power-rule",
    "prompt": "Differentiate \\(f(x)=x^5\\).",
    "steps": [
      {
        "kind": "apply",
        "text": "Use \\(f'(x)=n*x^(n-1)\\) with \\(n=5\\)."
      }
    ],
    "finalAnswer": "\\(5*x^4\\)",
    "difficulty": "easy",
    "tags": [
      "derivatives.power_rule"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-chain-rule-1",
    "sectionId": "c1-chain-rule",
    "prompt": "Differentiate \\(y=(3x^2+1)^5\\).",
    "steps": [
      {
        "kind": "setup",
        "text": "Let \\(u=3x^2+1\\)."
      },
      {
        "kind": "differentiate",
        "text": "\\(dy/du=5*u^4\\) and \\(du/dx=6x\\)."
      },
      {
        "kind": "combine",
        "text": "\\(dy/dx = 5*(3x^2+1)^4 * 6x\\)."
      }
    ],
    "finalAnswer": "\\(30*x*(3x^2+1)^4\\)",
    "difficulty": "easy",
    "tags": [
      "derivatives.chain_rule"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-related-rates-1",
    "sectionId": "c1-related-rates",
    "prompt": "A ladder 5 ft long slides down a wall. When the bottom is 3 ft from the wall and moving away at \\(1\\) ft/s, how fast is the top sliding down?",
    "steps": [
      {
        "kind": "setup",
        "text": "Let \\(x\\) be the distance from the wall and \\(y\\) be the height. Then \\(x^2+y^2=25\\)."
      },
      {
        "kind": "differentiate",
        "text": "Differentiate: \\(2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0\\)."
      },
      {
        "kind": "solve",
        "text": "At \\(x=3\\), \\(y=4\\). So \\(\\frac{dy}{dt}=-(x/y)\\frac{dx}{dt}=-(3/4)(1)\\)."
      }
    ],
    "finalAnswer": "\\(-\\frac{3}{4}\\)",
    "difficulty": "medium",
    "tags": [
      "derivatives.related_rates"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-linear-approx-1",
    "sectionId": "c1-linear-approx",
    "prompt": "Use linearization of \\(f(x)=\\sqrt{x}\\) at \\(a=4\\) to approximate \\(\\sqrt{4.1}\\).",
    "steps": [
      {
        "kind": "compute",
        "text": "Compute \\(f(4)=2\\) and \\(f'(x)=1/(2\\sqrt{x})\\)."
      },
      {
        "kind": "setup",
        "text": "So \\(f'(4)=1/4\\) and \\(L(x)=2+\\frac{1}{4}(x-4)\\)."
      },
      {
        "kind": "evaluate",
        "text": "Evaluate \\(L(4.1)=2+0.025\\)."
      }
    ],
    "finalAnswer": "\\(2.025\\)",
    "difficulty": "medium",
    "tags": [
      "derivatives.linear_approx"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-differentials-1",
    "sectionId": "c1-differentials",
    "prompt": "Estimate the change in \\(f(x)=x^3\\) when \\(x\\) increases from 2 to 2.05.",
    "steps": [
      {
        "kind": "setup",
        "text": "Use \\(dx=0.05\\) and \\(f'(x)=3x^2\\)."
      },
      {
        "kind": "evaluate",
        "text": "Compute \\(f'(2)=12\\), so \\(dy\\approx 12*0.05\\)."
      }
    ],
    "finalAnswer": "\\(0.6\\)",
    "difficulty": "medium",
    "tags": [
      "derivatives.differentials"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-critical-points-1",
    "sectionId": "c1-critical-points",
    "prompt": "Find critical points of \\(f(x)=x^3-3x\\).",
    "steps": [
      {
        "kind": "differentiate",
        "text": "Compute \\(f'(x)=3x^2-3=3(x^2-1)\\)."
      },
      {
        "kind": "solve",
        "text": "Set \\(f'(x)=0\\) to get \\(x=\\pm 1\\)."
      }
    ],
    "finalAnswer": "\\(x=-1,\\;x=1\\)",
    "difficulty": "medium",
    "tags": [
      "derivatives.critical_points"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-increasing-decreasing-1",
    "sectionId": "c1-increasing-decreasing",
    "prompt": "Determine intervals of increase/decrease for \\(f(x)=x^3-3x\\).",
    "steps": [
      {
        "kind": "differentiate",
        "text": "Compute \\(f'(x)=3(x^2-1)\\)."
      },
      {
        "kind": "analyze",
        "text": "\\(f'(x)>0\\) when \\(|x|>1\\) and \\(f'(x)<0\\) when \\(|x|<1\\)."
      }
    ],
    "finalAnswer": "Increasing on \\((-\\infty,-1)\\cup(1,\\infty)\\); decreasing on \\((-1,1)\\).",
    "difficulty": "medium",
    "tags": [
      "derivatives.monotonicity"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-concavity-1",
    "sectionId": "c1-concavity",
    "prompt": "Find where \\(f(x)=x^3\\) is concave up or down.",
    "steps": [
      {
        "kind": "differentiate",
        "text": "Compute \\(f''(x)=6x\\)."
      },
      {
        "kind": "analyze",
        "text": "Concave up where \\(f''(x)>0\\) and concave down where \\(f''(x)<0\\)."
      }
    ],
    "finalAnswer": "Concave down on \\((-\\infty,0)\\), concave up on \\((0,\\infty)\\).",
    "difficulty": "medium",
    "tags": [
      "derivatives.concavity"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-inflection-1",
    "sectionId": "c1-inflection",
    "prompt": "Find the inflection point of \\(f(x)=x^3-3x\\).",
    "steps": [
      {
        "kind": "differentiate",
        "text": "Compute \\(f''(x)=6x\\)."
      },
      {
        "kind": "solve",
        "text": "Set \\(f''(x)=0\\) to get \\(x=0\\) and verify concavity changes."
      }
    ],
    "finalAnswer": "\\((0,0)\\)",
    "difficulty": "medium",
    "tags": [
      "derivatives.inflection"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-first-derivative-test-1",
    "sectionId": "c1-first-derivative-test",
    "prompt": "Use the first derivative test on \\(f(x)=x^3-3x\\).",
    "steps": [
      {
        "kind": "differentiate",
        "text": "Critical points come from \\(f'(x)=3(x^2-1)=0\\), so \\(x=-1,1\\)."
      },
      {
        "kind": "analyze",
        "text": "\\(f'(x)\\) changes from positive to negative at \\(-1\\) and from negative to positive at \\(1\\)."
      }
    ],
    "finalAnswer": "Local max at \\(x=-1\\), local min at \\(x=1\\).",
    "difficulty": "medium",
    "tags": [
      "derivatives.first_derivative_test"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-second-derivative-test-1",
    "sectionId": "c1-second-derivative-test",
    "prompt": "Apply the second derivative test to \\(f(x)=x^2+1\\).",
    "steps": [
      {
        "kind": "differentiate",
        "text": "Compute \\(f'(x)=2x\\), so the critical point is \\(x=0\\)."
      },
      {
        "kind": "analyze",
        "text": "Compute \\(f''(x)=2>0\\)."
      }
    ],
    "finalAnswer": "Local minimum at \\(x=0\\).",
    "difficulty": "easy",
    "tags": [
      "derivatives.second_derivative_test"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-curve-sketching-1",
    "sectionId": "c1-curve-sketching",
    "prompt": "Sketch key features of \\(f(x)=x^2-4x\\).",
    "steps": [
      {
        "kind": "compute",
        "text": "Intercepts: \\(x^2-4x=0\\) gives \\(x=0\\) and \\(x=4\\)."
      },
      {
        "kind": "differentiate",
        "text": "Critical point: \\(f'(x)=2x-4=0\\) gives \\(x=2\\)."
      },
      {
        "kind": "analyze",
        "text": "Concavity: \\(f''(x)=2>0\\), so the graph is concave up."
      }
    ],
    "finalAnswer": "Parabola opening up with vertex at \\((2,-4)\\).",
    "difficulty": "medium",
    "tags": [
      "derivatives.curve_sketching"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-optimization-1",
    "sectionId": "c1-optimization",
    "prompt": "A rectangle has perimeter 20. Find the maximum area.",
    "steps": [
      {
        "kind": "setup",
        "text": "Let sides be \\(x\\) and \\(y\\). Then \\(2x+2y=20\\), so \\(y=10-x\\)."
      },
      {
        "kind": "formulate",
        "text": "Area \\(A=x(10-x)\\)."
      },
      {
        "kind": "optimize",
        "text": "Max when \\(A'(x)=10-2x=0\\), so \\(x=5\\) and \\(A=25\\)."
      }
    ],
    "finalAnswer": "\\(25\\)",
    "difficulty": "medium",
    "tags": [
      "derivatives.optimization"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-mvt-1",
    "sectionId": "c1-mvt",
    "prompt": "For \\(f(x)=x^2\\) on \\([1,3]\\), find \\(c\\) from the Mean Value Theorem.",
    "steps": [
      {
        "kind": "compute",
        "text": "Average slope: \\((f(3)-f(1))/(3-1)=(9-1)/2=4\\)."
      },
      {
        "kind": "solve",
        "text": "Set \\(f'(x)=2x=4\\) to get \\(x=2\\)."
      }
    ],
    "finalAnswer": "\\(c=2\\)",
    "difficulty": "easy",
    "tags": [
      "derivatives.mvt"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-rolle-1",
    "sectionId": "c1-rolle",
    "prompt": "Apply Rolle's Theorem to \\(f(x)=x^2-4x+3\\) on \\([1,3]\\).",
    "steps": [
      {
        "kind": "check",
        "text": "Verify \\(f(1)=0\\) and \\(f(3)=0\\)."
      },
      {
        "kind": "solve",
        "text": "Solve \\(f'(x)=2x-4=0\\) to get \\(x=2\\)."
      }
    ],
    "finalAnswer": "\\(c=2\\)",
    "difficulty": "easy",
    "tags": [
      "derivatives.rolle"
    ],
    "version": VERSION
  },
  {
    "id": "ex-c1-lhopital-1",
    "sectionId": "c1-lhopital",
    "prompt": "Compute \\(\\lim_{x\\to 0} (e^x-1)/x\\) using L'Hopital's Rule.",
    "steps": [
      {
        "kind": "analyze",
        "text": "The form is \\(0/0\\), so apply L'Hopital's Rule."
      },
      {
        "kind": "evaluate",
        "text": "Limit becomes \\(\\lim_{x\\to 0} e^x = 1\\)."
      }
    ],
    "finalAnswer": "\\(1\\)",
    "difficulty": "easy",
    "tags": [
      "derivatives.lhopital"
    ],
    "version": VERSION
  }
];

  window.FCContentData.examples = examples;
})();
