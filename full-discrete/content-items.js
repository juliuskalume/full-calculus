window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.2-dm";
  window.FCContentData.VERSION = VERSION;

  const items = [
  {
    "id": "it-c1-logic-propositions-mcq-1",
    "sectionId": "c1-logic-propositions",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Propositions and Truth Values",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Propositions and Truth Values"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.propositions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-propositions-mcq-2",
    "sectionId": "c1-logic-propositions",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.propositions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-propositions-num-1",
    "sectionId": "c1-logic-propositions",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.propositions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-propositions-num-2",
    "sectionId": "c1-logic-propositions",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.propositions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-propositions-mcq-3",
    "sectionId": "c1-logic-propositions",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.propositions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-connectives-mcq-1",
    "sectionId": "c1-logic-connectives",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Logical Connectives",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Logical Connectives"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.connectives"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-connectives-mcq-2",
    "sectionId": "c1-logic-connectives",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.connectives"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-connectives-num-1",
    "sectionId": "c1-logic-connectives",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.connectives"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-connectives-num-2",
    "sectionId": "c1-logic-connectives",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.connectives"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-connectives-mcq-3",
    "sectionId": "c1-logic-connectives",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.connectives"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-quantifiers-mcq-1",
    "sectionId": "c1-logic-quantifiers",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Quantifiers",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Quantifiers"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.quantifiers"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-quantifiers-mcq-2",
    "sectionId": "c1-logic-quantifiers",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.quantifiers"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-quantifiers-num-1",
    "sectionId": "c1-logic-quantifiers",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.quantifiers"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-quantifiers-num-2",
    "sectionId": "c1-logic-quantifiers",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.quantifiers"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-logic-quantifiers-mcq-3",
    "sectionId": "c1-logic-quantifiers",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.quantifiers"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-proof-techniques-mcq-1",
    "sectionId": "c1-proof-techniques",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Proof Techniques",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Proof Techniques"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.proofs"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-proof-techniques-mcq-2",
    "sectionId": "c1-proof-techniques",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.logic.proofs"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-proof-techniques-num-1",
    "sectionId": "c1-proof-techniques",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.proofs"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-proof-techniques-num-2",
    "sectionId": "c1-proof-techniques",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.proofs"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-proof-techniques-mcq-3",
    "sectionId": "c1-proof-techniques",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.logic.proofs"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-sets-operations-mcq-1",
    "sectionId": "c1-sets-operations",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Set Operations",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Set Operations"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.sets.operations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-sets-operations-mcq-2",
    "sectionId": "c1-sets-operations",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.sets.operations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-sets-operations-num-1",
    "sectionId": "c1-sets-operations",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.sets.operations"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-sets-operations-num-2",
    "sectionId": "c1-sets-operations",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.sets.operations"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-sets-operations-mcq-3",
    "sectionId": "c1-sets-operations",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.sets.operations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-power-sets-mcq-1",
    "sectionId": "c1-power-sets",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Power Sets",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Power Sets"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.sets.power"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-power-sets-mcq-2",
    "sectionId": "c1-power-sets",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.sets.power"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-power-sets-num-1",
    "sectionId": "c1-power-sets",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.sets.power"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-power-sets-num-2",
    "sectionId": "c1-power-sets",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.sets.power"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-power-sets-mcq-3",
    "sectionId": "c1-power-sets",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.sets.power"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-injective-mcq-1",
    "sectionId": "c1-functions-injective",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Injective/Surjective Functions",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Injective/Surjective Functions"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.functions.injective"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-injective-mcq-2",
    "sectionId": "c1-functions-injective",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.functions.injective"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-injective-num-1",
    "sectionId": "c1-functions-injective",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.functions.injective"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-injective-num-2",
    "sectionId": "c1-functions-injective",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.functions.injective"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-injective-mcq-3",
    "sectionId": "c1-functions-injective",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.functions.injective"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-composition-mcq-1",
    "sectionId": "c1-functions-composition",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Function Composition",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Function Composition"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.functions.composition"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-composition-mcq-2",
    "sectionId": "c1-functions-composition",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.functions.composition"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-composition-num-1",
    "sectionId": "c1-functions-composition",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.functions.composition"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-composition-num-2",
    "sectionId": "c1-functions-composition",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.functions.composition"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-functions-composition-mcq-3",
    "sectionId": "c1-functions-composition",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.functions.composition"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-counting-sum-product-mcq-1",
    "sectionId": "c1-counting-sum-product",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Sum and Product Rules",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Sum and Product Rules"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.rules"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-counting-sum-product-mcq-2",
    "sectionId": "c1-counting-sum-product",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.rules"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-counting-sum-product-num-1",
    "sectionId": "c1-counting-sum-product",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.rules"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-counting-sum-product-num-2",
    "sectionId": "c1-counting-sum-product",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.rules"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-counting-sum-product-mcq-3",
    "sectionId": "c1-counting-sum-product",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.rules"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-permutations-mcq-1",
    "sectionId": "c1-permutations",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Permutations",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Permutations"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.permutations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-permutations-mcq-2",
    "sectionId": "c1-permutations",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.permutations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-permutations-num-1",
    "sectionId": "c1-permutations",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.permutations"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-permutations-num-2",
    "sectionId": "c1-permutations",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.permutations"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-permutations-mcq-3",
    "sectionId": "c1-permutations",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.permutations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-combinations-mcq-1",
    "sectionId": "c1-combinations",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Combinations",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Combinations"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.combinations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-combinations-mcq-2",
    "sectionId": "c1-combinations",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.combinations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-combinations-num-1",
    "sectionId": "c1-combinations",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.combinations"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-combinations-num-2",
    "sectionId": "c1-combinations",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.combinations"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-combinations-mcq-3",
    "sectionId": "c1-combinations",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.combinations"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-pigeonhole-mcq-1",
    "sectionId": "c1-pigeonhole",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Pigeonhole Principle",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Pigeonhole Principle"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-pigeonhole-mcq-2",
    "sectionId": "c1-pigeonhole",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-pigeonhole-num-1",
    "sectionId": "c1-pigeonhole",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-pigeonhole-num-2",
    "sectionId": "c1-pigeonhole",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-pigeonhole-mcq-3",
    "sectionId": "c1-pigeonhole",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.counting.pigeonhole"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-relations-properties-mcq-1",
    "sectionId": "c1-relations-properties",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Relation Properties",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Relation Properties"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.properties"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-relations-properties-mcq-2",
    "sectionId": "c1-relations-properties",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.properties"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-relations-properties-num-1",
    "sectionId": "c1-relations-properties",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.properties"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-relations-properties-num-2",
    "sectionId": "c1-relations-properties",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.properties"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-relations-properties-mcq-3",
    "sectionId": "c1-relations-properties",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.properties"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-equivalence-relations-mcq-1",
    "sectionId": "c1-equivalence-relations",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Equivalence Relations",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Equivalence Relations"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.equivalence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-equivalence-relations-mcq-2",
    "sectionId": "c1-equivalence-relations",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.equivalence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-equivalence-relations-num-1",
    "sectionId": "c1-equivalence-relations",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.equivalence"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-equivalence-relations-num-2",
    "sectionId": "c1-equivalence-relations",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.equivalence"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-equivalence-relations-mcq-3",
    "sectionId": "c1-equivalence-relations",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.equivalence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-partial-orders-mcq-1",
    "sectionId": "c1-partial-orders",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Partial Orders",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Partial Orders"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.partial_orders"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-partial-orders-mcq-2",
    "sectionId": "c1-partial-orders",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.partial_orders"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-partial-orders-num-1",
    "sectionId": "c1-partial-orders",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.partial_orders"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-partial-orders-num-2",
    "sectionId": "c1-partial-orders",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.partial_orders"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-partial-orders-mcq-3",
    "sectionId": "c1-partial-orders",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.partial_orders"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-hasse-diagrams-mcq-1",
    "sectionId": "c1-hasse-diagrams",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Hasse Diagrams",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Hasse Diagrams"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.hasse"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-hasse-diagrams-mcq-2",
    "sectionId": "c1-hasse-diagrams",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.relations.hasse"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-hasse-diagrams-num-1",
    "sectionId": "c1-hasse-diagrams",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.hasse"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-hasse-diagrams-num-2",
    "sectionId": "c1-hasse-diagrams",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.hasse"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-hasse-diagrams-mcq-3",
    "sectionId": "c1-hasse-diagrams",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.relations.hasse"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-divisibility-mcq-1",
    "sectionId": "c1-divisibility",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Divisibility",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Divisibility"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.divisibility"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-divisibility-mcq-2",
    "sectionId": "c1-divisibility",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.divisibility"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-divisibility-num-1",
    "sectionId": "c1-divisibility",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.divisibility"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-divisibility-num-2",
    "sectionId": "c1-divisibility",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.divisibility"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-divisibility-mcq-3",
    "sectionId": "c1-divisibility",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.divisibility"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-modular-arithmetic-mcq-1",
    "sectionId": "c1-modular-arithmetic",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Modular Arithmetic",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Modular Arithmetic"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.modular"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-modular-arithmetic-mcq-2",
    "sectionId": "c1-modular-arithmetic",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.modular"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-modular-arithmetic-num-1",
    "sectionId": "c1-modular-arithmetic",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.modular"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-modular-arithmetic-num-2",
    "sectionId": "c1-modular-arithmetic",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.modular"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-modular-arithmetic-mcq-3",
    "sectionId": "c1-modular-arithmetic",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.modular"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-gcd-euclid-mcq-1",
    "sectionId": "c1-gcd-euclid",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "GCD and Euclidean Algorithm",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "GCD and Euclidean Algorithm"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.gcd"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-gcd-euclid-mcq-2",
    "sectionId": "c1-gcd-euclid",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.gcd"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-gcd-euclid-num-1",
    "sectionId": "c1-gcd-euclid",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.gcd"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-gcd-euclid-num-2",
    "sectionId": "c1-gcd-euclid",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.gcd"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-gcd-euclid-mcq-3",
    "sectionId": "c1-gcd-euclid",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.gcd"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-prime-factorization-mcq-1",
    "sectionId": "c1-prime-factorization",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Prime Factorization",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Prime Factorization"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.primes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-prime-factorization-mcq-2",
    "sectionId": "c1-prime-factorization",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.number.primes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-prime-factorization-num-1",
    "sectionId": "c1-prime-factorization",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.primes"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-prime-factorization-num-2",
    "sectionId": "c1-prime-factorization",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.primes"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c1-prime-factorization-mcq-3",
    "sectionId": "c1-prime-factorization",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.number.primes"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graphs-basics-mcq-1",
    "sectionId": "c2-graphs-basics",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Graphs and Terminology",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Graphs and Terminology"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graphs-basics-mcq-2",
    "sectionId": "c2-graphs-basics",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graphs-basics-num-1",
    "sectionId": "c2-graphs-basics",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graphs-basics-num-2",
    "sectionId": "c2-graphs-basics",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graphs-basics-mcq-3",
    "sectionId": "c2-graphs-basics",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-degree-paths-mcq-1",
    "sectionId": "c2-degree-paths",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Degrees, Walks, and Paths",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Degrees, Walks, and Paths"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.paths"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-degree-paths-mcq-2",
    "sectionId": "c2-degree-paths",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.paths"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-degree-paths-num-1",
    "sectionId": "c2-degree-paths",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.paths"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-degree-paths-num-2",
    "sectionId": "c2-degree-paths",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.paths"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-degree-paths-mcq-3",
    "sectionId": "c2-degree-paths",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.paths"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-euler-hamilton-mcq-1",
    "sectionId": "c2-euler-hamilton",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Euler and Hamilton Cycles",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Euler and Hamilton Cycles"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-euler-hamilton-mcq-2",
    "sectionId": "c2-euler-hamilton",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-euler-hamilton-num-1",
    "sectionId": "c2-euler-hamilton",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-euler-hamilton-num-2",
    "sectionId": "c2-euler-hamilton",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-euler-hamilton-mcq-3",
    "sectionId": "c2-euler-hamilton",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.euler_hamilton"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graph-isomorphism-mcq-1",
    "sectionId": "c2-graph-isomorphism",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Graph Isomorphism",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Graph Isomorphism"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.isomorphism"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graph-isomorphism-mcq-2",
    "sectionId": "c2-graph-isomorphism",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.graph.isomorphism"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graph-isomorphism-num-1",
    "sectionId": "c2-graph-isomorphism",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.isomorphism"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graph-isomorphism-num-2",
    "sectionId": "c2-graph-isomorphism",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.isomorphism"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-graph-isomorphism-mcq-3",
    "sectionId": "c2-graph-isomorphism",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.graph.isomorphism"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-trees-basics-mcq-1",
    "sectionId": "c2-trees-basics",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Trees Basics",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Trees Basics"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-trees-basics-mcq-2",
    "sectionId": "c2-trees-basics",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-trees-basics-num-1",
    "sectionId": "c2-trees-basics",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-trees-basics-num-2",
    "sectionId": "c2-trees-basics",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-trees-basics-mcq-3",
    "sectionId": "c2-trees-basics",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-spanning-trees-mcq-1",
    "sectionId": "c2-spanning-trees",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Spanning Trees",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Spanning Trees"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.spanning"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-spanning-trees-mcq-2",
    "sectionId": "c2-spanning-trees",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.spanning"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-spanning-trees-num-1",
    "sectionId": "c2-spanning-trees",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.spanning"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-spanning-trees-num-2",
    "sectionId": "c2-spanning-trees",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.spanning"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-spanning-trees-mcq-3",
    "sectionId": "c2-spanning-trees",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.spanning"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-bfs-dfs-mcq-1",
    "sectionId": "c2-bfs-dfs",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "BFS and DFS",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "BFS and DFS"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.search"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-bfs-dfs-mcq-2",
    "sectionId": "c2-bfs-dfs",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.search"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-bfs-dfs-num-1",
    "sectionId": "c2-bfs-dfs",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.search"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-bfs-dfs-num-2",
    "sectionId": "c2-bfs-dfs",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.search"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-bfs-dfs-mcq-3",
    "sectionId": "c2-bfs-dfs",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.search"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-shortest-paths-mcq-1",
    "sectionId": "c2-shortest-paths",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Shortest Paths",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Shortest Paths"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-shortest-paths-mcq-2",
    "sectionId": "c2-shortest-paths",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-shortest-paths-num-1",
    "sectionId": "c2-shortest-paths",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-shortest-paths-num-2",
    "sectionId": "c2-shortest-paths",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-shortest-paths-mcq-3",
    "sectionId": "c2-shortest-paths",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.trees.shortest_paths"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-relations-mcq-1",
    "sectionId": "c2-recurrence-relations",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Recurrence Relations",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Recurrence Relations"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-relations-mcq-2",
    "sectionId": "c2-recurrence-relations",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-relations-num-1",
    "sectionId": "c2-recurrence-relations",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-relations-num-2",
    "sectionId": "c2-recurrence-relations",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.basics"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-relations-mcq-3",
    "sectionId": "c2-recurrence-relations",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.basics"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-linear-recurrence-mcq-1",
    "sectionId": "c2-linear-recurrence",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Linear Recurrences",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Linear Recurrences"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.linear"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-linear-recurrence-mcq-2",
    "sectionId": "c2-linear-recurrence",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.linear"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-linear-recurrence-num-1",
    "sectionId": "c2-linear-recurrence",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.linear"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-linear-recurrence-num-2",
    "sectionId": "c2-linear-recurrence",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.linear"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-linear-recurrence-mcq-3",
    "sectionId": "c2-linear-recurrence",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.linear"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-master-theorem-mcq-1",
    "sectionId": "c2-master-theorem",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Master Theorem",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Master Theorem"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.master"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-master-theorem-mcq-2",
    "sectionId": "c2-master-theorem",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.master"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-master-theorem-num-1",
    "sectionId": "c2-master-theorem",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.master"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-master-theorem-num-2",
    "sectionId": "c2-master-theorem",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.master"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-master-theorem-mcq-3",
    "sectionId": "c2-master-theorem",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.master"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-generating-functions-mcq-1",
    "sectionId": "c2-generating-functions",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Generating Functions",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Generating Functions"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.generating"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-generating-functions-mcq-2",
    "sectionId": "c2-generating-functions",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.recurrence.generating"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-generating-functions-num-1",
    "sectionId": "c2-generating-functions",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.generating"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-generating-functions-num-2",
    "sectionId": "c2-generating-functions",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.generating"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-generating-functions-mcq-3",
    "sectionId": "c2-generating-functions",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.recurrence.generating"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-inclusion-exclusion-mcq-1",
    "sectionId": "c2-inclusion-exclusion",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Inclusion-Exclusion",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Inclusion-Exclusion"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-inclusion-exclusion-mcq-2",
    "sectionId": "c2-inclusion-exclusion",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-inclusion-exclusion-num-1",
    "sectionId": "c2-inclusion-exclusion",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-inclusion-exclusion-num-2",
    "sectionId": "c2-inclusion-exclusion",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-inclusion-exclusion-mcq-3",
    "sectionId": "c2-inclusion-exclusion",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.inclusion"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-binomial-theorem-mcq-1",
    "sectionId": "c2-binomial-theorem",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Binomial Theorem",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Binomial Theorem"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-binomial-theorem-mcq-2",
    "sectionId": "c2-binomial-theorem",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-binomial-theorem-num-1",
    "sectionId": "c2-binomial-theorem",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-binomial-theorem-num-2",
    "sectionId": "c2-binomial-theorem",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-binomial-theorem-mcq-3",
    "sectionId": "c2-binomial-theorem",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.binomial"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-catalan-mcq-1",
    "sectionId": "c2-catalan",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Catalan Numbers",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Catalan Numbers"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-catalan-mcq-2",
    "sectionId": "c2-catalan",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-catalan-num-1",
    "sectionId": "c2-catalan",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-catalan-num-2",
    "sectionId": "c2-catalan",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-catalan-mcq-3",
    "sectionId": "c2-catalan",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.catalan"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-counting-mcq-1",
    "sectionId": "c2-recurrence-counting",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Counting with Recurrence",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Counting with Recurrence"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-counting-mcq-2",
    "sectionId": "c2-recurrence-counting",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-counting-num-1",
    "sectionId": "c2-recurrence-counting",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-counting-num-2",
    "sectionId": "c2-recurrence-counting",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-recurrence-counting-mcq-3",
    "sectionId": "c2-recurrence-counting",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.combinatorics.recurrence"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-probability-axioms-mcq-1",
    "sectionId": "c2-probability-axioms",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Probability Axioms",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Probability Axioms"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.axioms"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-probability-axioms-mcq-2",
    "sectionId": "c2-probability-axioms",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.axioms"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-probability-axioms-num-1",
    "sectionId": "c2-probability-axioms",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.axioms"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-probability-axioms-num-2",
    "sectionId": "c2-probability-axioms",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.axioms"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-probability-axioms-mcq-3",
    "sectionId": "c2-probability-axioms",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.axioms"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-conditional-probability-mcq-1",
    "sectionId": "c2-conditional-probability",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Conditional Probability",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Conditional Probability"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.conditional"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-conditional-probability-mcq-2",
    "sectionId": "c2-conditional-probability",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.conditional"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-conditional-probability-num-1",
    "sectionId": "c2-conditional-probability",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.conditional"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-conditional-probability-num-2",
    "sectionId": "c2-conditional-probability",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.conditional"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-conditional-probability-mcq-3",
    "sectionId": "c2-conditional-probability",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.conditional"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-random-variables-mcq-1",
    "sectionId": "c2-random-variables",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Discrete Random Variables",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Discrete Random Variables"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.random_variables"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-random-variables-mcq-2",
    "sectionId": "c2-random-variables",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.random_variables"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-random-variables-num-1",
    "sectionId": "c2-random-variables",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.random_variables"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-random-variables-num-2",
    "sectionId": "c2-random-variables",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.random_variables"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-random-variables-mcq-3",
    "sectionId": "c2-random-variables",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.random_variables"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-expectation-variance-mcq-1",
    "sectionId": "c2-expectation-variance",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Expectation and Variance",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Expectation and Variance"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.expectation"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-expectation-variance-mcq-2",
    "sectionId": "c2-expectation-variance",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.probability.expectation"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-expectation-variance-num-1",
    "sectionId": "c2-expectation-variance",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.expectation"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-expectation-variance-num-2",
    "sectionId": "c2-expectation-variance",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.expectation"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c2-expectation-variance-mcq-3",
    "sectionId": "c2-expectation-variance",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.probability.expectation"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-dfa-nfa-mcq-1",
    "sectionId": "c3-dfa-nfa",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "DFA and NFA",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "DFA and NFA"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-dfa-nfa-mcq-2",
    "sectionId": "c3-dfa-nfa",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-dfa-nfa-num-1",
    "sectionId": "c3-dfa-nfa",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-dfa-nfa-num-2",
    "sectionId": "c3-dfa-nfa",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-dfa-nfa-mcq-3",
    "sectionId": "c3-dfa-nfa",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.dfa_nfa"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-regular-expressions-mcq-1",
    "sectionId": "c3-regular-expressions",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Regular Expressions",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Regular Expressions"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.regex"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-regular-expressions-mcq-2",
    "sectionId": "c3-regular-expressions",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.regex"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-regular-expressions-num-1",
    "sectionId": "c3-regular-expressions",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.regex"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-regular-expressions-num-2",
    "sectionId": "c3-regular-expressions",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.regex"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-regular-expressions-mcq-3",
    "sectionId": "c3-regular-expressions",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.regex"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-automata-closure-mcq-1",
    "sectionId": "c3-automata-closure",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Closure Properties",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Closure Properties"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.closure"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-automata-closure-mcq-2",
    "sectionId": "c3-automata-closure",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.closure"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-automata-closure-num-1",
    "sectionId": "c3-automata-closure",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.closure"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-automata-closure-num-2",
    "sectionId": "c3-automata-closure",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.closure"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-automata-closure-mcq-3",
    "sectionId": "c3-automata-closure",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.closure"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-minimization-mcq-1",
    "sectionId": "c3-minimization",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "State Minimization",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "State Minimization"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.minimization"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-minimization-mcq-2",
    "sectionId": "c3-minimization",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.automata.minimization"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-minimization-num-1",
    "sectionId": "c3-minimization",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.minimization"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-minimization-num-2",
    "sectionId": "c3-minimization",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.minimization"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-minimization-mcq-3",
    "sectionId": "c3-minimization",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.automata.minimization"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-context-free-grammars-mcq-1",
    "sectionId": "c3-context-free-grammars",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Context-Free Grammars",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Context-Free Grammars"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.cfg"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-context-free-grammars-mcq-2",
    "sectionId": "c3-context-free-grammars",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.cfg"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-context-free-grammars-num-1",
    "sectionId": "c3-context-free-grammars",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.cfg"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-context-free-grammars-num-2",
    "sectionId": "c3-context-free-grammars",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.cfg"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-context-free-grammars-mcq-3",
    "sectionId": "c3-context-free-grammars",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.cfg"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pushdown-automata-mcq-1",
    "sectionId": "c3-pushdown-automata",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Pushdown Automata",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Pushdown Automata"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.pda"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pushdown-automata-mcq-2",
    "sectionId": "c3-pushdown-automata",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.pda"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pushdown-automata-num-1",
    "sectionId": "c3-pushdown-automata",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.pda"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pushdown-automata-num-2",
    "sectionId": "c3-pushdown-automata",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.pda"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pushdown-automata-mcq-3",
    "sectionId": "c3-pushdown-automata",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.pda"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-normal-forms-mcq-1",
    "sectionId": "c3-normal-forms",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Normal Forms",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Normal Forms"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.normal_forms"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-normal-forms-mcq-2",
    "sectionId": "c3-normal-forms",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.normal_forms"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-normal-forms-num-1",
    "sectionId": "c3-normal-forms",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.normal_forms"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-normal-forms-num-2",
    "sectionId": "c3-normal-forms",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.normal_forms"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-normal-forms-mcq-3",
    "sectionId": "c3-normal-forms",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.normal_forms"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pumping-lemma-mcq-1",
    "sectionId": "c3-pumping-lemma",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Pumping Lemma",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Pumping Lemma"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.pumping"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pumping-lemma-mcq-2",
    "sectionId": "c3-pumping-lemma",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.languages.pumping"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pumping-lemma-num-1",
    "sectionId": "c3-pumping-lemma",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.pumping"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pumping-lemma-num-2",
    "sectionId": "c3-pumping-lemma",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.pumping"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-pumping-lemma-mcq-3",
    "sectionId": "c3-pumping-lemma",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.languages.pumping"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-time-complexity-mcq-1",
    "sectionId": "c3-time-complexity",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Time Complexity",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Time Complexity"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.time"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-time-complexity-mcq-2",
    "sectionId": "c3-time-complexity",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.time"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-time-complexity-num-1",
    "sectionId": "c3-time-complexity",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.time"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-time-complexity-num-2",
    "sectionId": "c3-time-complexity",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.time"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-time-complexity-mcq-3",
    "sectionId": "c3-time-complexity",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.time"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-big-o-omega-theta-mcq-1",
    "sectionId": "c3-big-o-omega-theta",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Big-O, Big-Omega, Big-Theta",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Big-O, Big-Omega, Big-Theta"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-big-o-omega-theta-mcq-2",
    "sectionId": "c3-big-o-omega-theta",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-big-o-omega-theta-num-1",
    "sectionId": "c3-big-o-omega-theta",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-big-o-omega-theta-num-2",
    "sectionId": "c3-big-o-omega-theta",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-big-o-omega-theta-mcq-3",
    "sectionId": "c3-big-o-omega-theta",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.asymptotic"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-p-np-mcq-1",
    "sectionId": "c3-p-np",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "P vs NP",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "P vs NP"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.p_np"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-p-np-mcq-2",
    "sectionId": "c3-p-np",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.p_np"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-p-np-num-1",
    "sectionId": "c3-p-np",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.p_np"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-p-np-num-2",
    "sectionId": "c3-p-np",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.p_np"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-p-np-mcq-3",
    "sectionId": "c3-p-np",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.p_np"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-reductions-mcq-1",
    "sectionId": "c3-reductions",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Polynomial Reductions",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Polynomial Reductions"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.reductions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-reductions-mcq-2",
    "sectionId": "c3-reductions",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.complexity.reductions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-reductions-num-1",
    "sectionId": "c3-reductions",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.reductions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-reductions-num-2",
    "sectionId": "c3-reductions",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.reductions"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-reductions-mcq-3",
    "sectionId": "c3-reductions",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.complexity.reductions"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-rsa-basics-mcq-1",
    "sectionId": "c3-rsa-basics",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "RSA Basics",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "RSA Basics"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.rsa"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-rsa-basics-mcq-2",
    "sectionId": "c3-rsa-basics",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.rsa"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-rsa-basics-num-1",
    "sectionId": "c3-rsa-basics",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.rsa"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-rsa-basics-num-2",
    "sectionId": "c3-rsa-basics",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.rsa"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-rsa-basics-mcq-3",
    "sectionId": "c3-rsa-basics",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.rsa"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-diffie-hellman-mcq-1",
    "sectionId": "c3-diffie-hellman",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Diffie-Hellman",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Diffie-Hellman"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-diffie-hellman-mcq-2",
    "sectionId": "c3-diffie-hellman",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-diffie-hellman-num-1",
    "sectionId": "c3-diffie-hellman",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-diffie-hellman-num-2",
    "sectionId": "c3-diffie-hellman",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-diffie-hellman-mcq-3",
    "sectionId": "c3-diffie-hellman",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.diffie_hellman"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-hash-functions-mcq-1",
    "sectionId": "c3-hash-functions",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Hash Functions",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Hash Functions"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.hash"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-hash-functions-mcq-2",
    "sectionId": "c3-hash-functions",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.hash"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-hash-functions-num-1",
    "sectionId": "c3-hash-functions",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.hash"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-hash-functions-num-2",
    "sectionId": "c3-hash-functions",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.hash"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-hash-functions-mcq-3",
    "sectionId": "c3-hash-functions",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.hash"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-digital-signatures-mcq-1",
    "sectionId": "c3-digital-signatures",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Digital Signatures",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Digital Signatures"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.signatures"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-digital-signatures-mcq-2",
    "sectionId": "c3-digital-signatures",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.crypto.signatures"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-digital-signatures-num-1",
    "sectionId": "c3-digital-signatures",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.signatures"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-digital-signatures-num-2",
    "sectionId": "c3-digital-signatures",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.signatures"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-digital-signatures-mcq-3",
    "sectionId": "c3-digital-signatures",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.crypto.signatures"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-linear-programming-mcq-1",
    "sectionId": "c3-linear-programming",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Linear Programming",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Linear Programming"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.linear"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-linear-programming-mcq-2",
    "sectionId": "c3-linear-programming",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.linear"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-linear-programming-num-1",
    "sectionId": "c3-linear-programming",
    "type": "numeric",
    "prompt": "How many subsets does a set with 4 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 16,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^4 = 16."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.linear"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-linear-programming-num-2",
    "sectionId": "c3-linear-programming",
    "type": "numeric",
    "prompt": "A graph has 8 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.linear"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-linear-programming-mcq-3",
    "sectionId": "c3-linear-programming",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.linear"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-integer-programming-mcq-1",
    "sectionId": "c3-integer-programming",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Integer Programming",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Integer Programming"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.integer"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-integer-programming-mcq-2",
    "sectionId": "c3-integer-programming",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.integer"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-integer-programming-num-1",
    "sectionId": "c3-integer-programming",
    "type": "numeric",
    "prompt": "How many subsets does a set with 5 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 32,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^5 = 32."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.integer"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-integer-programming-num-2",
    "sectionId": "c3-integer-programming",
    "type": "numeric",
    "prompt": "A graph has 10 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.integer"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-integer-programming-mcq-3",
    "sectionId": "c3-integer-programming",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.integer"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-network-flows-mcq-1",
    "sectionId": "c3-network-flows",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Network Flows",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Network Flows"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.flows"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-network-flows-mcq-2",
    "sectionId": "c3-network-flows",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.flows"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-network-flows-num-1",
    "sectionId": "c3-network-flows",
    "type": "numeric",
    "prompt": "How many subsets does a set with 6 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 64,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^6 = 64."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.flows"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-network-flows-num-2",
    "sectionId": "c3-network-flows",
    "type": "numeric",
    "prompt": "A graph has 12 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.flows"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-network-flows-mcq-3",
    "sectionId": "c3-network-flows",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.flows"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-matching-algorithms-mcq-1",
    "sectionId": "c3-matching-algorithms",
    "type": "mcq",
    "prompt": "Which topic is this lesson focused on?",
    "choices": [
      "Matching Algorithms",
      "Continuous optimization",
      "Differential equations"
    ],
    "answer": {
      "kind": "choice",
      "value": "Matching Algorithms"
    },
    "hints": [
      "Pick the topic shown by the lesson title."
    ],
    "solutionSteps": [
      "The correct choice is the section topic."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.matching"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-matching-algorithms-mcq-2",
    "sectionId": "c3-matching-algorithms",
    "type": "mcq",
    "prompt": "In discrete mathematics, what does an algorithm represent?",
    "choices": [
      "A finite sequence of steps",
      "A continuous curve",
      "A random guess"
    ],
    "answer": {
      "kind": "choice",
      "value": "A finite sequence of steps"
    },
    "hints": [
      "Algorithms must terminate."
    ],
    "solutionSteps": [
      "An algorithm is a finite, well-defined process."
    ],
    "difficulty": "easy",
    "tags": [
      "dm.optimization.matching"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-matching-algorithms-num-1",
    "sectionId": "c3-matching-algorithms",
    "type": "numeric",
    "prompt": "How many subsets does a set with 3 elements have?",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 8,
      "tolerance": 0.01
    },
    "hints": [
      "Use 2^n for the size of a power set."
    ],
    "solutionSteps": [
      "2^3 = 8."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.matching"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.01
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-matching-algorithms-num-2",
    "sectionId": "c3-matching-algorithms",
    "type": "numeric",
    "prompt": "A graph has 6 odd-degree vertices. Is this possible? Enter 1 for yes, 0 for no.",
    "choices": null,
    "answer": {
      "kind": "number",
      "value": 1,
      "tolerance": 0.0
    },
    "hints": [
      "The number of odd-degree vertices must be even."
    ],
    "solutionSteps": [
      "Any even number of odd-degree vertices is possible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.matching"
    ],
    "grading": {
      "mode": "numeric",
      "tolerance": 0.0
    },
    "version": "2026.2-dm"
  },
  {
    "id": "it-c3-matching-algorithms-mcq-3",
    "sectionId": "c3-matching-algorithms",
    "type": "mcq",
    "prompt": "A proof by contradiction begins by assuming:",
    "choices": [
      "The negation of the claim",
      "The claim is true",
      "No assumptions at all"
    ],
    "answer": {
      "kind": "choice",
      "value": "The negation of the claim"
    },
    "hints": [
      "Then derive a contradiction."
    ],
    "solutionSteps": [
      "Assume the opposite and show it is impossible."
    ],
    "difficulty": "medium",
    "tags": [
      "dm.optimization.matching"
    ],
    "grading": {
      "mode": "exact"
    },
    "version": "2026.2-dm"
  }
];

  window.FCContentData.items = items;
})();
