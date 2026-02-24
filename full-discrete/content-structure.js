window.FCContentData = window.FCContentData || {};
(() => {
  const VERSION = window.FCContentData.VERSION || "2026.2-dm";
  window.FCContentData.VERSION = VERSION;

  const courses = [
  {
    "id": "calc-1",
    "title": "Discrete Math I",
    "order": 1,
    "description": "Logic, sets, counting, relations, and number theory",
    "prerequisites": [
      "algebra"
    ],
    "modules": [
      "c1-logic-proofs",
      "c1-sets-functions",
      "c1-counting",
      "c1-relations",
      "c1-number-theory"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "calc-2",
    "title": "Discrete Math II",
    "order": 2,
    "description": "Graph theory, recurrences, advanced counting, and probability",
    "prerequisites": [
      "calc-1"
    ],
    "modules": [
      "c2-graph-theory",
      "c2-trees-algorithms",
      "c2-recurrence",
      "c2-combinatorics-advanced",
      "c2-discrete-probability"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "calc-3",
    "title": "Discrete Math III",
    "order": 3,
    "description": "Automata, formal languages, complexity, crypto, and optimization",
    "prerequisites": [
      "calc-1",
      "calc-2"
    ],
    "modules": [
      "c3-automata",
      "c3-formal-languages",
      "c3-complexity",
      "c3-cryptography",
      "c3-discrete-optimization"
    ],
    "version": "2026.2-dm"
  }
];

  const modules = [
  {
    "id": "c1-logic-proofs",
    "courseId": "calc-1",
    "title": "Logic and Proofs",
    "order": 1,
    "chapters": [
      "c1-logic-proofs-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-sets-functions",
    "courseId": "calc-1",
    "title": "Sets and Functions",
    "order": 2,
    "chapters": [
      "c1-sets-functions-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-counting",
    "courseId": "calc-1",
    "title": "Counting",
    "order": 3,
    "chapters": [
      "c1-counting-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-relations",
    "courseId": "calc-1",
    "title": "Relations",
    "order": 4,
    "chapters": [
      "c1-relations-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c1-number-theory",
    "courseId": "calc-1",
    "title": "Number Theory Basics",
    "order": 5,
    "chapters": [
      "c1-number-theory-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-graph-theory",
    "courseId": "calc-2",
    "title": "Graph Theory",
    "order": 1,
    "chapters": [
      "c2-graph-theory-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-trees-algorithms",
    "courseId": "calc-2",
    "title": "Trees and Algorithms",
    "order": 2,
    "chapters": [
      "c2-trees-algorithms-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-recurrence",
    "courseId": "calc-2",
    "title": "Recurrence Relations",
    "order": 3,
    "chapters": [
      "c2-recurrence-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-combinatorics-advanced",
    "courseId": "calc-2",
    "title": "Advanced Combinatorics",
    "order": 4,
    "chapters": [
      "c2-combinatorics-advanced-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c2-discrete-probability",
    "courseId": "calc-2",
    "title": "Discrete Probability",
    "order": 5,
    "chapters": [
      "c2-discrete-probability-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-automata",
    "courseId": "calc-3",
    "title": "Automata",
    "order": 1,
    "chapters": [
      "c3-automata-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-formal-languages",
    "courseId": "calc-3",
    "title": "Formal Languages",
    "order": 2,
    "chapters": [
      "c3-formal-languages-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-complexity",
    "courseId": "calc-3",
    "title": "Complexity Theory",
    "order": 3,
    "chapters": [
      "c3-complexity-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-cryptography",
    "courseId": "calc-3",
    "title": "Cryptography",
    "order": 4,
    "chapters": [
      "c3-cryptography-basics"
    ],
    "version": "2026.2-dm"
  },
  {
    "id": "c3-discrete-optimization",
    "courseId": "calc-3",
    "title": "Discrete Optimization",
    "order": 5,
    "chapters": [
      "c3-discrete-optimization-basics"
    ],
    "version": "2026.2-dm"
  }
];

  const chapters = [
  {
    "id": "c1-logic-proofs-basics",
    "moduleId": "c1-logic-proofs",
    "title": "Logic and Proofs",
    "order": 1,
    "sections": [
      "c1-logic-propositions",
      "c1-logic-connectives",
      "c1-logic-quantifiers",
      "c1-proof-techniques"
    ],
    "recommendedTestBlueprintId": "test-c1-logic-proofs-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c1-sets-functions-basics",
    "moduleId": "c1-sets-functions",
    "title": "Sets and Functions",
    "order": 1,
    "sections": [
      "c1-sets-operations",
      "c1-power-sets",
      "c1-functions-injective",
      "c1-functions-composition"
    ],
    "recommendedTestBlueprintId": "test-c1-sets-functions-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c1-counting-basics",
    "moduleId": "c1-counting",
    "title": "Counting Principles",
    "order": 1,
    "sections": [
      "c1-counting-sum-product",
      "c1-permutations",
      "c1-combinations",
      "c1-pigeonhole"
    ],
    "recommendedTestBlueprintId": "test-c1-counting-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c1-relations-basics",
    "moduleId": "c1-relations",
    "title": "Relations and Orders",
    "order": 1,
    "sections": [
      "c1-relations-properties",
      "c1-equivalence-relations",
      "c1-partial-orders",
      "c1-hasse-diagrams"
    ],
    "recommendedTestBlueprintId": "test-c1-relations-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c1-number-theory-basics",
    "moduleId": "c1-number-theory",
    "title": "Number Theory",
    "order": 1,
    "sections": [
      "c1-divisibility",
      "c1-modular-arithmetic",
      "c1-gcd-euclid",
      "c1-prime-factorization"
    ],
    "recommendedTestBlueprintId": "test-c1-number-theory-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c2-graph-theory-basics",
    "moduleId": "c2-graph-theory",
    "title": "Graph Theory",
    "order": 1,
    "sections": [
      "c2-graphs-basics",
      "c2-degree-paths",
      "c2-euler-hamilton",
      "c2-graph-isomorphism"
    ],
    "recommendedTestBlueprintId": "test-c2-graph-theory-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c2-trees-algorithms-basics",
    "moduleId": "c2-trees-algorithms",
    "title": "Trees and Algorithms",
    "order": 1,
    "sections": [
      "c2-trees-basics",
      "c2-spanning-trees",
      "c2-bfs-dfs",
      "c2-shortest-paths"
    ],
    "recommendedTestBlueprintId": "test-c2-trees-algorithms-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c2-recurrence-basics",
    "moduleId": "c2-recurrence",
    "title": "Recurrence Relations",
    "order": 1,
    "sections": [
      "c2-recurrence-relations",
      "c2-linear-recurrence",
      "c2-master-theorem",
      "c2-generating-functions"
    ],
    "recommendedTestBlueprintId": "test-c2-recurrence-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c2-combinatorics-advanced-basics",
    "moduleId": "c2-combinatorics-advanced",
    "title": "Advanced Combinatorics",
    "order": 1,
    "sections": [
      "c2-inclusion-exclusion",
      "c2-binomial-theorem",
      "c2-catalan",
      "c2-recurrence-counting"
    ],
    "recommendedTestBlueprintId": "test-c2-combinatorics-advanced-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c2-discrete-probability-basics",
    "moduleId": "c2-discrete-probability",
    "title": "Discrete Probability",
    "order": 1,
    "sections": [
      "c2-probability-axioms",
      "c2-conditional-probability",
      "c2-random-variables",
      "c2-expectation-variance"
    ],
    "recommendedTestBlueprintId": "test-c2-discrete-probability-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c3-automata-basics",
    "moduleId": "c3-automata",
    "title": "Finite Automata",
    "order": 1,
    "sections": [
      "c3-dfa-nfa",
      "c3-regular-expressions",
      "c3-automata-closure",
      "c3-minimization"
    ],
    "recommendedTestBlueprintId": "test-c3-automata-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c3-formal-languages-basics",
    "moduleId": "c3-formal-languages",
    "title": "Formal Languages",
    "order": 1,
    "sections": [
      "c3-context-free-grammars",
      "c3-pushdown-automata",
      "c3-normal-forms",
      "c3-pumping-lemma"
    ],
    "recommendedTestBlueprintId": "test-c3-formal-languages-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c3-complexity-basics",
    "moduleId": "c3-complexity",
    "title": "Complexity Theory",
    "order": 1,
    "sections": [
      "c3-time-complexity",
      "c3-big-o-omega-theta",
      "c3-p-np",
      "c3-reductions"
    ],
    "recommendedTestBlueprintId": "test-c3-complexity-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c3-cryptography-basics",
    "moduleId": "c3-cryptography",
    "title": "Discrete Cryptography",
    "order": 1,
    "sections": [
      "c3-rsa-basics",
      "c3-diffie-hellman",
      "c3-hash-functions",
      "c3-digital-signatures"
    ],
    "recommendedTestBlueprintId": "test-c3-cryptography-basics",
    "version": "2026.2-dm"
  },
  {
    "id": "c3-discrete-optimization-basics",
    "moduleId": "c3-discrete-optimization",
    "title": "Discrete Optimization",
    "order": 1,
    "sections": [
      "c3-linear-programming",
      "c3-integer-programming",
      "c3-network-flows",
      "c3-matching-algorithms"
    ],
    "recommendedTestBlueprintId": "test-c3-discrete-optimization-basics",
    "version": "2026.2-dm"
  }
];

  window.FCContentData.courses = courses;
  window.FCContentData.modules = modules;
  window.FCContentData.chapters = chapters;
})();
